package com.maxrave.simpmusic

import com.maxrave.simpmusic.di.initKoin
import androidx.compose.ui.window.ComposeUIViewController
import coil3.ImageLoader
import coil3.compose.setSingletonImageLoaderFactory
import coil3.network.ktor3.KtorNetworkFetcherFactory
import io.ktor.client.HttpClient
import io.ktor.client.engine.darwin.Darwin
import coil3.disk.DiskCache
import coil3.request.CachePolicy
import coil3.request.crossfade
import okio.FileSystem
import okio.Path.Companion.toPath

fun MainViewController() = ComposeUIViewController {
    setSingletonImageLoaderFactory { context ->
        ImageLoader.Builder(context)
            .components {
                add(KtorNetworkFetcherFactory(HttpClient(Darwin)))
            }
            .diskCachePolicy(CachePolicy.ENABLED)
            .networkCachePolicy(CachePolicy.ENABLED)
            .diskCache(
                DiskCache.Builder()
                    .directory(FileSystem.SYSTEM_TEMPORARY_DIRECTORY / "image_cache")
                    .maxSizeBytes(512L * 1024 * 1024)
                    .build()
            )
            .crossfade(true)
            .build()
    }
    App()
}

fun initApp() {
    initKoin()
}