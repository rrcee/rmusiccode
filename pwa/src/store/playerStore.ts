import { create } from 'zustand';

export interface Track {
  id: string;
  title: string;
  author: string;
  thumbnail?: string;
}

interface PlayerState {
  currentTrack: Track | null;
  queue: Track[];
  isPlaying: boolean;
  progress: number;
  duration: number;
  
  playTrack: (track: Track) => void;
  addToQueue: (track: Track) => void;
  setPlaying: (playing: boolean) => void;
  setProgress: (progress: number) => void;
  setDuration: (duration: number) => void;
  playNext: () => void;
  playPrevious: () => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentTrack: null,
  queue: [],
  isPlaying: false,
  progress: 0,
  duration: 0,

  playTrack: (track) => set((state) => {
    // If not in queue, add it to the front
    const queue = state.queue.find(t => t.id === track.id) ? state.queue : [track, ...state.queue];
    return { currentTrack: track, isPlaying: true, queue };
  }),

  addToQueue: (track) => set((state) => ({ queue: [...state.queue, track] })),
  
  setPlaying: (isPlaying) => set({ isPlaying }),
  setProgress: (progress) => set({ progress }),
  setDuration: (duration) => set({ duration }),
  
  playNext: () => set((state) => {
    if (!state.currentTrack || state.queue.length === 0) return state;
    const currentIndex = state.queue.findIndex(t => t.id === state.currentTrack?.id);
    if (currentIndex >= 0 && currentIndex < state.queue.length - 1) {
      return { currentTrack: state.queue[currentIndex + 1], isPlaying: true };
    }
    return state; // Reached end
  }),

  playPrevious: () => set((state) => {
    if (!state.currentTrack || state.queue.length === 0) return state;
    const currentIndex = state.queue.findIndex(t => t.id === state.currentTrack?.id);
    if (currentIndex > 0) {
      return { currentTrack: state.queue[currentIndex - 1], isPlaying: true };
    }
    return state;
  })
}));
