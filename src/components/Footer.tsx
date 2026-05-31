import { Sparkles, Globe, Shield, ArrowUp, Mail, Send, Radio } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#050507] border-t border-zinc-900 pt-16 pb-8 relative overflow-hidden">
      
      {/* Absolute top dividing gold line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.25)]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#d4af37]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Upper Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-16 text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col justify-start">
            {/* Absolute hidden SVG filter to strip out the black background and make it a clean transparent PNG rendering */}
            <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }}>
              <defs>
                <filter id="remove-black-bg-footer" colorInterpolationFilters="sRGB">
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

            <div className="flex items-center mb-4">
              <div className="relative w-44 h-14 sm:w-64 sm:h-20 bg-transparent flex items-center justify-start overflow-hidden">
                <img
                  src="https://image.noelshack.com/fichiers/2026/22/7/1780178760-chatgpt-image-31-mai-2026-00-00-01.jpg"
                  alt="Sâad'ev Convergence Logo"
                  referrerPolicy="no-referrer"
                  style={{ filter: 'url(#remove-black-bg-footer)' }}
                  className="w-full h-full object-contain mix-blend-screen"
                />
              </div>
            </div>
            <p className="mt-5 text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Une plateforme globale de connaissance intégrative qui réunit spiritualité, neurosciences cognitives, stoïcisme et psychologie moderne d'élite pour éclairer l'être humain.
            </p>
          </div>

          {/* Quick Links Nav */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4af37] font-bold mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { id: 'accueil', name: 'Accueil' },
                { id: 'mission', name: 'Notre Mission' },
                { id: 'sources', name: 'Sources d’Études' },
                { id: 'contenus', name: 'Bibliothèque' },
                { id: 'formations', name: 'Programmes' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-xs text-zinc-400 hover:text-white transition-colors text-left font-light font-sans"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4af37] font-bold mb-4">
              Canaux d'Inspiration
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-400 font-sans font-light">
              <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
                Maison Mère : Rabat - Paris
              </span>
              <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                layiacademy.1@gmail.com
              </span>
              <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-[#d4af37]" />
                Canal Telegram VIP
              </span>
              <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-[#d4af37]" />
                Podcast Hebdomadaire
              </span>
            </div>
          </div>

        </div>

        {/* Lower Divider & Back to top */}
        <div className="border-t border-zinc-900/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-550 uppercase tracking-wider">
            <span>© {currentYear} Sâad'ev Convergence. Tous droits réservés.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hover:text-[#d4af37] cursor-pointer flex items-center gap-1">
              <Shield className="w-3 h-3" /> Mentions Légales
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 text-[#d4af37] hover:border-[#d4af37] transition-all group"
            title="Revenir au sommet"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
