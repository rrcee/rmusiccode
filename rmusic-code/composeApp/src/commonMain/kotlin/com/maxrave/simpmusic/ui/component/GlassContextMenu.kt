package com.maxrave.simpmusic.ui.component

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.hapticfeedback.HapticFeedbackType
import androidx.compose.ui.platform.LocalHapticFeedback
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.maxrave.simpmusic.ui.theme.seed
import com.maxrave.simpmusic.ui.theme.typo

/**
 * One row of an iOS-style context menu. [destructive] tints the row in the brand red, matching
 * Apple's convention for irreversible actions.
 */
data class ContextMenuItem(
    val label: String,
    val icon: ImageVector? = null,
    val destructive: Boolean = false,
    val enabled: Boolean = true,
    val onClick: () -> Unit,
)

/**
 * A floating context menu in the Apple Music style: the underlying screen dims behind a centred
 * rounded card that scales up softly from 96%. Shown by passing a non-null [items]; hidden by
 * passing null (or tapping the scrim / pressing back).
 *
 * Deliberately rendered through [Dialog] rather than a Popup-in-tree: the dialog window captures
 * back navigation and outside touches for dismissal on every platform without each caller having
 * to wire it. Content is NOT truly blurred behind the scrim yet — cross-platform backdrop blur of
 * arbitrary dialog-underneath content is not solved in this codebase, so the scrim dims only.
 */
@Composable
fun GlassContextMenu(
    items: List<ContextMenuItem>?,
    onDismiss: () -> Unit,
    modifier: Modifier = Modifier,
) {
    if (items.isNullOrEmpty()) return

    Dialog(
        onDismissRequest = onDismiss,
        properties =
            DialogProperties(
                usePlatformDefaultWidth = false,
                dismissOnBackPress = true,
                dismissOnClickOutside = true,
            ),
    ) {
        Box(
            modifier =
                modifier
                    .fillMaxSize()
                    .background(Color.Black.copy(alpha = 0.5f))
                    .clickable(
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        onClick = onDismiss,
                    ),
            contentAlignment = Alignment.Center,
        ) {
            AnimatedVisibility(
                visible = true,
                enter =
                    fadeIn(animationSpec = tween(120)) +
                        scaleIn(
                            initialScale = 0.96f,
                            animationSpec = tween(120),
                        ),
                exit =
                    fadeOut(animationSpec = tween(100)) +
                        scaleOut(targetScale = 0.96f, animationSpec = tween(100)),
            ) {
                Column(
                    modifier =
                        Modifier
                            .widthIn(max = 300.dp)
                            .fillMaxWidth(0.82f)
                            .clip(RoundedCornerShape(16.dp))
                            .background(MaterialTheme.colorScheme.surfaceContainerHigh)
                            .padding(vertical = 6.dp),
                ) {
                    items.forEachIndexed { index, item ->
                        MenuRow(
                            item = item,
                            onClick = {
                                onDismiss()
                                item.onClick()
                            },
                        )
                        if (index != items.lastIndex) {
                            HorizontalDivider(
                                thickness = 0.5.dp,
                                color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.5f),
                                modifier = Modifier.padding(start = 52.dp),
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun MenuRow(
    item: ContextMenuItem,
    onClick: () -> Unit,
) {
    val haptics = LocalHapticFeedback.current
    val tint =
        when {
            !item.enabled -> MaterialTheme.colorScheme.onSurface.copy(alpha = 0.35f)
            item.destructive -> seed
            else -> MaterialTheme.colorScheme.onSurface
        }
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Start,
        modifier =
            Modifier
                .fillMaxWidth()
                .alpha(if (item.enabled) 1f else 0.45f)
                .clickable(
                    interactionSource = remember { MutableInteractionSource() },
                    indication = null,
                    enabled = item.enabled,
                ) {
                    haptics.performHapticFeedback(HapticFeedbackType.LongPress)
                    onClick()
                }
                .padding(horizontal = 16.dp, vertical = 13.dp),
    ) {
        if (item.icon != null) {
            Icon(
                imageVector = item.icon,
                contentDescription = null,
                tint = tint,
                modifier = Modifier.size(22.dp),
            )
            Spacer(Modifier.size(14.dp))
        }
        Text(
            text = item.label,
            style = typo().bodyMedium,
            fontWeight = androidx.compose.ui.text.font.FontWeight.Medium,
            color = tint,
        )
    }
}
