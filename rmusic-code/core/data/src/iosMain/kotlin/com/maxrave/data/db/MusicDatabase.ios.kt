package com.maxrave.data.db

import androidx.room.Room
import androidx.room.RoomDatabase
import com.maxrave.common.DB_NAME
import kotlinx.cinterop.ExperimentalForeignApi
import platform.Foundation.NSDocumentDirectory
import platform.Foundation.NSSearchPathForDirectoriesInDomains
import platform.Foundation.NSUserDomainMask

actual fun getDatabaseBuilder(converters: Converters): RoomDatabase.Builder<MusicDatabase> {
    val dbFilePath = documentDirectory() + "/$DB_NAME"
    return Room.databaseBuilder<MusicDatabase>(
        name = dbFilePath,
    ).addTypeConverter(converters)
}

@OptIn(ExperimentalForeignApi::class)
fun documentDirectory(): String {
    val paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, true)
    return paths.first() as String
}

actual fun getDatabasePath(): String {
    return documentDirectory() + "/$DB_NAME"
}
