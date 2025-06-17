
import React from 'react';
import { Database } from 'lucide-react';

const TechSection = () => {
  const technologies = [
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.823 6.855l-.133.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 25.049 25.049 0 0 1-3.233-.501z"/>
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
          Tecnologias que Domino
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
