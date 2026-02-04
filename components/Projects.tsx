
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import GalleryModal from './GalleryModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Status indicator logic
  const isCurrentFocus = (id: string) => id === 'connect-s' || id === 'clinical-prediction';

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-slate-400 max-w-xl">
              A selection of my recent full-stack applications and research projects 
              demonstrating technical depth and design quality.
            </p>
          </div>
          <a href="https://github.com/Anthony-Pius-1729" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors flex items-center gap-2">
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className={`group glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full border transition-all duration-500 hover:shadow-2xl ${
              isCurrentFocus(project.id) 
                ? 'border-indigo-500/30 hover:border-indigo-500/60 shadow-indigo-500/5 hover:shadow-indigo-500/20' 
                : 'border-white/5 hover:border-white/20'
            }`}>
              {/* Image Header */}
              <div className="aspect-video relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent"></div>
                
                {/* Active Badge */}
                {isCurrentFocus(project.id) && (
                  <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-600/90 text-white backdrop-blur-md shadow-lg border border-indigo-400/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider">Active Development</span>
                  </div>
                )}

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="flex flex-col gap-2">
                    <span className={`w-fit px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] bg-${project.color}-600/90 text-white backdrop-blur-md`}>
                      {project.subtitle}
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-2xl border border-white/10 group-hover:bg-indigo-600 group-hover:border-indigo-400 transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="mb-8 bg-white/5 rounded-2xl p-5 border border-white/5 group-hover:bg-white/10 transition-colors">
                   <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Technical Impact</h4>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                     {project.features.slice(0, 4).map((feature, idx) => (
                       <li key={idx} className="text-slate-300 text-xs flex items-start gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></div>
                         {feature}
                       </li>
                     ))}
                   </ul>
                </div>

                {/* Buttons Footer */}
                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5">
                   <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-grow md:flex-none px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      View Gallery
                    </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow md:flex-none px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all"
                      title="View Source Code"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GalleryModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
