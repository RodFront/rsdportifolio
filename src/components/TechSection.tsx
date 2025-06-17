
import React from 'react';
import { Database } from 'lucide-react';

const TechSection = () => {
  const technologies = [
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <circle cx="12" cy="12" r="2"/>
          <path d="M12 1c-1.86 0-3.42.56-4.61 1.61C5.22 4.19 4 6.5 4 9.5c0 1.12.12 2.19.35 3.21C2.75 13.89 1 15.85 1 18c0 3.31 4.93 6 11 6s11-2.69 11-6c0-2.15-1.75-4.11-3.35-5.29C19.88 11.69 20 10.62 20 9.5c0-3-1.22-5.31-3.39-6.89C15.42 1.56 13.86 1 12 1z"/>
          <ellipse cx="12" cy="12" rx="11" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-60 12 12)" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      color: 'text-cyan-400'
    },
    {
      name: 'PostgreSQL',
      icon: <Database className="w-12 h-12" />,
      color: 'text-blue-400'
    },
    {
      name: 'Supabase',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M21.362 9.354H12.64a.367.367 0 0 1-.288-.136.36.36 0 0 1-.073-.308l1.744-8.179a.368.368 0 0 0-.372-.396.375.375 0 0 0-.293.132L2.637 14.6a.368.368 0 0 0-.032.428c.077.114.203.18.337.18h8.728a.367.367 0 0 1 .288.136c.077.087.1.207.073.308l-1.744 8.179a.368.368 0 0 0 .372.396.375.375 0 0 0 .293-.132L21.674 9.962a.368.368 0 0 0 .032-.428.368.368 0 0 0-.337-.18h-.007z"/>
        </svg>
      ),
      color: 'text-green-400'
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      ),
      color: 'text-teal-400'
    },
    {
      name: 'Vite',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355L8.69 14.408a.306.306 0 0 1-.388-.355l-.016-.066a.306.306 0 0 1 0-.183z"/>
          <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355L8.69 14.408a.306.306 0 0 1-.388-.355l-.016-.066a.306.306 0 0 1 0-.183z" fill="url(#viteGradient)"/>
          <defs>
            <linearGradient id="viteGradient" x1="6" y1="33" x2="235" y2="344" gradientTransform="translate(1.34 1.001) scale(.07142)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41d1ff"/>
              <stop offset="1" stopColor="#bd34fe"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Technologies I Master
        </span>
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group relative animate-fade-in"
            style={{ animationDelay: `${1000 + index * 200}ms` }}
          >
            <div className="relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-md border border-gray-800/50 p-[1px] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 hover:border-indigo-500/30">
              <div className="relative flex flex-col items-center justify-center gap-3 rounded-xl bg-black/60 backdrop-blur-sm px-4 py-6 transition-all duration-300 group-hover:bg-black/80">
                <div className={`${tech.color} transition-all duration-300 group-hover:scale-110 drop-shadow-lg`}>
                  {tech.icon}
                </div>
                <span className="font-inter font-medium text-white text-sm text-center">
                  {tech.name}
                </span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSection;
