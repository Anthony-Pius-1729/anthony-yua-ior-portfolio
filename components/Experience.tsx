
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Path</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline line for mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:hidden"></div>
              
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3 text-left md:text-right pt-2">
                  <p className="text-indigo-400 font-bold">{exp.period}</p>
                  <p className="text-slate-500 text-sm">{exp.location}</p>
                </div>
                
                <div className="md:col-span-1 flex justify-center pt-2 relative hidden md:flex">
                   <div className="w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-600/20 z-10"></div>
                   <div className="absolute top-4 bottom-[-40px] w-px bg-slate-800"></div>
                </div>

                <div className="md:col-span-8 glass-card p-8 rounded-3xl border border-white/5">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-lg text-indigo-400 font-medium mb-6">{exp.company}</p>
                  
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-slate-400 flex gap-3 leading-relaxed">
                        <span className="text-indigo-500 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-indigo-500"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
