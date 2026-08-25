package org.simpmusic.cast

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color

fun isCastAvailable(): Boolean = false

fun currentCastDeviceName(): String? = null

@Composable
fun CastIconButton(
    modifier: Modifier = Modifier,
    tint: Color = Color.White,
) {
    // No-op: Google Cast is not available in this build flavor or target.
}
