package com.maxrave.simpmusic.expect

actual fun updateLyricsVtt(mediaId: String?, vtt: String?) {
    // No-op on Desktop
}
actual fun String.toWebVtt(): String = ""
