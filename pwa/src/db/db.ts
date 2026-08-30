import Dexie, { type Table } from 'dexie';

export interface LikedTrack {
  id: string;
  title: string;
  author: string;
  thumbnail?: string;
  timestamp: number;
}

export interface LocalPlaylist {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
}

export interface LocalPlaylistTrack {
  id: string;
  playlistId: string;
  trackId: string;
  title: string;
  author: string;
  thumbnail?: string;
  position: number;
}

export interface PlayHistory {
  id?: number; // Auto-incremented by Dexie
  trackId: string;
  title: string;
  author: string;
  thumbnail?: string;
  timestamp: number;
}

export class SimpMusicDatabase extends Dexie {
  likedTracks!: Table<LikedTrack, string>;
  playlists!: Table<LocalPlaylist, string>;
  playlistTracks!: Table<LocalPlaylistTrack, string>;
  history!: Table<PlayHistory, number>;

  constructor() {
    super('SimpMusicDB');
    this.version(1).stores({
      likedTracks: 'id, timestamp',
      playlists: 'id, updatedAt',
      playlistTracks: 'id, playlistId, position',
      history: '++id, trackId, timestamp'
    });
  }
}

export const db = new SimpMusicDatabase();
