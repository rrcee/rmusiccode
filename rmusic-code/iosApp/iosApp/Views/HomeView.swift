import SwiftUI

public struct HomeView: View {
    @ObservedObject var ytService = YTMusicService.shared
    @ObservedObject var audioManager = AudioPlayerManager.shared

    public init() {}

    public var body: some View {
        NavigationView {
            ZStack {
                LiquidGlassBackground()

                ScrollView {
                    VStack(alignment: .leading, spacing: 20) {
                        Text("SimpMusic")
                            .font(.system(size: 34, weight: .bold, design: .rounded))
                            .foregroundColor(.white)
                            .padding(.horizontal)

                        Text("Quick Picks & Trending")
                            .font(.headline)
                            .foregroundColor(.white.opacity(0.8))
                            .padding(.horizontal)

                        LazyVStack(spacing: 12) {
                            ForEach(ytService.trendingSongs) { song in
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
                                            audioManager.play(song: song, in: ytService.trendingSongs)
                                        }) {
                                            Image(systemName: audioManager.currentSong?.id == song.id && audioManager.isPlaying ? "pause.circle.fill" : "play.circle.fill")
                                                .font(.system(size: 36))
                                                .foregroundColor(.purple)
                                        }
                                    }
                                    .padding(12)
                                }
                                .padding(.horizontal)
                            }
                        }
                    }
                    .padding(.top)
                    .padding(.bottom, 120)
                }
            }
            .navigationBarHidden(true)
        }
    }
}
