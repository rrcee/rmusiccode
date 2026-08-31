package com.maxrave.simpmusic.ui.component

import androidx.compose.foundation.layout.RowScope
import androidx.compose.material3.NavigationBarItemColors
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

@Composable
actual fun LiquidGlassAppBottomNavigationBar(
    modifier: Modifier,
    containerColor: androidx.compose.ui.graphics.Color,
    contentColor: androidx.compose.ui.graphics.Color,
    tonalElevation: androidx.compose.ui.unit.Dp,
    windowInsets: androidx.compose.foundation.layout.WindowInsets,
    content: @Composable RowScope.() -> Unit
) {
    androidx.compose.material3.NavigationBar(
        modifier = modifier,
        containerColor = containerColor,
        contentColor = contentColor,
        tonalElevation = tonalElevation,
        windowInsets = windowInsets,
        content = content
    )
}
