import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ accent = '#6366f1' }) => {
  const items = [
    {
      title: 'Playful UI Toolkit',
      description: 'A set of animated, accessible components for fast product prototyping.',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      link: 'https://example.com',
    },
    {
      title: '3D Landing Experience',
      description: 'An interactive hero built with Spline and WebGL for high-impact branding.',
      tags: ['Spline', 'WebGL', 'UX'],
      link: 'https://example.com',
    },
    {
      title: 'Realtime Collaboration App',
      description: 'Multiplayer editing with presence indicators and optimistic updates.',
      tags: ['FastAPI', 'MongoDB', 'WebSockets'],
      link: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-black/70 dark:text-white/70">A few things I loved building recently.</p>
          </div>
          <div className="hidden md:block h-2 w-24 rounded-full" style={{ backgroundColor: accent }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
