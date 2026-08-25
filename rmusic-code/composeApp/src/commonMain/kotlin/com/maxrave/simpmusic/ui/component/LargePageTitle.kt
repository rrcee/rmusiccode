package com.maxrave.simpmusic.ui.component

import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.material3.Text
import com.maxrave.simpmusic.ui.theme.fontFamily

/**
 * The oversized page title ("Library", "Home", "Search") in the Apple Music style: bold, tight
 * tracking, left-aligned, living INSIDE the scroll container as its first item so it simply
 * scrolls away under the translucent bar. Pair with [rememberInlineTitleProgress], which fades
 * the bar's compact title in as this one leaves.
 */
@Composable
fun LargePageTitle(
    text: String,
    modifier: Modifier = Modifier,
    color: Color = MaterialTheme.colorScheme.onBackground,
) {
    Text(
        text = text,
        fontSize = 30.sp,
        lineHeight = 36.sp,
        fontWeight = FontWeight.Bold,
        letterSpacing = (-0.3).sp,
        fontFamily = fontFamily(),
        color = color,
        maxLines = 1,
        overflow = TextOverflow.Ellipsis,
        modifier =
            modifier
                .padding(start = 20.dp, end = 20.dp, top = 6.dp, bottom = 12.dp),
    )
}

/**
 * 0f while the [LargePageTitle] first item is fully on screen, ramping to 1f as it scrolls out —
 * drive the compact bar title's alpha and the bar's background opacity from this. Reads only the
 * first-visible-item bookkeeping, so it recomposes on scroll without invalidating the list.
 *
 * Only meaningful when the observed list actually carries a large title as its first item;
 * callers showing other content should fall back to 1f (compact title always visible).
 */
fun largePageTitleFadeFraction(state: LazyListState): Float {
    val offset = state.firstVisibleItemScrollOffset.toFloat()
    return when {
        state.firstVisibleItemIndex > 0 -> 1f
        else -> (offset / LARGE_TITLE_FADE_SPAN_PX).coerceIn(0f, 1f)
    }
}

private const val LARGE_TITLE_FADE_SPAN_PX = 240f

/**
 * Hoisted variant for screens whose bar lives outside the [androidx.compose.runtime.Composition]
 * scope that owns the list state (e.g. Library's bar sits beside a Crossfade of lists).
 */
@Composable
fun rememberInlineTitleProgress(
    state: LazyListState,
    enabled: Boolean,
): State<Float> =
    remember(state, enabled) {
        derivedStateOf {
            if (enabled) largePageTitleFadeFraction(state) else 1f
        }
    }
