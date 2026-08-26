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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'glass-panel border-b border-white/10 py-4 shadow-2xl' 
            : 'bg-transparent border-b border-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-[60]">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-display font-bold text-lg tracking-wider text-white group">
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
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors relative z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - OUTSIDE transformed parent to fix fixed positioning bug */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-[50] bg-navy-900 md:hidden overflow-y-auto flex flex-col pt-24 pb-12 px-6"
          >
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    key={link.name}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-3xl font-display font-medium tracking-wider hover:text-electric-blue transition-colors py-4 border-b border-white/5 ${isActive ? 'text-electric-blue' : 'text-white'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
              >
                <Link
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-8 px-6 py-5 bg-electric-blue text-navy-900 rounded-xl text-lg font-bold tracking-widest flex items-center justify-center gap-3 w-full transition-transform active:scale-95"
                >
                  LET'S CONNECT <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
