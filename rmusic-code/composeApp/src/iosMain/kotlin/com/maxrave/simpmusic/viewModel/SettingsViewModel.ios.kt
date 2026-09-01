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
    val paths = NSFileManager.defaultManager.URLsForDirectory(NSDocumentDirectory, inDomains = NSUserDomainMask)
    val documentDirectory = paths.firstOrNull() as? NSURL
    return requireNotNull(documentDirectory?.path)
}

actual fun changeLanguageNative(code: String) {
}
