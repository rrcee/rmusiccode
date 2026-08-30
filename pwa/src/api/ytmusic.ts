const API_KEY = "AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30";
const CLIENT_NAME = "WEB_REMIX";
const CLIENT_VERSION = "1.20260304.03.00";
const USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";

export const ytmusicApi = {
  async search(query: string) {
    const payload = {
      context: {
        client: {
          clientName: CLIENT_NAME,
          clientVersion: CLIENT_VERSION,
          hl: "en",
          gl: "US",
          userAgent: USER_AGENT
        }
      },
      query: query
    };

    const response = await fetch(`/youtubei/v1/search?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`YouTube Music API Error: ${response.status}`);
    }

    const data = await response.json();
    return this.parseSearchResponse(data);
  },

  parseSearchResponse(data: any) {
    const results: any[] = [];
    try {
      const contents = data.contents?.tabbedSearchResultsRenderer?.tabs?.[0]?.tabRenderer?.content?.sectionListRenderer?.contents;
      if (!contents) return results;

      for (const section of contents) {
        const items = section?.musicShelfRenderer?.contents || [];
        for (const item of items) {
          const mrl = item?.musicResponsiveListItemRenderer;
          if (mrl) {
            const title = mrl.flexColumns?.[0]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.text;
            const videoId = mrl.playlistItemData?.videoId || mrl.flexColumns?.[0]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.navigationEndpoint?.watchEndpoint?.videoId;
            const author = mrl.flexColumns?.[1]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.text;
            
            if (title && videoId) {
              results.push({
                id: videoId,
                title: title,
                author: author || "Unknown Artist",
                thumbnail: mrl.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails?.[0]?.url
              });
            }
          }
        }
      }
    } catch (e) {
      console.error("Parse error", e);
    }
    return results;
  },

  async getStreamUrl(videoId: string) {
    const payload = {
      context: {
        client: {
          clientName: "WEB",
          clientVersion: "2.20250312.04.00",
          hl: "en",
          gl: "US",
        }
      },
      videoId: videoId
    };

    const response = await fetch(`/youtubei/v1/player?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) return null;
    
    const data = await response.json();
    const formats = data.streamingData?.adaptiveFormats || [];
    // Prefer audio-only streams (itag 140 is m4a 128kbps, 251 is opus)
    const audioFormats = formats.filter((f: any) => f.mimeType.startsWith('audio/'));
    const bestAudio = audioFormats.find((f: any) => f.itag === 140 || f.itag === 251) || audioFormats[0];
    
    return bestAudio?.url || null;
  },

  async getHome() {
    const payload = {
      context: {
        client: {
          clientName: CLIENT_NAME,
          clientVersion: CLIENT_VERSION,
          hl: "en",
          gl: "US",
          userAgent: USER_AGENT
        }
      },
      browseId: "FEmusic_home"
    };

    const response = await fetch(`/youtubei/v1/browse?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error("Failed to load home");
    
    const data = await response.json();
    return this.parseHomeResponse(data);
  },

  parseHomeResponse(data: any) {
    const sections: any[] = [];
    try {
      const contents = data.contents?.singleColumnBrowseResultsRenderer?.tabs?.[0]?.tabRenderer?.content?.sectionListRenderer?.contents;
      if (!contents) return sections;

      for (const section of contents) {
        const carousel = section?.musicCarouselShelfRenderer;
        if (carousel) {
          const title = carousel.header?.musicCarouselShelfBasicHeaderRenderer?.title?.runs?.[0]?.text;
          const items: any[] = [];
          
          const carouselContents = carousel.contents || [];
          for (const item of carouselContents) {
            const mtrl = item?.musicTwoRowItemRenderer;
            if (mtrl) {
              const itemTitle = mtrl.title?.runs?.[0]?.text;
              const videoId = mtrl.navigationEndpoint?.watchEndpoint?.videoId;
              const subtitle = mtrl.subtitle?.runs?.[0]?.text;
              const thumbnail = mtrl.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails?.[0]?.url;
              
              if (itemTitle && videoId) {
                items.push({
                  id: videoId,
                  title: itemTitle,
                  author: subtitle || "Unknown Artist",
                  thumbnail: thumbnail
                });
              }
            }
          }

          if (title && items.length > 0) {
            sections.push({ title, items });
          }
        }
      }
    } catch (e) {
      console.error("Parse home error", e);
    }
    return sections;
  },

  async getLyrics(videoId: string) {
    // 1. Get next endpoint to find lyrics browseId
    const nextPayload = {
      context: {
        client: {
          clientName: CLIENT_NAME,
          clientVersion: CLIENT_VERSION,
          hl: "en",
          gl: "US",
        }
      },
      videoId: videoId
    };

    const nextRes = await fetch(`/youtubei/v1/next?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nextPayload)
    });

    if (!nextRes.ok) return null;
    const nextData = await nextRes.json();
    
    // Find lyrics browseId from next tabs
    const tabs = nextData.contents?.singleColumnMusicWatchNextResultsRenderer?.tabbedRenderer?.watchNextTabbedResultsRenderer?.tabs || [];
    const lyricsTab = tabs.find((t: any) => t.tabRenderer?.title === 'Lyrics' || t.tabRenderer?.endpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_TRACK_LYRICS');
    
    const browseId = lyricsTab?.tabRenderer?.endpoint?.browseEndpoint?.browseId;
    if (!browseId) return null;

    // 2. Fetch lyrics using browseId
    const browsePayload = {
      context: {
        client: {
          clientName: CLIENT_NAME,
          clientVersion: CLIENT_VERSION,
          hl: "en",
          gl: "US",
        }
      },
      browseId: browseId
    };

    const browseRes = await fetch(`/youtubei/v1/browse?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(browsePayload)
    });

    if (!browseRes.ok) return null;
    const browseData = await browseRes.json();

    const lyricsText = browseData.contents?.sectionListRenderer?.contents?.[0]?.musicDescriptionShelfRenderer?.description?.runs?.[0]?.text;
    return lyricsText || null;
  }
};
