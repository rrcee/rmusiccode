import { useEffect, useState } from 'react';
import { Settings as SettingsIcon, Monitor, Smartphone, Volume2, Database, Info } from 'lucide-react';
import { db } from '../db/db';

export function SettingsPage() {
  const [stats, setStats] = useState({ liked: 0, history: 0 });

  useEffect(() => {
    let mounted = true;
    const loadStats = async () => {
      const liked = await db.likedTracks.count();
      const history = await db.history.count();
      if (mounted) setStats({ liked, history });
    };
    loadStats();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex flex-col h-full bg-background text-foreground overflow-y-auto pb-24 p-4">
      <h1 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
        <SettingsIcon size={28} /> Settings
      </h1>
      
      <div className="flex flex-col gap-6">
        <section>
          <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Appearance</h2>
          <div className="bg-white/5 rounded-xl overflow-hidden divide-y divide-white/10">
            <div className="p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer transition">
              <div className="flex items-center gap-3 text-white">
                <Monitor size={20} className="text-white/50" />
                <span>Theme</span>
              </div>
              <span className="text-sm text-white/50">Dark (Default)</span>
            </div>
            <div className="p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer transition">
              <div className="flex items-center gap-3 text-white">
                <Smartphone size={20} className="text-white/50" />
                <span>Optimize for Mobile</span>
              </div>
              <div className="w-10 h-6 bg-blue-500 rounded-full relative">
                <div className="absolute right-1 top-1 bottom-1 w-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Playback</h2>
          <div className="bg-white/5 rounded-xl overflow-hidden divide-y divide-white/10">
            <div className="p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer transition">
              <div className="flex items-center gap-3 text-white">
                <Volume2 size={20} className="text-white/50" />
                <span>Audio Quality</span>
              </div>
              <span className="text-sm text-white/50">High (140)</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Data & Storage</h2>
          <div className="bg-white/5 rounded-xl overflow-hidden divide-y divide-white/10">
            <div className="p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer transition">
              <div className="flex items-center gap-3 text-white">
                <Database size={20} className="text-white/50" />
                <span>Local Database</span>
              </div>
              <div className="text-right">
                <p className="text-sm text-white">{stats.liked} Liked Tracks</p>
                <p className="text-xs text-white/50">{stats.history} History Entries</p>
              </div>
            </div>
            <div 
              className="p-4 flex items-center justify-center hover:bg-red-500/10 cursor-pointer transition text-red-400"
              onClick={() => {
                if(confirm('Are you sure you want to clear all local data?')) {
                  db.likedTracks.clear();
                  db.history.clear();
                  setStats({ liked: 0, history: 0 });
                }
              }}
            >
              Clear Data
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">About</h2>
          <div className="bg-white/5 rounded-xl overflow-hidden">
            <div className="p-4 flex items-center gap-3 text-white">
              <Info size={20} className="text-white/50" />
              <div>
                <p>SimpMusic Web</p>
                <p className="text-xs text-white/50">Version 1.0.0 (PWA)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
