import Foundation

public struct Song: Identifiable, Codable, Hashable {
    public let id: String
    public let title: String
    public let artist: String
    public let album: String?
    public let thumbnailUrl: String
    public let durationSeconds: Int?

    public init(id: String, title: String, artist: String, album: String? = nil, thumbnailUrl: String, durationSeconds: Int? = nil) {
        self.id = id
        self.title = title
        self.artist = artist
        self.album = album
        self.thumbnailUrl = thumbnailUrl
        self.durationSeconds = durationSeconds
    }

    public var highResThumbnail: String {
        thumbnailUrl.replacingOccurrences(of: "w120-h120", with: "w540-h540")
    }
}
