import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scrolling on mount
    document.body.style.overflow = 'hidden';

    let isMounted = true;
    let fallbackTimeout: NodeJS.Timeout;
    let fakeProgressTimer: NodeJS.Timeout;

    // Start a smooth indeterminate progress towards 85%
    fakeProgressTimer = setTimeout(() => {
      if (isMounted) {
        setProgress(85);
      }
    }, 50);

    const completeLoading = () => {
      if (!isMounted) return;
      // Snap to 100%
      setProgress(100);
      
      // Wait for the 100% animation to visually complete before fading out
      setTimeout(() => {
        if (isMounted) {
          setIsVisible(false);
          document.body.style.overflow = '';
        }
      }, 400);
    };

    if (document.readyState === 'complete') {
      // If already loaded, give a short minimum display time for visual polish
      fallbackTimeout = setTimeout(completeLoading, 600);
    } else {
      window.addEventListener('load', completeLoading);
      // Safety fallback: maximum display time
      fallbackTimeout = setTimeout(completeLoading, 3000);
    }

    return () => {
      isMounted = false;
      window.removeEventListener('load', completeLoading);
      clearTimeout(fallbackTimeout);
      clearTimeout(fakeProgressTimer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-navy-900 flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="font-display font-bold text-2xl md:text-3xl tracking-widest text-white mb-6">
              MILAN<span className="text-electric-blue">.DH</span>
            </div>
            
            {/* Progress Container */}
            <div className="w-40 md:w-48 h-[1px] bg-white/10 relative overflow-hidden mb-3">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ 
                  duration: progress === 100 ? 0.3 : 2.5, 
                  ease: progress === 100 ? "easeOut" : "easeOut" 
                }}
                className="absolute inset-y-0 left-0 bg-electric-blue"
              />
            </div>
            
            {/* Loading text */}
            <div className="text-[9px] font-medium tracking-[0.4em] text-slate-500 uppercase">
              loading
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
