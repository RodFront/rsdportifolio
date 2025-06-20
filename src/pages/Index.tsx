
import React from 'react';
import ProjectButton from '../components/ProjectButton';
import ContactButton from '../components/ContactButton';
import TechSection from '../components/TechSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black font-inter relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-cyan-600/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-violet-600/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl w-full mx-auto text-center">
          
          {/* Profile Section */}
          <div className="mb-12 animate-fade-in">
            <div className="relative inline-block mb-8">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center overflow-hidden border border-gray-800/50">
                  <img 
                    src="/lovable-uploads/5ef03453-80b9-408b-b783-08a55337cbbb.png" 
                    alt="Rodrigo Alves Souza" 
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Rodrigo Alves Souza
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-jetbrains animate-fade-in" style={{ animationDelay: '400ms' }}>
              Desenvolvedor Full Stack
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
              <em>"Criando soluções web completas e modernas, do frontend ao backend."</em>
            </p>
          </div>

          {/* Tech Section */}
          <TechSection />

          {/* Projects Section */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Meus Projetos
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <ProjectButton 
                title="AppBarba" 
                url="https://appbarba.vercel.app/" 
                delay={1200}
              />
              <ProjectButton 
                title="AgendaNails" 
                url="https://agendanails.vercel.app/" 
                delay={1400}
              />
              <ProjectButton 
                title="IDFisioSystem" 
                url="https://idfisiosystem.vercel.app/login" 
                delay={1600}
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <ContactButton 
              type="github" 
              url="http://github.com/RodFront" 
              text="GitHub" 
              delay={1800}
            />
            <ContactButton 
              type="whatsapp" 
              url="https://wa.me/5592981196236" 
              text="(92) 98119-6236" 
              delay={2000}
            />
          </div>

          {/* Glassmorphism Footer */}
          <div className="mt-16 p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-gray-800/30 animate-fade-in" style={{ animationDelay: '2200ms' }}>
            <p className="text-gray-400 text-sm">
              Developed by Rodrigo Souza
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
