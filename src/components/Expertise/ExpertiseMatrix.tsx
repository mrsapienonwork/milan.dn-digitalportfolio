import { motion } from 'motion/react';

const matrixData = [
  {
    category: 'ANALYZE',
    items: ['Data Cleaning', 'EDA', 'Statistics', 'SQL']
  },
  {
    category: 'VISUALIZE',
    items: ['Dashboards', 'Charts', 'Reports', 'Storytelling']
  },
  {
    category: 'BUILD',
    items: ['Python', 'SQL', 'ML Models', 'Data Pipelines']
  },
  {
    category: 'INTERPRET',
    items: ['Patterns', 'Trends', 'Relationships', 'Insights']
  }
];

export default function ExpertiseMatrix() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h3 className="font-display text-3xl font-bold text-white mb-4">
            EXPERTISE MATRIX
          </h3>
          <p className="text-slate-400 font-light max-w-2xl mx-auto">
            A structural overview of core analytical capabilities and how they connect to deliver end-to-end data solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden glass-panel border border-white/10">
          {matrixData.map((col, idx) => (
            <motion.div 
              key={col.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-navy-950 p-6 md:p-10 flex flex-col"
            >
              <div className="text-xs font-bold tracking-[0.2em] text-electric-blue uppercase mb-8 border-b border-white/5 pb-4">
                {col.category}
              </div>
              <ul className="space-y-4 flex-1">
                {col.items.map((item) => (
                  <li key={item} className="text-sm font-medium text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
