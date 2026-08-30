# iOS Safari / Browser Limitations

When porting from an Android application to a PWA (specifically targeting iPhone/Safari), the following fundamental limitations apply:

## 1. Background Audio
- **Limitation**: Safari suspends inactive tabs. Audio can play in the background *only* if started by a direct user interaction and if the audio track doesn't hit a dead end.
- **Workaround**: Use the Media Session API. Ensure playlist transitions happen synchronously or preload the next track.

## 2. Storage Quotas (Downloads)
- **Limitation**: Unlike Android's unrestricted File System, iOS Safari caps IndexedDB and Cache Storage. It can be evicted by the OS if space is low.
- **Workaround**: Clearly communicate to users that downloads are "cached for offline use" rather than permanently downloaded. Use the StorageManager API to estimate quota.

## 3. CORS & Network Requests
- **Limitation**: The Android app can make arbitrary network requests to YouTube Music without CORS preflight checks. Browsers block cross-origin requests by default.
- **Workaround**: Direct client-side scraping might be impossible. A proxy server or extension may be required.

## 4. Fullscreen & System UI
- **Limitation**: Web apps cannot easily hide the home indicator or control the status bar color dynamically beyond the initial `theme-color`.
- **Workaround**: Use `env(safe-area-inset-*)` meticulously. 

## 5. Media Controls
- **Limitation**: Volume control via JavaScript is ignored on iOS (the hardware buttons control the volume).
- **Workaround**: Hide volume sliders on iOS devices.
