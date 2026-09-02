import SwiftUI

public struct SearchView: View {
    @State private var searchText: String = ""
    @ObservedObject var ytService = YTMusicService.shared
    @ObservedObject var audioManager = AudioPlayerManager.shared

    public init() {}

    public var body: some View {
        ZStack {
            LiquidGlassBackground()

            VStack(alignment: .leading, spacing: 16) {
                Text("Search Music")
                    .font(.system(size: 32, weight: .bold, design: .rounded))
                    .foregroundColor(.white)
                    .padding(.horizontal)

                GlassCard {
                    HStack {
                        Image(systemName: "magnifyingglass")
                            .foregroundColor(.white.opacity(0.6))
                        TextField("Search tracks, artists...", text: )
                            .foregroundColor(.white)
                            .onSubmit {
                                Task {
                                    await ytService.search(query: searchText)
                                }
                            }
                        if !searchText.isEmpty {
                            Button(action: { searchText = "" }) {
                                Image(systemName: "xmark.circle.fill")
                                    .foregroundColor(.white.opacity(0.6))
                            }
                        }
                    }
                    .padding()
                }
                .padding(.horizontal)

                if ytService.isLoading {
                    Spacer()
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle(tint: .white))
                        .scaleEffect(1.5)
                        .frame(maxWidth: .infinity)
                    Spacer()
                } else {
                    ScrollView {
                        LazyVStack(spacing: 12) {
                            ForEach(ytService.searchResults) { song in
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
                                            audioManager.play(song: song, in: ytService.searchResults)
                                        }) {
                                            Image(systemName: audioManager.currentSong?.id == song.id && audioManager.isPlaying ? "pause.circle.fill" : "play.circle.fill")
                                                .font(.system(size: 34))
                                                .foregroundColor(.pink)
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
