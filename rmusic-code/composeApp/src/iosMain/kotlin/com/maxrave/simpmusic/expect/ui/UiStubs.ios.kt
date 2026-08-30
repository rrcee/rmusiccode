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
import androidx.compose.ui.text.TextStyle
import coil3.Image
import com.maxrave.domain.data.model.metadata.Lyrics
import com.maxrave.domain.data.model.streams.TimeLine
import androidx.compose.ui.interop.UIKitView
import platform.WebKit.WKWebView
import platform.WebKit.WKNavigationDelegateProtocol
import platform.WebKit.WKNavigation
import platform.Foundation.NSURL
import platform.Foundation.NSURLRequest
import platform.darwin.NSObject
import kotlinx.cinterop.ExperimentalForeignApi
import platform.CoreGraphics.CGRectMake
import platform.UIKit.UIDocumentPickerViewController
import platform.UIKit.UIDocumentPickerDelegateProtocol
import platform.UIKit.UIModalPresentationFormSheet
import platform.UIKit.UIApplication
import platform.AVFoundation.AVPlayerLayer
import platform.AVFoundation.AVPlayer
import platform.AVFoundation.AVPlayerItem
import platform.UIKit.UIView
import platform.UIKit.UIColor
import kotlinx.cinterop.CValue
import platform.UIKit.UIImagePickerController
import platform.UIKit.UIImagePickerControllerDelegateProtocol
import platform.UIKit.UINavigationControllerDelegateProtocol
import platform.UIKit.UIImagePickerControllerSourceType
import platform.UIKit.UIImage
import platform.UIKit.UIAccessibilityIsReduceMotionEnabled

import org.jetbrains.skia.Image.Companion.makeFromEncoded
import androidx.compose.ui.graphics.toComposeImageBitmap
import androidx.compose.ui.graphics.asSkiaBitmap
import org.jetbrains.skia.EncodedImageFormat

actual fun ImageBitmap.toByteArray(): ByteArray? {
    val skiaBitmap = this.asSkiaBitmap()
    val skiaImage = org.jetbrains.skia.Image.makeFromBitmap(skiaBitmap)
    return skiaImage.encodeToData(EncodedImageFormat.PNG)?.bytes
}

actual fun Image.toImageBitmap(): ImageBitmap {
    // Assuming Image is a Coil3 Image wrapper, in KMP coil it usually holds a Skia image or similar.
    // For now we throw a well-defined exception indicating coil extraction needs a specific mapper
    throw NotImplementedError("Coil3 Image to Compose ImageBitmap mapper not directly available in standard API without painter.")
}

@Composable
actual fun PlatformCastButton(
    modifier: Modifier,
    tint: Color,
) {
    // No-op for iOS stub
}






Request




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
                val urlString = "https://discord.com/api/oauth2/authorize" // SimpMusic discord auth URL typically
                val request = NSURLRequest(uRL = NSURL.URLWithString(urlString)!!)
                webView.loadRequest(request)
                webView
            },
            modifier = Modifier,
            update = { webView ->
                webView.navigationDelegate = object : NSObject(), WKNavigationDelegateProtocol {
                    override fun webView(webView: WKWebView, didFinishNavigation: WKNavigation?) {
                        val currentUrl = webView.URL?.absoluteString ?: ""
                        // Basic dummy token extraction, proper regex needed for actual token
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
) : FilePickerLauncher, NSObject(), UIDocumentPickerDelegateProtocol {
    override fun launch() {
        // Use public.data as a catch-all if mimeType mapping isn't perfectly 1:1 with UTIs
        val documentPicker = UIDocumentPickerViewController(
            documentTypes = listOf("public.item"),
            inMode = platform.UIKit.UIDocumentPickerMode.UIDocumentPickerModeImport
        )
        documentPicker.delegate = this
        documentPicker.modalPresentationStyle = UIModalPresentationFormSheet
        
        UIApplication.sharedApplication.keyWindow?.rootViewController?.presentViewController(
            documentPicker,
            animated = true,
            completion = null
        )
    }

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

@Composable
actual fun filePickerResult(
    mimeType: String,
    onResultUri: (String?) -> Unit,
): FilePickerLauncher = remember { IOSFilePickerLauncher(mimeType, onResultUri) }

class IOSFileSaverLauncher(
    private val fileName: String,
    private val mimeType: String,
    private val onResultUri: (String?) -> Unit
) : FilePickerLauncher, NSObject(), UIDocumentPickerDelegateProtocol {
    override fun launch() {
        val documentPicker = UIDocumentPickerViewController(
            documentTypes = listOf("public.data"),
            inMode = platform.UIKit.UIDocumentPickerMode.UIDocumentPickerModeExportToService
        )
        documentPicker.delegate = this
        documentPicker.modalPresentationStyle = UIModalPresentationFormSheet
        
        UIApplication.sharedApplication.keyWindow?.rootViewController?.presentViewController(
            documentPicker,
            animated = true,
            completion = null
        )
    }

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

@Composable
actual fun fileSaverResult(
    fileName: String,
    mimeType: String,
    onResultUri: (String?) -> Unit,
): FilePickerLauncher = remember { IOSFileSaverLauncher(fileName, mimeType, onResultUri) }



Item




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
                
                // Hack to auto-resize layer, normally done in layoutSubviews of a custom UIView subclass
                player.play()
            }
            view
        },
        modifier = modifier,
        update = { view ->
            // In a real implementation we'd update bounds here
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
    // Just re-use the standard MediaPlayerView for now, subtitle rendering requires custom Compose overlay
    MediaPlayerView(
        url = "", // Usually the view model passes the URL down, or the AVPlayer is injected
        modifier = modifier,
        cropToBounds = true
    )
}

class DummyOpenEqLauncher : OpenEqLauncher {
    override fun launch() {}
}

@Composable
actual fun openEqResult(audioSessionId: Int): OpenEqLauncher = DummyOpenEqLauncher()


DelegateProtocol

SourceType


class IOSPhotoPickerLauncher(
    private val onResultUri: (String?) -> Unit
) : PhotoPickerLauncher, NSObject(), UIImagePickerControllerDelegateProtocol, UINavigationControllerDelegateProtocol {
    override fun launch() {
        val picker = UIImagePickerController()
        picker.delegate = this
        picker.sourceType = UIImagePickerControllerSourceType.UIImagePickerControllerSourceTypePhotoLibrary
        
        UIApplication.sharedApplication.keyWindow?.rootViewController?.presentViewController(
            picker,
            animated = true,
            completion = null
        )
    }

    override fun imagePickerController(
        picker: UIImagePickerController,
        didFinishPickingMediaWithInfo: Map<Any?, *>
    ) {
        picker.dismissViewControllerAnimated(true, null)
        val image = didFinishPickingMediaWithInfo[platform.UIKit.UIImagePickerControllerOriginalImage] as? UIImage
        // Real implementation requires saving to a temporary NSURL and returning the path
        onResultUri("memory://image") // Stubbed URL pattern for compose image loader
    }

    override fun imagePickerControllerDidCancel(picker: UIImagePickerController) {
        picker.dismissViewControllerAnimated(true, null)
        onResultUri(null)
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
