package com.maxrave.simpmusic.expect

import platform.UIKit.UIPasteboard
import platform.UIKit.UIApplication
import platform.Foundation.NSURL
import platform.UIKit.UIActivityViewController
import platform.Foundation.NSFileManager
import platform.Foundation.NSDocumentDirectory
import platform.Foundation.NSUserDomainMask
import platform.UIKit.UIDevice
import platform.UIKit.UIDeviceOrientation

actual fun copyToClipboard(
    label: String,
    text: String,
) {
    UIPasteboard.generalPasteboard.string = text
}

actual fun getDownloadFolderPath(): String {
    val paths = NSFileManager.defaultManager.URLsForDirectory(NSDocumentDirectory, inDomains = NSUserDomainMask)
    return paths.firstOrNull()?.let { (it as NSURL).path } ?: ""
}

actual fun openUrl(url: String) {
    val nsUrl = NSURL.URLWithString(url)
    if (nsUrl != null) {
        UIApplication.sharedApplication.openURL(nsUrl)
    }
}

actual fun shareUrl(
    title: String,
    url: String,
) {
    val nsUrl = NSURL.URLWithString(url)
    if (nsUrl != null) {
        val activityViewController = UIActivityViewController(
            activityItems = listOf(title, nsUrl),
            applicationActivities = null
        )
        UIApplication.sharedApplication.keyWindow?.rootViewController?.presentViewController(
            activityViewController,
            animated = true,
            completion = null
        )
    }
}

actual fun currentOrientation(): Orientation {
    val orientation = UIDevice.currentDevice.orientation
    return when (orientation) {
        UIDeviceOrientation.UIDeviceOrientationLandscapeLeft,
        UIDeviceOrientation.UIDeviceOrientationLandscapeRight -> Orientation.LANDSCAPE
        else -> Orientation.PORTRAIT
    }
}


