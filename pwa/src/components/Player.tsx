import { useEffect, useRef, useState } from 'react';
import { usePlayerStore } from '../store/playerStore';
import { Play, Pause, Heart, ListPlus, X, Mic2, Loader2 } from 'lucide-react';
import { ytmusicApi } from '../api/ytmusic';
import { db } from '../db/db';
import { useLiveQuery } from 'dexie-react-hooks';

export function Player() {
  const { currentTrack, isPlaying, setPlaying, progress, duration, setProgress, setDuration, playNext, playPrevious } = usePlayerStore();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showLyricsModal, setShowLyricsModal] = useState(false);
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [loadingLyrics, setLoadingLyrics] = useState(false);

  const playlists = useLiveQuery(() => db.playlists.orderBy('updatedAt').reverse().toArray(), []) || [];

  useEffect(() => {
    let mounted = true;
    const playTrack = async () => {
      if (audioRef.current && currentTrack) {
        const streamUrl = await ytmusicApi.getStreamUrl(currentTrack.id);
        if (streamUrl && mounted) {
          audioRef.current.src = streamUrl;
          if (isPlaying) {
            audioRef.current.play().catch(e => console.error("Playback failed", e));
          }
        }
      }
    };

    if (currentTrack) {
      playTrack();
      
      db.likedTracks.get(currentTrack.id).then(track => {
        if (mounted) setIsLiked(!!track);
      });

      db.history.add({
        trackId: currentTrack.id,
        title: currentTrack.title,
        author: currentTrack.author,
        thumbnail: currentTrack.thumbnail,
        timestamp: Date.now()
      }).catch(console.error);

      // Reset lyrics state when track changes
      if (mounted) {
        setLyrics(null);
        if (showLyricsModal) fetchLyrics(currentTrack.id);
      }

    } else if (audioRef.current) {
      audioRef.current.pause();
    }

    return () => { mounted = false; };
  }, [currentTrack]);

  const fetchLyrics = async (id: string) => {
    setLoadingLyrics(true);
    try {
      const text = await ytmusicApi.getLyrics(id);
      setLyrics(text);
    } catch (e) {
      console.error(e);
      setLyrics("Failed to load lyrics.");
    } finally {
      setLoadingLyrics(false);
    }
  };

  const handleLyricsToggle = () => {
    const nextState = !showLyricsModal;
    setShowLyricsModal(nextState);
    if (nextState && !lyrics && currentTrack) {
      fetchLyrics(currentTrack.id);
    }
  };

  const toggleLike = async () => {
    if (!currentTrack) return;
    if (isLiked) {
      await db.likedTracks.delete(currentTrack.id);
      setIsLiked(false);
    } else {
      await db.likedTracks.put({
        id: currentTrack.id,
        title: currentTrack.title,
        author: currentTrack.author,
        thumbnail: currentTrack.thumbnail,
        timestamp: Date.now()
      });
      setIsLiked(true);
    }
  };

  const addToPlaylist = async (playlistId: string) => {
    if (!currentTrack) return;
    const count = await db.playlistTracks.where('playlistId').equals(playlistId).count();
    await db.playlistTracks.add({
      id: crypto.randomUUID(),
      playlistId,
      trackId: currentTrack.id,
      title: currentTrack.title,
      author: currentTrack.author,
      thumbnail: currentTrack.thumbnail,
      position: count
    });
    await db.playlists.update(playlistId, { updatedAt: Date.now() });
    setShowPlaylistModal(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentTrack && 'mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentTrack.title,
        artist: currentTrack.author,
        artwork: currentTrack.thumbnail ? [{ src: currentTrack.thumbnail, sizes: '512x512', type: 'image/jpeg' }] : []
      });

      navigator.mediaSession.setActionHandler('play', () => setPlaying(true));
      navigator.mediaSession.setActionHandler('pause', () => setPlaying(false));
      navigator.mediaSession.setActionHandler('previoustrack', () => playPrevious());
      navigator.mediaSession.setActionHandler('nexttrack', () => playNext());
    }
  }, [currentTrack, setPlaying, playNext, playPrevious]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  if (!currentTrack) return null;

  return (
    <>
      {showLyricsModal && (
        <div className="absolute inset-0 bg-background/95 backdrop-blur z-40 flex flex-col pb-16">
          <div className="p-4 flex items-center justify-between border-b border-white/10 sticky top-0 bg-background/95">
            <h2 className="font-bold text-lg text-white">Lyrics</h2>
            <button onClick={() => setShowLyricsModal(false)} className="text-white/50 hover:text-white">Close</button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 text-center flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-2">{currentTrack.title}</h3>
            <p className="text-sm text-white/50 mb-8">{currentTrack.author}</p>
            
            {loadingLyrics ? (
              <Loader2 className="animate-spin text-white/50" size={32} />
            ) : lyrics ? (
              <p className="text-white/80 whitespace-pre-wrap leading-relaxed text-lg max-w-lg font-medium">{lyrics}</p>
            ) : (
              <p className="text-white/50">No lyrics available for this track.</p>
            )}
          </div>
        </div>
      )}

      {showPlaylistModal && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-neutral-900 rounded-xl w-full max-w-sm overflow-hidden flex flex-col max-h-[80vh]">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="font-bold text-white">Add to Playlist</h3>
              <button onClick={() => setShowPlaylistModal(false)} className="text-white/50 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <div className="overflow-y-auto p-2">
              {playlists.length === 0 && (
                <p className="p-4 text-center text-white/50 text-sm">No playlists found. Create one in your Library.</p>
              )}
              {playlists.map(pl => (
                <button
                  key={pl.id}
                  onClick={() => addToPlaylist(pl.id)}
                  className="w-full text-left p-3 hover:bg-white/10 rounded-lg text-white font-medium text-sm transition"
                >
                  {pl.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {showQueue && (
        <div className="absolute inset-0 bg-background/95 backdrop-blur z-40 flex flex-col pb-16">
          <div className="p-4 flex items-center justify-between border-b border-white/10 sticky top-0 bg-background/95">
            <h2 className="font-bold text-lg text-white">Up Next</h2>
            <button onClick={() => setShowQueue(false)} className="text-white/50 hover:text-white">Close</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
            {usePlayerStore.getState().queue.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-4 p-2 rounded-lg ${currentTrack.id === item.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
                onClick={() => {
                  const store = usePlayerStore.getState();
                  store.playTrack(item);
                }}
              >
                <div className="w-10 h-10 relative rounded overflow-hidden bg-white/10 flex-shrink-0">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <Play size={16} className="text-white/30 absolute inset-0 m-auto" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${currentTrack.id === item.id ? 'text-blue-400' : 'text-white'}`}>{item.title}</p>
                  <p className="text-xs text-white/50 truncate">{item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="h-16 bg-[#1a1a1a]/95 backdrop-blur-md rounded-2xl border border-white/5 flex items-center justify-between px-3 w-full max-w-sm mx-auto shadow-xl relative overflow-hidden">
        <audio 
          ref={audioRef} 
          onTimeUpdate={handleTimeUpdate} 
          onEnded={playNext}
        />
        
        <div 
          className="flex items-center gap-3 overflow-hidden flex-1 cursor-pointer z-10"
          onClick={() => setShowQueue(!showQueue)}
        >
          <div className="w-11 h-11 bg-white/10 rounded-lg flex-shrink-0 overflow-hidden shadow-lg">
            {currentTrack.thumbnail && <img src={currentTrack.thumbnail} alt="" className="w-full h-full object-cover" />}
          </div>
          <div className="flex flex-col min-w-0 pr-2">
            <span className="text-sm font-bold text-white truncate">{currentTrack.title}</span>
            <span className="text-[11px] font-medium text-white/50 truncate">{currentTrack.author}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 z-10 ml-2">
          <button onClick={(e) => { e.stopPropagation(); handleLyricsToggle(); }} className={`flex-shrink-0 transition ${showLyricsModal ? 'text-white' : 'text-white/50 hover:text-white'}`}>
            <Mic2 size={18} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setShowPlaylistModal(true); }} className="flex-shrink-0 text-white/50 hover:text-white transition">
            <ListPlus size={18} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); toggleLike(); }} className="flex-shrink-0">
            <Heart size={18} className={isLiked ? "text-red-500" : "text-white/50 hover:text-white transition"} fill={isLiked ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="flex items-center gap-4 ml-4 z-10">
          <button onClick={() => setPlaying(!isPlaying)} className="text-white hover:scale-110 transition drop-shadow-md">
            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-0.5" />}
          </button>
        </div>

        {/* Progress Bar (mini) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
          <div 
            className="h-full bg-red-500 transition-all duration-100"
            style={{ width: `${duration > 0 ? (progress / duration) * 100 : 0}%` }}
          />
        </div>
      </div>
    </>
  );
}
