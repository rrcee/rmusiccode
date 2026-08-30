package com.maxrave.kotlinytmusicscraper.utils

import platform.Foundation.NSDate
import platform.Foundation.timeIntervalSince1970

actual fun sha1(str: String): String {
    return "" // TODO: Implement using iOS CommonCrypto or Kotlinx Crypto
}

actual fun getCurrentTimeSeconds(): Long = NSDate().timeIntervalSince1970().toLong()
