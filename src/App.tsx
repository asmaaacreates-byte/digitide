import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

import { INITIAL_STATS } from './data';
import { ContactSubmission, CounterStat } from './types';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  // Hydrate submissions
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('digitide_submissions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Hydrate stats counters
  const [stats, setStats] = useState<CounterStat[]>(() => {
    try {
      const saved = localStorage.getItem('digitide_stats');
      return saved ? JSON.parse(saved) : INITIAL_STATS;
    } catch {
      return INITIAL_STATS;
    }
  });

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('digitide_submissions', JSON.stringify(submissions));
  }, [submissions]);

  useEffect(() => {
    localStorage.setItem('digitide_stats', JSON.stringify(stats));
  }, [stats]);

  // Handler for adding new contact form submission lead
  const handleNewSubmission = (sub: ContactSubmission) => {
    setSubmissions((prev) => [sub, ...prev]);
  };

  const handleClearSubmissions = () => {
    setSubmissions([]);
  };

  const handleDeleteSubmission = (id: string) => {
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
  };

  // Handler for updating statistics
  const handleUpdateStat = (id: string, newValue: number) => {
    setStats((prev) =>
      prev.map((s) => (s.id === id ? { ...s, value: newValue } : s))
    );
  };

  const handleUpdateFullStats = (updatedStats: CounterStat[]) => {
    setStats(updatedStats);
  };

  const handleResetStats = () => {
    setStats(INITIAL_STATS);
  };

  return (
    <div className="bg-[#030614] text-slate-100 min-h-screen relative font-sans antialiased text-base selection:bg-cyan-500/30 selection:text-white space-y-0.5">
      
      {/* Decorative radial gradients on root body content */}
      <div className="fixed top-0 left-12 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-10 w-[500px] h-[500px] bg-cyan-700/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Main components */}
      <Header
        isAdminOpen={isAdminOpen}
        setIsAdminOpen={setIsAdminOpen}
        submissionsCount={submissions.length}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Courses />
        <WhyChooseUs />
        <Stats
          stats={stats}
          onUpdateStat={handleUpdateStat}
          onResetStats={handleResetStats}
        />
        <Testimonials />
        <Contact onNewSubmission={handleNewSubmission} />
      </main>

      <Footer />

      {/* Interactive custom admin overlay */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        submissions={submissions}
        onClearSubmissions={handleClearSubmissions}
        onDeleteSubmission={handleDeleteSubmission}
        stats={stats}
        onUpdateFullStats={handleUpdateFullStats}
      />

      {/* Floater for testing counters easily/getting back to top */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => setIsAdminOpen(!isAdminOpen)}
          className="p-3 bg-[#0a122e]/90 hover:bg-[#071026] text-cyan-400 hover:text-white border border-cyan-500/20 hover:border-cyan-500/40 rounded-xl shadow-xl flex items-center justify-center space-x-1.5 backdrop-blur-sm group text-xs font-mono"
          title="Open customizable stats sliders and lead log"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Edit Counters Console</span>
        </button>
      </div>

    </div>
  );
}
