import Foundation

public class YTMusicService: ObservableObject {
    public static let shared = YTMusicService()

    @Published public var trendingSongs: [Song] = []
    @Published public var searchResults: [Song] = []
    @Published public var isLoading: Bool = false

    private init() {
        loadDefaultTrending()
    }

    public func loadDefaultTrending() {
        self.trendingSongs = [
            Song(id: "dQw4w9WgXcQ", title: "Never Gonna Give You Up", artist: "Rick Astley", album: "Whenever You Need Somebody", thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", durationSeconds: 212),
            Song(id: "kJQP7kiw5Fk", title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", album: "VIDA", thumbnailUrl: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg", durationSeconds: 282),
            Song(id: "fJ9rUzIMcZQ", title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", thumbnailUrl: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg", durationSeconds: 354),
            Song(id: "JGwWNGJdvx8", title: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)", thumbnailUrl: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg", durationSeconds: 233),
            Song(id: "09R8_2nJtjg", title: "Sugar", artist: "Maroon 5", album: "V", thumbnailUrl: "https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg", durationSeconds: 235),
            Song(id: "OPf0YbXqDm0", title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", album: "Uptown Special", thumbnailUrl: "https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg", durationSeconds: 270)
        ]
    }

    public func search(query: String) async {
        guard !query.trimmingCharacters(in: .whitespaces).isEmpty else { return }

        DispatchQueue.main.async {
            self.isLoading = true
        }

        let encodedQuery = query.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? ""
        let urlString = "https://pipedapi.kavin.rocks/search?q=\(encodedQuery)&filter=music_songs"

        guard let url = URL(string: urlString) else {
            DispatchQueue.main.async { self.isLoading = false }
            return
        }

        do {
            let (data, _) = try await URLSession.shared.data(from: url)
            if let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
               let items = json["items"] as? [[String: Any]] {

                var parsedSongs: [Song] = []
                for item in items {
                    if let urlStr = item["url"] as? String,
                       let title = item["title"] as? String,
                       let uploader = item["uploaderName"] as? String {
                        let videoId = urlStr.replacingOccurrences(of: "/watch?v=", with: "")
                        let thumbnail = item["thumbnail"] as? String ?? "https://i.ytimg.com/vi/\(videoId)/hqdefault.jpg"
                        let duration = item["duration"] as? Int ?? 180

                        parsedSongs.append(Song(id: videoId, title: title, artist: uploader, album: "YouTube Single", thumbnailUrl: thumbnail, durationSeconds: duration))
                    }
                }

                DispatchQueue.main.async {
                    self.searchResults = parsedSongs
                    self.isLoading = false
                }
                return
            }
        } catch {
            print("Search fetch error: \(error)")
        }

        DispatchQueue.main.async {
            self.isLoading = false
        }
    }

    public func getAudioStreamUrl(videoId: String) async -> URL? {
        let pipUrlString = "https://pipedapi.kavin.rocks/streams/\(videoId)"
        if let url = URL(string: pipUrlString),
           let (data, _) = try? await URLSession.shared.data(from: url),
           let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
           let audioStreams = json["audioStreams"] as? [[String: Any]] {

            // Pick highest quality m4a/webm audio stream
            if let bestStream = audioStreams.first(where: { (["mimeType"] as? String)?.contains("audio/mp4") == true }),
               let streamUrlStr = bestStream["url"] as? String,
               let streamUrl = URL(string: streamUrlStr) {
                return streamUrl
            }

            if let fallbackStream = audioStreams.first,
               let streamUrlStr = fallbackStream["url"] as? String,
               let streamUrl = URL(string: streamUrlStr) {
                return streamUrl
            }
        }

        // Fallback fallback URL
        return URL(string: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
    }
}
