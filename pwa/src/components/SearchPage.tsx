import { useState } from 'react';
import { ytmusicApi } from '../api/ytmusic';
import { Search as SearchIcon, Loader2, Play } from 'lucide-react';
import { usePlayerStore } from '../store/playerStore';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { playTrack } = usePlayerStore();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setResults([]);

    try {
      const data = await ytmusicApi.search(query);
      setResults(data);
    } catch (err: any) {
      setError(err.message || 'Failed to search');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background text-foreground">
      <div className="p-4 border-b border-white/10 sticky top-0 bg-background/95 backdrop-blur z-10">
        <form onSubmit={handleSearch} className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon size={18} className="text-white/50" />
          </div>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-white/30 text-white placeholder-white/40"
            placeholder="Search songs, albums, artists..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {loading && (
          <div className="flex justify-center items-center h-32">
            <Loader2 className="animate-spin text-white/50" size={32} />
          </div>
        )}

        {error && (
          <div className="text-red-400 text-center p-4 bg-red-900/20 rounded-lg">
            {error}
          </div>
        )}

        {!loading && !error && results.length === 0 && query && (
          <div className="text-center text-white/40 mt-12">
            No results found
          </div>
        )}

        <div className="flex flex-col gap-2">
          {results.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-lg group cursor-pointer"
              onClick={() => playTrack(item)}
            >
              <div className="w-12 h-12 relative rounded overflow-hidden bg-white/10 flex-shrink-0">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Play size={20} className="text-white/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={24} className="text-white" fill="white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{item.title}</p>
                <p className="text-xs text-white/50 truncate">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
