import React from "react";
import { PERSONAL_INFO } from "../constants";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"></div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Let's build <br /> something{" "}
                <span className="text-indigo-500">amazing</span>.
              </h2>
              <p className="text-slate-400 text-lg mb-12">
                Currently open to new opportunities, freelance projects, or
                research collaborations. Reach out and let's discuss how I can
                help your team.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium group-hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-slate-300 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium group-hover:text-white transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Tonero Pius"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="tonero@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-slate-950 font-bold py-4 rounded-xl hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            {`© ${new Date().getFullYear()} Anthony Yua Ior, CE @ ITU.`}
          </p>
          <div className="flex gap-8">
            <a
              href={`https://${PERSONAL_INFO.github}`}
              target="_blank"
              className="text-slate-500 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
