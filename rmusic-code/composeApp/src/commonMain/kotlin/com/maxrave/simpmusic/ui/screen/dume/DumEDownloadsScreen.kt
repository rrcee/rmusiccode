package com.maxrave.simpmusic.ui.screen.dume

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.maxrave.simpmusic.viewModel.DumEViewModel

/**
 * Downloads — the songs that play with no internet. A finite list, so tapping one plays the whole
 * list from there rather than starting a radio; that way the music keeps going without anybody
 * having to find a "play all" button.
 */
@Composable
fun DumEDownloadsScreen(
    viewModel: DumEViewModel,
    metrics: DumEMetrics,
    playingVideoId: String?,
    contentTop: Dp,
    contentBottom: Dp,
    onOpenPlayer: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val songs by viewModel.downloads.collectAsStateWithLifecycle()

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
        item {
            DumEScreenTitle(
                text = "Downloads",
                metrics = metrics,
                modifier = Modifier.padding(bottom = metrics.gutter / 2),
            )
        }
        if (songs.isEmpty()) {
            item {
                DumEEmptyState(
                    title = "No downloads yet",
                    message =
                        "Downloaded songs play without internet. They will appear here once " +
                            "somebody downloads them for you.",
                    metrics = metrics,
                )
            }
        }
        itemsIndexed(songs, key = { _, song -> song.videoId }) { index, song ->
            DumESongRow(
                title = song.title,
                subtitle = song.artistName?.joinToString(", "),
                thumbnail = song.thumbnails,
                metrics = metrics,
                isPlaying = song.videoId == playingVideoId,
                onClick = {
                    viewModel.playAll(songs, index, label = "Downloads")
                    onOpenPlayer()
                },
            )
        }
    }
}
