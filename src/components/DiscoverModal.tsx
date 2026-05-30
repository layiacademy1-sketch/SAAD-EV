import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Shield, ArrowUpRight, Search, PhoneCall, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { CONTENT_UNIVERSE, PREMIUM_COURSES } from '../data';

interface DiscoverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function DiscoverModal({ isOpen, onClose, onNavigate }: DiscoverModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [callRequested, setCallRequested] = useState(false);
  const [phone, setPhone] = useState('');

  // Sift through the content universe
  const filteredContents = CONTENT_UNIVERSE.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.typeLabel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCallSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setCallRequested(true);
    setTimeout(() => {
      setCallRequested(false);
      setPhone('');
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#050507]/96 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="w-full max-w-4xl bg-zinc-950 border border-[#d4af37]/35 rounded-[32px] p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto flex flex-col justify-between shadow-[0_30px_80px_rgba(212,175,55,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button top corner */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* upper layout */}
            <div className="grid md:grid-cols-12 gap-8 items-start mb-8 text-left">
              
              {/* Left Column: Explorer Database Search */}
              <div className="md:col-span-7">
                <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase font-bold block mb-2">EXPLORATEUR CONVERGENCE</span>
                <h3 className="text-2xl font-serif text-white font-semibold tracking-tight mb-5">
                  Rechercher dans la Maison du Savoir
                </h3>

                {/* Input Search widget */}
                <div className="relative mb-5">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-550" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Saisissez un mot-clé (ex: livre, neuro, deuil, leadership...)"
                    className="w-full pl-12 pr-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-full text-white font-mono text-xs placeholder-zinc-650 focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                {/* Filter results list */}
                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredContents.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onNavigate('contenus');
                        onClose();
                      }}
                      className="p-3.5 rounded-xl bg-[#050508] border border-zinc-900 hover:border-[#d4af37]/20 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                    >
                      <div>
                        <span className="text-[8.5px] font-mono text-[#d4af37] uppercase tracking-widest font-semibold">{item.typeLabel}</span>
                        <h4 className="text-xs text-white font-medium mt-0.5">{item.title}</h4>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-600 shrink-0" />
                    </div>
                  ))}
                  {filteredContents.length === 0 && (
                    <p className="text-xs text-zinc-600 italic font-mono p-4">Aucun résultat trouvé pour votre recherche.</p>
                  )}
                </div>
              </div>

              {/* Right Column: Executive Concierge appointment call */}
              <div className="md:col-span-5 md:border-l md:border-zinc-900 md:pl-8 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase font-bold block mb-2">CONCIERGERIE ÉLITE</span>
                  <h3 className="text-xl font-serif text-white font-semibold tracking-tight mb-3">
                    Entretien d'Orientation
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed mb-5">
                    Réservez une séance d'évaluation confidentielle d'une heure avec Sâad Abdel pour harmoniser vos objectifs professionnels (votre impact) avec votre alignement éthique suprême.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-850">
                  <AnimatePresence mode="wait">
                    {!callRequested ? (
                      <form onSubmit={handleCallSubmit} className="flex flex-col gap-3">
                        <div className="relative">
                          <PhoneCall className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+33 6 12 34 56 78"
                            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-zinc-950 border border-zinc-800 text-white font-mono text-xs focus:border-[#d4af37] focus:outline-none"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#bca03f] hover:from-amber-300 hover:to-amber-500 font-mono text-[10px] tracking-widest uppercase text-black font-semibold transition-transform"
                        >
                          Demander l'appel
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        <div>
                          <p className="font-semibold text-[9ppx] uppercase tracking-wider">REQUÊTE REÇUE</p>
                          <p className="font-light text-[10.5px]">Une secrétaire de l'Académie vous contactera sous 24 heures.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* Bottom Links shortcuts list */}
            <div className="border-t border-zinc-905 pt-6 flex flex-wrap gap-3 items-center justify-between text-left">
              <div className="flex flex-wrap gap-2.5">
                {[
                  { id: 'accueil', name: 'Accueil' },
                  { id: 'formations', name: 'Nos Formations' },
                  { id: 'vision', name: 'Notre Vision' },
                  { id: 'communaute', name: 'Communauté' }
                ].map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      onNavigate(sec.id);
                      onClose();
                    }}
                    className="px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-white font-sans text-[10px] uppercase font-light border border-zinc-850"
                  >
                    🚀 {sec.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-550 uppercase">
                <Shield className="w-3.5 h-3.5 text-[#d4af37]" /> CONVERGENCE ENCRYPTION ACTIVE
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
