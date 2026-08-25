package com.maxrave.simpmusic.expect.ui

import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember

@Composable
actual fun rememberDeviceTilt(): State<Pair<Float, Float>> {
    return remember { mutableStateOf(Pair(0f, 0f)) }
}
