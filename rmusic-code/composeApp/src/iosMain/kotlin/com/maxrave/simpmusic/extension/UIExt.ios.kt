package com.maxrave.simpmusic.extension

import androidx.compose.runtime.Composable
import com.maxrave.domain.data.model.ui.ScreenSizeInfo

@Composable
actual fun getScreenSizeInfo(): ScreenSizeInfo {
    return ScreenSizeInfo(hDP = 1920, wDP = 1080, hPX = 1920, wPX = 1080)
}

@Composable
actual fun KeepScreenOn() {
}

@Composable
actual fun rememberIsInPipMode(): Boolean {
    return false
}
