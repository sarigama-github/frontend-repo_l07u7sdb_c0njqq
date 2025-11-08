import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = ({ accent = '#6366f1' }) => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-neutral-950 dark:via-neutral-950/30" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Building modern, playful tech experiences
          </h1>
          <p className="text-base md:text-lg text-black/70 dark:text-white/70 max-w-xl">
            I craft interactive products and delightful interfaces. Explore selected projects and reach out if you'd like to collaborate.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-white font-medium shadow-lg"
              style={{ backgroundColor: accent, boxShadow: `0 12px 32px ${accent}44` }}
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 border text-sm font-medium"
              style={{ borderColor: accent, color: accent }}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm backdrop-blur bg-white/60 dark:bg-neutral-900/60 pointer-events-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: accent }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: accent }} />
            </span>
            <span>Interactive 3D hero powered by Spline</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
