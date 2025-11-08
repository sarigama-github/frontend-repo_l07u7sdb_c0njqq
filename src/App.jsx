import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const accent = '#6366f1'; // Indigo-500

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar accent={accent} />
      <main>
        <Hero accent={accent} />
        <Projects accent={accent} />
        <Contact accent={accent} />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/60 dark:text-white/60">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm">
            <span>Built with</span>
            <span className="font-semibold" style={{ color: accent }}>React</span>
            <span>·</span>
            <span className="font-semibold" style={{ color: accent }}>Tailwind</span>
            <span>·</span>
            <span className="font-semibold" style={{ color: accent }}>Spline</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
