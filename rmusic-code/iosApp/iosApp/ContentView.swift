import SwiftUI

struct ContentView: View {
    @ObservedObject var audioManager = AudioPlayerManager.shared

    init() {
        UITabBar.appearance().isHidden = true
    }

    @State private var selectedTab: Int = 0

    var body: some View {
        ZStack(alignment: .bottom) {
            Group {
                switch selectedTab {
                case 0:
                    HomeView()
                case 1:
                    SearchView()
                default:
                    LibraryView()
                }
            }

            VStack(spacing: 0) {
                MiniPlayerView()

                // Floating Glass TabBar
                GlassCard {
                    HStack {
                        Spacer()
                        TabBarButton(icon: "house.fill", title: "Home", isSelected: selectedTab == 0) {
                            selectedTab = 0
                        }
                        Spacer()
                        TabBarButton(icon: "magnifyingglass", title: "Search", isSelected: selectedTab == 1) {
                            selectedTab = 1
                        }
                        Spacer()
                        TabBarButton(icon: "square.stack.fill", title: "Library", isSelected: selectedTab == 2) {
                            selectedTab = 2
                        }
                        Spacer()
                    }
                    .padding(.vertical, 10)
                }
                .padding(.horizontal, 16)
                .padding(.bottom, 8)
            }
        }
        .ignoresSafeArea(.keyboard, edges: .bottom)
        .fullScreenCover(isPresented: .isFullPlayerPresented) {
            FullPlayerView()
        }
    }
}

struct TabBarButton: View {
    let icon: String
    let title: String
    let isSelected: Bool
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            VStack(spacing: 4) {
                Image(systemName: icon)
                    .font(.system(size: 20, weight: isSelected ? .bold : .medium))
                Text(title)
                    .font(.caption2)
            }
            .foregroundColor(isSelected ? .white : .white.opacity(0.5))
        }
    }
}
