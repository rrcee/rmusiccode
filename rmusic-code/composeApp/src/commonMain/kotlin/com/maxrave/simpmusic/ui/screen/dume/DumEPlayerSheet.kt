package com.maxrave.simpmusic.ui.screen.dume

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.asPaddingValues
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.blur
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.hapticfeedback.HapticFeedbackType
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalHapticFeedback
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import coil3.compose.AsyncImage
import com.kyant.backdrop.highlight.Highlight
import com.maxrave.simpmusic.expect.ui.layerBackdrop
import com.maxrave.simpmusic.expect.ui.rememberBackdrop
import com.maxrave.simpmusic.ui.component.GlassMaterial
import com.maxrave.simpmusic.ui.component.LiquidGlassContainer
import com.maxrave.simpmusic.ui.component.LiquidGlassIconButton
import com.maxrave.simpmusic.ui.icon.Favorite
import com.maxrave.simpmusic.ui.icon.FavoriteBorder
import com.maxrave.simpmusic.ui.icon.KeyboardArrowDown
import com.maxrave.simpmusic.ui.icon.Pause
import com.maxrave.simpmusic.ui.icon.PlayArrow
import com.maxrave.simpmusic.ui.icon.SimpIcons
import com.maxrave.simpmusic.ui.icon.SkipNext
import com.maxrave.simpmusic.ui.icon.SkipPrevious
import com.maxrave.simpmusic.ui.theme.fontFamily
import com.maxrave.simpmusic.viewModel.SharedViewModel
import com.maxrave.simpmusic.viewModel.UIEvent
import org.jetbrains.compose.resources.painterResource
import simpmusic.composeapp.generated.resources.Res
import simpmusic.composeapp.generated.resources.holder

/**
 * The player. Deliberately its own screen rather than a bottom sheet: a sheet has a drag handle, a
 * half-expanded state and a dismiss gesture, all of which are invisible affordances, and this mode
 * cannot rely on any of those being discovered.
 *
 * Four controls and nothing else — previous, play/pause, next, and a labelled way out. No queue, no
 * lyrics tab, no "more" menu, no swipe-to-change-song.
 *
 * It carries its OWN backdrop, separate from the shell's, so the glass here refracts the artwork
 * behind it rather than the page underneath. Same rule as everywhere in this package: the glass
 * chrome is a sibling of the box holding `layerBackdrop`, never a child of it.
 */
@Composable
fun DumEPlayerSheet(
    sharedViewModel: SharedViewModel,
    metrics: DumEMetrics,
    onClose: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val screenData by sharedViewModel.nowPlayingScreenData.collectAsStateWithLifecycle()
    val controller by sharedViewModel.controllerState.collectAsStateWithLifecycle()
    val timeline by sharedViewModel.timeline.collectAsStateWithLifecycle()
    val isLiked by sharedViewModel.likeStatus.collectAsStateWithLifecycle()
    val haptics = LocalHapticFeedback.current

    // The page here is a full-bleed artwork blur under a heavy scrim, so it is dark whatever the
    // theme and whatever the cover looks like — which means the ink is always white.
    val ink = Color.White
    val backdrop = rememberBackdrop(Color.Black)

    BoxWithConstraints(modifier.fillMaxSize()) {
        val insets = WindowInsets.safeDrawing.asPaddingValues()
        // Side-by-side only when there is genuinely room for artwork AND a text column; a short
        // landscape phone gets the stacked layout with smaller artwork instead.
        val isWide = maxWidth > maxHeight && maxWidth >= 720.dp

        val transportHeight = metrics.barHeight * 1.45f
        val playSize = metrics.barHeight * 1.05f
        val skipSize = metrics.barHeight * 0.78f
        val closeHeight = metrics.barHeight * 0.78f

        val chromeBottom =
            insets.calculateBottomPadding() + metrics.gutter + transportHeight + metrics.gutter
        val chromeTop = insets.calculateTopPadding() + metrics.gutter + closeHeight + metrics.gutter

        val artworkSize: Dp =
            if (isWide) {
                (maxHeight - chromeTop - chromeBottom).coerceAtMost(maxWidth * 0.40f)
            } else {
                (maxWidth - metrics.gutter * 2).coerceAtMost(maxHeight * 0.42f)
            }.coerceAtLeast(120.dp)

        // ---- Backdrop source: solid black background for AMOLED screen. ----
        Box(
            Modifier
                .fillMaxSize()
                .layerBackdrop(backdrop)
                // Swallows taps so nothing on the shell underneath can be hit through the player.
                // No haptic here: swallowing a stray tap is not an action worth confirming.
                .clickableNoRipple(onClick = {}, hapticFeedback = false)
                .background(Color.Black),
        ) {

            if (isWide) {
                Row(
                    Modifier
                        .fillMaxSize()
                        .padding(
                            start = metrics.gutter * 1.5f,
                            end = metrics.gutter * 1.5f,
                            top = chromeTop,
                            bottom = chromeBottom,
                        ),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    DumEPlayerArtwork(
                        thumbnail = screenData.thumbnailURL,
                        size = artworkSize,
                        corner = metrics.cardCorner,
                    )
                    Spacer(Modifier.width(metrics.gutter * 2))
                    DumEPlayerInfo(
                        title = screenData.nowPlayingTitle,
                        artist = screenData.artistName,
                        positionMs = timeline.current,
                        durationMs = timeline.total,
                        metrics = metrics,
                        ink = ink,
                        alignment = Alignment.Start,
                        modifier = Modifier.weight(1f),
                        onSeek = { sharedViewModel.onUIEvent(UIEvent.UpdateProgress(it * 100f)) },
                    )
                }
            } else {
                Column(
                    Modifier
                        .fillMaxSize()
                        .padding(
                            start = metrics.gutter,
                            end = metrics.gutter,
                            top = chromeTop,
                            bottom = chromeBottom,
                        ),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center,
                ) {
                    DumEPlayerArtwork(
                        thumbnail = screenData.thumbnailURL,
                        size = artworkSize,
                        corner = metrics.cardCorner,
                    )
                    Spacer(Modifier.height(metrics.gutter * 1.5f))
                    DumEPlayerInfo(
                        title = screenData.nowPlayingTitle,
                        artist = screenData.artistName,
                        positionMs = timeline.current,
                        durationMs = timeline.total,
                        metrics = metrics,
                        ink = ink,
                        alignment = Alignment.CenterHorizontally,
                        modifier = Modifier.fillMaxWidth(),
                        onSeek = { sharedViewModel.onUIEvent(UIEvent.UpdateProgress(it * 100f)) },
                    )
                }
            }
        }

        // ---- Glass chrome. Siblings of the source above. ----

        // A labelled button, not a bare chevron and not a swipe: "how do I get out of here" is the
        // one question this mode must never leave to guesswork.
        DumEGlassButton(
            label = "Close",
            icon = SimpIcons.KeyboardArrowDown,
            backdrop = backdrop,
            metrics = metrics,
            tint = ink,
            modifier =
                Modifier
                    .align(Alignment.TopStart)
                    .padding(
                        start = metrics.gutter,
                        top = insets.calculateTopPadding() + metrics.gutter,
                    ),
            onClick = onClose,
        )

        LiquidGlassIconButton(
            backdrop = backdrop,
            imageVector = if (isLiked) SimpIcons.Favorite else SimpIcons.FavoriteBorder,
            modifier =
                Modifier
                    .align(Alignment.TopEnd)
                    .padding(
                        end = metrics.gutter,
                        top = insets.calculateTopPadding() + metrics.gutter,
                    ).size(closeHeight),
            tint = ink,
            material = GlassMaterial.FloatingButton,
            highlight = Highlight.Plain,
            onClick = {
                haptics.performHapticFeedback(HapticFeedbackType.LongPress)
                sharedViewModel.onUIEvent(UIEvent.ToggleLike)
            },
        )

        LiquidGlassContainer(
            backdrop = backdrop,
            modifier =
                Modifier
                    .align(Alignment.BottomCenter)
                    .padding(
                        start = metrics.gutter,
                        end = metrics.gutter,
                        bottom = insets.calculateBottomPadding() + metrics.gutter,
                    ).widthIn(max = 640.dp)
                    .fillMaxWidth()
                    .height(transportHeight),
            shape = RoundedCornerShape(metrics.barCorner),
            material = GlassMaterial.MiniPlayer,
            highlight = Highlight.Plain,
        ) {
            Row(
                Modifier.fillMaxHeight(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.Center,
            ) {
                DumECircleButton(
                    icon = SimpIcons.SkipPrevious,
                    size = skipSize,
                    ink = ink,
                    enabled = controller.isPreviousAvailable,
                    onClick = { sharedViewModel.onUIEvent(UIEvent.Previous) },
                )
                Spacer(Modifier.width(metrics.gutter))
                DumECircleButton(
                    icon = if (controller.isPlaying) SimpIcons.Pause else SimpIcons.PlayArrow,
                    size = playSize,
                    ink = ink,
                    onClick = { sharedViewModel.onUIEvent(UIEvent.PlayPause) },
                )
                Spacer(Modifier.width(metrics.gutter))
                DumECircleButton(
                    icon = SimpIcons.SkipNext,
                    size = skipSize,
                    ink = ink,
                    enabled = controller.isNextAvailable,
                    onClick = { sharedViewModel.onUIEvent(UIEvent.Next) },
                )
            }
        }
    }
}

@Composable
private fun DumEPlayerArtwork(
    thumbnail: String?,
    size: Dp,
    corner: Dp,
    modifier: Modifier = Modifier,
) {
    AsyncImage(
        model = thumbnail,
        contentDescription = null,
        placeholder = painterResource(Res.drawable.holder),
        error = painterResource(Res.drawable.holder),
        contentScale = ContentScale.Crop,
        modifier =
            modifier
                .size(size)
                .clip(RoundedCornerShape(corner))
                // Hairline edge: dark cover art would otherwise melt into the AMOLED page.
                .border(1.dp, Color.White.copy(alpha = 0.14f), RoundedCornerShape(corner)),
    )
}

/** Title, artist, and the seek bar with plain-language times either side of it. */
@Composable
private fun DumEPlayerInfo(
    title: String,
    artist: String?,
    positionMs: Long,
    durationMs: Long,
    metrics: DumEMetrics,
    ink: Color,
    alignment: Alignment.Horizontal,
    onSeek: (Float) -> Unit,
    modifier: Modifier = Modifier,
) {
    val progress = if (durationMs > 0L) (positionMs.toFloat() / durationMs).coerceIn(0f, 1f) else 0f
    val textAlign = if (alignment == Alignment.CenterHorizontally) TextAlign.Center else TextAlign.Start

    Column(modifier, horizontalAlignment = alignment) {
        Text(
            text = title,
            fontSize = (metrics.tileTitleSize + 12).sp,
            lineHeight = ((metrics.tileTitleSize + 12) * 1.2f).sp,
            fontWeight = FontWeight.Bold,
            fontFamily = fontFamily(),
            color = ink,
            textAlign = textAlign,
            maxLines = 2,
            overflow = TextOverflow.Ellipsis,
        )
        if (!artist.isNullOrBlank()) {
            Spacer(Modifier.height(8.dp))
            Text(
                text = artist,
                fontSize = (metrics.tileSubtitleSize + 4).sp,
                fontFamily = fontFamily(),
                color = ink.copy(alpha = 0.75f),
                textAlign = textAlign,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
        Spacer(Modifier.height(metrics.gutter * 1.5f))
        DumEBigSlider(
            value = progress,
            onValueChange = onSeek,
            modifier = Modifier.fillMaxWidth(),
            height = metrics.rowHeight * 0.32f,
            ink = ink,
        )
        Spacer(Modifier.height(10.dp))
        Row(
            Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
        ) {
            Text(
                text = formatDumETime(positionMs),
                fontSize = metrics.tileSubtitleSize.sp,
                fontWeight = FontWeight.Medium,
                fontFamily = fontFamily(),
                color = ink.copy(alpha = 0.75f),
            )
            Text(
                text = formatDumETime(durationMs),
                fontSize = metrics.tileSubtitleSize.sp,
                fontWeight = FontWeight.Medium,
                fontFamily = fontFamily(),
                color = ink.copy(alpha = 0.75f),
            )
        }
    }
}
