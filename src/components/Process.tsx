import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      number: '01',
      title: 'DATA',
      desc: 'Collect and thoroughly understand available dataset structures.'
    },
    {
      number: '02',
      title: 'ANALYSIS',
      desc: 'Clean, explore, visualize, and analyze data for underlying signals.'
    },
    {
      number: '03',
      title: 'INSIGHTS',
      desc: 'Identify key trends, patterns, operational risks, and business opportunities.'
    },
    {
      number: '04',
      title: 'BUSINESS DECISIONS',
      desc: 'Convert data insights into practical, high-impact business actions.'
    }
  ];

  return (
    <section id="process" className="py-32 relative bg-navy-900 border-t border-white/5" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-24 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-electric-blue mb-4 uppercase">
            03 / Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            From Raw Data to Clear Decisions.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Progress Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-electric-blue via-cyan-400 to-transparent -translate-x-1/2 hidden md:block z-0 glow-blue" 
          />
          
          <div className="space-y-16 md:space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.title} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className={`flex-1 glass-panel p-6 md:p-8 rounded-2xl text-left ${isEven ? 'md:text-left' : 'md:text-right'} w-full md:w-auto relative z-10 hover:border-electric-blue/30 transition-colors group`}
                  >
                    <div className="text-[10px] font-bold tracking-[0.3em] text-electric-blue mb-3">STAGE {step.number}</div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide group-hover:text-glow transition-all">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-navy-900 border-2 border-electric-blue z-20 items-center justify-center glow-blue">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  {/* Empty space for grid balancing on desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
