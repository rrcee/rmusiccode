package com.maxrave.simpmusic.expect

actual fun updateLyricsVtt(mediaId: String?, vtt: String?) {
    // No-op on iOS
}
actual fun String.toWebVtt(): String = ""
