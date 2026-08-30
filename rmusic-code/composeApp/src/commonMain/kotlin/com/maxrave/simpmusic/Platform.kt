package com.maxrave.simpmusic

sealed class Platform {
    object Android : Platform()
    object iOS : Platform()
    object Desktop : Platform()

    fun osName(): String = platformName
}

expect val platformName: String

expect fun getPlatform(): Platform