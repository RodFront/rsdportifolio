
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectButtonProps {
  title: string;
  url: string;
  delay?: number;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ title, url, delay = 0 }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-[2px] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
        <div className="relative flex items-center justify-between rounded-xl bg-gray-900/90 px-6 py-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-800/90">
          <span className="font-inter font-medium text-white transition-colors duration-300 group-hover:text-indigo-300">
            {title}
          </span>
          <ExternalLink 
            size={18} 
            className="text-indigo-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-300" 
          />
        </div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </a>
  );
};

export default ProjectButton;
