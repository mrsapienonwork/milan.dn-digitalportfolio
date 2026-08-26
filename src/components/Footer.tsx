export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <span className="font-display font-bold text-lg tracking-wider text-white">
            MILAN DHOUNDIYAL
          </span>
          <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
            Data Analyst · Data Science · AI
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://linkedin.com/in/milan-dhoundiyal-9bbb58375/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors uppercase text-center"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:milan1.rfac@gmail.com"
            className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors uppercase text-center"
          >
            Email
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-300">
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
            AVAILABLE FOR OPPORTUNITIES
          </div>
          <p className="text-[10px] text-slate-600">
            © {currentYear} MILAN DHOUNDIYAL. ALL RIGHTS RESERVED.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
