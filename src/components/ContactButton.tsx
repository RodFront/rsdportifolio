
import React from 'react';
import { Github, Phone } from 'lucide-react';

interface ContactButtonProps {
  type: 'github' | 'whatsapp';
  url: string;
  text: string;
  delay?: number;
}

const ContactButton: React.FC<ContactButtonProps> = ({ type, url, text, delay = 0 }) => {
  const Icon = type === 'github' ? Github : Phone;
  const bgColor = type === 'github' ? 'from-gray-700 to-gray-800' : 'from-green-600 to-green-700';
  const hoverColor = type === 'github' ? 'hover:shadow-gray-500/25' : 'hover:shadow-green-500/25';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block w-full animate-fade-in ${hoverColor}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${bgColor} p-[2px] transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
        <div className="relative flex items-center justify-center gap-3 rounded-xl bg-gray-900/90 px-6 py-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-800/90">
          <Icon 
            size={20} 
            className="text-white transition-all duration-300 group-hover:scale-110" 
          />
          <span className="font-inter font-medium text-white">
            {text}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ContactButton;
