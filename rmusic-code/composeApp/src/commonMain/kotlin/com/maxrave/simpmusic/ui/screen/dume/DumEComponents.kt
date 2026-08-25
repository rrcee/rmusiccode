package com.maxrave.simpmusic.ui.screen.dume

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectHorizontalDragGestures
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.hapticfeedback.HapticFeedbackType
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.platform.LocalHapticFeedback
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil3.compose.AsyncImage
import com.kyant.backdrop.highlight.Highlight
import com.maxrave.simpmusic.expect.ui.PlatformBackdrop
import com.maxrave.simpmusic.ui.component.GlassMaterial
import com.maxrave.simpmusic.ui.component.LiquidGlassContainer
import com.maxrave.simpmusic.ui.icon.PlayArrow
import com.maxrave.simpmusic.ui.icon.SimpIcons
import com.maxrave.simpmusic.ui.theme.fontFamily
import org.jetbrains.compose.resources.painterResource
import simpmusic.composeapp.generated.resources.Res
import simpmusic.composeapp.generated.resources.holder

/**
 * Every size in Dum-E mode comes from here, scaled off the window width, so the same code fills a
 * 7" tablet and a 13" one without a second layout. The floors are deliberately large: this mode
 * exists for people who cannot comfortably hit a 48dp target or read 13sp text.
 */
@Immutable
data class DumEMetrics(
    /** Wide enough for a side rail instead of a bottom bar. */
    val useRail: Boolean,
    val columns: Int,
    val gutter: Dp,
    val cardCorner: Dp,
    val barCorner: Dp,
    val tileTitleSize: Int,
    val tileSubtitleSize: Int,
    val screenTitleSize: Int,
    val rowHeight: Dp,
    val rowArtwork: Dp,
    val tabIcon: Dp,
    val tabLabelSize: Int,
    val barHeight: Dp,
    val railWidth: Dp,
    val nowPlayingHeight: Dp,
) {
    companion object {
        fun forWidth(width: Dp): DumEMetrics {
            val w = width.value
            return when {
                // Big tablet / desktop window: side rail, four columns, everything at full size.
                w >= 1100f ->
                    DumEMetrics(
                        useRail = true,
                        columns = 4,
                        gutter = 28.dp,
                        cardCorner = 44.dp,
                        barCorner = 52.dp,
                        tileTitleSize = 26,
                        tileSubtitleSize = 20,
                        screenTitleSize = 46,
                        rowHeight = 128.dp,
                        rowArtwork = 104.dp,
                        tabIcon = 44.dp,
                        tabLabelSize = 20,
                        barHeight = 116.dp,
                        railWidth = 260.dp,
                        nowPlayingHeight = 132.dp,
                    )
                // Landscape tablet.
                w >= 840f ->
                    DumEMetrics(
                        useRail = true,
                        columns = 3,
                        gutter = 24.dp,
                        cardCorner = 40.dp,
                        barCorner = 48.dp,
                        tileTitleSize = 24,
                        tileSubtitleSize = 19,
                        screenTitleSize = 42,
                        rowHeight = 120.dp,
                        rowArtwork = 96.dp,
                        tabIcon = 42.dp,
                        tabLabelSize = 19,
                        barHeight = 110.dp,
                        railWidth = 232.dp,
                        nowPlayingHeight = 124.dp,
                    )
                // Portrait tablet / large foldable.
                w >= 600f ->
                    DumEMetrics(
                        useRail = false,
                        columns = 3,
                        gutter = 22.dp,
                        cardCorner = 38.dp,
                        barCorner = 46.dp,
                        tileTitleSize = 23,
                        tileSubtitleSize = 18,
                        screenTitleSize = 40,
                        rowHeight = 112.dp,
                        rowArtwork = 88.dp,
                        tabIcon = 40.dp,
                        tabLabelSize = 18,
                        barHeight = 104.dp,
                        railWidth = 220.dp,
                        nowPlayingHeight = 116.dp,
                    )
                // Phone. Still oversized on purpose — this mode never shrinks below "easy to hit".
                else ->
                    DumEMetrics(
                        useRail = false,
                        columns = 2,
                        gutter = 16.dp,
                        cardCorner = 32.dp,
                        barCorner = 40.dp,
                        tileTitleSize = 20,
                        tileSubtitleSize = 16,
                        screenTitleSize = 34,
                        rowHeight = 96.dp,
                        rowArtwork = 76.dp,
                        tabIcon = 34.dp,
                        tabLabelSize = 15,
                        barHeight = 92.dp,
                        railWidth = 200.dp,
                        nowPlayingHeight = 100.dp,
                    )
            }
        }
    }
}

/**
 * The page behind the glass. The base is pure #000000 so OLED panels drive no current on the page
 * itself, but real liquid glass needs *something* underneath it to refract — a perfectly flat
 * black page makes every glass surface read as a dead grey rectangle. Three very dim colour blobs
 * are painted straight into a canvas (no blur modifiers, nothing animated), bright enough to give
 * the chrome depth, dim enough to keep the AMOLED black effectively black.
 */
@Composable
fun DumEBackground(modifier: Modifier = Modifier) {
    Box(
        modifier
            .fillMaxSize()
            .background(Color.Black),
    ) {
        Canvas(Modifier.fillMaxSize()) {
            fun blob(
                centerX: Float,
                centerY: Float,
                radius: Float,
                color: Color,
            ) {
                drawCircle(
                    brush =
                        Brush.radialGradient(
                            colors = listOf(color, Color.Transparent),
                            center = Offset(centerX, centerY),
                            radius = radius,
                        ),
                    radius = radius,
                    center = Offset(centerX, centerY),
                )
            }
            // Deep indigo glow, upper end.
            blob(
                centerX = size.width * 0.82f,
                centerY = size.height * 0.12f,
                radius = size.minDimension * 0.55f,
                color = Color(0xFF4A3FBF).copy(alpha = 0.30f),
            )
            // Violet wash, lower start.
            blob(
                centerX = size.width * 0.10f,
                centerY = size.height * 0.62f,
                radius = size.minDimension * 0.50f,
                color = Color(0xFF8A4BBF).copy(alpha = 0.22f),
            )
            // Faint teal anchor, bottom end.
            blob(
                centerX = size.width * 0.68f,
                centerY = size.height * 0.95f,
                radius = size.minDimension * 0.42f,
                color = Color(0xFF1F6F6F).copy(alpha = 0.20f),
            )
        }
    }
}

/**
 * A frosted card for use INSIDE the scrolling content.
 *
 * Deliberately not real `liquidGlass`: content lives inside the box carrying
 * `layerBackdrop`, and a refracting surface nested in its own backdrop source is the
 * render-feedback loop that crashes the RuntimeShader. A list of them would also mean one
 * `GraphicsLayer` and one shader pass per row. This reproduces the look with a plain
 * translucent gradient and a lit edge.
 */
@Composable
fun DumEFrostedSurface(
    modifier: Modifier = Modifier,
    shape: Shape = RoundedCornerShape(32.dp),
    highlighted: Boolean = false,
    contentAlignment: Alignment = Alignment.TopStart,
    content: @Composable BoxScope.() -> Unit,
) {
    // AMOLED dark styling, unconditionally: the page behind these cards is pure black, so the
    // cards lift with white-on-black translucency whether the app theme is light or dark.
    val top = if (highlighted) 0.24f else 0.12f
    val bottom = if (highlighted) 0.10f else 0.05f
    val borderColor = if (highlighted) Color.White.copy(alpha = 0.22f) else Color.White.copy(alpha = 0.08f)
    Box(
        modifier
            .clip(shape)
            .background(
                Brush.verticalGradient(
                    listOf(Color.White.copy(alpha = top), Color.White.copy(alpha = bottom)),
                ),
            )
            .border(1.dp, borderColor, shape),
        contentAlignment = contentAlignment,
        content = content,
    )
}

/** Ink on the AMOLED page is always white — the background never goes light in this mode. */
@Composable
fun dumETextColor(): Color = Color.White

@Composable
fun dumEDimTextColor(): Color = Color.White.copy(alpha = 0.62f)

/** Big screen heading. */
@Composable
fun DumEScreenTitle(
    text: String,
    metrics: DumEMetrics,
    modifier: Modifier = Modifier,
) {
    Text(
        text = text,
        fontSize = metrics.screenTitleSize.sp,
        lineHeight = (metrics.screenTitleSize * 1.15f).sp,
        fontWeight = FontWeight.Bold,
        fontFamily = fontFamily(),
        color = dumETextColor(),
        modifier = modifier,
    )
}

/**
 * A square artwork card with the title underneath — the Listen Again grid cell. Everything on it is
 * one tap target; there is no long-press menu anywhere in Dum-E mode.
 */
@Composable
fun DumESongTile(
    title: String,
    subtitle: String?,
    thumbnail: String?,
    metrics: DumEMetrics,
    modifier: Modifier = Modifier,
    isPlaying: Boolean = false,
    onClick: () -> Unit,
) {
    DumEFrostedSurface(
        modifier =
            modifier
                .clickableNoRipple(onClick),
        shape = RoundedCornerShape(metrics.cardCorner),
        highlighted = isPlaying,
    ) {
        Column(Modifier.padding(metrics.gutter / 2)) {
            Box(
                Modifier
                    .fillMaxWidth()
                    .aspectRatio(1f)
                    .clip(RoundedCornerShape(metrics.cardCorner - 8.dp)),
            ) {
                AsyncImage(
                    model = thumbnail,
                    contentDescription = null,
                    placeholder = painterResource(Res.drawable.holder),
                    error = painterResource(Res.drawable.holder),
                    modifier = Modifier.fillMaxSize(),
                )
                if (isPlaying) {
                    Box(
                        Modifier
                            .fillMaxSize()
                            .background(Color.Black.copy(alpha = 0.35f)),
                        contentAlignment = Alignment.Center,
                    ) {
                        Icon(
                            SimpIcons.PlayArrow,
                            contentDescription = null,
                            tint = Color.White,
                            modifier = Modifier.size(metrics.tabIcon * 1.4f),
                        )
                    }
                }
            }
            Spacer(Modifier.height(14.dp))
            Text(
                text = title,
                fontSize = metrics.tileTitleSize.sp,
                lineHeight = (metrics.tileTitleSize * 1.25f).sp,
                fontWeight = FontWeight.SemiBold,
                fontFamily = fontFamily(),
                color = dumETextColor(),
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
            if (!subtitle.isNullOrBlank()) {
                Spacer(Modifier.height(4.dp))
                Text(
                    text = subtitle,
                    fontSize = metrics.tileSubtitleSize.sp,
                    fontFamily = fontFamily(),
                    color = dumEDimTextColor(),
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
            }
            Spacer(Modifier.height(6.dp))
        }
    }
}

/** A full-width row: artwork, two big lines, and a play chevron. Used by Downloads and Search. */
@Composable
fun DumESongRow(
    title: String,
    subtitle: String?,
    thumbnail: String?,
    metrics: DumEMetrics,
    modifier: Modifier = Modifier,
    isPlaying: Boolean = false,
    onClick: () -> Unit,
) {
    DumEFrostedSurface(
        modifier =
            modifier
                .fillMaxWidth()
                .height(metrics.rowHeight)
                .clickableNoRipple(onClick),
        shape = RoundedCornerShape(metrics.cardCorner),
        highlighted = isPlaying,
        contentAlignment = Alignment.CenterStart,
    ) {
        Row(
            Modifier
                .fillMaxSize()
                .padding(horizontal = 16.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            AsyncImage(
                model = thumbnail,
                contentDescription = null,
                placeholder = painterResource(Res.drawable.holder),
                error = painterResource(Res.drawable.holder),
                modifier =
                    Modifier
                        .size(metrics.rowArtwork)
                        .clip(RoundedCornerShape(metrics.cardCorner / 2)),
            )
            Spacer(Modifier.width(18.dp))
            Column(Modifier.weight(1f)) {
                Text(
                    text = title,
                    fontSize = metrics.tileTitleSize.sp,
                    lineHeight = (metrics.tileTitleSize * 1.25f).sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = fontFamily(),
                    color = dumETextColor(),
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
                if (!subtitle.isNullOrBlank()) {
                    Spacer(Modifier.height(4.dp))
                    Text(
                        text = subtitle,
                        fontSize = metrics.tileSubtitleSize.sp,
                        fontFamily = fontFamily(),
                        color = dumEDimTextColor(),
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                    )
                }
            }
            Spacer(Modifier.width(12.dp))
            Box(
                Modifier
                    .size(metrics.rowArtwork * 0.62f)
                    .clip(CircleShape)
                    .background(dumETextColor().copy(alpha = 0.12f)),
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    SimpIcons.PlayArrow,
                    contentDescription = null,
                    tint = dumETextColor(),
                    modifier = Modifier.size(metrics.rowArtwork * 0.36f),
                )
            }
        }
    }
}

/**
 * A large glass pill button with an icon and a label. Real glass — every caller places it as a
 * sibling of the backdrop source.
 */
@Composable
fun DumEGlassButton(
    label: String,
    icon: ImageVector?,
    backdrop: PlatformBackdrop,
    metrics: DumEMetrics,
    modifier: Modifier = Modifier,
    tint: Color = Color.White,
    onClick: () -> Unit,
) {
    LiquidGlassContainer(
        backdrop = backdrop,
        modifier =
            modifier
                .height(metrics.barHeight * 0.78f)
                .clickableNoRipple(onClick),
        shape = RoundedCornerShape(metrics.barCorner),
        material = GlassMaterial.FloatingButton,
        highlight = Highlight.Plain,
    ) {
        Row(
            Modifier.padding(horizontal = 30.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center,
        ) {
            if (icon != null) {
                Icon(
                    icon,
                    contentDescription = null,
                    tint = tint,
                    modifier = Modifier.size(metrics.tabIcon),
                )
                Spacer(Modifier.width(16.dp))
            }
            Text(
                text = label,
                fontSize = (metrics.tabLabelSize + 4).sp,
                fontWeight = FontWeight.Bold,
                fontFamily = fontFamily(),
                color = tint,
                textAlign = TextAlign.Center,
                maxLines = 1,
            )
        }
    }
}

/** Big empty-state block, so a blank screen still explains itself. */
@Composable
fun DumEEmptyState(
    title: String,
    message: String,
    metrics: DumEMetrics,
    modifier: Modifier = Modifier,
) {
    Column(
        modifier
            .fillMaxWidth()
            .padding(horizontal = metrics.gutter, vertical = 48.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(
            text = title,
            fontSize = (metrics.tileTitleSize + 6).sp,
            fontWeight = FontWeight.Bold,
            fontFamily = fontFamily(),
            color = dumETextColor(),
            textAlign = TextAlign.Center,
        )
        Spacer(Modifier.height(12.dp))
        Text(
            text = message,
            fontSize = metrics.tileSubtitleSize.sp,
            lineHeight = (metrics.tileSubtitleSize * 1.5f).sp,
            fontFamily = fontFamily(),
            color = dumEDimTextColor(),
            textAlign = TextAlign.Center,
        )
    }
}

/**
 * A slider whose whole bar is the target. Material's own is a 4dp track with a 20dp thumb, which is
 * the single hardest thing in the app to land on with an unsteady hand — here the bar is tall, the
 * fill *is* the readout, and there is no separate thumb to aim at. Tap anywhere to jump; drag to
 * scrub.
 */
@Composable
fun DumEBigSlider(
    value: Float,
    onValueChange: (Float) -> Unit,
    modifier: Modifier = Modifier,
    height: Dp = 40.dp,
    ink: Color = Color.White,
) {
    val haptics = LocalHapticFeedback.current
    var widthPx by remember { mutableStateOf(0) }
    // While a finger is down the bar follows the finger, not the player: position updates arrive
    // every 200ms and would otherwise yank the fill back under the thumb mid-drag.
    var dragged by remember { mutableStateOf<Float?>(null) }
    val shown = (dragged ?: value).coerceIn(0f, 1f)

    Box(
        modifier
            .height(height)
            .clip(CircleShape)
            .background(ink.copy(alpha = 0.18f))
            .onSizeChanged { widthPx = it.width }
            .pointerInput(Unit) {
                detectTapGestures { offset ->
                    if (widthPx > 0) {
                        // The tick marks that a jump was accepted, not just that the bar was hit.
                        haptics.performHapticFeedback(HapticFeedbackType.LongPress)
                        onValueChange((offset.x / widthPx).coerceIn(0f, 1f))
                    }
                }
            }.pointerInput(Unit) {
                detectHorizontalDragGestures(
                    onDragStart = { offset ->
                        if (widthPx > 0) dragged = (offset.x / widthPx).coerceIn(0f, 1f)
                    },
                    onDragEnd = {
                        dragged?.let {
                            // One tick when the new position commits, none while scrubbing —
                            // continuous vibration during a drag is noise, not confirmation.
                            haptics.performHapticFeedback(HapticFeedbackType.LongPress)
                            onValueChange(it)
                        }
                        dragged = null
                    },
                    onDragCancel = { dragged = null },
                ) { change, _ ->
                    if (widthPx > 0) dragged = (change.position.x / widthPx).coerceIn(0f, 1f)
                }
            },
        contentAlignment = Alignment.CenterStart,
    ) {
        if (shown > 0f) {
            Box(
                Modifier
                    .fillMaxWidth(shown)
                    .fillMaxHeight()
                    .background(ink.copy(alpha = 0.9f)),
            )
        }
    }
}

/**
 * `m:ss`, or `h:mm:ss` past an hour. Local copy because the shared `formatDuration` is a composable
 * that reads a string resource, so it cannot be called from a plain function.
 */
fun formatDumETime(ms: Long): String {
    if (ms <= 0L) return "0:00"
    val totalSeconds = ms / 1000
    val hours = totalSeconds / 3600
    val minutes = (totalSeconds % 3600) / 60
    val seconds = totalSeconds % 60
    return if (hours > 0) {
        "$hours:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}"
    } else {
        "$minutes:${seconds.toString().padStart(2, '0')}"
    }
}

/**
 * Clicks without a ripple. The frosted surfaces already respond by looking pressed, and glass draws
 * its own press animation, so a ripple on top of either reads as a smudge at these sizes.
 *
 * Every tap confirms itself with a haptic tick: this mode exists for users who may not trust what
 * they hit, and physical confirmation closes the gap a missing ripple leaves. Pass
 * [hapticFeedback] = false only for surfaces that swallow taps without an action.
 */
@Composable
fun Modifier.clickableNoRipple(
    onClick: () -> Unit,
    hapticFeedback: Boolean = true,
): Modifier {
    val haptics = LocalHapticFeedback.current
    return this.clickable(
        interactionSource = remember { MutableInteractionSource() },
        indication = null,
    ) {
        if (hapticFeedback) {
            haptics.performHapticFeedback(HapticFeedbackType.LongPress)
        }
        onClick()
    }
}
