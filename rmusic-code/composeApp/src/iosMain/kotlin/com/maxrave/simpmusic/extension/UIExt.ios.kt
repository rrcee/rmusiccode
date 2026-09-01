package com.maxrave.simpmusic.extension

import androidx.compose.runtime.Composable
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalWindowInfo
import com.maxrave.domain.data.model.ui.ScreenSizeInfo

@OptIn(ExperimentalComposeUiApi::class)
@Composable
actual fun getScreenSizeInfo(): ScreenSizeInfo {
    val density = LocalDensity.current
    val windowInfo = LocalWindowInfo.current
    val containerSize = windowInfo.containerSize

    val wDP = with(density) { containerSize.width.toDp().value.toInt() }
    val hDP = with(density) { containerSize.height.toDp().value.toInt() }

    return ScreenSizeInfo(
        hDP = hDP,
        wDP = wDP,
        hPX = containerSize.width,
        wPX = containerSize.height,
    )
}

@Composable
actual fun KeepScreenOn() {
    // iOS handles screen idle via UIApplication.sharedApplication.idleTimerDisabled
    // Keeping as no-op for now to avoid side effects
}

@Composable
actual fun rememberIsInPipMode(): Boolean {
    return false
}
