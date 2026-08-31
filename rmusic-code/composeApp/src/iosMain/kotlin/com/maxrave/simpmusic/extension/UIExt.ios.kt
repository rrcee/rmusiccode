package com.maxrave.simpmusic.extension
import androidx.compose.runtime.Composable
import com.maxrave.domain.data.model.ui.ScreenSizeInfo

actual fun getScreenSizeInfo(): ScreenSizeInfo {
    return ScreenSizeInfo(hPX = 1920, wPX = 1080, dip = 2.0f)
}

@Composable
actual fun KeepScreenOn() {
}

@Composable
actual fun rememberIsInPipMode(): Boolean {
    return false
}

