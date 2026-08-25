package com.maxrave.simpmusic.ui.component

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.spring
import androidx.compose.foundation.gestures.awaitEachGesture
import androidx.compose.foundation.gestures.awaitFirstDown
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.layer.GraphicsLayer
import androidx.compose.ui.graphics.rememberGraphicsLayer
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.input.pointer.AwaitPointerEventScope
import androidx.compose.ui.input.pointer.PointerEventPass
import androidx.compose.ui.input.pointer.PointerId
import androidx.compose.ui.input.pointer.PointerInputChange
import androidx.compose.ui.input.pointer.PointerInputScope
import androidx.compose.ui.input.pointer.changedToUpIgnoreConsumed
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.input.pointer.positionChange
import androidx.compose.ui.unit.dp
import androidx.compose.ui.util.fastFirstOrNull
import androidx.compose.ui.util.lerp
import com.kyant.backdrop.drawBackdrop
import com.kyant.backdrop.effects.blur
import com.kyant.backdrop.effects.colorControls
import com.kyant.backdrop.effects.lens
import com.kyant.backdrop.effects.vibrancy
import com.kyant.backdrop.highlight.Highlight
import com.maxrave.simpmusic.expect.ui.PlatformBackdrop
import com.maxrave.simpmusic.ui.theme.LocalIsDarkTheme
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawOutline
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlin.math.sign

/**
 * Applies the SimpMusic liquid-glass effect to any element.
 *
 * This is the single primitive behind the glass buttons that used to be hand-wired
 * inline on every screen. It encapsulates the per-surface
 * [androidx.compose.ui.graphics.layer.GraphicsLayer], the Kyant `drawBackdrop`
 * effect stack and the press/hold "liquid" interaction (a slight scale-up, deeper
 * refraction and a radial glow that follows the pointer, springing back on release).
 * The press gesture is observe-only, so wrapped click handlers keep working.
 *
 * The element MUST be a sibling of the backdrop source (the box carrying
 * [com.maxrave.simpmusic.expect.ui.layerBackdrop]); nesting it inside the source
 * creates a render-feedback loop that crashes the RuntimeShader.
 *
 * Runs on Android and desktop alike: Kyant's backdrop is a KMP artifact whose desktop
 * variant renders through skiko. The press interaction is driven by `pointerInput`, so
 * a mouse button triggers it exactly like a finger.
 *
 * @param interactive set false for a static glass surface.
 */
data class GlassMaterial(
    val blurRadiusDp: Float = 12f,
    val saturation: Float = 1.6f,
    val brightness: Float = 0.05f,
    val contrast: Float = 1f,
    val lensFraction: Float = 0.25f, // refraction lens size fraction
    val minScrim: Float = 0.12f,
    val maxScrim: Float = 0.5f,
    val pressedScale: Float = 1.05f,
    val edgeLightingAlpha: Float = 0.22f, // border/edge light strength
    val tintColor: Color? = null,
    val chromaticAberration: Boolean = true,
) {
    companion object {
        val Default = GlassMaterial()
        
        // Navigation bar: heavy backdrop blur per the iOS spec (30dp / 1.8× saturation), very
        // translucent so content visibly flows underneath, and NO edge stroke — the old 1dp
        // white rim read as a hard outline around the capsule.
        val NavigationBar = GlassMaterial(
            blurRadiusDp = 30f,
            saturation = 1.8f,
            brightness = 0.02f,
            contrast = 0.98f,
            lensFraction = 0.15f,
            minScrim = 0.10f,
            maxScrim = 0.38f,
            pressedScale = 1.0f, // Navigation bars don't bounce on press
            edgeLightingAlpha = 0.0f,
            chromaticAberration = false,
        )
        
        // Floating play button / Controls: lower visual opacity, stronger refraction, stronger specular highlight, more pronounced depth.
        val FloatingButton = GlassMaterial(
            blurRadiusDp = 8f,
            saturation = 1.8f,
            brightness = 0.08f,
            contrast = 1.05f,
            lensFraction = 0.35f,
            minScrim = 0.08f,
            maxScrim = 0.35f,
            pressedScale = 1.12f,
            edgeLightingAlpha = 0.35f,
            chromaticAberration = true,
        )
        
        // Mini player: same heavy blur / saturation as the tab bar so both bottom containers
        // read as one material, strongly translucent, no edge stroke.
        val MiniPlayer = GlassMaterial(
            blurRadiusDp = 30f,
            saturation = 1.8f,
            brightness = 0.04f,
            contrast = 1.02f,
            lensFraction = 0.20f,
            minScrim = 0.12f,
            maxScrim = 0.40f,
            pressedScale = 1.04f,
            edgeLightingAlpha = 0.0f,
            chromaticAberration = true,
        )
        
        // Large sheet: softer blur, lower distortion, strong depth separation, strong content readability.
        val Sheet = GlassMaterial(
            blurRadiusDp = 24f,
            saturation = 1.4f,
            brightness = -0.02f,
            contrast = 0.95f,
            lensFraction = 0.10f,
            minScrim = 0.25f,
            maxScrim = 0.65f,
            pressedScale = 1.0f,
            edgeLightingAlpha = 0.18f,
            chromaticAberration = false,
        )

        // Slider track: thin frosted capsule, very subtle blur, no press bounce.
        val SliderTrack = GlassMaterial(
            blurRadiusDp = 6f,
            saturation = 1.3f,
            brightness = 0.02f,
            contrast = 1f,
            lensFraction = 0.10f,
            minScrim = 0.18f,
            maxScrim = 0.40f,
            pressedScale = 1.0f,
            edgeLightingAlpha = 0.15f,
            chromaticAberration = false,
        )

        // Slider thumb: small refractive glass circle, strong edge highlight.
        val SliderThumb = GlassMaterial(
            blurRadiusDp = 4f,
            saturation = 1.9f,
            brightness = 0.10f,
            contrast = 1.08f,
            lensFraction = 0.40f,
            minScrim = 0.06f,
            maxScrim = 0.25f,
            pressedScale = 1.15f,
            edgeLightingAlpha = 0.45f,
            chromaticAberration = true,
        )

        // Header action icon button: moderate glass, works well on non-artwork backgrounds.
        val HeaderButton = GlassMaterial(
            blurRadiusDp = 10f,
            saturation = 1.5f,
            brightness = 0.06f,
            contrast = 1.02f,
            lensFraction = 0.25f,
            minScrim = 0.12f,
            maxScrim = 0.40f,
            pressedScale = 1.08f,
            edgeLightingAlpha = 0.30f,
            chromaticAberration = false,
        )
    }
}

@Composable
fun Modifier.liquidGlass(
    backdrop: PlatformBackdrop,
    shape: Shape = CircleShape,
    interactive: Boolean = true,
    material: GlassMaterial = GlassMaterial.Default,
    highlight: Highlight = Highlight.Default,
): Modifier {
    val isDark = LocalIsDarkTheme.current
    val layer = rememberGraphicsLayer()
    val interaction = rememberGlassInteraction()
    return this.drawInteractiveGlass(
        isDark = isDark,
        backdrop = backdrop,
        layer = layer,
        luminanceAnimation = 0.5f,
        shape = shape,
        interaction = if (interactive) interaction else null,
        material = material,
        highlight = highlight,
    )
}

/**
 * Overload of [liquidGlass] for surfaces that sample their own background luminance
 * (e.g. the MiniPlayer and the bottom bar capsule): the caller owns the [layer] the
 * glass records into and drives [luminanceAnimation], so the glass keeps adapting to
 * the content behind it — unlike the [liquidGlass] above, which uses a fixed
 * mid-luminance.
 *
 * [blurScale], [minScrim] and [maxScrim] forward to [drawInteractiveGlass]; their
 * defaults reproduce the shared look, so only a caller that wants a denser pane
 * (the Desktop capsule) has to name them.
 */
@Composable
fun Modifier.liquidGlass(
    backdrop: PlatformBackdrop,
    layer: GraphicsLayer,
    luminanceAnimation: Float,
    shape: Shape = CircleShape,
    interactive: Boolean = true,
    blurScale: Float = 1f,
    minScrim: Float = 0.12f,
    maxScrim: Float = 0.5f,
    material: GlassMaterial? = null,
    highlight: Highlight = Highlight.Default,
): Modifier {
    val isDark = LocalIsDarkTheme.current
    val interaction = rememberGlassInteraction()
    val actualMaterial = material ?: GlassMaterial.MiniPlayer.copy(
        minScrim = minScrim,
        maxScrim = maxScrim,
    )
    return this.drawInteractiveGlass(
        isDark = isDark,
        backdrop = backdrop,
        layer = layer,
        luminanceAnimation = luminanceAnimation,
        shape = shape,
        interaction = if (interactive) interaction else null,
        material = actualMaterial,
        highlight = highlight,
    )
}

/**
 * A liquid-glass surface wrapping arbitrary [content] (e.g. a pill of icon
 * buttons). Thin convenience over [liquidGlass].
 */
@Composable
fun LiquidGlassContainer(
    backdrop: PlatformBackdrop,
    modifier: Modifier = Modifier,
    shape: Shape = CircleShape,
    interactive: Boolean = true,
    material: GlassMaterial = GlassMaterial.Default,
    highlight: Highlight = Highlight.Default,
    contentAlignment: Alignment = Alignment.Center,
    content: @Composable BoxScope.() -> Unit,
) {
    Box(
        modifier = modifier.liquidGlass(backdrop, shape, interactive, material, highlight),
        contentAlignment = contentAlignment,
        content = content,
    )
}

/**
 * Convenience wrapper around [LiquidGlassContainer] for the common single-icon
 * case (e.g. the circular back button shared by the detail screens).
 */
@Composable
fun LiquidGlassIconButton(
    backdrop: PlatformBackdrop,
    imageVector: ImageVector,
    modifier: Modifier = Modifier.size(48.dp),
    shape: Shape = CircleShape,
    tint: Color = Color.White,
    interactive: Boolean = true,
    material: GlassMaterial = GlassMaterial.FloatingButton,
    highlight: Highlight = Highlight.Default,
    onClick: () -> Unit,
) {
    LiquidGlassContainer(
        backdrop = backdrop,
        modifier = modifier,
        shape = shape,
        interactive = interactive,
        material = material,
        highlight = highlight,
    ) {
        RippleIconButton(
            imageVector = imageVector,
            tint = tint,
            onClick = onClick,
        )
    }
}

/**
 * Press/hold state holder for a single liquid-glass surface.
 *
 * Project-local, dependency-light reimplementation of Kyant's catalog
 * `InteractiveHighlight`: instead of the library-internal AGSL highlight shader
 * (whose public helpers are not exposed in backdrop 2.0.0) we drive a plain
 * [Brush.radialGradient] from [touchPosition] and a spring-animated
 * [pressProgress]. The drag detection is observe-only so wrapped buttons keep
 * receiving their own clicks.
 */
class GlassInteraction(
    private val animationScope: CoroutineScope,
) {
    private val pressSpec = spring(dampingRatio = 0.5f, stiffness = 300f, visibilityThreshold = 0.001f)
    private val pressAnimation = Animatable(0f, 0.001f)

    /** 0f at rest, animating to 1f while pressed. Read in draw/effect/layer blocks. */
    val pressProgress: Float get() = pressAnimation.value

    /** Local-space touch point used as the centre of the press glow. */
    var touchPosition by mutableStateOf(Offset.Zero)
        private set

    suspend fun detectPress(pointer: PointerInputScope) =
        with(pointer) {
            inspectDragGestures(
                onDragStart = { down ->
                    touchPosition = down.position
                    animationScope.launch { pressAnimation.animateTo(1f, pressSpec) }
                },
                onDragEnd = { animationScope.launch { pressAnimation.animateTo(0f, pressSpec) } },
                onDragCancel = { animationScope.launch { pressAnimation.animateTo(0f, pressSpec) } },
            ) { change, _ ->
                touchPosition = change.position
            }
        }
}

@Composable
fun rememberGlassInteraction(): GlassInteraction {
    val scope = rememberCoroutineScope()
    return remember(scope) { GlassInteraction(scope) }
}

/**
 * Draws the liquid-glass effect with the same look as the legacy
 * `drawBackdropCustomShape`, plus an optional press response driven by
 * [interaction]: the surface scales up a touch, the refraction/blur deepen and a
 * radial glow follows the pointer. Pass `interaction = null` for a static surface.
 *
 * [luminanceAnimation] keeps the brightness/contrast curve of the original
 * wrapper (the bottom navigation bar animates it; static surfaces pass `0.5f`).
 *
 * [blurScale] multiplies the luminance-driven blur radius and [minScrim]/[maxScrim]
 * are the ends of the darkening ramp. The defaults are the values this surface has
 * always drawn with, so every existing caller is unaffected; the Desktop capsule
 * raises both because at the shared settings (7–11dp of blur over a 0.12 scrim floor)
 * the artwork behind it stays legible instead of dissolving the way Apple's does.
 */
fun Modifier.drawInteractiveGlass(
    isDark: Boolean,
    backdrop: PlatformBackdrop,
    layer: GraphicsLayer,
    luminanceAnimation: Float,
    shape: Shape,
    interaction: GlassInteraction?,
    pressedScale: Float = 1.12f,
    highlight: Highlight = Highlight.Default,
    blurScale: Float = 1f,
    minScrim: Float = 0.12f,
    maxScrim: Float = 0.5f,
    material: GlassMaterial? = null,
): Modifier {
    val actualMaterial = material ?: GlassMaterial(
        pressedScale = pressedScale,
        blurRadiusDp = 12f * blurScale,
        minScrim = minScrim,
        maxScrim = maxScrim,
    )
    val isDarkLocal = isDark
    return this
        .drawBackdrop(
            backdrop = backdrop,
            shape = { shape },
            highlight = { highlight },
            effects = {
                val l = (luminanceAnimation * 2f - 1f).let { sign(it) * it * it }
                val press = interaction?.pressProgress ?: 0f
                vibrancy()
                colorControls(
                    brightness = actualMaterial.brightness,
                    contrast = actualMaterial.contrast,
                    saturation = actualMaterial.saturation,
                )
                
                val baseBlur = actualMaterial.blurRadiusDp.dp.toPx()
                val adjustedBlur = if (l > 0f) {
                    lerp(baseBlur, baseBlur * 1.5f, l)
                } else {
                    lerp(baseBlur, baseBlur * 0.4f, -l)
                }
                blur(adjustedBlur + 2f.dp.toPx() * press)
                
                lens(
                    size.minDimension * actualMaterial.lensFraction + 2f.dp.toPx() * press,
                    size.minDimension / 2f,
                    actualMaterial.chromaticAberration
                )
            },
            onDrawBackdrop = { drawBackdrop ->
                drawBackdrop()
                layer.record { drawBackdrop() }
            },
            onDrawSurface = {
                val darken = lerp(actualMaterial.minScrim, actualMaterial.maxScrim, ((luminanceAnimation - 0.3f) / 0.5f).coerceIn(0f, 1f))
                val baseColor = actualMaterial.tintColor ?: (if (isDarkLocal) Color.Black else Color.White)
                drawRect(baseColor.copy(alpha = darken))
                
                val press = interaction?.pressProgress ?: 0f
                if (press > 0f) {
                    drawRect(
                        brush = Brush.radialGradient(
                            colors = listOf(
                                Color.White.copy(alpha = 0.22f * press),
                                Color.Transparent,
                            ),
                            center = interaction?.touchPosition ?: Offset(size.width / 2f, size.height / 2f),
                            radius = size.minDimension * 1.4f,
                        ),
                        blendMode = BlendMode.Plus,
                    )
                }
                
                // Draw edge lighting (border/rim highlight)
                val outline = shape.createOutline(size, layoutDirection, this)
                val strokeColor = if (isDarkLocal) {
                    Color.White.copy(alpha = actualMaterial.edgeLightingAlpha)
                } else {
                    Color.Black.copy(alpha = actualMaterial.edgeLightingAlpha * 0.4f)
                }
                drawOutline(
                    outline = outline,
                    color = strokeColor,
                    style = Stroke(width = 1.dp.toPx())
                )
            },
            layerBlock =
                if (interaction != null) {
                    {
                        val scale = lerp(1f, actualMaterial.pressedScale, interaction.pressProgress)
                        scaleX = scale
                        scaleY = scale
                    }
                } else {
                    null
                },
        ).then(
            if (interaction != null) {
                Modifier.pointerInput(interaction) { interaction.detectPress(this) }
            } else {
                Modifier
            },
        )
}

/**
 * Observe-only drag/press recogniser ported from Kyant's catalog
 * `DragGestureInspector`. It never consumes events, so a glass surface can react
 * to a press while the buttons it wraps still handle their own taps.
 */
internal suspend fun PointerInputScope.inspectDragGestures(
    onDragStart: (down: PointerInputChange) -> Unit = {},
    onDragEnd: (change: PointerInputChange) -> Unit = {},
    onDragCancel: () -> Unit = {},
    onDrag: (change: PointerInputChange, dragAmount: Offset) -> Unit,
) {
    awaitEachGesture {
        awaitFirstDown(requireUnconsumed = false, pass = PointerEventPass.Initial)

        val down = awaitFirstDown(requireUnconsumed = false)

        onDragStart(down)
        onDrag(down, Offset.Zero)
        val upEvent =
            drag(
                pointerId = down.id,
                onDrag = { onDrag(it, it.positionChange()) },
            )
        if (upEvent == null) {
            onDragCancel()
        } else {
            onDragEnd(upEvent)
        }
    }
}

private suspend inline fun AwaitPointerEventScope.drag(
    pointerId: PointerId,
    onDrag: (PointerInputChange) -> Unit,
): PointerInputChange? {
    val isPointerUp = currentEvent.changes.fastFirstOrNull { it.id == pointerId }?.pressed != true
    if (isPointerUp) {
        return null
    }
    var pointer = pointerId
    while (true) {
        val change = awaitDragOrUp(pointer) ?: return null
        if (change.isConsumed) {
            return null
        }
        if (change.changedToUpIgnoreConsumed()) {
            return change
        }
        onDrag(change)
        pointer = change.id
    }
}

private suspend inline fun AwaitPointerEventScope.awaitDragOrUp(pointerId: PointerId): PointerInputChange? {
    var pointer = pointerId
    while (true) {
        val event = awaitPointerEvent()
        val dragEvent = event.changes.fastFirstOrNull { it.id == pointer } ?: return null
        if (dragEvent.changedToUpIgnoreConsumed()) {
            val otherDown = event.changes.fastFirstOrNull { it.pressed }
            if (otherDown == null) {
                return dragEvent
            } else {
                pointer = otherDown.id
            }
        } else {
            val hasDragged = dragEvent.previousPosition != dragEvent.position
            if (hasDragged) {
                return dragEvent
            }
        }
    }
}
