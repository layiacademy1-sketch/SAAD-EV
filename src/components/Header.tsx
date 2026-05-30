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
    { id: 'mission', label: 'Mission' },
    { id: 'sources', label: 'Nos Sources' },
    { id: 'contenus', label: 'Bibliothèque' },
    { id: 'mobile', label: 'Application' },
    { id: 'formations', label: 'Formations' },
    { id: 'vision', label: 'Notre Vision' },
    { id: 'communaute', label: 'Communauté' }
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        id="premium-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-black/85 backdrop-blur-xl border-[#d4af37]/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand - Left-aligned / Grid-oriented depending on width */}
          <div className="flex flex-col cursor-pointer group" onClick={() => handleItemClick('accueil')}>
            <span className="font-serif text-lg sm:text-xl tracking-[0.3em] sm:tracking-[0.4em] text-[#d4af37] flex items-center gap-2 font-bold uppercase transition-all duration-300 group-hover:text-amber-300">
              SÂAD’EV CONVERGENCE
              <Sparkles className="w-4 h-4 text-[#d4af37] animate-pulse" />
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase font-mono tracking-[0.4em] text-zinc-400 mt-1 font-semibold transition-colors group-hover:text-zinc-200">
              LA MAISON DU SAVOIR VIVANT
            </span>
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

          {/* Discover Button (CTA) */}
          <div className="hidden lg:block">
            <button
              onClick={onOpenDiscover}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/5 text-white font-mono text-[11px] tracking-widest uppercase transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Découvrir
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-x-0 bottom-0 top-full bg-gradient-to-t from-[#d4af37]/20 to-transparent transition-all group-hover:top-0 duration-500" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenDiscover}
              className="px-3.5 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/5 text-white font-mono text-[10px] tracking-wider uppercase"
            >
              Découvrir
            </button>
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
