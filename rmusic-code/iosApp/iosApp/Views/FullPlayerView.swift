import SwiftUI

public struct FullPlayerView: View {
    @ObservedObject var audioManager = AudioPlayerManager.shared
    @ObservedObject var downloadManager = DownloadManager.shared
    @Environment(\.dismiss) var dismiss

    public init() {}

    public var body: some View {
        ZStack {
            if let song = audioManager.currentSong {
                // Ambient album artwork blur
                AsyncImage(url: URL(string: song.highResThumbnail)) { image in
                    image.resizable()
                         .aspectRatio(contentMode: .fill)
                } placeholder: {
                    Color.black
                }
                .ignoresSafeArea()
                .blur(radius: 60)
                .overlay(Color.black.opacity(0.5))

                VStack(spacing: 24) {
                    // Header grabber
                    Capsule()
                        .fill(Color.white.opacity(0.3))
                        .frame(width: 40, height: 5)
                        .padding(.top, 12)

                    HStack {
                        Button(action: { audioManager.isFullPlayerPresented = false }) {
                            Image(systemName: "chevron.down")
                                .font(.title2)
                                .foregroundColor(.white)
                        }
                        Spacer()
                        Text("Playing from YT Music")
                            .font(.subheadline)
                            .foregroundColor(.white.opacity(0.7))
                        Spacer()
                        Button(action: {
                            downloadManager.download(song: song)
                        }) {
                            Image(systemName: downloadManager.isDownloaded(songId: song.id) ? "checkmark.circle.fill" : "arrow.down.circle")
                                .font(.title2)
                                .foregroundColor(downloadManager.isDownloaded(songId: song.id) ? .green : .white)
                        }
                    }
                    .padding(.horizontal)

                    Spacer()

                    // Album Artwork
                    AsyncImage(url: URL(string: song.highResThumbnail)) { image in
                        image.resizable()
                             .aspectRatio(contentMode: .fill)
                    } placeholder: {
                        Color.gray.opacity(0.3)
                    }
                    .frame(width: 300, height: 300)
                    .cornerRadius(24)
                    .shadow(color: Color.black.opacity(0.5), radius: 20, x: 0, y: 10)

                    Spacer()

                    // Title & Artist
                    VStack(spacing: 6) {
                        Text(song.title)
                            .font(.system(size: 24, weight: .bold, design: .rounded))
                            .foregroundColor(.white)
                            .multilineTextAlignment(.center)
                            .lineLimit(2)

                        Text(song.artist)
                            .font(.system(size: 18, weight: .medium))
                            .foregroundColor(.white.opacity(0.8))
                            .multilineTextAlignment(.center)
                    }
                    .padding(.horizontal)

                    // Scrubber
                    VStack(spacing: 8) {
                        Slider(value: Binding(
                            get: { audioManager.currentTime },
                            set: { audioManager.seek(to: ) }
                        ), in: 0...max(audioManager.duration, 1))
                        .accentColor(.white)

                        HStack {
                            Text(formatTime(audioManager.currentTime))
                                .font(.caption)
                                .foregroundColor(.white.opacity(0.7))
                            Spacer()
                            Text(formatTime(audioManager.duration))
                                .font(.caption)
                                .foregroundColor(.white.opacity(0.7))
                        }
                    }
                    .padding(.horizontal, 24)

                    // Controls
                    HStack(spacing: 40) {
                        Button(action: { audioManager.previousSong() }) {
                            Image(systemName: "backward.fill")
                                .font(.system(size: 32))
                                .foregroundColor(.white)
                        }

                        Button(action: { audioManager.togglePlayPause() }) {
                            Image(systemName: audioManager.isPlaying ? "pause.circle.fill" : "play.circle.fill")
                                .font(.system(size: 72))
                                .foregroundColor(.white)
                        }

                        Button(action: { audioManager.nextSong() }) {
                            Image(systemName: "forward.fill")
                                .font(.system(size: 32))
                                .foregroundColor(.white)
                        }
                    }
                    .padding(.bottom, 40)
                }
            }
        }
    }

    private func formatTime(_ seconds: Double) -> String {
        guard !seconds.isNaN && !seconds.isInfinite else { return "0:00" }
        let mins = Int(seconds) / 60
        let secs = Int(seconds) % 60
        return String(format: "%d:%02d", mins, secs)
    }
}
