package com.maxrave.simpmusic.ui.component

import androidx.compose.animation.Crossfade
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Icon
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.maxrave.domain.mediaservice.handler.ControlState
import com.maxrave.domain.mediaservice.handler.RepeatState
import com.maxrave.simpmusic.expect.ui.PlatformBackdrop
import com.maxrave.simpmusic.ui.icon.Pause
import androidx.compose.ui.hapticfeedback.HapticFeedbackType
import androidx.compose.ui.platform.LocalHapticFeedback
import com.maxrave.simpmusic.ui.icon.PlayArrow
import com.maxrave.simpmusic.ui.icon.Repeat
import com.maxrave.simpmusic.ui.icon.RepeatOne
import com.maxrave.simpmusic.ui.icon.Shuffle
import com.maxrave.simpmusic.ui.icon.SimpIcons
import com.maxrave.simpmusic.ui.icon.SkipNext
import com.maxrave.simpmusic.ui.icon.SkipPrevious
import com.maxrave.simpmusic.ui.theme.seed
import com.maxrave.simpmusic.viewModel.UIEvent

/**
 * Apple Music transport row: borderless white glyphs for shuffle / previous / next / repeat and a
 * single prominent 64dp WHITE circular target for play/pause carrying a dark glyph. No tonal
 * containers, no outlines anywhere (the old glass circles read as outlined M3 buttons).
 *
 * [backdrop] is accepted for call-site compatibility but intentionally unused. [activeColor]
 * keeps System Red for engaged shuffle/repeat states.
 */
@Composable
fun PlayerControlLayout(
    controllerState: ControlState,
    isSmallSize: Boolean = false,
    plainPlayPause: Boolean = true,
    horizontalPadding: Dp = 20.dp,
    activeColor: Color = seed,
    contentColor: Color = Color.White,
    backdrop: PlatformBackdrop? = null,
    onUIEvent: (UIEvent) -> Unit,
) {
    val haptics = LocalHapticFeedback.current
    val height = if (isSmallSize) 48.dp else 88.dp
    val sideGlyph = if (isSmallSize) 24.dp else 30.dp
    val midGlyph = if (isSmallSize) 28.dp else 36.dp
    val playTarget = if (isSmallSize) 48.dp else 64.dp
    val playGlyph = if (isSmallSize) 22.dp else 30.dp

    fun tick() = haptics.performHapticFeedback(HapticFeedbackType.LongPress)

    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceEvenly,
        modifier =
            Modifier
                .fillMaxWidth()
                .height(height)
                .padding(horizontal = horizontalPadding),
    ) {
        // Shuffle
        Box(Modifier.weight(1f), contentAlignment = Alignment.Center) {
            Crossfade(targetState = controllerState.isShuffle, label = "Shuffle Button") { on ->
                Icon(
                    imageVector = SimpIcons.Shuffle,
                    tint = if (on) activeColor else contentColor.copy(alpha = 0.9f),
                    contentDescription = "Shuffle",
                    modifier =
                        Modifier.size(sideGlyph).clickable(
                            interactionSource = remember { MutableInteractionSource() },
                            indication = null,
                        ) {
                            tick()
                            onUIEvent(UIEvent.Shuffle)
                        },
                )
            }
        }

        // Previous
        Box(Modifier.weight(1f), contentAlignment = Alignment.Center) {
            Icon(
                imageVector = SimpIcons.SkipPrevious,
                tint =
                    if (controllerState.isPreviousAvailable) contentColor else contentColor.copy(alpha = 0.35f),
                contentDescription = "Previous",
                modifier =
                    Modifier.size(midGlyph).clickable(
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        enabled = controllerState.isPreviousAvailable,
                    ) {
                        tick()
                        onUIEvent(UIEvent.Previous)
                    },
            )
        }

        // Play/Pause — the one filled element: a white disc, dark glyph.
        Box(Modifier.weight(1f), contentAlignment = Alignment.Center) {
            Box(
                modifier =
                    Modifier
                        .size(playTarget)
                        .clip(CircleShape)
                        .background(Color.White)
                        .clickable(
                            interactionSource = remember { MutableInteractionSource() },
                            indication = null,
                        ) {
                            tick()
                            onUIEvent(UIEvent.PlayPause)
                        },
                contentAlignment = Alignment.Center,
            ) {
                Crossfade(targetState = controllerState.isPlaying, label = "PlayPause") { playing ->
                    Icon(
                        imageVector = if (playing) SimpIcons.Pause else SimpIcons.PlayArrow,
                        tint = Color.Black,
                        contentDescription = if (playing) "Pause" else "Play",
                        modifier = Modifier.size(playGlyph),
                    )
                }
            }
        }

        // Next
        Box(Modifier.weight(1f), contentAlignment = Alignment.Center) {
            Icon(
                imageVector = SimpIcons.SkipNext,
                tint =
                    if (controllerState.isNextAvailable) contentColor else contentColor.copy(alpha = 0.35f),
                contentDescription = "Next",
                modifier =
                    Modifier.size(midGlyph).clickable(
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        enabled = controllerState.isNextAvailable,
                    ) {
                        tick()
                        onUIEvent(UIEvent.Next)
                    },
            )
        }

        // Repeat
        Box(Modifier.weight(1f), contentAlignment = Alignment.Center) {
            Crossfade(targetState = controllerState.repeatState, label = "Repeat Button") { rs ->
                val (icon, tint) =
                    when (rs) {
                        is RepeatState.One -> SimpIcons.RepeatOne to activeColor
                        RepeatState.All -> SimpIcons.Repeat to activeColor
                        else -> SimpIcons.Repeat to contentColor.copy(alpha = 0.9f)
                    }
                Icon(
                    imageVector = icon,
                    tint = tint,
                    contentDescription = "Repeat",
                    modifier =
                        Modifier.size(sideGlyph).clickable(
                            interactionSource = remember { MutableInteractionSource() },
                            indication = null,
                        ) {
                            tick()
                            onUIEvent(UIEvent.Repeat)
                        },
                )
            }
        }
    }
}

