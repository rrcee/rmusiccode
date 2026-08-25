package com.maxrave.media3.cast

import com.maxrave.domain.data.model.metadata.Lyrics

fun Lyrics?.toWebVtt(): String? = null

object LyricsVttServer {
    fun update(mediaId: String?, vtt: String?) {}
}
