package com.maxrave.data.di.loader

import com.maxrave.domain.mediaservice.player.MediaPlayerInterface
import com.maxrave.data.mediaservice.IOSMediaPlayer
import org.koin.core.context.loadKoinModules
import org.koin.dsl.module

actual fun loadMediaService() {
    val iosMediaModule = module {
        single<MediaPlayerInterface> { IOSMediaPlayer() }
    }
    loadKoinModules(iosMediaModule)
}