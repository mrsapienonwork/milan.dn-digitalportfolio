import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none mask-edges" />
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/4" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/50 to-navy-800 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 lg:gap-8 items-center z-10 relative">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 xl:col-span-5"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 glass-panel mb-8">
            <Sparkles className="w-3 h-3 text-electric-blue" />
            <p className="text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase mt-0.5">
              DATA SCIENCE · AI · BUSINESS INTELLIGENCE
            </p>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-bold leading-[1.1] tracking-tight mb-6 sm:mb-8 text-white break-words">
            Aspiring <br />
            Data <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-cyan-200 to-white text-glow">
                ANALYST
              </span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="absolute bottom-2 left-0 h-3 bg-electric-blue/20 -z-10 -rotate-2"
              />
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-light">
            I transform complex, raw, unstructured datasets into meaningful visualizations and business insights that empower decision-makers to solve problems and drive strategy.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link 
              to="/work"
              className="group relative px-8 py-4 bg-electric-blue text-navy-900 font-bold tracking-widest text-sm rounded-full overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              EXPLORE MY WORK
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/contact"
              className="group px-8 py-4 border border-white/10 text-white hover:border-electric-blue hover:text-electric-blue font-bold tracking-widest text-sm rounded-full transition-all flex items-center justify-center gap-3 glass-panel hover:bg-electric-blue/5 w-full sm:w-auto"
            >
              LET'S CONNECT
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-navy-800 bg-navy-700 flex items-center justify-center glow-blue">
                <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse" />
              </div>
            </div>
            <div className="text-xs tracking-widest text-slate-400 font-medium leading-tight">
              AVAILABLE FOR NEW <br /> <span className="text-white font-bold">OPPORTUNITIES</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end mt-8 mb-12 lg:mt-0 lg:mb-0 w-full min-h-[320px] lg:min-h-0 lg:h-[750px] overflow-visible"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
