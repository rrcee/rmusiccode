package com.maxrave.kotlinytmusicscraper.utils

import java.security.MessageDigest

actual fun sha1(str: String): String = MessageDigest.getInstance("SHA-1").digest(str.toByteArray()).toHex()

actual fun getCurrentTimeSeconds(): Long = System.currentTimeMillis() / 1000
