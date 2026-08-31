package com.maxrave.simpmusic.expect.ui

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.material3.ColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asSkiaBitmap
import androidx.compose.ui.graphics.toComposeImageBitmap
import androidx.compose.ui.interop.UIKitView
import androidx.compose.ui.text.TextStyle
import coil3.Image
import com.maxrave.domain.data.model.metadata.Lyrics
import com.maxrave.domain.data.model.streams.TimeLine
import kotlinx.cinterop.ExperimentalForeignApi
import org.jetbrains.skia.EncodedImageFormat
import org.jetbrains.skia.Image.Companion.makeFromEncoded
import platform.AVFoundation.*
import platform.CoreGraphics.CGRectMake
import platform.Foundation.NSURL
import platform.Foundation.NSURLRequest
import platform.UIKit.UIAccessibilityIsReduceMotionEnabled
import platform.UIKit.UIApplication
import platform.UIKit.UIColor
import platform.UIKit.UIDocumentPickerDelegateProtocol
import platform.UIKit.UIDocumentPickerViewController
import platform.UIKit.UIImage
import platform.UIKit.UIImagePickerController
import platform.UIKit.UIImagePickerControllerDelegateProtocol
import platform.UIKit.UIImagePickerControllerSourceType
import platform.UIKit.UIModalPresentationFormSheet
import platform.UIKit.UINavigationControllerDelegateProtocol
import platform.UIKit.UIView
import platform.WebKit.WKNavigation
import platform.WebKit.WKNavigationDelegateProtocol
import platform.WebKit.WKWebView
import platform.darwin.NSObject

actual fun ImageBitmap.toByteArray(): ByteArray? {
    val skiaBitmap = this.asSkiaBitmap()
    val skiaImage = org.jetbrains.skia.Image.makeFromBitmap(skiaBitmap)
    return skiaImage.encodeToData(EncodedImageFormat.PNG)?.bytes
}

actual fun Image.toImageBitmap(): ImageBitmap {
    throw NotImplementedError("Coil3 Image to Compose ImageBitmap mapper not directly available in standard API without painter.")
}

@Composable
actual fun PlatformCastButton(
    modifier: Modifier,
    tint: Color,
) {
    // No-op for iOS stub
}

class DummyWebViewCookieManager : WebViewCookieManager {
    override fun getCookie(url: String): String = ""
    override fun removeAllCookies() {}
}

actual fun createWebViewCookieManager(): WebViewCookieManager = DummyWebViewCookieManager()

@OptIn(ExperimentalForeignApi::class)
@Composable
actual fun PlatformWebView(
    state: MutableState<WebViewState>,
    initUrl: String,
    aboveContent: @Composable (BoxScope.() -> Unit),
    onPageFinished: (String) -> Unit,
) {
    Box(modifier = Modifier) {
        UIKitView(
            factory = {
                val webView = WKWebView(frame = CGRectMake(0.0, 0.0, 0.0, 0.0))
                val request = NSURLRequest(uRL = NSURL.URLWithString(initUrl)!!)
                webView.loadRequest(request)
                webView
            },
            modifier = Modifier,
            update = { webView ->
                webView.navigationDelegate = object : NSObject(), WKNavigationDelegateProtocol {
                    override fun webView(webView: WKWebView, didFinishNavigation: WKNavigation?) {
                        onPageFinished(webView.URL?.absoluteString ?: "")
                    }
                }
            }
        )
        aboveContent()
    }
}

@OptIn(ExperimentalForeignApi::class)
@Composable
actual fun DiscordWebView(
    state: MutableState<WebViewState>,
    aboveContent: @Composable (BoxScope.() -> Unit),
    onLoginDone: (token: String) -> Unit
) {
    Box(modifier = Modifier) {
        UIKitView(
            factory = {
                val webView = WKWebView(frame = CGRectMake(0.0, 0.0, 0.0, 0.0))
                val urlString = "https://discord.com/api/oauth2/authorize"
                val request = NSURLRequest(uRL = NSURL.URLWithString(urlString)!!)
                webView.loadRequest(request)
                webView
            },
            modifier = Modifier,
            update = { webView ->
                webView.navigationDelegate = object : NSObject(), WKNavigationDelegateProtocol {
                    override fun webView(webView: WKWebView, didFinishNavigation: WKNavigation?) {
                        val currentUrl = webView.URL?.absoluteString ?: ""
                        if (currentUrl.contains("access_token=")) {
                            val token = currentUrl.substringAfter("access_token=").substringBefore("&")
                            onLoginDone(token)
                        }
                    }
                }
            }
        )
        aboveContent()
    }
}

class IOSFilePickerLauncher(
    private val mimeType: String,
    private val onResultUri: (String?) -> Unit
) : FilePickerLauncher {
    
    private val delegate = object : NSObject(), UIDocumentPickerDelegateProtocol {
        override fun documentPicker(
            controller: UIDocumentPickerViewController,
            didPickDocumentsAtURLs: List<*>
        ) {
            val url = didPickDocumentsAtURLs.firstOrNull() as? NSURL
            onResultUri(url?.absoluteString)
        }

        override fun documentPickerWasCancelled(controller: UIDocumentPickerViewController) {
            onResultUri(null)
        }
    }

    override fun launch() {
        val documentPicker = UIDocumentPickerViewController(
            documentTypes = listOf("public.item"),
            inMode = platform.UIKit.UIDocumentPickerMode.UIDocumentPickerModeImport
        )
        documentPicker.delegate = delegate
        documentPicker.modalPresentationStyle = UIModalPresentationFormSheet

        UIApplication.sharedApplication.keyWindow?.rootViewController?.presentViewController(
            documentPicker,
            animated = true,
            completion = null
        )
    }
}
}

@Composable
actual fun filePickerResult(
    mimeType: String,
    onResultUri: (String?) -> Unit,
): FilePickerLauncher = remember { IOSFilePickerLauncher(mimeType, onResultUri) }

class IOSFileSaverLauncher(
    private val fileName: String,
    private val mimeType: String,
    private val onResultUri: (String?) -> Unit
) : FilePickerLauncher {
    
    private val delegate = object : NSObject(), UIDocumentPickerDelegateProtocol {
        override fun documentPicker(
            controller: UIDocumentPickerViewController,
            didPickDocumentsAtURLs: List<*>
        ) {
            val url = didPickDocumentsAtURLs.firstOrNull() as? NSURL
            onResultUri(url?.absoluteString)
        }

        override fun documentPickerWasCancelled(controller: UIDocumentPickerViewController) {
            onResultUri(null)
        }
    }

    override fun launch() {
        val documentPicker = UIDocumentPickerViewController(
            documentTypes = listOf("public.data"),
            inMode = platform.UIKit.UIDocumentPickerMode.UIDocumentPickerModeExportToService
        )
        documentPicker.delegate = delegate
        documentPicker.modalPresentationStyle = UIModalPresentationFormSheet

        UIApplication.sharedApplication.keyWindow?.rootViewController?.presentViewController(
            documentPicker,
            animated = true,
            completion = null
        )
    }
}
}

@Composable
actual fun fileSaverResult(
    fileName: String,
    mimeType: String,
    onResultUri: (String?) -> Unit,
): FilePickerLauncher = remember { IOSFileSaverLauncher(fileName, mimeType, onResultUri) }

@OptIn(ExperimentalForeignApi::class)
@Composable
actual fun MediaPlayerView(
    url: String,
    modifier: Modifier,
    cropToBounds: Boolean,
) {
    UIKitView(
        factory = {
            val view = UIView()
            view.backgroundColor = UIColor.blackColor

            val nsUrl = NSURL.URLWithString(url)
            if (nsUrl != null) {
                val player = AVPlayer.playerWithURL(nsUrl)
                val playerLayer = AVPlayerLayer.playerLayerWithPlayer(player)
                playerLayer.videoGravity = platform.AVFoundation.AVLayerVideoGravityResizeAspectFill

                view.layer.addSublayer(playerLayer)

                player.play()
            }
            view
        },
        modifier = modifier,
        update = { view ->
            val layer = view.layer.sublayers?.firstOrNull() as? AVPlayerLayer
            layer?.frame = view.bounds
        }
    )
}

@OptIn(ExperimentalForeignApi::class)
@Composable
actual fun MediaPlayerViewWithSubtitle(
    modifier: Modifier,
    playerName: String,
    shouldPip: Boolean,
    shouldShowSubtitle: Boolean,
    shouldScaleDownSubtitle: Boolean,
    isInPipMode: Boolean,
    timelineState: TimeLine,
    lyricsData: Lyrics?,
    translatedLyricsData: Lyrics?,
    mainTextStyle: TextStyle,
    translatedTextStyle: TextStyle,
) {
    MediaPlayerView(
        url = "",
        modifier = modifier,
        cropToBounds = true
    )
}

class DummyOpenEqLauncher : OpenEqLauncher {
    override fun launch() {}
}

@Composable
actual fun openEqResult(audioSessionId: Int): OpenEqLauncher = DummyOpenEqLauncher()

class IOSPhotoPickerLauncher(
    private val onResultUri: (String?) -> Unit
) : PhotoPickerLauncher {
    
    private val delegate = object : NSObject(), UIImagePickerControllerDelegateProtocol, UINavigationControllerDelegateProtocol {
        override fun imagePickerController(
            picker: UIImagePickerController,
            didFinishPickingMediaWithInfo: Map<Any?, *>
        ) {
            picker.dismissViewControllerAnimated(true, null)
            val image = didFinishPickingMediaWithInfo[platform.UIKit.UIImagePickerControllerOriginalImage] as? UIImage
            onResultUri("memory://image")
        }

        override fun imagePickerControllerDidCancel(picker: UIImagePickerController) {
            picker.dismissViewControllerAnimated(true, null)
            onResultUri(null)
        }
    }

    override fun launch() {
        val picker = UIImagePickerController()
        picker.delegate = delegate
        picker.sourceType = UIImagePickerControllerSourceType.UIImagePickerControllerSourceTypePhotoLibrary

        UIApplication.sharedApplication.keyWindow?.rootViewController?.presentViewController(
            picker,
            animated = true,
            completion = null
        )
    }
}
}

@Composable
actual fun photoPickerResult(onResultUri: (String?) -> Unit): PhotoPickerLauncher = remember { IOSPhotoPickerLauncher(onResultUri) }

@Composable
actual fun platformDynamicColorScheme(isDark: Boolean): ColorScheme? = null

actual fun isWallpaperDynamicColorSupported(): Boolean = false

@Composable
actual fun SystemBarAppearanceEffect(isDark: Boolean) {}

@Composable
actual fun systemAnimationsEnabled(): Boolean = !UIAccessibilityIsReduceMotionEnabled()

@Composable
actual fun HorizontalScrollBar(
    modifier: Modifier,
    scrollState: LazyListState,
) {}


