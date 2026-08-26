import { motion } from 'motion/react';

const technologies = [
  {
    category: 'PROGRAMMING',
    items: ['Python', 'SQL']
  },
  {
    category: 'DATA',
    items: ['Pandas', 'NumPy']
  },
  {
    category: 'VISUALIZATION',
    items: ['Matplotlib', 'Seaborn', 'Power BI', 'Tableau', 'Excel']
  },
  {
    category: 'MACHINE LEARNING',
    items: ['Scikit-learn']
  }
];

export default function TechnologyStack() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-900/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-electric-blue w-12" />
            <h2 className="text-electric-blue font-bold tracking-[0.2em] text-sm uppercase">Stack</h2>
          </div>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Stack
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((group, idx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-6">
                {group.category}
              </h4>
              <div className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <div 
                    key={item}
                    className="glass-panel px-6 py-4 rounded-xl border border-white/5 hover:border-electric-blue/30 hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-300 tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
