package com.maxrave.simpmusic.ui.screen.dume

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.kyant.backdrop.highlight.Highlight
import com.maxrave.simpmusic.expect.ui.PlatformBackdrop
import com.maxrave.simpmusic.ui.component.GlassMaterial
import com.maxrave.simpmusic.ui.component.LiquidGlassContainer
import com.maxrave.simpmusic.ui.icon.Close
import com.maxrave.simpmusic.ui.icon.Search
import com.maxrave.simpmusic.ui.icon.SimpIcons
import com.maxrave.simpmusic.ui.theme.fontFamily
import com.maxrave.simpmusic.viewModel.DumESearchState
import com.maxrave.simpmusic.viewModel.DumEViewModel

/**
 * The search field. It lives in the shell's chrome rather than in the list, both so it stays put
 * while results scroll and so it can be real glass — a refracting surface has to be a sibling of
 * the backdrop source, never inside it.
 */
@Composable
fun DumESearchField(
    viewModel: DumEViewModel,
    backdrop: PlatformBackdrop,
    metrics: DumEMetrics,
    ink: Color,
    modifier: Modifier = Modifier,
) {
    val query by viewModel.searchQuery.collectAsStateWithLifecycle()

    LiquidGlassContainer(
        backdrop = backdrop,
        modifier = modifier.height(metrics.barHeight * 0.9f),
        shape = RoundedCornerShape(metrics.barCorner),
        material = GlassMaterial.HeaderButton,
        highlight = Highlight.Plain,
    ) {
        Row(
            Modifier.fillMaxSize().padding(horizontal = 24.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Icon(
                SimpIcons.Search,
                contentDescription = null,
                tint = ink.copy(alpha = 0.75f),
                modifier = Modifier.size(metrics.tabIcon),
            )
            Spacer(Modifier.width(16.dp))
            BasicTextField(
                value = query,
                onValueChange = viewModel::onSearchQueryChange,
                modifier = Modifier.weight(1f),
                singleLine = true,
                textStyle =
                    TextStyle(
                        color = ink,
                        fontSize = (metrics.tileTitleSize + 2).sp,
                        fontWeight = FontWeight.SemiBold,
                        fontFamily = fontFamily(),
                    ),
                cursorBrush = SolidColor(ink),
                keyboardOptions = KeyboardOptions(imeAction = ImeAction.Search),
                keyboardActions = KeyboardActions(onSearch = { viewModel.search() }),
                decorationBox = { inner ->
                    Box(contentAlignment = Alignment.CenterStart) {
                        if (query.isEmpty()) {
                            Text(
                                text = "Type a song name",
                                fontSize = (metrics.tileTitleSize + 2).sp,
                                fontWeight = FontWeight.Medium,
                                fontFamily = fontFamily(),
                                color = ink.copy(alpha = 0.5f),
                                maxLines = 1,
                            )
                        }
                        inner()
                    }
                },
            )
            if (query.isNotEmpty()) {
                Spacer(Modifier.width(12.dp))
                DumECircleButton(
                    icon = SimpIcons.Close,
                    size = metrics.barHeight * 0.9f - 28.dp,
                    ink = ink,
                    onClick = viewModel::clearSearch,
                )
            }
            Spacer(Modifier.width(10.dp))
            DumECircleButton(
                icon = SimpIcons.Search,
                size = metrics.barHeight * 0.9f - 22.dp,
                ink = ink,
                enabled = query.isNotBlank(),
                onClick = { viewModel.search() },
            )
        }
    }
}

/**
 * Search results. Songs only — no albums, artists, playlists or video tab — because "pick the song
 * you wanted" is the entire job here and result-type tabs are the first thing to confuse someone.
 */
@Composable
fun DumESearchScreen(
    viewModel: DumEViewModel,
    metrics: DumEMetrics,
    playingVideoId: String?,
    contentTop: Dp,
    contentBottom: Dp,
    onOpenPlayer: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val state by viewModel.searchState.collectAsStateWithLifecycle()

    LazyColumn(
        modifier = modifier.fillMaxSize(),
        contentPadding =
            PaddingValues(
                start = metrics.gutter,
                end = metrics.gutter,
                top = contentTop,
                bottom = contentBottom,
            ),
        verticalArrangement = Arrangement.spacedBy(metrics.gutter * 0.6f),
    ) {
        when (val s = state) {
            DumESearchState.Idle ->
                item {
                    DumEEmptyState(
                        title = "Look for a song",
                        message = "Type a name in the box above, then tap the round search button.",
                        metrics = metrics,
                    )
                }

            DumESearchState.Loading ->
                item {
                    Box(
                        Modifier.fillMaxWidth().padding(top = 60.dp),
                        contentAlignment = Alignment.Center,
                    ) {
                        CircularProgressIndicator(
                            modifier = Modifier.size(metrics.tabIcon * 1.6f),
                            color = dumETextColor(),
                        )
                    }
                }

            is DumESearchState.Error ->
                item {
                    DumEEmptyState(
                        title = "That did not work",
                        message = s.message + "\n\nCheck the internet connection and try again.",
                        metrics = metrics,
                    )
                }

            is DumESearchState.Results -> {
                if (s.songs.isEmpty()) {
                    item {
                        DumEEmptyState(
                            title = "No songs found",
                            message = "Try a shorter name, or check the spelling.",
                            metrics = metrics,
                        )
                    }
                }
                items(s.songs, key = { it.videoId }) { result ->
                    DumESongRow(
                        title = result.title ?: "Unknown",
                        subtitle = result.artists?.joinToString(", ") { it.name },
                        thumbnail = result.thumbnails?.lastOrNull()?.url,
                        metrics = metrics,
                        isPlaying = result.videoId == playingVideoId,
                        onClick = {
                            viewModel.playSearchResult(result)
                            onOpenPlayer()
                        },
                    )
                }
            }
        }
    }
}
