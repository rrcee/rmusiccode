import { useState } from 'react';
import { db, type LocalPlaylist, type LocalPlaylistTrack } from '../db/db';
import { usePlayerStore } from '../store/playerStore';
import { Play, Clock, Heart, ListMusic, Plus, ArrowLeft } from 'lucide-react';
import { useLiveQuery } from 'dexie-react-hooks';

export function LibraryPage() {
  const [selectedPlaylist, setSelectedPlaylist] = useState<LocalPlaylist | null>(null);
  const { playTrack } = usePlayerStore();

  const likedTracks = useLiveQuery(() => db.likedTracks.orderBy('timestamp').reverse().toArray(), []) || [];
  const history = useLiveQuery(() => db.history.orderBy('timestamp').reverse().toArray(), []) || [];
  const playlists = useLiveQuery(() => db.playlists.orderBy('updatedAt').reverse().toArray(), []) || [];
  const playlistTracks = useLiveQuery(
    () => selectedPlaylist ? db.playlistTracks.where('playlistId').equals(selectedPlaylist.id).sortBy('position') : Promise.resolve([] as LocalPlaylistTrack[]),
    [selectedPlaylist]
  ) || [];

  const handleCreatePlaylist = async () => {
    const title = prompt("Enter playlist name:");
    if (title) {
      await db.playlists.add({
        id: crypto.randomUUID(),
        title,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
    }
  };

  const removeTrackFromPlaylist = async (trackId: string) => {
    if (!selectedPlaylist) return;
    const track = await db.playlistTracks.where({ playlistId: selectedPlaylist.id, trackId }).first();
    if (track) {
      await db.playlistTracks.delete(track.id!);
      await db.playlists.update(selectedPlaylist.id, { updatedAt: Date.now() });
    }
  };

  if (selectedPlaylist) {
    return (
      <div className="flex flex-col h-full bg-black text-white p-4">
        <button onClick={() => setSelectedPlaylist(null)} className="flex items-center gap-2 text-white/50 hover:text-white mb-6">
          <ArrowLeft size={24} /> Back
        </button>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold">{selectedPlaylist.title}</h1>
          <button 
            className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
            onClick={() => playlistTracks.length > 0 && playTrack(playlistTracks[0] as any)}
          >
            <Play fill="white" size={24} className="ml-1" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto pb-32">
          {playlistTracks.map((track) => (
            <div key={track.id} className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-2xl group cursor-pointer" onClick={() => playTrack({ ...track, id: track.trackId } as any)}>
              <img src={track.thumbnail} alt="" className="w-12 h-12 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-white truncate">{track.title}</p>
                <p className="text-xs text-white/50 truncate font-medium">{track.author}</p>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); removeTrackFromPlaylist(track.trackId); }}
                className="opacity-0 group-hover:opacity-100 p-2 text-white/50 hover:text-white"
              >
                <Plus size={20} className="rotate-45" />
              </button>
            </div>
          ))}
          {playlistTracks.length === 0 && (
            <div className="text-center text-white/50 mt-10 font-bold">This playlist is empty.</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-black text-white p-4 pb-32">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-full" />
        <h1 className="text-2xl font-extrabold">Library</h1>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8">
        <button className="px-5 py-2 rounded-full bg-white/10 text-white font-bold text-sm flex-shrink-0">Your library</button>
        <button className="px-5 py-2 rounded-full bg-transparent border border-white/10 text-white/50 font-bold text-sm flex-shrink-0">SimpMusic Charts</button>
        <button className="px-5 py-2 rounded-full bg-transparent border border-white/10 text-white/50 font-bold text-sm flex-shrink-0" onClick={handleCreatePlaylist}>+ New Playlist</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Liked Music Card */}
        <div 
          className="cursor-pointer group flex flex-col"
          onClick={() => {
            if (likedTracks.length > 0) {
              playTrack(likedTracks[0] as any);
            }
          }}
        >
          <div className="w-full aspect-square bg-gradient-to-br from-[#8a2be2] to-[#ff1493] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-[1.02] transition-transform">
            <Heart fill="white" size={64} className="text-white drop-shadow-lg" />
          </div>
          <p className="font-bold text-white mt-3 leading-tight">Liked Music</p>
          <p className="text-xs font-medium text-white/50 mt-0.5">Auto playlist</p>
        </div>

        {/* History Card */}
        <div 
          className="cursor-pointer group flex flex-col"
          onClick={() => {
            if (history.length > 0) {
              playTrack(history[0] as any);
            }
          }}
        >
          <div className="w-full aspect-square bg-white/5 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-[1.02] transition-transform border border-white/10">
            <Clock size={64} className="text-white/20" />
          </div>
          <p className="font-bold text-white mt-3 leading-tight">History</p>
          <p className="text-xs font-medium text-white/50 mt-0.5">Auto playlist</p>
        </div>

        {/* Custom Playlists */}
        {playlists.map(pl => (
          <div key={pl.id} className="cursor-pointer group flex flex-col" onClick={() => setSelectedPlaylist(pl)}>
            <div className="w-full aspect-square bg-white/5 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-[1.02] transition-transform overflow-hidden border border-white/10">
              <ListMusic size={64} className="text-white/20" />
            </div>
            <p className="font-bold text-white mt-3 leading-tight truncate">{pl.title}</p>
            <p className="text-xs font-medium text-white/50 mt-0.5">Custom Playlist</p>
          </div>
        ))}
      </div>
    </div>
  );
}
