package com.maxrave.data.db

import androidx.room.Room
import androidx.room.RoomDatabase
import com.maxrave.common.DB_NAME
import kotlinx.cinterop.ExperimentalForeignApi
import platform.Foundation.NSDocumentDirectory
import platform.Foundation.NSFileManager
import platform.Foundation.NSURL
import platform.Foundation.NSUserDomainMask

actual fun getDatabaseBuilder(converters: Converters): RoomDatabase.Builder<MusicDatabase> {
    val dbFilePath = documentDirectory() + "/$DB_NAME"
    return Room.databaseBuilder<MusicDatabase>(
        name = dbFilePath,
    ).addTypeConverter(converters)
}

@OptIn(ExperimentalForeignApi::class)
fun documentDirectory(): String {
    val paths = NSFileManager.defaultManager.URLsForDirectory(NSDocumentDirectory, inDomains = NSUserDomainMask)
    val documentDirectory = paths.firstOrNull() as? NSURL
    return requireNotNull(documentDirectory?.path)
}

actual fun getDatabasePath(): String {
    return documentDirectory() + "/$DB_NAME"
}
