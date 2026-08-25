package com.maxrave.simpmusic.ui.component

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import coil3.compose.AsyncImage
import com.maxrave.simpmusic.ui.theme.LocalIsDarkTheme
import com.maxrave.simpmusic.ui.theme.typo

/**
 * A "Moods & Genres" browse category tile redesigned to match Apple Music's spatial glass aesthetics.
 */
@Composable
fun MoodCategoryCard(
    title: String,
    artworkUrl: String?,
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
) {
    val isDark = LocalIsDarkTheme.current
    val containerColor = if (isDark) {
        Color(0xFF1C1C1E).copy(alpha = 0.5f)
    } else {
        Color(0xFFF2F2F7).copy(alpha = 0.6f)
    }
    val borderColor = if (isDark) {
        Color.White.copy(alpha = 0.08f)
    } else {
        Color.Black.copy(alpha = 0.06f)
    }
    val textColor = if (isDark) Color.White else Color.Black

    Box(
        modifier =
            modifier
                .fillMaxWidth()
                .aspectRatio(2f)
                .clip(RoundedCornerShape(12.dp))
                .background(containerColor)
                .border(
                    width = 1.dp,
                    color = borderColor,
                    shape = RoundedCornerShape(12.dp)
                )
                .clickable(onClick = onClick),
    ) {
        if (artworkUrl != null) {
            AsyncImage(
                model = artworkUrl,
                contentDescription = null,
                contentScale = ContentScale.Crop,
                modifier =
                    Modifier
                        .align(Alignment.BottomEnd)
                        .padding(bottom = 10.dp, end = 10.dp)
                        .size(44.dp)
                        .clip(RoundedCornerShape(6.dp))
                        .border(1.dp, Color(0xFFFA2D48).copy(alpha = 0.3f), RoundedCornerShape(6.dp)),
            )
        }
        Text(
            text = title,
            style = typo().titleMedium,
            color = textColor,
            maxLines = 2,
            overflow = TextOverflow.Ellipsis,
            modifier =
                Modifier
                    .align(Alignment.TopStart)
                    .padding(start = 14.dp, top = 14.dp, bottom = 14.dp, end = 60.dp),
        )
    }
}
