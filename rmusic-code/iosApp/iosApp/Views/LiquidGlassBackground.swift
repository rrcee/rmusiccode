import SwiftUI

public struct LiquidGlassBackground: View {
    @State private var animateGradient = false

    public init() {}

    public var body: some View {
        ZStack {
            Color.black.ignoresSafeArea()

            LinearGradient(
                colors: animateGradient
                    ? [Color.purple.opacity(0.4), Color.blue.opacity(0.3), Color.black]
                    : [Color.indigo.opacity(0.4), Color.pink.opacity(0.3), Color.black],
                startPoint: animateGradient ? .topLeading : .bottomLeading,
                endPoint: animateGradient ? .bottomTrailing : .topTrailing
            )
            .ignoresSafeArea()
            .blur(radius: 60)
            .onAppear {
                withAnimation(.easeInOut(duration: 8.0).repeatForever(autoreverses: true)) {
                    animateGradient.toggle()
                }
            }
        }
    }
}
