import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X, ZoomIn } from 'lucide-react';

const certificates = [
  { id: 1, title: 'Data Science Training Completion', issuer: 'Techgment', file: '/cert-training.png' },
  { id: 2, title: 'Data Science Internship Certificate', issuer: 'Techgment', file: '/cert-internship.png' },
  { id: 3, title: '30-Days SQL Micro Course', issuer: 'Skill Course (Learn More Pro)', file: '/cert-sql.png' },
  { id: 4, title: 'GenAI Powered Data Analytics Job Simulation', issuer: 'Forage / TATA', file: '/cert-tata.png' }
];

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-electric-blue w-12" />
            <h2 className="text-electric-blue font-bold tracking-[0.2em] text-sm uppercase">Credentials</h2>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications & Qualifications
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
            A curated list of my completed training programs, internships, and skill-based certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 group hover:border-electric-blue/30 transition-all cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedCert(cert.file)}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-6 group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-navy-900 transition-all duration-300">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-8">
                  {cert.issuer}
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-electric-blue">
                <ZoomIn className="w-4 h-4 transition-transform group-hover:scale-125" />
                VIEW CERTIFICATE
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 bg-navy-900/95 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 p-3 rounded-full transition-colors z-[110]"
              onClick={() => setSelectedCert(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full h-full max-h-[80vh] bg-navy-800 rounded-xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedCert} 
                alt="Certificate Viewer" 
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1600'; // Generic certificate fallback placeholder
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
