package com.maxrave.simpmusic.expect

import com.maxrave.domain.data.model.metadata.Lyrics

actual fun updateLyricsVtt(mediaId: String?, vtt: String?) {
    // No-op on iOS
}

actual fun Lyrics?.toWebVtt(): String? = null
