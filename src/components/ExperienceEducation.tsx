import { Link } from 'react-router-dom';

export default function ExperienceEducation() {
  return (
    <section className="py-32 relative bg-[#02050A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-xs font-bold tracking-[0.2em] text-electric-blue uppercase">04 / Experience</span>
              <div className="h-px flex-1 bg-gradient-to-r from-electric-blue/50 to-transparent" />
            </div>
            
            <div className="relative pl-6 md:pl-10 border-l border-white/10 pb-8">
              <div className="absolute top-0 left-0 -ml-[5px] w-2.5 h-2.5 rounded-full bg-electric-blue glow-blue ring-4 ring-navy-900" />
              
              <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-electric-blue/30 transition-colors">
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Data Science Intern
                </h3>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-electric-blue font-bold tracking-widest text-sm uppercase">Techgment</span>
                  <span className="text-slate-400 text-[10px] font-bold tracking-[0.2em] border border-white/10 bg-white/5 px-2.5 py-1 rounded-full">2 MONTHS</span>
                  <span className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 rounded-full">COMPLETED INTERNSHIP & TRAINING</span>
                </div>
                
                <ul className="space-y-4">
                  {['Data science workflows', 'Data cleaning & preparation', 'Exploratory data analysis', 'Real-world analytical problem solving'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 text-sm font-light">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-blue/50 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-xs font-bold tracking-[0.2em] text-electric-blue uppercase">05 / Education</span>
                <div className="h-px flex-1 bg-gradient-to-r from-electric-blue/50 to-transparent" />
              </div>
              
              <div className="relative pl-6 md:pl-10 border-l border-white/10">
                <div className="absolute top-0 left-0 -ml-[5px] w-2.5 h-2.5 rounded-full bg-white/30 ring-4 ring-navy-900" />
                
                <div className="glass-panel p-6 rounded-2xl">
                  <h3 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-3">
                    B.Sc. General
                    <span className="text-emerald-400 text-[9px] font-bold tracking-[0.2em] border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 rounded">GRADUATED</span>
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-slate-300 font-bold tracking-widest text-xs uppercase">Indira Gandhi National Open University</span>
                    <span className="hidden sm:block text-slate-600">•</span>
                    <span className="text-electric-blue text-[10px] font-bold tracking-[0.2em]">JUNE 2023 — JULY 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-bold tracking-[0.2em] text-electric-blue uppercase">Certifications</span>
                <div className="h-px flex-1 bg-gradient-to-r from-electric-blue/50 to-transparent" />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'DATA SCIENCE TRAINING CERTIFICATE - TECHGMENT',
                  'INTERNSHIP COMPLETION CERTIFICATE - TECHGMENT',
                  'TRAINING COMPLETION CERTIFICATE - TECHGMENT',
                  'MICROSOFT EXCEL WITH AI CERTIFICATE',
                  'SQL CERTIFICATE'
                ].map((cert, i) => (
                  <div key={i} className="p-5 glass-panel rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors group">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-1.5 shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-[10px] font-bold tracking-[0.15em] text-slate-300 leading-relaxed uppercase">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/certification" className="inline-flex items-center gap-3 px-6 py-3 bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-bold tracking-widest rounded-full hover:bg-electric-blue hover:text-navy-900 transition-colors group uppercase">
                  View Uploaded Certificates
                  <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center group-hover:bg-navy-900 group-hover:text-electric-blue">
                    <span className="text-[10px] leading-none">+</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
