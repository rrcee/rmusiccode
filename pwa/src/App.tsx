import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Home, Library, Search as SearchIcon, Settings } from 'lucide-react'
import { SearchPage } from './components/SearchPage'
import { HomePage } from './components/HomePage'
import { LibraryPage } from './components/LibraryPage'
import { SettingsPage } from './components/SettingsPage'
import { Player } from './components/Player'

function NavLink({ to, icon: Icon, label }: { to: string, icon: any, label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`flex flex-col items-center justify-center gap-1 w-16 h-full transition ${isActive ? 'text-red-500' : 'text-white/60 hover:text-white/80'}`}>
      <Icon size={22} strokeWidth={isActive ? 2.5 : 2} fill={isActive ? "currentColor" : "none"} className={isActive ? "drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" : ""} />
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen overflow-hidden bg-black text-white relative font-sans">
        <main className="flex-1 overflow-y-auto pb-32">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
        
        <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none pb-6 px-4">
          <div className="w-full pointer-events-auto shadow-2xl">
            <Player />
          </div>
          
          <nav className="w-full max-w-sm h-16 mt-2 bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/5 rounded-[32px] flex items-center justify-around px-2 pointer-events-auto relative overflow-hidden shadow-2xl">
            <NavLink to="/" icon={Home} label="Home" />
            <NavLink to="/search" icon={SearchIcon} label="Search" />
            <NavLink to="/library" icon={Library} label="Library" />
            <NavLink to="/settings" icon={Settings} label="Settings" />
          </nav>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
