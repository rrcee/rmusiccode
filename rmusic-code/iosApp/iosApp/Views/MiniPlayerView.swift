import SwiftUI

public struct MiniPlayerView: View {
    @ObservedObject var audioManager = AudioPlayerManager.shared

    public init() {}

    public var body: some View {
        if let song = audioManager.currentSong {
            GlassCard {
                HStack(spacing: 12) {
                    AsyncImage(url: URL(string: song.thumbnailUrl)) { image in
                        image.resizable()
                             .aspectRatio(contentMode: .fill)
                    } placeholder: {
                        Color.gray.opacity(0.3)
                    }
                    .frame(width: 48, height: 48)
                    .cornerRadius(10)

                    VStack(alignment: .leading, spacing: 2) {
                        Text(song.title)
                            .font(.system(size: 15, weight: .bold))
                            .foregroundColor(.white)
                            .lineLimit(1)

                        Text(song.artist)
                            .font(.system(size: 13))
                            .foregroundColor(.white.opacity(0.7))
                            .lineLimit(1)
                    }

                    Spacer()

                    Button(action: {
                        audioManager.togglePlayPause()
                    }) {
                        Image(systemName: audioManager.isPlaying ? "pause.fill" : "play.fill")
                            .font(.system(size: 22))
                            .foregroundColor(.white)
                            .padding(8)
                    }

                    Button(action: {
                        audioManager.nextSong()
                    }) {
                        Image(systemName: "forward.fill")
                            .font(.system(size: 20))
                            .foregroundColor(.white.opacity(0.8))
                            .padding(4)
                    }
                }
                .padding(.horizontal, 14)
                .padding(.vertical, 8)
            }
            .padding(.horizontal, 12)
            .padding(.bottom, 60)
            .onTapGesture {
                audioManager.isFullPlayerPresented = true
            }
        }
    }
}
