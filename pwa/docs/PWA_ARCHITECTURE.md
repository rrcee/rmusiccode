# PWA Architecture

Based on the Android implementation and the requirements for an iOS Safari-optimized PWA, we will use the following tech stack:

## Core Stack
- **Framework**: React 18+ via Vite.
- **Language**: TypeScript (for strict typing of YTM models and local DB models).
- **Styling**: Tailwind CSS (for building touch-optimized, responsive UIs quickly without generic Material Design look).
- **State Management**: Zustand (for global state like Player, Queue, Settings).
- **Routing**: React Router (for client-side navigation).

## Data & Persistence
- **Local Database (Room Equivalent)**: Dexie.js (IndexedDB wrapper). Used for Library, Playlists, History.
- **Preferences (DataStore Equivalent)**: `localStorage` (for small config like Theme, Audio Quality).
- **Caching**: Service Worker + Cache Storage API.

## Media & Audio
- **Player**: HTML5 `<audio>` element managed by a central audio service.
- **OS Integration**: `navigator.mediaSession` API to provide lock screen controls and metadata to iOS/Android.

## Backend & API
- **YouTube Music Integration**: We will port the logic from `kotlinYtmusicScraper`. If browser CORS restrictions prevent direct requests to `music.youtube.com`, a lightweight serverless proxy (e.g., Cloudflare Workers or Vercel Edge Functions) will be required.

## PWA Features
- **Manifest**: `manifest.json` with standalone display, theme colors, and icons.
- **Service Worker**: Workbox for asset caching and offline fallback.
