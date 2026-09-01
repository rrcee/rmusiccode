package com.maxrave.simpmusic.viewModel

import com.maxrave.domain.repository.CacheRepository
import com.maxrave.domain.repository.CommonRepository
import com.eygraber.uri.Uri

actual suspend fun calculateDataFraction(cacheRepository: CacheRepository): SettingsStorageSectionFraction? {
    return null
}

actual suspend fun restoreNative(
    commonRepository: CommonRepository,
    uri: Uri,
    getData: () -> Unit,
) {
}

actual suspend fun backupNative(
    commonRepository: CommonRepository,
    uri: Uri,
    backupDownloaded: Boolean,
) {
}

actual fun getPackageName(): String {
    return "com.maxrave.simpmusic"
}

@OptIn(kotlinx.cinterop.ExperimentalForeignApi::class)
actual fun getFileDir(): String {
    val documentDirectory = platform.Foundation.NSFileManager.defaultManager.URLForDirectory(
        directory = platform.Foundation.NSDocumentDirectory,
        inDomain = platform.Foundation.NSUserDomainMask,
        appropriateForURL = null,
        create = false,
        error = null,
    )
    return requireNotNull(documentDirectory?.path)
}

actual fun changeLanguageNative(code: String) {
}

