package com.maxrave.simpmusic.ui.component

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.maxrave.simpmusic.ui.theme.LocalIsDarkTheme
import com.maxrave.simpmusic.ui.theme.typo

@Composable
fun Chip(
    isAnimated: Boolean = false,
    isSelected: Boolean = false,
    text: String,
    onClick: () -> Unit,
) {
    val isDark = LocalIsDarkTheme.current

    // Translucent glass pill for BOTH states — System Red is reserved for the active label only,
    // never a solid container fill (iOS 17/18 Apple Music filter pills).
    val animatedBgColor by animateColorAsState(
        targetValue =
            if (isSelected) {
                Color(0xFF1C1C1E).copy(alpha = 0.60f)
            } else {
                if (isDark) Color.White.copy(alpha = 0.08f) else Color.Black.copy(alpha = 0.05f)
            },
        animationSpec = tween(250),
    )
    val animatedTextColor by animateColorAsState(
        targetValue =
            if (isSelected) {
                Color(0xFFFA2D48)
            } else {
                if (isDark) Color(0xFFE5E5EA).copy(alpha = 0.72f) else Color(0xFF636366)
            },
        animationSpec = tween(250),
    )

    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(100.dp)) // Capsule shape
            .background(animatedBgColor)
            .border(
                width = if (isSelected) 1.dp else 0.5.dp,
                color =
                    if (isSelected) {
                        Color(0xFFFA2D48).copy(alpha = 0.35f)
                    } else {
                        if (isDark) Color.White.copy(alpha = 0.10f) else Color.Black.copy(alpha = 0.08f)
                    },
                shape = RoundedCornerShape(100.dp),
            )
            .clickable(
                onClick = onClick,
                indication = null,
                interactionSource = remember { MutableInteractionSource() }
            )
            .padding(horizontal = 16.dp, vertical = 8.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = text,
            color = animatedTextColor,
            style = typo().bodyLarge.copy(
                fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                fontSize = 14.sp
            ),
            maxLines = 1
        )
    }
}