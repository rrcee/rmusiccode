package com.maxrave.simpmusic.ui.screen.dume

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.background
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
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import coil3.compose.AsyncImage
import com.kyant.backdrop.highlight.Highlight
import com.maxrave.simpmusic.expect.ui.PlatformBackdrop
import com.maxrave.simpmusic.expect.ui.layerBackdrop
import com.maxrave.simpmusic.expect.ui.rememberBackdrop
import com.maxrave.simpmusic.ui.component.GlassMaterial
import com.maxrave.simpmusic.ui.component.LiquidGlassContainer
import com.maxrave.simpmusic.ui.icon.Download
import com.maxrave.simpmusic.ui.icon.History
import com.maxrave.simpmusic.ui.icon.Pause
import com.maxrave.simpmusic.ui.icon.PlayArrow
import com.maxrave.simpmusic.ui.icon.Search
import com.maxrave.simpmusic.ui.icon.Settings
import com.maxrave.simpmusic.ui.icon.SimpIcons
import com.maxrave.simpmusic.ui.icon.SkipNext
import com.maxrave.simpmusic.ui.theme.fontFamily
import com.maxrave.simpmusic.viewModel.DumEViewModel
import com.maxrave.simpmusic.viewModel.SharedViewModel
import com.maxrave.simpmusic.viewModel.UIEvent
import org.jetbrains.compose.resources.painterResource
import org.koin.compose.viewmodel.koinViewModel
import simpmusic.composeapp.generated.resources.Res
import simpmusic.composeapp.generated.resources.holder

/** The only four places Dum-E mode can go. */
enum class DumETab(
    val label: String,
) {
    ListenAgain("Listen Again"),
    Search("Search"),
    Downloads("Downloads"),
    Settings("Settings"),
}

private val DumETab.icon: ImageVector
    @Composable
    get() =
        when (this) {
            DumETab.ListenAgain -> SimpIcons.History
            DumETab.Search -> SimpIcons.Search
            DumETab.Downloads -> SimpIcons.Download
            DumETab.Settings -> SimpIcons.Settings
        }

/**
 * Dum-E mode's whole shell. It replaces the normal Scaffold — no nav host, no bottom sheets, no
 * overflow menus — so there is literally nowhere to get lost. Tabs are plain state, and the only
 * overlay is the player.
 *
 * Layout note that must not be undone: everything that draws real liquid glass (the tab bar, the
 * rail, the search field, the now-playing bar) is a **sibling** of the box carrying
 * `layerBackdrop`, never a child of it. A refracting surface nested inside its own backdrop source
 * is a render-feedback loop and takes the RuntimeShader down with it.
 */
@Composable
fun DumEShell(
    sharedViewModel: SharedViewModel,
    modifier: Modifier = Modifier,
) {
    val viewModel: DumEViewModel = koinViewModel()

    BoxWithConstraints(modifier.fillMaxSize()) {
        val metrics = remember(maxWidth) { DumEMetrics.forWidth(maxWidth) }
        // AMOLED, unconditionally: pure black page and white ink no matter what the app theme says.
        // Following the theme here made the mode half-light (black page, dark glass ink) whenever
        // the user ran the light theme, which read as broken rather than themed.
        val backdrop = rememberBackdrop(Color.Black)
        val glassInk = Color.White

        var tab by rememberSaveable { mutableStateOf(DumETab.ListenAgain) }
        var showPlayer by rememberSaveable { mutableStateOf(false) }

        val insets = WindowInsets.safeDrawing.asPaddingValues()
        val track by sharedViewModel.nowPlayingState.collectAsStateWithLifecycle()
        val screenData by sharedViewModel.nowPlayingScreenData.collectAsStateWithLifecycle()
        val controller by sharedViewModel.controllerState.collectAsStateWithLifecycle()
        val playingVideoId = track?.mediaItem?.mediaId
        val hasNowPlaying = track != null

        // How much of each edge the floating glass chrome covers. Content is inset by exactly this
        // much so nothing important ever hides underneath it.
        val railInset = if (metrics.useRail) metrics.railWidth + metrics.gutter else 0.dp
        val tabBarSpace = if (metrics.useRail) 0.dp else metrics.barHeight + metrics.gutter
        val nowPlayingSpace = if (hasNowPlaying) metrics.nowPlayingHeight + metrics.gutter else 0.dp
        val searchBarSpace =
            if (tab == DumETab.Search) metrics.barHeight * 0.9f + metrics.gutter else 0.dp

        val contentTop = insets.calculateTopPadding() + metrics.gutter + searchBarSpace
        val contentBottom =
            insets.calculateBottomPadding() + metrics.gutter + tabBarSpace + nowPlayingSpace

        // ---- The backdrop source. Page background plus everything that scrolls. ----
        Box(
            Modifier
                .fillMaxSize()
                .layerBackdrop(backdrop),
        ) {
            DumEBackground()
            Box(Modifier.fillMaxSize().padding(start = railInset)) {
                when (tab) {
                    DumETab.ListenAgain ->
                        DumEListenAgainScreen(
                            viewModel = viewModel,
                            metrics = metrics,
                            playingVideoId = playingVideoId,
                            contentTop = contentTop,
                            contentBottom = contentBottom,
                            onOpenPlayer = { showPlayer = true },
                        )

                    DumETab.Search ->
                        DumESearchScreen(
                            viewModel = viewModel,
                            metrics = metrics,
                            playingVideoId = playingVideoId,
                            contentTop = contentTop,
                            contentBottom = contentBottom,
                            onOpenPlayer = { showPlayer = true },
                        )

                    DumETab.Downloads ->
                        DumEDownloadsScreen(
                            viewModel = viewModel,
                            metrics = metrics,
                            playingVideoId = playingVideoId,
                            contentTop = contentTop,
                            contentBottom = contentBottom,
                            onOpenPlayer = { showPlayer = true },
                        )

                    DumETab.Settings ->
                        DumESettingsScreen(
                            viewModel = viewModel,
                            sharedViewModel = sharedViewModel,
                            metrics = metrics,
                            contentTop = contentTop,
                            contentBottom = contentBottom,
                        )
                }
            }
        }

        // ---- Glass chrome. Siblings of the source, drawn over it. ----
        if (tab == DumETab.Search) {
            DumESearchField(
                viewModel = viewModel,
                backdrop = backdrop,
                metrics = metrics,
                ink = glassInk,
                modifier =
                    Modifier
                        .align(Alignment.TopStart)
                        .fillMaxWidth()
                        .padding(
                            start = railInset + metrics.gutter,
                            end = metrics.gutter,
                            top = insets.calculateTopPadding() + metrics.gutter,
                        ),
            )
        }

        AnimatedVisibility(
            visible = hasNowPlaying,
            enter = fadeIn() + slideInVertically { it },
            exit = fadeOut() + slideOutVertically { it },
            modifier =
                Modifier
                    .align(Alignment.BottomStart)
                    .padding(
                        start = railInset + metrics.gutter,
                        end = metrics.gutter,
                        bottom = insets.calculateBottomPadding() + metrics.gutter + tabBarSpace,
                    ),
        ) {
            DumENowPlayingBar(
                title = screenData.nowPlayingTitle,
                artist = screenData.artistName,
                thumbnail = screenData.thumbnailURL,
                isPlaying = controller.isPlaying,
                isNextAvailable = controller.isNextAvailable,
                backdrop = backdrop,
                metrics = metrics,
                ink = glassInk,
                onPlayPause = { sharedViewModel.onUIEvent(UIEvent.PlayPause) },
                onNext = { sharedViewModel.onUIEvent(UIEvent.Next) },
                onExpand = { showPlayer = true },
            )
        }

        if (metrics.useRail) {
            DumERail(
                selected = tab,
                backdrop = backdrop,
                metrics = metrics,
                ink = glassInk,
                modifier =
                    Modifier
                        .align(Alignment.CenterStart)
                        .padding(
                            start = metrics.gutter,
                            top = insets.calculateTopPadding() + metrics.gutter,
                            bottom = insets.calculateBottomPadding() + metrics.gutter,
                        ),
                onSelect = { tab = it },
            )
        } else {
            DumETabBar(
                selected = tab,
                backdrop = backdrop,
                metrics = metrics,
                ink = glassInk,
                modifier =
                    Modifier
                        .align(Alignment.BottomCenter)
                        .fillMaxWidth()
                        .padding(
                            start = metrics.gutter,
                            end = metrics.gutter,
                            bottom = insets.calculateBottomPadding() + metrics.gutter,
                        ),
                onSelect = { tab = it },
            )
        }

        // ---- The player. Its own screen, its own backdrop. ----
        if (showPlayer && hasNowPlaying) {
            DumEPlayerSheet(
                sharedViewModel = sharedViewModel,
                metrics = metrics,
                onClose = { showPlayer = false },
            )
        }
    }
}

/** Bottom navigation for phones and portrait tablets: four huge glass tabs, always labelled. */
@Composable
private fun DumETabBar(
    selected: DumETab,
    backdrop: PlatformBackdrop,
    metrics: DumEMetrics,
    ink: Color,
    modifier: Modifier = Modifier,
    onSelect: (DumETab) -> Unit,
) {
    LiquidGlassContainer(
        backdrop = backdrop,
        modifier = modifier.height(metrics.barHeight),
        shape = RoundedCornerShape(metrics.barCorner),
        material = GlassMaterial.NavigationBar,
        highlight = Highlight.Plain,
    ) {
        Row(
            Modifier.fillMaxSize().padding(horizontal = 8.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            DumETab.entries.forEach { entry ->
                DumETabItem(
                    tab = entry,
                    isSelected = entry == selected,
                    metrics = metrics,
                    ink = ink,
                    modifier = Modifier.weight(1f).fillMaxHeight(),
                    onClick = { onSelect(entry) },
                )
            }
        }
    }
}

@Composable
private fun DumETabItem(
    tab: DumETab,
    isSelected: Boolean,
    metrics: DumEMetrics,
    ink: Color,
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
) {
    Box(
        modifier
            .padding(6.dp)
            .clip(RoundedCornerShape(metrics.barCorner - 12.dp))
            // The selected tab is a filled pill rather than a colour change: a tint alone is not a
            // reliable signal for anyone with reduced colour vision.
            .then(
                if (isSelected) {
                    Modifier.background(ink.copy(alpha = 0.18f))
                } else {
                    Modifier
                },
            ).clickableNoRipple(onClick),
        contentAlignment = Alignment.Center,
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
        ) {
            Icon(
                tab.icon,
                contentDescription = tab.label,
                tint = if (isSelected) ink else ink.copy(alpha = 0.65f),
                modifier = Modifier.size(metrics.tabIcon),
            )
            Spacer(Modifier.height(4.dp))
            Text(
                text = tab.label,
                fontSize = metrics.tabLabelSize.sp,
                fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                fontFamily = fontFamily(),
                color = if (isSelected) ink else ink.copy(alpha = 0.65f),
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

/** Side navigation for landscape tablets and desktop windows — the wide-screen half of the brief. */
@Composable
private fun DumERail(
    selected: DumETab,
    backdrop: PlatformBackdrop,
    metrics: DumEMetrics,
    ink: Color,
    modifier: Modifier = Modifier,
    onSelect: (DumETab) -> Unit,
) {
    LiquidGlassContainer(
        backdrop = backdrop,
        modifier = modifier.width(metrics.railWidth).fillMaxHeight(),
        shape = RoundedCornerShape(metrics.barCorner),
        material = GlassMaterial.NavigationBar,
        highlight = Highlight.Plain,
    ) {
        Column(
            Modifier.fillMaxSize().padding(14.dp),
            verticalArrangement = Arrangement.Center,
        ) {
            DumETab.entries.forEach { entry ->
                val isSelected = entry == selected
                Row(
                    Modifier
                        .fillMaxWidth()
                        .height(metrics.barHeight * 0.82f)
                        .clip(RoundedCornerShape(metrics.barCorner - 12.dp))
                        .then(
                            if (isSelected) Modifier.background(ink.copy(alpha = 0.18f)) else Modifier,
                        ).clickableNoRipple(onClick = { onSelect(entry) })
                        .padding(horizontal = 18.dp),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Icon(
                        entry.icon,
                        contentDescription = entry.label,
                        tint = if (isSelected) ink else ink.copy(alpha = 0.65f),
                        modifier = Modifier.size(metrics.tabIcon),
                    )
                    Spacer(Modifier.width(14.dp))
                    Text(
                        text = entry.label,
                        fontSize = metrics.tabLabelSize.sp,
                        fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                        fontFamily = fontFamily(),
                        color = if (isSelected) ink else ink.copy(alpha = 0.65f),
                        maxLines = 2,
                        overflow = TextOverflow.Ellipsis,
                    )
                }
                Spacer(Modifier.height(10.dp))
            }
        }
    }
}

/**
 * The mini player. Tapping anywhere but the two buttons opens the full player, because "the thing
 * at the bottom is how you get back to the song" is the one gesture this mode has to teach.
 */
@Composable
private fun DumENowPlayingBar(
    title: String,
    artist: String?,
    thumbnail: String?,
    isPlaying: Boolean,
    isNextAvailable: Boolean,
    backdrop: PlatformBackdrop,
    metrics: DumEMetrics,
    ink: Color,
    onPlayPause: () -> Unit,
    onNext: () -> Unit,
    onExpand: () -> Unit,
    modifier: Modifier = Modifier,
) {
    LiquidGlassContainer(
        backdrop = backdrop,
        modifier =
            modifier
                .fillMaxWidth()
                .height(metrics.nowPlayingHeight),
        shape = RoundedCornerShape(metrics.barCorner),
        material = GlassMaterial.MiniPlayer,
        highlight = Highlight.Plain,
    ) {
        Row(
            Modifier
                .fillMaxSize()
                .clickableNoRipple(onExpand)
                .padding(horizontal = 14.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            AsyncImage(
                model = thumbnail,
                contentDescription = null,
                placeholder = painterResource(Res.drawable.holder),
                error = painterResource(Res.drawable.holder),
                modifier =
                    Modifier
                        .size(metrics.nowPlayingHeight - 28.dp)
                        .clip(RoundedCornerShape(metrics.cardCorner / 2)),
            )
            Spacer(Modifier.width(16.dp))
            Column(Modifier.weight(1f)) {
                Text(
                    text = title,
                    fontSize = metrics.tileTitleSize.sp,
                    fontWeight = FontWeight.Bold,
                    fontFamily = fontFamily(),
                    color = ink,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
                if (!artist.isNullOrBlank()) {
                    Text(
                        text = artist,
                        fontSize = metrics.tileSubtitleSize.sp,
                        fontFamily = fontFamily(),
                        color = ink.copy(alpha = 0.7f),
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                    )
                }
            }
            Spacer(Modifier.width(10.dp))
            DumECircleButton(
                icon = if (isPlaying) SimpIcons.Pause else SimpIcons.PlayArrow,
                size = metrics.nowPlayingHeight - 36.dp,
                ink = ink,
                onClick = onPlayPause,
            )
            if (isNextAvailable) {
                Spacer(Modifier.width(10.dp))
                DumECircleButton(
                    icon = SimpIcons.SkipNext,
                    size = metrics.nowPlayingHeight - 46.dp,
                    ink = ink,
                    onClick = onNext,
                )
            }
        }
    }
}

/**
 * A round button drawn on a surface that is already glass. Flat on purpose — stacking a second
 * refracting surface on the first is the nested-backdrop crash.
 */
@Composable
fun DumECircleButton(
    icon: ImageVector,
    size: Dp,
    ink: Color,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    onClick: () -> Unit,
) {
    Box(
        modifier
            .size(size)
            .clip(CircleShape)
            .background(ink.copy(alpha = if (enabled) 0.16f else 0.06f))
            .clickableNoRipple(onClick = { if (enabled) onClick() }),
        contentAlignment = Alignment.Center,
    ) {
        Icon(
            icon,
            contentDescription = null,
            tint = if (enabled) ink else ink.copy(alpha = 0.35f),
            modifier = Modifier.size(size * 0.52f),
        )
    }
}
