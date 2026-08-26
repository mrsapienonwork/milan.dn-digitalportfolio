import { motion } from 'motion/react';
import { BarChart3, Database, Code2, LineChart, Cpu, PieChart } from 'lucide-react';

const areas = [
  {
    id: '01',
    title: 'DATA ANALYTICS',
    desc: 'Transforming raw datasets into actionable insights through cleaning, exploration, analysis, and interpretation.',
    tools: ['Python', 'Pandas', 'NumPy', 'Excel'],
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: '02',
    title: 'DATA VISUALIZATION',
    desc: 'Communicating complex information through clear, purposeful, and visually compelling dashboards and charts.',
    tools: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn'],
    icon: <PieChart className="w-6 h-6" />
  },
  {
    id: '03',
    title: 'PYTHON',
    desc: 'Using Python as the core environment for data preparation, analysis, visualization, and machine learning workflows.',
    tools: ['Pandas', 'NumPy', 'Scikit-learn'],
    icon: <Code2 className="w-6 h-6" />
  },
  {
    id: '04',
    title: 'SQL & DATABASES',
    desc: 'Extracting, aggregating, and analyzing structured data to uncover business-critical information and patterns.',
    tools: ['SQL', 'PostgreSQL', 'MySQL', 'Queries'],
    icon: <Database className="w-6 h-6" />
  },
  {
    id: '05',
    title: 'STATISTICS',
    desc: 'Applying statistical methods to validate findings, test hypotheses, and ensure data-driven conclusions are robust.',
    tools: ['Descriptive', 'Probability', 'Testing'],
    icon: <LineChart className="w-6 h-6" />
  },
  {
    id: '06',
    title: 'MACHINE LEARNING',
    desc: 'Developing predictive models and algorithms to classify data, forecast trends, and automate analytical tasks.',
    tools: ['Scikit-learn', 'Classification', 'Regression'],
    icon: <Cpu className="w-6 h-6" />
  }
];

export default function ExpertiseOverview() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 group hover:-translate-y-2 hover:border-electric-blue/40 hover:shadow-[0_10px_40px_rgba(0,229,255,0.1)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xs font-bold tracking-widest text-electric-blue">
                    {area.id}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-navy-900 transition-all duration-500">
                    {area.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 tracking-wider">
                  {area.title}
                </h3>
                
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                  {area.desc}
                </p>
              </div>
              
              <div>
                <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-3">
                  Tools & Focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold tracking-widest text-slate-300 group-hover:border-electric-blue/20 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
