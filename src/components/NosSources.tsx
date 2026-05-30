import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { KNOWLEDGE_SOURCES } from '../data';
import { KnowledgeSource } from '../types';

export default function NosSources() {
  const [selectedSource, setSelectedSource] = useState<KnowledgeSource | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="sources" className="py-24 sm:py-32 bg-[#050507] relative overflow-hidden">
      
      {/* Visual accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/3 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#d4af37]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                L'ARBRE DU SAVOIR
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white font-semibold mt-4 italic">
              Nos sources de <span className="text-[#d4af37] not-italic font-bold">vérité</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Nous croisons les sagesses éternelles avec les observations scientifiques les plus rigoureuses de notre siècle pour guider l'homme contemporain de manière équilibrée.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
            <span>Cliquez sur une carte pour l'explorer</span>
            <LucideIcons.HelpCircle className="w-4 h-4 text-[#d4af37]/70" />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {KNOWLEDGE_SOURCES.map((source, index) => {
            const IconComponent = (LucideIcons as any)[source.iconName] || LucideIcons.Compass;
            const isHovered = hoveredId === source.id;
            
            return (
              <motion.div
                key={source.id}
                onMouseEnter={() => setHoveredId(source.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedSource(source)}
                className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden bg-gradient-to-br from-white/[0.04] to-zinc-950/20 border ${
                  isHovered
                    ? 'border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.12)] -translate-y-1'
                    : 'border-white/5'
                }`}
              >
                {/* Glowing Aura inside Card */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${source.glowColor}, transparent 70%)`
                  }}
                />

                {/* Card Header & Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#d4af37] shadow-inner transition-colors duration-500">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-650 tracking-widest uppercase">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-serif text-white font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#d4af37]">
                  {source.title}
                </h3>

                {/* Category Label */}
                <span className="inline-block text-[9px] font-mono uppercase tracking-widest text-[#d4af37]/60 mt-1.5 bg-[#d4af37]/5 px-2 py-0.5 rounded border border-[#d4af37]/10">
                  {source.category}
                </span>

                {/* Short description */}
                <p className="mt-4 text-xs text-zinc-400 font-light leading-relaxed">
                  {source.description}
                </p>

                {/* Subtle visual card footer link */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-zinc-900/60 text-[10px] font-mono tracking-wider text-zinc-500">
                  <span>DÉTAILS</span>
                  <LucideIcons.ArrowRight className="w-3 h-3 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal display for selected source - details & quote (Detailed view) */}
        <AnimatePresence>
          {selectedSource && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedSource(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="bg-zinc-950 border border-[#d4af37]/35 rounded-3xl p-6 sm:p-10 max-w-2xl w-full relative shadow-[0_25px_60px_-15px_rgba(212,175,55,0.15)] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSource(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                >
                  <LucideIcons.X className="w-4 h-4" />
                </button>

                {/* Category tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-[0.2em]">
                    {selectedSource.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-sans text-white tracking-tight font-medium">
                  {selectedSource.title}
                </h3>

                {/* Beautiful custom-designed Quote Panel */}
                <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-zinc-950 to-zinc-900/40 border-l-2 border-[#d4af37] italic text-zinc-300 font-light text-xs sm:text-sm leading-relaxed relative">
                  <LucideIcons.Quote className="absolute right-4 bottom-3 w-12 h-12 text-zinc-900 pointer-events-none" />
                  <p>{selectedSource.quote}</p>
                  <span className="block mt-2 font-mono text-[10px] text-[#d4af37] uppercase tracking-widest font-medium not-italic">
                    — {selectedSource.quoteAuthor}
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                    {selectedSource.detailedDescription}
                  </p>
                  
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                    <LucideIcons.Compass className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-mono text-white uppercase tracking-wider">Axe de convergence</h4>
                      <p className="text-[11px] text-zinc-400 font-light mt-1">
                        Cette discipline est étudiée sous le prisme de l'harmonie intellectuelle. Nous confrontons chaque constat à l'unification spirituelle pour en extraire des vérités claires.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-end">
                  <button
                    onClick={() => setSelectedSource(null)}
                    className="px-6 py-2.5 rounded-full bg-[#d4af37] text-black font-mono text-[11px] tracking-widest uppercase font-semibold hover:bg-amber-300 transition-colors"
                  >
                    Fermer l'exploration
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
