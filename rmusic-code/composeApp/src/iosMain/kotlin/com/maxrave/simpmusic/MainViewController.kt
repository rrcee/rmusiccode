package com.maxrave.simpmusic

import com.maxrave.simpmusic.di.initKoin
import androidx.compose.ui.window.ComposeUIViewController

fun MainViewController() = ComposeUIViewController { App() }

fun initApp() {
    initKoin()
}