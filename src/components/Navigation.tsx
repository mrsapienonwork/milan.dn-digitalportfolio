import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'EXPERTISE', href: '/work' },
    { name: 'PROJECT', href: '/project' },
    { name: 'CERTIFICATION', href: '/certification' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'glass-panel border-white/10 py-4 shadow-2xl' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg tracking-wider text-white group">
          MILAN<span className="text-electric-blue transition-colors group-hover:text-white">.DH</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.name} 
                to={link.href}
                className={`group relative text-xs font-semibold tracking-widest transition-colors py-2 ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-px bg-electric-blue transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="group flex items-center gap-2 text-xs font-bold tracking-widest text-navy-900 bg-electric-blue hover:bg-white transition-colors px-6 py-2.5 rounded-full"
          >
            LET'S CONNECT 
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="absolute top-full left-0 right-0 glass-panel border-t border-white/10 flex flex-col p-6 gap-2 md:hidden shadow-2xl"
          >
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.href;
              return (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-lg font-display font-medium tracking-wider hover:text-electric-blue transition-colors py-4 border-b border-white/5 ${isActive ? 'text-electric-blue' : 'text-white'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 px-6 py-4 bg-electric-blue text-navy-900 rounded-lg text-sm font-bold tracking-widest flex items-center justify-center gap-2"
              >
                LET'S CONNECT <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
