import { Mail, Phone, MapPin, ArrowRight, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none mask-edges" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-electric-blue w-12" />
            <h2 className="text-electric-blue font-bold tracking-[0.2em] text-sm uppercase">Let's Connect</h2>
          </div>
          
          <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
            Have data. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-200">
              Let's find the signal.
            </span>
          </h3>
          
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12">
            I am always open to discussing data analytics projects, business intelligence architecture, or partnership opportunities. Let's talk about how we can turn your raw data into strategic growth.
          </p>

          <div className="space-y-6">
            <a href="mailto:milandhoundiyal482@gmail.com" className="flex items-start gap-4 p-6 glass-panel rounded-2xl group hover:border-electric-blue/30 transition-colors border border-white/5 bg-white/[0.02]">
              <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-navy-900 transition-all duration-300 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-500 mb-2 uppercase">Email</h4>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">milandhoundiyal482@gmail.com</span>
                </div>
              </div>
            </a>

            <a href="tel:+919650897587" className="flex items-center gap-4 p-6 glass-panel rounded-2xl group hover:border-electric-blue/30 transition-colors border border-white/5 bg-white/[0.02]">
              <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-navy-900 transition-all duration-300 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-500 mb-2 uppercase">Phone / WhatsApp</h4>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">+91 9650897587</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 glass-panel rounded-2xl group border border-white/5 bg-white/[0.02]">
              <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-500 mb-2 uppercase">Location</h4>
                <span className="text-sm font-medium text-slate-300">Delhi, India</span>
              </div>
            </div>
            
            <a href="https://linkedin.com/in/milan-dhoundiyal-9bbb58375/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 glass-panel rounded-2xl group hover:border-electric-blue/30 transition-colors border border-white/5 bg-white/[0.02]">
              <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-navy-900 transition-all duration-300 shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-500 mb-2 uppercase">Network</h4>
                <span className="text-sm font-medium text-slate-300 group-hover:text-electric-blue transition-colors flex items-center gap-2">
                  Connect on LinkedIn <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
