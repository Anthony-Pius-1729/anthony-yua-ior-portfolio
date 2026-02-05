import React from "react";
import { PERSONAL_INFO } from "../constants";
import profilePic from "../images/profile/profilepic.png";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={profilePic}
              alt="Professional portrait placeholder"
              className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I specialize in bridging technical complexity with user-centric
              design. Whether it's building a platform for 40,000 students or
              developing deep learning models for clinical research, my goal is
              always to create high-performance, scalable software.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-white font-bold mb-2">Lab Focus</h4>
                <p className="text-slate-400 text-sm">
                  Clinical Prediction Tool
                </p>
                <p className="text-indigo-400 text-xs font-semibold uppercase mt-1">
                  Bioinformatics
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-white font-bold mb-2">Platform Focus</h4>
                <p className="text-slate-400 text-sm">ConnectS Ecosystem</p>
                <p className="text-purple-400 text-xs font-semibold uppercase mt-1">
                  ITU Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
