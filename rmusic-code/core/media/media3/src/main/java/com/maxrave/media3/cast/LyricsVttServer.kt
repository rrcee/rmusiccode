package com.maxrave.media3.cast

import com.maxrave.domain.data.model.metadata.Lyrics
import com.maxrave.logger.Logger
import java.net.InetAddress
import java.net.NetworkInterface
import java.net.ServerSocket
import java.net.Socket
import java.util.concurrent.ConcurrentHashMap
import kotlin.concurrent.thread

/**
 * Turns synced [Lyrics] into WebVTT and serves it over a tiny embedded HTTP server so the
 * Chromecast Default Media Receiver can load it as a text track — which is how lyrics reach
 * the TV: the receiver's fixed layout can't render custom panes, but it DOES render timed
 * captions, and synced lyric lines make smooth, animated "captions".
 *
 * The phone acts as the HTTP host (receivers are on the same Wi-Fi network). Only one path is
 * ever served: /lyrics/&lt;mediaId&gt;.vtt
 */
object LyricsVttServer {
    private const val TAG = "LyricsVttServer"
    private const val PORT = 57_123
    private const val MAX_ENTRIES = 4

    private val vttsByMediaId = ConcurrentHashMap<String, String>()
    @Volatile private var server: ServerSocket? = null
    @Volatile private var lanIp: String? = null

    /** Latest converted VTT for [mediaId], or null when no synced lyrics were pushed for it. */
    fun urlFor(mediaId: String?): String? {
        if (mediaId == null) return null
        if (vttsByMediaId.containsKey(mediaId)) ensureStarted()
        val ip = lanIp ?: return null
        return "http://$ip:$PORT/lyrics/$mediaId.vtt"
    }

    /** Convert + store. Safe to call repeatedly; trims the map to the newest [MAX_ENTRIES]. */
    fun update(mediaId: String?, vtt: String?) {
        if (mediaId.isNullOrEmpty() || vtt.isNullOrEmpty()) return
        vttsByMediaId[mediaId] = vtt
        while (vttsByMediaId.size > MAX_ENTRIES) {
            vttsByMediaId.keys.firstOrNull()?.let { vttsByMediaId.remove(it) } ?: break
        }
        ensureStarted()
    }

    fun stop() {
        runCatching { server?.close() }
        server = null
    }

    private fun ensureStarted() {
        if (server?.isClosed == false) return
        runCatching {
            lanIp = lanAddress()?.hostAddress
            val socket = ServerSocket(PORT)
            server = socket
            Logger.w(TAG, "Lyrics VTT server on ${lanIp}:$PORT")
            thread(name = "LyricsVttServer", isDaemon = true) {
                while (!socket.isClosed) {
                    val client =
                        runCatching { socket.accept() }.getOrNull() ?: break
                    thread(name = "LyricsVttConn", isDaemon = true) { handle(client) }
                }
            }
        }.onFailure { Logger.e(TAG, "VTT server failed to start: ${it.message}") }
    }

    private fun handle(client: Socket) {
        client.use { sock ->
            runCatching {
                val reader = sock.getInputStream().bufferedReader()
                val requestLine = reader.readLine() ?: return
                // Drain the remaining header lines (keep-alive bookkeeping etc.).
                while (reader.readLine()?.isNotEmpty() == true) { /* skip */ }

                val path = requestLine.split(" ").getOrNull(1) ?: ""
                val mediaId = path.substringAfterLast('/').removeSuffix(".vtt")
                val body = vttsByMediaId[mediaId]

                val bytes =
                    if (body != null) {
                        body.toByteArray(Charsets.UTF_8)
                    } else {
                        "WEBVTT\n\n".toByteArray(Charsets.UTF_8)
                    }

                val headers =
                    buildString {
                        append("HTTP/1.1 200 OK\r\n")
                        append("Content-Type: text/vtt; charset=utf-8\r\n")
                        append("Access-Control-Allow-Origin: *\r\n")
                        append("Content-Length: ").append(bytes.size).append("\r\n")
                        append("Connection: close\r\n\r\n")
                    }
                sock.getOutputStream().apply {
                    write(headers.toByteArray(Charsets.UTF_8))
                    write(bytes)
                    flush()
                }
            }
        }
    }

    private fun lanAddress(): InetAddress? {
        runCatching {
            val interfaces = NetworkInterface.getNetworkInterfaces()
            while (interfaces.hasMoreElements()) {
                val ni = interfaces.nextElement()
                val addresses = ni.inetAddresses
                while (addresses.hasMoreElements()) {
                    val addr = addresses.nextElement()
                    if (!addr.isLoopbackAddress && addr.hostAddress?.contains(':') == false && addr.isSiteLocalAddress) {
                        return addr
                    }
                }
            }
        }
        return null
    }
}

/**
 * Synced lyrics → WebVTT. Line timing comes straight from YouTube's startTimeMs/endTimeMs;
 * missing end times fall back to the next line's start (minus a small gap) or +4 s for the
 * final cue. Unsynced lyrics return null — captions need timings.
 */
fun Lyrics?.toWebVtt(): String? {
    val source = this
    if (source == null || source.error || source.syncType == "UNSYNCED") return null
    val raw =
        source.lines
            ?.mapNotNull { line ->
                val start = line.startTimeMs.toLongOrNull() ?: return@mapNotNull null
                val text = line.words.trim()
                if (text.isEmpty()) return@mapNotNull null
                Triple(start, line.endTimeMs.toLongOrNull(), text)
            }?.sortedBy { it.first }
            ?: return null
    if (raw.isEmpty()) return null

    fun ts(ms: Long): String {
        val totalSec = ms.coerceAtLeast(0) / 1000.0
        val h = totalSec.toInt() / 3600
        val m = (totalSec.toInt() % 3600) / 60
        val s = totalSec.toInt() % 60
        val milli = ((totalSec - totalSec.toInt()) * 1000).toInt()
        return "%02d:%02d:%02d.%03d".format(h, m, s, milli)
    }

    val sb = StringBuilder("WEBVTT\n\n")
    raw.forEachIndexed { index, (start, explicitEnd, text) ->
        val nextStart = raw.getOrNull(index + 1)?.first
        val end =
            explicitEnd
                ?: nextStart?.minus(60L)
                ?: start + 4_000
        if (end <= start) return@forEachIndexed
        sb.append(ts(start)).append(" --> ").append(ts(end)).append('\n')
        sb.append(text.replace('\n', ' ')).append("\n\n")
    }
    return if (sb.endsWith("\n\n")) sb.toString() else "$sb\n\n"
}
