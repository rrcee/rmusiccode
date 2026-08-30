# Feature Parity Matrix

The goal is 100% feature coverage where technically possible on web/iOS Safari.

| Feature | Android implementation | Web implementation | Status | Notes |
|---|---|---|---|---|
| **Audio Playback** | Media3 ExoPlayer | HTML5 `<audio>` + Media Session API | Pending | Requires user interaction on Safari to start. |
| **Play/Pause/Seek** | Media3 Controls | Custom UI + HTMLMediaElement methods | Pending | |
| **Media Notification** | Android MediaStyle Notification | Media Session API | Pending | Lock screen controls on iOS. |
| **Queue Management** | Media3 MediaItem queue | Custom state array in React | Pending | |
| **Search (Songs/Artists/Albums)** | Ktor + YTM Scraper | Fetch API + Proxy (if CORS restricted) | Pending | |
| **Library (Liked/Saved)** | Room DB | IndexedDB (Dexie.js) | Pending | |
| **Playlists (Create/Edit)** | Room DB | IndexedDB | Pending | |
| **History** | Room DB | IndexedDB | Pending | |
| **Recommendations** | YTM Scraper | Fetch API | Pending | |
| **Lyrics** | `lyricsService` (custom UI) | React component with sync logic | Pending | |
| **Downloads / Offline** | File System + Media3 Cache | Cache Storage API / Service Worker | Pending | Storage limits apply on iOS Safari (typically ~1GB or 60% of disk space). |
| **Settings / Preferences** | DataStore Preferences | `localStorage` | Pending | |
| **UI/Animations** | Compose Multiplatform | React + Framer Motion / Tailwind | Pending | Aiming for touch-first iPhone experience. |
| **Authentication** | YTM Cookie/Token | HttpOnly Cookies or Secure Storage | Pending | |
