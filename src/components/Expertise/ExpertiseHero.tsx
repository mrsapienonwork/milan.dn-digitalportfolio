import { motion } from 'motion/react';

export default function ExpertiseHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="h-px bg-electric-blue w-8 md:w-12" />
            <h1 className="text-electric-blue font-bold tracking-[0.2em] text-xs md:text-sm uppercase">Expertise</h1>
            <div className="h-px bg-electric-blue w-8 md:w-12" />
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] max-w-4xl mx-auto">
            DATA IS THE SIGNAL.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-200">
              I FIND IT.
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Turning complex datasets into clear insights, meaningful visualizations, and data-driven decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
