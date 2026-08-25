package com.maxrave.simpmusic.ui.component

import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import com.maxrave.simpmusic.expect.ui.systemAnimationsEnabled
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin

/**
 * An animated "fluid mesh" atmosphere: several large soft colour blobs drifting slowly over a
 * base canvas. This replaces the static blurred-artwork rectangle behind the player — same
 * palette-driven colours, but alive. The motion is deliberately glacial (one orbit every
 * 24-43 s) so it reads as ambient depth rather than an effect.
 *
 * Implementation is a plain [Canvas] drawing radial gradients — no RuntimeShader/AGSL — because
 * hand-drawn gradients are the only backdrop technique in this codebase proven safe on both
 * Android's and Desktop's (skiko) renderers.
 *
 * Pass artwork-derived colours ([colors]); each blob fades to transparent at its edge so nothing
 * ever shows a hard circle.
 */
@Composable
fun AnimatedMeshBackdrop(
    colors: List<Color>,
    modifier: Modifier = Modifier,
    baseColor: Color = Color.Black,
    blobAlpha: Float = 0.5f,
    animate: Boolean = true,
) {
    val transition = rememberInfiniteTransition(label = "meshDrift")

    // Accessibility: when the system is set to minimise animations, the wash holds a fixed
    // pleasant arrangement instead of drifting.
    val motionAllowed = systemAnimationsEnabled()

    // Three independent phase angles at unrelated speeds: their combination never visibly
    // repeats, which keeps the wash from reading as a loop.
    val phaseA =
        transition.animateFloat(
            initialValue = 0f,
            targetValue = (2 * PI).toFloat(),
            animationSpec =
                infiniteRepeatable(
                    animation = tween(durationMillis = 43_000, easing = LinearEasing),
                ),
            label = "phaseA",
        )
    val phaseB =
        transition.animateFloat(
            initialValue = 0f,
            targetValue = (2 * PI).toFloat(),
            animationSpec =
                infiniteRepeatable(
                    animation = tween(durationMillis = 31_000, easing = LinearEasing),
                ),
            label = "phaseB",
        )
    val phaseC =
        transition.animateFloat(
            initialValue = 0f,
            targetValue = (2 * PI).toFloat(),
            animationSpec =
                infiniteRepeatable(
                    animation = tween(durationMillis = 24_000, easing = LinearEasing),
                ),
            label = "phaseC",
        )

    val a = if (animate && motionAllowed) phaseA.value else 0f
    val b = if (animate && motionAllowed) phaseB.value else 1.1f
    val c = if (animate && motionAllowed) phaseC.value else 2.4f

    Canvas(modifier) {
        drawRect(color = baseColor)

        fun blob(
            cx: Float,
            cy: Float,
            radiusPx: Float,
            color: Color,
        ) {
            drawCircle(
                brush =
                    Brush.radialGradient(
                        colors =
                            listOf(
                                color.copy(alpha = color.alpha * blobAlpha),
                                Color.Transparent,
                            ),
                        center = Offset(cx, cy),
                        radius = radiusPx,
                    ),
                radius = radiusPx,
                center = Offset(cx, cy),
            )
        }

        val w = size.width
        val h = size.height

        val palette = if (colors.isEmpty()) listOf(Color(0xFF3A3A48)) else colors

        // Blob 1 rides the upper third, blob 2 the lower half, blob 3 anchors a corner; each
        // traces a small path around its home position so the composition stays balanced.
        blob(
            cx = w * (0.30f + 0.06f * sin(a)) ,
            cy = h * (0.18f + 0.05f * cos(a * 0.8f)),
            radiusPx = maxOf(w, h) * 0.62f,
            color = palette[0],
        )
        blob(
            cx = w * (0.72f + 0.07f * cos(b)),
            cy = h * (0.66f + 0.06f * sin(b * 0.9f)),
            radiusPx = maxOf(w, h) * 0.55f,
            color = palette[1 % palette.size],
        )
        blob(
            cx = w * (0.14f + 0.05f * sin(c * 1.1f)),
            cy = h * (0.86f + 0.05f * cos(c)),
            radiusPx = maxOf(w, h) * 0.45f,
            color = palette[2 % palette.size],
        )
    }
}
