package com.maxrave.kotlinytmusicscraper.extension

import java.security.MessageDigest

actual fun String.sha256(): String {
    val digest = MessageDigest.getInstance("SHA-256")
    val hash = digest.digest(toByteArray())
    return hash.fold("", { str, it -> str + "%02x".format(it) })
}
