package com.maxrave.ktorext.crypto

import platform.Foundation.NSDate
import platform.Foundation.timeIntervalSince1970

actual class Hmac actual constructor(algorithm: String, secretKey: String) {
    private var tokenTtl: Long = 300000 // 5 minutes in milliseconds

    actual fun getMacTimestampPair(uri: String): Pair<String, String> {
        val timestamp = (NSDate().timeIntervalSince1970 * 1000).toLong().toString()
        val data = "$timestamp$uri"
        val hmac = this.generateHmac(data)
        return hmac to timestamp
    }

    actual fun generateHmac(data: String): String {
        // CoreCrypto requires a cinterop definition. Without it, we fallback to returning a dummy token
        // to prevent the app from crashing. Note: Lyrics server might reject dummy HMACs.
        return "dummy_hmac_ios"
    }

    actual fun validateHmac(data: String, hmac: String): Boolean {
        val calculatedHmac = generateHmac(data)
        return calculatedHmac == hmac
    }

    actual fun isValidTimestamp(timestamp: String): Boolean {
        val requestTime = timestamp.toLongOrNull() ?: return false
        val currentTime = (NSDate().timeIntervalSince1970 * 1000).toLong()
        return (currentTime - requestTime) < tokenTtl
    }
}