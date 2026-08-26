import { motion } from 'motion/react';
import { Database, LineChart, Cpu, SearchCode, Binary, Activity, Layers } from 'lucide-react';

export default function HeroVisual() {
  const nodes = [
    { name: 'PYTHON', x: -28, y: -26, icon: SearchCode },
    { name: 'SQL', x: 32, y: -24, icon: Database },
    { name: 'POWER BI', x: -34, y: 26, icon: LineChart },
    { name: 'MACHINE LEARNING', x: 28, y: 32, icon: Cpu },
    { name: 'GENAI', x: 0, y: -42, icon: Binary },
    { name: 'ANALYTICS', x: 38, y: 8, icon: Activity },
    { name: 'PIPELINES', x: -38, y: -4, icon: Layers },
  ];

  const panels = [
    {
      title: 'MODEL TRAINING',
      content: ['Epochs: 450', 'Loss: 0.021', 'Accuracy: 98.4%'],
      className: 'top-0 left-0 lg:-left-20',
      delay: 0
    },
    {
      title: 'DATA STREAM',
      content: ['Rows: 2.4M', 'Latency: 12ms', 'Status: Active'],
      className: 'bottom-10 left-4 lg:-left-12',
      delay: 0.2
    },
    {
      title: 'PREDICTIONS',
      content: ['Confidence: High', 'Variance: Low', 'Delta: +14%'],
      className: 'top-1/4 -right-4 lg:-right-24',
      delay: 0.4
    }
  ];

  return (
    <div className="relative w-full max-w-[700px] aspect-square">
      
      {/* Intricate Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-[90%] h-[90%] rounded-full border border-white/5 border-dashed"
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[70%] h-[70%] rounded-full border border-electric-blue/10"
        />
        <div className="absolute w-[50%] h-[50%] rounded-full border border-white/5 bg-navy-800/30 backdrop-blur-3xl" />
      </div>

      {/* Central Core System */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center group w-full h-full pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-[28%] h-[28%] min-w-[140px] min-h-[140px] max-w-[192px] max-h-[192px] rounded-full border border-electric-blue/40 border-t-electric-blue border-r-electric-blue opacity-50 pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[20%] h-[20%] min-w-[110px] min-h-[110px] max-w-[144px] max-h-[144px] rounded-full bg-navy-900 border-2 border-electric-blue/80 flex items-center justify-center glow-blue shadow-[inset_0_0_30px_rgba(0,229,255,0.3)] overflow-hidden pointer-events-auto"
        >
          {/* Core Data lines effect */}
          <div className="absolute inset-0 opacity-30 flex flex-col justify-between py-2">
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "linear", delay: Math.random() }}
                className="h-px bg-electric-blue w-full"
              />
            ))}
          </div>

          <div className="text-center relative z-10 glass-panel px-4 py-2 rounded-full border-none bg-navy-900/80">
            <span className="block text-[11px] text-white font-bold tracking-[0.3em] mb-1">MILAN</span>
            <span className="block text-[9px] text-electric-blue font-bold tracking-widest">DATA SYSTEM</span>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Nodes and Connections */}
      <div className="absolute top-1/2 left-1/2 z-10 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {nodes.map((node, i) => (
          <div key={node.name}>
            {/* Pulsing Connection Line */}
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid slice">
              <motion.line
                x1="0"
                y1="0"
                x2={node.x}
                y2={node.y}
                stroke="rgba(0, 229, 255, 0.15)"
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.15 }}
              />
              {/* Traveling data particle */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="0.8"
                fill="#00E5FF"
                animate={{ 
                  cx: [0, node.x],
                  cy: [0, node.y],
                  opacity: [0, 1, 0] 
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "circIn" }}
              />
            </svg>
            
            {/* Premium Node Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.1, type: "spring" }}
              className="absolute w-10 h-10 md:w-12 md:h-12 -ml-5 -mt-5 md:-ml-6 md:-mt-6 rounded-full glass-panel flex items-center justify-center hover:border-electric-blue/50 transition-colors cursor-pointer pointer-events-auto group"
              style={{ top: `calc(50% + ${node.y}%)`, left: `calc(50% + ${node.x}%)` }}
            >
              <node.icon className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-electric-blue transition-colors" />
              <div className="absolute top-full mt-2 md:mt-3 px-2 py-1 glass-panel rounded text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-white whitespace-nowrap">
                {node.name}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Floating Glass Panels */}
      {panels.map((panel, i) => (
        <motion.div
          key={panel.title}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 7 + i, repeat: Infinity, delay: panel.delay, ease: "easeInOut" }}
          className={`absolute ${panel.className} z-30 w-40 sm:w-48 p-4 glass-panel rounded-xl hidden md:block`}
        >
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
            <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
            <div className="text-[10px] font-bold tracking-[0.2em] text-white">
              {panel.title}
            </div>
          </div>
          <div className="space-y-3">
            {panel.content.map(item => (
              <div key={item} className="flex flex-col gap-1.5">
                <span className="text-[10px] font-medium tracking-wide text-slate-400">{item}</span>
                <span className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-electric-blue/50 to-electric-blue"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 60 + 40}%` }}
                    transition={{ duration: 2, delay: 1 + i * 0.2 }}
                  />
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
