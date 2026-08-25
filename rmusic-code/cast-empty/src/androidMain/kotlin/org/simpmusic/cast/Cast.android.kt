package org.simpmusic.cast

import android.content.Context
import androidx.media3.common.Player
import com.maxrave.logger.Logger

fun initCast(context: Context): Boolean {
    Logger.d("Cast", "NON-CAST build: Google Cast is not available")
    return false
}

fun wrapWithCastPlayer(
    context: Context,
    localPlayer: Player,
): Player = localPlayer
