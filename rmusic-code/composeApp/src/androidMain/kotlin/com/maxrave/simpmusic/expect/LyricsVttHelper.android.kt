package com.maxrave.simpmusic.expect

import com.maxrave.media3.cast.LyricsVttServer
import com.maxrave.media3.cast.toWebVtt as media3ToWebVtt

actual fun updateLyricsVtt(mediaId: String?, vtt: String?) {
    LyricsVttServer.update(mediaId, vtt)
}
actual fun String.toWebVtt(): String = this.media3ToWebVtt()
