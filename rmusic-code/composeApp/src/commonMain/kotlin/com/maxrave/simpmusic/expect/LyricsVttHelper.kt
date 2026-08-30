package com.maxrave.simpmusic.expect

import com.maxrave.domain.data.model.metadata.Lyrics

expect fun updateLyricsVtt(mediaId: String?, vtt: String?)
expect fun toWebVtt(lyrics: Lyrics?): String?
