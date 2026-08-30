package com.maxrave.kotlinytmusicscraper.extension

actual inline fun <reified T : Any> T.asMap(): Map<String, Any?> {
    return emptyMap()
}
