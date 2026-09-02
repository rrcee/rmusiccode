import SwiftUI

public struct LibraryView: View {
    @ObservedObject var downloadManager = DownloadManager.shared
    @ObservedObject var audioManager = AudioPlayerManager.shared

    public init() {}

    public var body: some View {
        ZStack {
            LiquidGlassBackground()

            VStack(alignment: .leading, spacing: 16) {
                Text("Library & Downloads")
                    .font(.system(size: 32, weight: .bold, design: .rounded))
                    .foregroundColor(.white)
                    .padding(.horizontal)

                if downloadManager.downloadedSongs.isEmpty {
                    Spacer()
                    VStack(spacing: 12) {
                        Image(systemName: "arrow.down.circle")
                            .font(.system(size: 56))
                            .foregroundColor(.white.opacity(0.4))
                        Text("No Downloaded Tracks Yet")
                            .font(.headline)
                            .foregroundColor(.white.opacity(0.7))
                        Text("Tap the download button on any song to listen offline.")
                            .font(.subheadline)
                            .foregroundColor(.white.opacity(0.5))
                            .multilineTextAlignment(.center)
                            .padding(.horizontal, 32)
                    }
                    .frame(maxWidth: .infinity)
                    Spacer()
                } else {
                    ScrollView {
                        LazyVStack(spacing: 12) {
                            ForEach(downloadManager.downloadedSongs) { song in
                                GlassCard {
                                    HStack(spacing: 16) {
                                        AsyncImage(url: URL(string: song.thumbnailUrl)) { image in
                                            image.resizable()
                                                 .aspectRatio(contentMode: .fill)
                                        } placeholder: {
                                            Color.gray.opacity(0.3)
                                        }
                                        .frame(width: 56, height: 56)
                                        .cornerRadius(12)

                                        VStack(alignment: .leading, spacing: 4) {
                                            Text(song.title)
                                                .font(.headline)
                                                .foregroundColor(.white)
                                                .lineLimit(1)
                                            Text(song.artist)
                                                .font(.subheadline)
                                                .foregroundColor(.white.opacity(0.7))
                                                .lineLimit(1)
                                        }

                                        Spacer()

                                        Button(action: {
                                            audioManager.play(song: song, in: downloadManager.downloadedSongs)
                                        }) {
                                            Image(systemName: audioManager.currentSong?.id == song.id && audioManager.isPlaying ? "pause.circle.fill" : "play.circle.fill")
                                                .font(.system(size: 34))
                                                .foregroundColor(.green)
                                        }
                                    }
                                    .padding(12)
                                }
                                .padding(.horizontal)
                            }
                        }
                        .padding(.bottom, 120)
                    }
                }
            }
            .padding(.top)
        }
    }
}
