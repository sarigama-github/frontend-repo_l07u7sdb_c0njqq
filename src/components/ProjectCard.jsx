import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tags = [], link, accent = '#6366f1' }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 hover:shadow-xl transition overflow-hidden"
    >
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          <span className="inline-flex items-center justify-center rounded-full p-2 text-white" style={{ backgroundColor: accent }}>
            <ExternalLink size={16} />
          </span>
        </div>
        <p className="text-sm text-black/70 dark:text-white/70">{description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((t) => (
            <span key={t} className="text-xs rounded-full px-2.5 py-1 border" style={{ borderColor: accent, color: accent }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
