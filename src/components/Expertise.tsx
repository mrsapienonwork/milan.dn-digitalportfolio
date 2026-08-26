import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, LineChart, Cpu, TerminalSquare, Code2, Network, BarChart4, BrainCircuit } from 'lucide-react';

export default function Expertise() {
  const [activeCategory, setActiveCategory] = useState<string>('DATA ANALYSIS');

  const categories = [
    { id: 'DATA ANALYSIS', label: 'DATA ANALYSIS', icon: TerminalSquare },
    { id: 'VISUALIZATION', label: 'DATA VISUALIZATION', icon: BarChart4 },
    { id: 'AI', label: 'AI & GENERATIVE AI', icon: BrainCircuit },
    { id: 'DATA SCIENCE', label: 'DATA SCIENCE & ANALYTICS', icon: Network }
  ];

  const tools = [
    { name: 'MICROSOFT EXCEL', categories: ['DATA ANALYSIS'], icon: Database },
    { name: 'SQL', categories: ['DATA ANALYSIS'], icon: Database },
    { name: 'PYTHON', categories: ['DATA ANALYSIS'], icon: Code2 },
    { name: 'PANDAS', categories: ['DATA ANALYSIS'], icon: TerminalSquare },
    { name: 'NUMPY', categories: ['DATA ANALYSIS'], icon: Code2 },
    
    { name: 'POWER BI', categories: ['VISUALIZATION'], icon: LineChart },
    { name: 'MATPLOTLIB', categories: ['VISUALIZATION'], icon: BarChart4 },
    { name: 'SEABORN', categories: ['VISUALIZATION'], icon: BarChart4 },
    
    { name: 'AI TOOLS', categories: ['AI'], icon: BrainCircuit },
    { name: 'GENERATIVE AI', categories: ['AI'], icon: BrainCircuit },
    { name: 'PROMPT ENGINEERING', categories: ['AI'], icon: BrainCircuit },
    
    { name: 'STATISTICS', categories: ['DATA SCIENCE'], icon: Network },
    { name: 'MACHINE LEARNING', categories: ['DATA SCIENCE'], icon: Cpu },
    { name: 'DATA CLEANING', categories: ['DATA SCIENCE'], icon: TerminalSquare },
    { name: 'EDA', categories: ['DATA SCIENCE'], icon: LineChart },
    { name: 'BUSINESS ANALYSIS', categories: ['DATA SCIENCE'], icon: Network }
  ];

  return (
    <section id="expertise" className="py-32 relative bg-[#02050A]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-electric-blue mb-4 uppercase flex items-center gap-2">
            <span className="w-8 h-px bg-electric-blue" />
            02 / Expertise
            <span className="w-8 h-px bg-electric-blue" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl">
            The Tools Behind the Thinking.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Panel: Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative text-left p-6 rounded-2xl transition-all duration-300 overflow-hidden ${
                    isActive 
                      ? 'glass-panel border-electric-blue/50 shadow-[0_0_30px_rgba(0,229,255,0.15)] bg-navy-800/80' 
                      : 'bg-navy-900/40 border border-white/5 hover:border-white/20 hover:bg-navy-900/80'
                  }`}
                >
                  {/* Active Indicator Line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${isActive ? 'bg-electric-blue glow-blue' : 'bg-transparent group-hover:bg-white/20'}`} />
                  
                  <div className="flex items-center justify-between ml-2">
                    <span className={`font-display text-lg font-bold tracking-wider transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                      {cat.label}
                    </span>
                    <cat.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-electric-blue' : 'text-slate-600 group-hover:text-slate-400'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Bento Grid Ecosystem */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-8 lg:p-12 min-h-[500px]">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-white/10">
              <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse glow-blue" />
              <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">
                {activeCategory} ECOSYSTEM
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {tools.map(tool => {
                  const isActiveTool = tool.categories.includes(activeCategory);
                  return (
                    <motion.div
                      layout
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: isActiveTool ? 1 : 0.2, 
                        scale: isActiveTool ? 1 : 0.95,
                        borderColor: isActiveTool ? 'rgba(0,229,255,0.4)' : 'rgba(255,255,255,0.05)',
                        backgroundColor: isActiveTool ? 'rgba(0,229,255,0.05)' : 'rgba(11,19,32,0.5)'
                      }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className={`p-5 rounded-xl border flex flex-col items-start gap-4 transition-shadow ${isActiveTool ? 'shadow-[0_0_20px_rgba(0,229,255,0.1)]' : ''}`}
                    >
                      <div className={`p-2 rounded-lg ${isActiveTool ? 'bg-electric-blue/10 text-electric-blue' : 'bg-white/5 text-slate-500'}`}>
                        <tool.icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-bold tracking-widest uppercase ${isActiveTool ? 'text-white' : 'text-slate-500'}`}>
                        {tool.name}
                      </span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
