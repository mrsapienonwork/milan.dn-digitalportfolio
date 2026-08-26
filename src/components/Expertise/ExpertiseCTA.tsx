import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExpertiseCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-navy-900 to-[#02050A]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            LET'S TURN DATA INTO SIGNAL.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Have a dataset, problem, or idea? Let's explore what the data can reveal.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-electric-blue text-navy-900 font-bold tracking-widest text-sm rounded-full overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] group"
          >
            LET'S CONNECT
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
