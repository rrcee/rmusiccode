package com.maxrave.simpmusic.ui.component

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.composed
import androidx.compose.ui.graphics.graphicsLayer

/**
 * Apple-style press feedback for cards and tiles: the surface eases down to [pressedScale]
 * while touched (120 ms ease-out both ways per the motion spec) and springs back on release.
 * Pair it with an existing click handler by sharing the same [interactionSource]:
 *
 * ```
 * val source = remember { MutableInteractionSource() }
 * Box(
 *     Modifier
 *         .clickable(interactionSource = source, indication = null) { ... }
 *         .pressScale(source)
 * )
 * ```
 *
 * Pass your own source when combining with `clickable`/`combinedClickable`; omit it to get a
 * private one that only drives this scale (useful on surfaces whose gesture lives elsewhere).
 */
@Composable
fun Modifier.pressScale(
    pressedScale: Float = 0.96f,
    interactionSource: MutableInteractionSource? = null,
): Modifier {
    val source = interactionSource ?: remember { MutableInteractionSource() }
    val pressed by source.collectIsPressedAsState()
    val scale by animateFloatAsState(
        targetValue = if (pressed) pressedScale else 1f,
        animationSpec = tween(durationMillis = 120),
        label = "pressScale",
    )
    return graphicsLayer {
        scaleX = scale
        scaleY = scale
    }
}

/** Non-composable convenience for call sites that already own an interaction source. */
fun Modifier.pressScale(
    interactionSource: MutableInteractionSource,
    pressedScale: Float,
): Modifier = composed {
    val pressed by interactionSource.collectIsPressedAsState()
    val scale by animateFloatAsState(
        targetValue = if (pressed) pressedScale else 1f,
        animationSpec = tween(durationMillis = 120),
        label = "pressScale",
    )
    graphicsLayer {
        scaleX = scale
        scaleY = scale
    }
}
