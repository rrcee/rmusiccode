package com.maxrave.simpmusic.expect.ui

import androidx.compose.runtime.Composable

/**
 * False when the user asked the system to minimise animations — on Android that's the
 * "Remove/shorten animations" accessibility toggle (animator duration scale 0). Continuous or
 * large-area decoration should then hold still; short press-feedback springs are exempt.
 */
@Composable
expect fun systemAnimationsEnabled(): Boolean
