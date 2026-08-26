export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-electric-blue mb-6 uppercase">
              06 / About
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              Where Data, AI <br className="hidden sm:block" />
              and Strategy Meet.
            </h2>
            
            <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed font-light mb-12">
              <p>
                A recently graduated B.Sc. General student (IGNOU, 2023–2026), actively upskilling in data analytics, AI tools, machine learning, and business intelligence.
              </p>
              <p>
                My core mission is to transform complex, raw, unstructured datasets into meaningful visualizations and business insights that empower decision-makers to solve problems and drive strategy.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-electric-blue mb-4 uppercase">5 Pillars of Growth</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {['Data', 'AI', 'Insights', 'Strategy', 'Growth'].map((pillar, i) => (
                  <div key={pillar} className="px-3 md:px-4 py-2 md:py-3 border border-white/10 rounded-lg bg-white/[0.02] text-white font-medium text-xs md:text-sm flex items-center gap-2 md:gap-3">
                    <span className="text-electric-blue font-bold">0{i + 1}</span> <span className="truncate">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 border border-white/10 rounded-2xl overflow-hidden group glass-panel p-2">
            <div className="w-full h-full rounded-xl overflow-hidden relative bg-navy-900 border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900 to-navy-700" />
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              
              <img 
                src="/profile.png" 
                alt="Milan Dhoundiyal" 
                className="w-full h-full object-cover object-top relative z-10 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800'; // Fallback so UI doesn't break if file is missing
                }}
              />
              
              <div className="absolute inset-0 border border-electric-blue/20 rounded-xl z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-navy-900 to-transparent z-20 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
