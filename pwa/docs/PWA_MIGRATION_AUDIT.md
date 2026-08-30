# PWA Migration Audit

## Application Architecture

The original SimpMusic application is a Kotlin Multiplatform (KMP) project supporting Android, Desktop (JVM), and iOS.

- **Application Entry Point**: Compose Multiplatform UI (`App.kt`).
- **Navigation Architecture**: Custom Compose navigation or Precompose/Voyager (needs deeper verification, but fundamentally Compose-based).
- **UI Architecture**: Compose Multiplatform (`composeApp`).
- **State Management**: Kotlin Flow/StateFlow with ViewModels inside `core/common` or `composeApp`.
- **Networking Architecture**: Ktor Client (`core/service/ktorExt`) handling API requests to YouTube Music (`kotlinYtmusicScraper`).
- **Repository Architecture**: Repositories defined in `core/domain` and implemented in `core/data`.
- **Data Layer**: Data models and mappers separating network models from domain models.
- **Persistence**: Room Database (KMP version) using SQLite bundled for storing library, playlists, and history.
- **Caching**: Room for structural data, Coil for image caching, caching of API responses possibly via Ktor caching.
- **Authentication**: YouTube Music cookie-based or OAuth authentication (needs deeper verification).
- **Media Playback**: `media3` for Android, `media-jvm` for Desktop.
- **Background Processing**: Android Services (`MediaSessionService`) and WorkManager (if used for downloads).
- **Dependency Injection**: Koin.
- **Configuration**: DataStore Preferences for settings.
- **Error Handling**: Kotlin `Result` or custom sealed classes for success/error states.

## Feature Inventory

| Feature | Android Implementation | Web Equivalent | Status |
|---|---|---|---|
| Playback | Media3 (ExoPlayer) | HTML5 Audio / Web Audio API | REIMPLEMENT |
| Background Audio | MediaSessionService | Media Session API / limited by Safari | PORT_WITH_ADAPTATION |
| Search | YTM scraper + Ktor | YTM scraper via Serverless Proxy / Ktor Wasm | REIMPLEMENT |
| Library | Room Database | IndexedDB (Dexie.js) | REPLACE_WITH_WEB_API |
| Playlists | Room Database | IndexedDB | REPLACE_WITH_WEB_API |
| Queue | Media3 Player | Custom JS Queue Manager | REIMPLEMENT |
| History | Room Database | IndexedDB | REPLACE_WITH_WEB_API |
| Downloads | File System + Room | Cache Storage / OPFS | NEEDS_TESTING |
| Settings | DataStore Preferences | localStorage / IndexedDB | REPLACE_WITH_WEB_API |
| Lyrics | `lyricsService` | Fetch and render via React | PORT_WITH_ADAPTATION |
| Themes/UI | Compose Material 3 | Tailwind CSS / React components | REIMPLEMENT |

## Notes on Web Equivalents
- **Storage**: Room maps well to IndexedDB. We will use Dexie.js for a robust wrapper.
- **Settings**: DataStore preferences can be mapped to localStorage or IndexedDB.
- **Audio**: Background audio in Safari is heavily restricted unless the user interacts with the page. We will use the HTML5 `<audio>` element combined with the Media Session API.
- **API Requests**: Direct calls to YouTube Music from a browser will likely hit CORS issues. A proxy or alternative method may be required.
