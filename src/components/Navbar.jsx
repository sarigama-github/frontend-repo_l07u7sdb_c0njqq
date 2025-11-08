import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Navbar = ({ accent = '#6366f1' }) => {
  const linkStyle = { color: accent };
  const buttonStyle = {
    backgroundColor: accent,
    boxShadow: `0 8px 24px ${accent}33`,
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-lg">
          <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: accent }} />
          <span>MyPortfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="hover:opacity-80 transition" style={linkStyle}>Home</a>
          <a href="#projects" className="hover:opacity-80 transition" style={linkStyle}>Projects</a>
          <a href="#contact" className="hover:opacity-80 transition" style={linkStyle}>Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-white rounded-full px-4 py-2 text-sm font-medium transition active:scale-[0.98]"
            style={buttonStyle}
          >
            <Download size={16} />
            Resume
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Linkedin size={18} />
          </a>
          <a href="mailto:you@example.com" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
