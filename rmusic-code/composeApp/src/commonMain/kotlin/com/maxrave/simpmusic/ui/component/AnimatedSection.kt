package com.maxrave.simpmusic.ui.component

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

/**
 * Formerly a scroll-triggered slide-up/fade-in entrance ("staggered section reveal").
 *
 * REMOVED on purpose. The visibility trigger compared the item's window-space Y against a fixed
 * pixel threshold, so on load every section composed further than that threshold stayed at
 * alpha 0 — on screen loads only the first row rendered, and the rest appeared only after the
 * user scrolled down (past them) and back up. Scroll-linked reveals are exactly the parallax
 * behaviour that was asked to be removed; sections now simply render immediately.
 *
 * Kept as a passthrough so existing call sites don't need touching.
 */
@Composable
fun AnimatedSection(
    index: Int,
    modifier: Modifier = Modifier,
    content: @Composable () -> Unit,
) {
    Box(modifier = modifier) {
        content()
    }
}
