import { motion } from 'motion/react';

export default function InfoStrip() {
  const skills = [
    'PYTHON',
    'SQL',
    'POWER BI',
    'EXCEL',
    'MACHINE LEARNING',
    'AI / GENAI'
  ];

  return (
    <div className="w-full border-y border-white/5 bg-navy-900/50 backdrop-blur-sm overflow-hidden py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between sm:justify-center sm:gap-12 lg:gap-24 overflow-x-auto no-scrollbar mask-edges">
          {skills.map((skill, index) => (
            <div key={skill} className="flex items-center gap-12 lg:gap-24 whitespace-nowrap shrink-0 px-4 sm:px-0">
              <span className="text-xs font-display font-medium tracking-[0.2em] text-slate-400">
                {skill}
              </span>
              {index < skills.length - 1 && (
                <div className="w-1.5 h-1.5 rounded-full bg-electric-blue/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
