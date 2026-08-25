package com.maxrave.simpmusic.ui.component

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.maxrave.simpmusic.ui.icon.Downloading
import com.maxrave.simpmusic.ui.icon.Favorite
import com.maxrave.simpmusic.ui.icon.Insights
import com.maxrave.simpmusic.ui.icon.QueueMusic
import com.maxrave.simpmusic.ui.icon.SimpIcons
import com.maxrave.simpmusic.ui.icon.TrendingUp
import com.maxrave.simpmusic.ui.icon.PeopleAlt
import com.maxrave.simpmusic.ui.navigation.destination.library.LibraryDynamicPlaylistDestination
import com.maxrave.simpmusic.ui.screen.library.LibraryDynamicPlaylistType
import com.maxrave.simpmusic.ui.theme.typo

@Composable
fun LibraryTilingBox(navController: NavController) {
    val items = listOf(
        InsetListItem("Playlists", SimpIcons.QueueMusic) {
            navController.navigate(
                LibraryDynamicPlaylistDestination(
                    type = LibraryDynamicPlaylistType.Favorite.toStringParams(),
                ),
            )
        },
        InsetListItem("Artists", SimpIcons.PeopleAlt) {
            navController.navigate(
                LibraryDynamicPlaylistDestination(
                    type = LibraryDynamicPlaylistType.Followed.toStringParams(),
                ),
            )
        },
        InsetListItem("Most Played", SimpIcons.TrendingUp) {
            navController.navigate(
                LibraryDynamicPlaylistDestination(
                    type = LibraryDynamicPlaylistType.MostPlayed.toStringParams(),
                ),
            )
        },
        InsetListItem("Downloaded", SimpIcons.Downloading) {
            navController.navigate(
                LibraryDynamicPlaylistDestination(
                    type = LibraryDynamicPlaylistType.Downloaded.toStringParams(),
                ),
            )
        }
    )

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 8.dp)
            .clip(RoundedCornerShape(12.dp))
            .background(MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.4f))
    ) {
        items.forEachIndexed { index, item ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clickable { item.onClick() }
                    .padding(horizontal = 16.dp, vertical = 14.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(
                        imageVector = item.icon,
                        contentDescription = item.title,
                        tint = Color(0xFFFA2D48), // iOS vibrant pink/red accent
                        modifier = Modifier.size(24.dp)
                    )
                    Spacer(modifier = Modifier.width(16.dp))
                    Text(
                        text = item.title,
                        style = typo().bodyLarge.copy(fontSize = 17.sp),
                        color = MaterialTheme.colorScheme.onSurface
                    )
                }
                Text(
                    text = ">",
                    style = typo().bodyLarge.copy(color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.4f)),
                    fontSize = 17.sp
                )
            }
            if (index < items.size - 1) {
                HorizontalDivider(
                    modifier = Modifier.padding(start = 56.dp), // indent divider line to align with text
                    thickness = 0.5.dp,
                    color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.1f)
                )
            }
        }
    }
}

private data class InsetListItem(
    val title: String,
    val icon: ImageVector,
    val onClick: () -> Unit
)