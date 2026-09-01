import SwiftUI
import ComposeApp

@main
struct iOSApp: App {
    init() {
        MainViewControllerKt.startKoinDI()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

