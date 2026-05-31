import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenDiscover: () => void;
  activeSection: string;
}

export default function Header({ onNavigate, onOpenDiscover, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'contenus', label: 'Bibliothèque' },
    { id: 'mobile', label: 'Podcasts' },
    { id: 'mission', label: 'À propos' }
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Absolute hidden SVG filter to strip out the black background and make it a clean transparent PNG rendering */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="remove-black-bg" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                1   0   0   0   0
                0   1   0   0   0
                0   0   1   0   0
                3   3   3   0  -0.12
              "
            />
          </filter>
        </defs>
      </svg>

      <header
        id="premium-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-black/85 backdrop-blur-xl border-[#d4af37]/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand - Left-aligned / Grid-oriented depending on width with the requested logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => handleItemClick('accueil')}>
            <div className="relative w-44 h-14 sm:w-64 sm:h-20 bg-transparent flex items-center justify-center overflow-hidden">
              <img
                src="https://image.noelshack.com/fichiers/2026/22/7/1780178760-chatgpt-image-31-mai-2026-00-00-01.jpg"
                alt="Sâad'ev Convergence Logo"
                referrerPolicy="no-referrer"
                style={{ filter: 'url(#remove-black-bg)' }}
                className="w-full h-full object-contain mix-blend-screen group-hover:scale-102 transition-transform duration-500 scale-100"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-xs uppercase font-mono tracking-widest relative py-2 transition-all duration-300 ${
                    isActive ? 'text-[#d4af37]' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_8px_#d4af37]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile hamburger toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded bg-zinc-900/80 border border-zinc-800 text-[#d4af37]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-2xl flex flex-col pt-24 px-8 pb-10"
          >
            <div className="flex flex-col gap-6 py-4 flex-1 overflow-y-auto">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`text-left text-sm uppercase font-mono tracking-[0.2em] py-3 border-b border-zinc-900 ${
                      isActive ? 'text-[#d4af37] pl-2 font-medium border-l border-l-[#d4af37] pr-2' : 'text-zinc-400'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-auto border-t border-zinc-900 pt-6">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenDiscover();
                }}
                className="w-full text-center py-4 rounded-xl border border-[#d4af37] bg-gradient-to-r from-[#d4af37]/10 to-amber-500/10 text-[#d4af37] font-mono text-xs tracking-widest uppercase font-semibold"
              >
                ACCÉDER À L'ACADÉMIE
              </button>
              <p className="text-center font-mono text-[9px] tracking-widest text-zinc-600 mt-4 uppercase">
                Sâad'ev Convergence — La Maison du Savoir Vivant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
