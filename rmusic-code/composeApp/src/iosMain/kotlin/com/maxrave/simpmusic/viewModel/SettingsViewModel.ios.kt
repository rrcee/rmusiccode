package com.maxrave.simpmusic.viewModel

import com.maxrave.domain.data.model.SettingsStorageSectionFraction
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

actual fun getFileDir(): String {
    return ""
}

actual fun changeLanguageNative(code: String) {
}


