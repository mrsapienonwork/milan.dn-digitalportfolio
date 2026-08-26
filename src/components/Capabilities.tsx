import { motion } from 'motion/react';
import { Database, FileSearch, LineChart, BarChart2, Table, Terminal, Code2, Lightbulb, Bot } from 'lucide-react';

const capabilities = [
  {
    title: "DATA ANALYSIS & REPORTING",
    desc: "Transform raw datasets into meaningful analysis, structured reports, and actionable insights.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "DATA CLEANING & PREPARATION",
    desc: "Identify missing values, duplicates, inconsistent formats, and data-quality issues.",
    icon: <FileSearch className="w-6 h-6" />
  },
  {
    title: "EXPLORATORY DATA ANALYSIS (EDA)",
    desc: "Explore datasets to identify trends, patterns, key relationships, and anomalies.",
    icon: <LineChart className="w-6 h-6" />
  },
  {
    title: "POWER BI DASHBOARDS",
    desc: "Build interactive dashboards that help businesses monitor KPIs and visualize performance.",
    icon: <BarChart2 className="w-6 h-6" />
  },
  {
    title: "EXCEL AUTOMATION & REPORTING",
    desc: "Create efficient Excel analysis, reporting workflows, pivot tables, and formulas.",
    icon: <Table className="w-6 h-6" />
  },
  {
    title: "SQL DATA ANALYSIS",
    desc: "Query and analyze relational databases to extract business-critical information.",
    icon: <Terminal className="w-6 h-6" />
  },
  {
    title: "PYTHON-BASED DATA ANALYSIS",
    desc: "Use Python, Pandas, NumPy, Matplotlib, and Seaborn for custom data workflows.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "BUSINESS INSIGHTS & CONSULTING",
    desc: "Convert analytical findings into understandable recommendations for decisions.",
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "AI / GENAI SOLUTIONS",
    desc: "Explore practical applications of AI and Generative AI for analytics workflows.",
    icon: <Bot className="w-6 h-6" />
  }
];

export default function Capabilities() {
  return (
    <section className="py-24 relative overflow-hidden" id="capabilities">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-electric-blue w-12" />
            <h2 className="text-electric-blue font-bold tracking-[0.2em] text-sm uppercase">Capabilities</h2>
          </div>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            9+ Core Analytical Services
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl font-light">
            Specialized capabilities offered for business and analytical projects, bridging the gap between raw data and strategic decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 group hover:bg-white/[0.02] transition-colors border border-white/5 hover:border-electric-blue/30 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-6 group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-navy-900 transition-all duration-500">
                {item.icon}
              </div>
              <div className="text-xs font-bold text-electric-blue mb-2 tracking-widest">
                [0{idx + 1}]
              </div>
              <h4 className="text-white font-bold tracking-wider mb-4 leading-tight">
                {item.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
