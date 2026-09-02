import Foundation

public class DownloadManager: ObservableObject {
    public static let shared = DownloadManager()

    @Published public var downloadedSongs: [Song] = []

    private init() {
        loadDownloadedSongs()
    }

    public func download(song: Song) {
        Task {
            if let streamUrl = await YTMusicService.shared.getAudioStreamUrl(videoId: song.id) {
                let fileManager = FileManager.default
                guard let documentsDirectory = fileManager.urls(for: .documentDirectory, in: .userDomainMask).first else { return }
                let destinationUrl = documentsDirectory.appendingPathComponent("\(song.id).mp3")

                do {
                    let (data, _) = try await URLSession.shared.data(from: streamUrl)
                    try data.write(to: destinationUrl)

                    DispatchQueue.main.async {
                        if !self.downloadedSongs.contains(where: { .id == song.id }) {
                            self.downloadedSongs.append(song)
                            self.saveDownloadedSongsList()
                        }
                    }
                } catch {
                    print("Download failed: \(error)")
                }
            }
        }
    }

    public func isDownloaded(songId: String) -> Bool {
        return downloadedSongs.contains(where: { .id == songId })
    }

    private func saveDownloadedSongsList() {
        if let encoded = try? JSONEncoder().encode(downloadedSongs) {
            UserDefaults.standard.set(encoded, forKey: "saved_downloaded_songs")
        }
    }

    private func loadDownloadedSongs() {
        if let data = UserDefaults.standard.data(forKey: "saved_downloaded_songs"),
           let decoded = try? JSONDecoder().decode([Song].self, from: data) {
            self.downloadedSongs = decoded
        }
    }
}
