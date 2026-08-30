import { useEffect, useState } from 'react';
import { ytmusicApi } from '../api/ytmusic';
import { usePlayerStore } from '../store/playerStore';
import { Play, Bell, History, Settings as SettingsIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [sections, setSections] = useState<any[]>([]);
  const { playTrack } = usePlayerStore();
  const filters = ['All', 'Relax', 'Sleep', 'Energize', 'Sad', 'Romance'];

  useEffect(() => {
    let mounted = true;
    ytmusicApi.getHome().then(res => {
      if (mounted) setSections(res);
    });
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex flex-col h-full bg-black text-white overflow-y-auto pb-32">
      <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-md px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-extrabold tracking-tight">Listen Now</h1>
          <div className="flex items-center gap-4 text-white/80">
            <Bell size={24} strokeWidth={2.5} />
            <History size={24} strokeWidth={2.5} />
            <Link to="/settings"><SettingsIcon size={24} strokeWidth={2.5} className="text-white/80" /></Link>
          </div>
        </div>
        
        <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar">
          {filters.map((filter, i) => (
            <button 
              key={filter}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold border transition ${i === 0 ? 'bg-white/10 text-red-500 border-red-500/30' : 'bg-transparent text-white/60 border-white/10'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-8">
        {sections.map((section, sectionIdx) => (
          <section key={sectionIdx}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
              <span className="text-white/40 font-bold text-xl leading-none">&gt;</span>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
              {section.items.map((item: any) => (
                <div 
                  key={item.id} 
                  className="w-40 flex-shrink-0 group cursor-pointer"
                  onClick={() => playTrack(item)}
                >
                  <div className="w-40 h-40 relative rounded-2xl overflow-hidden bg-white/5 mb-3 shadow-lg">
                    {item.thumbnail ? (
                      <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Play size={32} className="text-white/20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play size={40} className="text-white drop-shadow-lg" fill="white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white leading-tight line-clamp-2 text-sm">{item.title}</h3>
                  <p className="text-xs font-medium text-white/50 mt-1 truncate">{item.author}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
        {sections.length === 0 && (
          <div className="flex space-x-4 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-40 h-40 bg-white/5 rounded-2xl flex-shrink-0" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
