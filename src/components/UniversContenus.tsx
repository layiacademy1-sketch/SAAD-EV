import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Headphones, ShieldAlert, Monitor, Sparkles, Star, Quote, Volume2, Play, Pause, Compass, Layers } from 'lucide-react';
import { CONTENT_UNIVERSE } from '../data';
import { ContentItem } from '../types';

interface UniversContenusProps {
  onPlayPodcast: (title: string, author: string) => void;
  isPlayingPodcast: boolean;
  currentPlayingTitle: string;
}

export default function UniversContenus({ onPlayPodcast, isPlayingPodcast, currentPlayingTitle }: UniversContenusProps) {
  const [activeItem, setActiveItem] = useState<ContentItem>(CONTENT_UNIVERSE[0]);

  return (
    <section id="contenus" className="py-24 sm:py-32 bg-[#050507] relative overflow-hidden">
      
      {/* Dynamic light glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative starry grid pattern */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#d4af37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              BIBLIOTHÈQUE SUPRÊME
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white font-semibold mt-4 italic">
            Univers de <span className="text-[#d4af37] not-italic font-bold">contenus</span>
          </h2>
          
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light max-w-xl">
            L'Alliance du papier physique d'exception et du numérique immersif à portée de main. Découvrez nos supports d'apprentissage conçus pour l'élévation de votre être.
          </p>
        </div>

        {/* Core Layout with Selectors and 3D Mock-up Panel */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content Menu Items Selector */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {CONTENT_UNIVERSE.map((item) => {
              const isActive = activeItem.id === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group/btn ${
                    isActive
                      ? 'bg-gradient-to-r from-zinc-950 to-zinc-900 border-[#d4af37] shadow-[0_10px_25px_rgba(212,175,55,0.05)]'
                      : 'bg-gradient-to-br from-white/[0.04] to-zinc-950/20 border-white/5 hover:border-[#d4af37]/35'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      {/* Icons depending on medium type */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                        isActive
                          ? 'bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37]'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-500 group-hover/btn:text-white'
                      }`}>
                        {item.type === 'livre' && <BookOpen className="w-4 h-4" />}
                        {item.type === 'ebook' && <Layers className="w-4 h-4" />}
                        {item.type === 'audio' && <Headphones className="w-4 h-4" />}
                        {item.type === 'podcast' && <Volume2 className="w-4 h-4" />}
                        {item.type === 'synthese' && <Compass className="w-4 h-4" />}
                      </div>

                      <div>
                        {/* Light medium badge */}
                        <span className="text-[9px] font-mono tracking-widest text-[#d4af37]/85 uppercase font-semibold">
                          {item.typeLabel}
                        </span>
                        <h3 className="text-sm font-sans font-medium text-white tracking-tight mt-0.5">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-zinc-500 font-light mt-1 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 font-mono text-[10px] text-[#d4af37]">
                      <Star className="w-3 h-3 fill-[#d4af37]" />
                      <span>{item.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Right side arrow */}
                  <div className="absolute right-4 bottom-4 opacity-0 group-hover/btn:opacity-100 transition-opacity">
                    <span className="text-[9px] font-mono text-zinc-650 tracking-widest uppercase">Select &gt;</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Immersive interactive Mockup Frame container */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg rounded-3xl bg-zinc-950 border border-zinc-900 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative overflow-hidden"
              >
                {/* Background internal glow */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none filter blur-3xl transition-all duration-700"
                  style={{
                    background: `radial-gradient(circle at 50% 40%, ${activeItem.glowColor}, transparent 65%)`
                  }}
                />

                {/* Simulated 3D Mockup Container */}
                <div className="h-[260px] flex items-center justify-center relative mb-6">
                  
                  {/* --- 1. DYNAMIC MOCKUP: PHYSICAL BOOK (LIVRE) --- */}
                  {activeItem.type === 'livre' && (
                    <motion.div 
                      className="relative w-40 h-56 group cursor-grab active:cursor-grabbing"
                      style={{ perspective: '1000px' }}
                      whileHover={{ rotateY: -10, rotateX: 5 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    >
                      {/* Spine of the book (shadow structure for depth) */}
                      <div className="absolute left-0 top-0 w-3 h-full bg-gradient-to-r from-amber-600/60 to-black/90 rounded-l shadow-[inset_1px_0_4px_rgba(255,255,255,0.15)] z-20" />
                      
                      {/* Main Cover Book */}
                      <div className="absolute left-2 inset-y-0 right-0 rounded-r bg-zinc-900 border-l border-l-black border-y border-y-[#d4af37]/35 border-r border-r-[#d4af37]/25 shadow-[10px_10px_30px_rgba(0,0,0,0.8)] p-6 z-10 flex flex-col justify-between overflow-hidden">
                        {/* Decorative Gold Border */}
                        <div className="absolute inset-2 border border-[#d4af37]/20 pointer-events-none rounded" />
                        
                        <div className="relative text-center shrink-0">
                          <span className="text-[7.5px] font-mono tracking-widest text-[#d4af37] uppercase">Sâad'ev Convergence</span>
                          <div className="w-6 h-px bg-[#d4af37]/35 mx-auto mt-1" />
                        </div>

                        <div className="text-center my-auto">
                          <h4 className="font-sans text-sm sm:text-base text-white tracking-wide font-medium leading-snug">
                            {activeItem.title}
                          </h4>
                          <span className="block text-[8px] font-mono text-zinc-500 uppercase mt-2">{activeItem.author}</span>
                        </div>

                        <div className="flex justify-center mt-auto">
                          <Sparkles className="w-5 h-5 text-[#d4af37] animate-pulse" />
                        </div>
                      </div>

                      {/* Behind page shadows (stacked paper effect) */}
                      <div className="absolute left-[162px] top-1 bottom-1 w-2 bg-gradient-to-r from-zinc-100 to-zinc-300 rounded-r border-y border-zinc-400/30 z-0" />
                    </motion.div>
                  )}

                  {/* --- 2. DYNAMIC MOCKUP: TABLETE/E-BOOK --- */}
                  {activeItem.type === 'ebook' && (
                    <div className="w-64 h-48 rounded-2xl bg-[#09090c] border-4 border-zinc-800 shadow-[0_20px_40px_rgba(0,0,0,0.9)] p-4 flex flex-col relative">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-700" />
                      <div className="w-full flex-1 bg-[#050508] border border-zinc-900 rounded-lg p-4 flex flex-col justify-between overflow-hidden text-left font-sans">
                        <div className="flex justify-between items-center text-[7px] font-mono text-zinc-500 uppercase tracking-widest">
                          <span>Sâad'ev Convergence</span>
                          <span>Chapitre I</span>
                        </div>
                        <div className="my-3">
                          <h4 className="text-[11px] font-medium text-[#d4af37] leading-tight mb-2">{activeItem.title}</h4>
                          <p className="text-[8.5px] text-zinc-400 font-light leading-relaxed line-clamp-3">
                            « ...Les neurosciences cognitives modernes confirment aujourd'hui l'impact régulateur de la contemplation et du silence éthique sur l'activité des ondes cérébrales de l'amygdale, facilitant l'éveil spirituel... »
                          </p>
                        </div>
                        <span className="text-[7px] font-mono text-zinc-650 text-right">Page 24 / 124</span>
                      </div>
                    </div>
                  )}

                  {/* --- 3. DYNAMIC MOCKUP: AUDIO / HEADPHONES PREVIEW --- */}
                  {activeItem.type === 'audio' && (
                    <div className="flex flex-col items-center gap-4 text-center w-full max-w-sm">
                      {/* Stylized premium headphones circle layout */}
                      <div className="relative w-24 h-24 rounded-full bg-zinc-950 border border-[#d4af37]/30 flex items-center justify-center shadow-inner">
                        <div className="absolute inset-1.5 rounded-full border border-[#d4af37]/10 animate-ping opacity-30" />
                        <Headphones className="w-10 h-10 text-[#d4af37]" />
                      </div>

                      {/* Interactive simulated player lines */}
                      <div className="w-full px-8 mt-2">
                        <div className="flex justify-between text-[9px] font-mono text-zinc-500 mb-1">
                          <span>04:12</span>
                          <span className="text-[#d4af37] tracking-wider uppercase font-semibold">PREVIEW PREMIUM</span>
                          <span>08:45:00</span>
                        </div>
                        {/* Audio Wave anim */}
                        <div className="h-6 flex items-center justify-center gap-1">
                          {[30, 45, 90, 60, 40, 20, 50, 75, 40, 60, 80, 100, 70, 30, 45, 60].map((h, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: [`${h * 0.2}%`, `${h}%`, `${h * 0.2}%`] }}
                              transition={{ repeat: Infinity, duration: 1.2 + i * 0.08, ease: 'easeInOut' }}
                              className="w-1 rounded-sm bg-gradient-to-t from-[#d4af37] to-amber-200"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- 4. DYNAMIC MOCKUP: PODCAST DIALOGUE INTERFACE --- */}
                  {activeItem.type === 'podcast' && (
                    <div className="w-64 h-52 bg-[#050508] border border-zinc-800 rounded-3xl p-5 flex flex-col justify-between shadow-2xl overflow-hidden">
                      <div className="flex items-center justify-between text-[7.5px] font-mono uppercase text-[#d4af37]">
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                          CONVERGENCE LIVE
                        </span>
                        <span>HQ FLAC</span>
                      </div>

                      {/* Circle track artwork */}
                      <div className="flex items-center gap-3.5 my-3">
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#d4af37] shrink-0 overflow-hidden relative">
                          <img
                            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=200&auto=format&fit=crop"
                            alt="Cover"
                            className="w-full h-full object-cover opacity-60"
                            referrerPolicy="no-referrer"
                          />
                          <Volume2 className="w-4 h-4 absolute text-white" />
                        </div>
                        <div className="text-left">
                          <h5 className="text-[10px] text-white font-medium tracking-tight line-clamp-1">{activeItem.title}</h5>
                          <p className="text-[8.5px] text-zinc-500 line-clamp-1">Invités : Prs. Neurosciences & Spiritualité</p>
                        </div>
                      </div>

                      {/* Wave form selector */}
                      <div className="flex items-center gap-3 mt-auto">
                        <button
                          onClick={() => onPlayPodcast(activeItem.title, activeItem.author || 'Maison du Savoir')}
                          className="w-8 h-8 rounded-full bg-[#d4af37] text-black flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-transform"
                        >
                          {isPlayingPodcast && currentPlayingTitle === activeItem.title ? (
                            <Pause className="w-3.5 h-3.5 fill-black" />
                          ) : (
                            <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className="h-0.5 w-full bg-zinc-800 rounded relative">
                            <motion.div
                              animate={isPlayingPodcast ? { width: ['0%', '100%'] } : {}}
                              transition={{ duration: 30, repeat: Infinity }}
                              className="absolute left-0 top-0 h-full bg-[#d4af37]"
                              style={{ width: isPlayingPodcast && currentPlayingTitle === activeItem.title ? '45%' : '0%' }}
                            />
                          </div>
                          <div className="flex justify-between text-[7px] font-mono uppercase mt-1 text-zinc-500">
                            <span>{isPlayingPodcast && currentPlayingTitle === activeItem.title ? 'LECTURE EN COURS' : 'PRÊT'}</span>
                            <span>HI-FI AUDIO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- 5. DYNAMIC MOCKUP: SYNTHÈSE GRAPHIQUE --- */}
                  {activeItem.type === 'synthese' && (
                    <div className="w-72 h-52 bg-[#050508] border border-[#d4af37]/20 rounded-2xl p-4 flex flex-col justify-between overflow-hidden relative shadow-inner">
                      {/* Blueprint visual graph */}
                      <div className="absolute inset-0 opacity-40 pointer-events-none flex items-center justify-center">
                        <div className="w-40 h-40 border border-zinc-800 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '40s' }}>
                          <div className="w-28 h-28 border border-dashed border-[#d4af37]/25 rounded-full flex items-center justify-center">
                            <div className="w-14 h-14 border border-zinc-800 rounded-full" />
                          </div>
                        </div>
                      </div>

                      <div className="relative flex justify-between items-center text-[7.5px] font-mono text-zinc-500 uppercase tracking-widest">
                        <span>INFOGRAPHIE D'ÉLITE</span>
                        <div className="flex items-center gap-1 text-[#d4af37]">
                          <Sparkles className="w-3 h-3" />
                          <span>MAPPING DE L'ÂME</span>
                        </div>
                      </div>

                      <div className="relative text-left my-auto p-2 bg-black/60 rounded border border-zinc-900/50 backdrop-blur-sm max-w-xs">
                        <h5 className="text-[10px] text-white font-medium">Cartographie Interactive de la Conscience Integral</h5>
                        <p className="text-[8px] text-zinc-400 font-light mt-1">
                          Unifies the Quranic spiritual levels (Nafs) with modern behavioral neurobiological indices in one golden canvas.
                        </p>
                      </div>

                      <span className="relative text-[7px] font-mono text-zinc-650">© SÂAD'EV CONVERGENCE CONCEPTS</span>
                    </div>
                  )}

                </div>

                {/* Bottom Details panel */}
                <div>
                  <div className="flex items-center justify-between border-t border-zinc-900 pt-6 mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                      {activeItem.typeLabel}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {activeItem.stats}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-350 font-light leading-relaxed text-left border-b border-zinc-900/40 pb-5">
                    {activeItem.description}
                  </p>

                  {/* Featured quote inside the modal display */}
                  {activeItem.featuredQuote && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 p-4 rounded-xl bg-zinc-950 border-l border-l-[#d4af37] italic text-zinc-400 text-[11px] leading-relaxed text-left flex gap-2"
                    >
                      <Quote className="w-4 h-4 text-[#d4af37]/40 shrink-0 mt-0.5" />
                      <div>
                        <p>{activeItem.featuredQuote}</p>
                        <span className="block mt-1 font-mono text-[9px] text-zinc-500 not-italic uppercase tracking-widest">— {activeItem.author || 'Sâad Abdel'}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
