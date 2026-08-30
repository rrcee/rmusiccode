import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "YouTube Music",
  "description": "With the YouTube Music app, enjoy over 100 million songs at your fingertips, plus albums, playlists, remixes, music videos, live performances, covers, and hard-to-find music you can’t get anywhere else.",
  "openGraph": {
    "title": "YouTube Music",
    "description": "With the YouTube Music app, enjoy over 100 million songs at your fingertips, plus albums, playlists, remixes, music videos, live performances, covers, and hard-to-find music you can’t get anywhere else.",
    "type": "website",
    "siteName": "YouTube Music",
    "url": "/",
    "images": [
      "https://music.youtube.com/img/youtube_music_preview.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "YouTube Music",
    "description": "With the YouTube Music app, enjoy over 100 million songs at your fingertips, plus albums, playlists, remixes, music videos, live performances, covers, and hard-to-find music you can’t get anywhere else.",
    "site": "@youtubemusic",
    "images": [
      "https://music.youtube.com/img/youtube_music_preview.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/ed522d757fcd.ico",
        "type": "image/x-icon",
        "sizes": "16x16"
      },
      {
        "url": "/assets/cloned/images/c6be79ea6a18.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/6fe8f10da378.png",
        "type": "image/png",
        "sizes": "48x48"
      },
      {
        "url": "/assets/cloned/images/216a9c66709c.png",
        "type": "image/png",
        "sizes": "96x96"
      },
      {
        "url": "/assets/cloned/images/62768142730d.png",
        "type": "image/png",
        "sizes": "144x144"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/4808014a84e5.webmanifest"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#131313"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="box-content block text-foreground [font-family:Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-[0.625rem] font-normal not-italic leading-[0.6875rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        {children}
      </body>
    </html>
  );
}
