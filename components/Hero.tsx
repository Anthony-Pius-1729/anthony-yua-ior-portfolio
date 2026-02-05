import React from "react";
import { PERSONAL_INFO } from "../constants";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-indigo-500 font-semibold tracking-widest mb-4 animate-fade-in uppercase">
            Computer Engineering @ ITU
          </h2>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Engineering the <br />
            <span className="text-blue-400">next generation</span> of impact.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            Currently developing clinical prediction tools at ITU Bioinformatics
            Lab and building ConnectS—a dedicated ecosystem for student
            collaboration and team building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-all text-center"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-card text-white rounded-xl font-bold hover:bg-white/10 transition-all text-center"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-20 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white">ITU</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">
                ConnectS Dev
              </p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-3xl font-bold text-white">Bio</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">
                Research Asst
              </p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-3xl font-bold text-white">AI</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">
                Prediction Tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
