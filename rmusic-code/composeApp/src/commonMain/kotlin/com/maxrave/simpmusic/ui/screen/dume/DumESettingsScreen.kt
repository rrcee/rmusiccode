package com.maxrave.simpmusic.ui.screen.dume

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
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
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.maxrave.domain.manager.DataStoreManager
import com.maxrave.simpmusic.ui.icon.Close
import com.maxrave.simpmusic.ui.icon.DarkMode
import com.maxrave.simpmusic.ui.icon.LightMode
import com.maxrave.simpmusic.ui.icon.SimpIcons
import com.maxrave.simpmusic.ui.icon.VolumeUp
import com.maxrave.simpmusic.ui.theme.fontFamily
import com.maxrave.simpmusic.viewModel.DumEViewModel
import com.maxrave.simpmusic.viewModel.SharedViewModel
import com.maxrave.simpmusic.viewModel.UIEvent

/**
 * Settings — deliberately three things and nothing else: volume, light or dark, and the way out.
 * Everything else in the app's real Settings screen (accounts, codecs, caches, backups) is exactly
 * what this mode exists to hide, so none of it is reachable from here.
 */
@Composable
fun DumESettingsScreen(
    viewModel: DumEViewModel,
    sharedViewModel: SharedViewModel,
    metrics: DumEMetrics,
    contentTop: Dp,
    contentBottom: Dp,
    modifier: Modifier = Modifier,
) {
    val themeMode by
        sharedViewModel.getThemeMode().collectAsStateWithLifecycle(DataStoreManager.THEME_MODE_SYSTEM)
    val controller by sharedViewModel.controllerState.collectAsStateWithLifecycle()
    val ink = dumETextColor()

    LazyColumn(
        modifier = modifier.fillMaxSize(),
        contentPadding =
            PaddingValues(
                start = metrics.gutter,
                end = metrics.gutter,
                top = contentTop,
                bottom = contentBottom,
            ),
        verticalArrangement = Arrangement.spacedBy(metrics.gutter),
    ) {
        item {
            DumEScreenTitle(
                text = "Settings",
                metrics = metrics,
                modifier = Modifier.padding(bottom = metrics.gutter / 2),
            )
        }

        item {
            DumESettingCard(metrics = metrics) {
                DumESettingHeading("Volume", SimpIcons.VolumeUp, metrics, ink)
                Spacer(Modifier.height(metrics.gutter / 2))
                DumEBigSlider(
                    value = controller.volume.coerceIn(0f, 1f),
                    onValueChange = { sharedViewModel.onUIEvent(UIEvent.UpdateVolume(it)) },
                    modifier = Modifier.fillMaxWidth(),
                    height = metrics.rowHeight * 0.42f,
                    ink = ink,
                )
                Spacer(Modifier.height(10.dp))
                Text(
                    text = "${(controller.volume.coerceIn(0f, 1f) * 100).toInt()}%",
                    fontSize = metrics.tileSubtitleSize.sp,
                    fontFamily = fontFamily(),
                    color = dumEDimTextColor(),
                )
            }
        }

        item {
            DumESettingCard(metrics = metrics) {
                DumESettingHeading("Dark or light", SimpIcons.LightMode, metrics, ink)
                Spacer(Modifier.height(metrics.gutter / 2))
                Row(horizontalArrangement = Arrangement.spacedBy(metrics.gutter / 2)) {
                    DumEChoiceButton(
                        label = "Dark",
                        icon = SimpIcons.DarkMode,
                        isSelected = themeMode == DataStoreManager.THEME_MODE_DARK,
                        metrics = metrics,
                        ink = ink,
                        modifier = Modifier.weight(1f),
                        onClick = {
                            sharedViewModel.setThemeMode(DataStoreManager.THEME_MODE_DARK)
                        },
                    )
                    DumEChoiceButton(
                        label = "Light",
                        icon = SimpIcons.LightMode,
                        isSelected = themeMode == DataStoreManager.THEME_MODE_LIGHT,
                        metrics = metrics,
                        ink = ink,
                        modifier = Modifier.weight(1f),
                        onClick = {
                            sharedViewModel.setThemeMode(DataStoreManager.THEME_MODE_LIGHT)
                        },
                    )
                }
            }
        }

        item {
            DumESettingCard(metrics = metrics, highlighted = true) {
                DumESettingHeading("Leave Simple Mode", SimpIcons.Close, metrics, ink)
                Spacer(Modifier.height(6.dp))
                Text(
                    text =
                        "This turns Simple Mode off and brings back the full app, with the library, " +
                            "playlists and every setting. Simple Mode can be turned back on from " +
                            "Settings at any time.",
                    fontSize = metrics.tileSubtitleSize.sp,
                    lineHeight = (metrics.tileSubtitleSize * 1.5f).sp,
                    fontFamily = fontFamily(),
                    color = dumEDimTextColor(),
                )
                Spacer(Modifier.height(metrics.gutter))
                DumEChoiceButton(
                    label = "Turn off Simple Mode",
                    icon = SimpIcons.Close,
                    isSelected = true,
                    metrics = metrics,
                    ink = ink,
                    modifier = Modifier.fillMaxWidth(),
                    onClick = viewModel::exitDumEMode,
                )
            }
        }
    }
}

@Composable
private fun DumESettingCard(
    metrics: DumEMetrics,
    highlighted: Boolean = false,
    content: @Composable () -> Unit,
) {
    DumEFrostedSurface(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(metrics.cardCorner),
        highlighted = highlighted,
    ) {
        Column(Modifier.padding(metrics.gutter)) { content() }
    }
}

@Composable
private fun DumESettingHeading(
    text: String,
    icon: ImageVector,
    metrics: DumEMetrics,
    ink: Color,
) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(
            icon,
            contentDescription = null,
            tint = ink,
            modifier = Modifier.size(metrics.tabIcon),
        )
        Spacer(Modifier.width(14.dp))
        Text(
            text = text,
            fontSize = (metrics.tileTitleSize + 4).sp,
            fontWeight = FontWeight.Bold,
            fontFamily = fontFamily(),
            color = ink,
        )
    }
}

/** A big flat pill. Flat, not glass: it sits inside a card, which is inside the backdrop source. */
@Composable
private fun DumEChoiceButton(
    label: String,
    icon: ImageVector,
    isSelected: Boolean,
    metrics: DumEMetrics,
    ink: Color,
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
) {
    Box(
        modifier
            .height(metrics.rowHeight * 0.72f)
            .clip(RoundedCornerShape(metrics.barCorner))
            .background(ink.copy(alpha = if (isSelected) 0.22f else 0.10f))
            .clickableNoRipple(onClick),
        contentAlignment = Alignment.Center,
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Icon(
                icon,
                contentDescription = null,
                tint = ink,
                modifier = Modifier.size(metrics.tabIcon * 0.85f),
            )
            Spacer(Modifier.width(12.dp))
            Text(
                text = label,
                fontSize = (metrics.tabLabelSize + 3).sp,
                fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                fontFamily = fontFamily(),
                color = ink,
                maxLines = 1,
            )
        }
    }
}
