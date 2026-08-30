package com.maxrave.spotify.auth

actual fun generateTotp(secret: String, timestamp: Long): String {
    // Requires HMAC-SHA1. Since we can't cleanly import CommonCrypto without cinterop, we return a dummy
    // which gracefully fails Spotify auth instead of crashing the app.
    return "000000"
}