import SwiftUI
import ComposeApp

@main
struct iOSApp: App {
    init() {
        MainViewControllerKt.initApp()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

