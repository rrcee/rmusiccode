package com.maxrave.simpmusic.ui.screen.dume

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.maxrave.simpmusic.viewModel.DumEViewModel

/**
 * Listen Again — the recently played list as a grid of big artwork cards. The whole point of the
 * tab is that the songs someone already knows are the ones they will want again, so it is the
 * landing screen and needs no search, no filter and no sorting.
 */
@Composable
fun DumEListenAgainScreen(
    viewModel: DumEViewModel,
    metrics: DumEMetrics,
    playingVideoId: String?,
    contentTop: Dp,
    contentBottom: Dp,
    onOpenPlayer: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val songs by viewModel.listenAgain.collectAsStateWithLifecycle()

    LazyVerticalGrid(
        columns = GridCells.Fixed(metrics.columns),
        modifier = modifier.fillMaxSize(),
        contentPadding =
            PaddingValues(
                start = metrics.gutter,
                end = metrics.gutter,
                top = contentTop,
                bottom = contentBottom,
            ),
        horizontalArrangement = Arrangement.spacedBy(metrics.gutter),
        verticalArrangement = Arrangement.spacedBy(metrics.gutter),
    ) {
        item(span = { GridItemSpan(maxLineSpan) }) {
            DumEScreenTitle(
                text = "Listen Again",
                metrics = metrics,
                modifier = Modifier.padding(bottom = metrics.gutter / 2),
            )
        }
        if (songs.isEmpty()) {
            item(span = { GridItemSpan(maxLineSpan) }) {
                DumEEmptyState(
                    title = "Nothing here yet",
                    message =
                        "Play a song and it will show up here, so you can play it again with one tap.",
                    metrics = metrics,
                    modifier = Modifier.fillMaxWidth(),
                )
            }
        }
        items(songs, key = { it.videoId }) { song ->
            DumESongTile(
                title = song.title,
                subtitle = song.artistName?.joinToString(", "),
                thumbnail = song.thumbnails,
                metrics = metrics,
                isPlaying = song.videoId == playingVideoId,
                onClick = {
                    viewModel.playSong(song)
                    onOpenPlayer()
                },
            )
        }
    }
}
