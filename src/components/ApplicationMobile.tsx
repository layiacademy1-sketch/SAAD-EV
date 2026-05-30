import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, BookOpen, Headphones, ShieldAlert, Video, Award, Clock, ArrowRight, UserCheck, Play, Sparkles } from 'lucide-react';
import { APP_MOBILE_SCREENS } from '../data';

export default function ApplicationMobile() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const activeScreen = APP_MOBILE_SCREENS[activeScreenIndex];

  return (
    <section id="mobile" className="py-24 sm:py-32 bg-[#050507] relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-1/4 left-0 w-92 h-92 bg-[#d4af37]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/[0.01] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-20">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#d4af37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              PLATEFORME MOBILE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white font-semibold mt-4 italic">
            Le Savoir Sacré, <span className="text-[#d4af37] not-italic font-bold">omniprésent</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
            L'excellence de la Sagesse intégrative condensée dans une magnifique application mobile. Écoutez les podcasts en transport, étudiez avec le mode hors-ligne et suivez votre évolution éthique quotidienne.
          </p>
        </div>

        {/* Dual Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Dynamic description linked to active tab */}
          <div className="lg:col-span-6 flex flex-col text-left gap-8">
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase font-bold">
                ÉCRAN EN COURS DE SIMULATION
              </span>
              <h3 className="text-2xl sm:text-3xl text-white font-serif font-semibold tracking-tight">
                {activeScreen.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mt-2">
                {activeScreen.description}
              </p>
            </div>

            {/* Simulated app attributes list */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.04] to-zinc-950/20 border border-white/5 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-mono font-medium text-white uppercase tracking-wider">HORS-LIGNE SECURE</h4>
                  <p className="text-[9.5px] text-zinc-500 font-light mt-0.5">Téléchargements FLAC chiffrés.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.04] to-zinc-950/20 border border-white/5 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-mono font-medium text-white uppercase tracking-wider">AUDIO SPATIAL 3D</h4>
                  <p className="text-[9.5px] text-zinc-500 font-light mt-0.5">Immersion nocturne psycho-acoustique.</p>
                </div>
              </div>
            </div>

            {/* Custom Interactive Tab Selectors for App Mockup */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Naviguez dans l'application :</p>
              <div className="flex flex-wrap gap-2.5">
                {APP_MOBILE_SCREENS.map((scr, idx) => (
                  <button
                    key={scr.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-4 py-2.5 rounded-full border text-xs font-mono tracking-wider transition-all duration-300 uppercase ${
                      activeScreenIndex === idx
                        ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                        : 'bg-black/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    {scr.title.split(' ')[0]} {/* Simple label */}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: High Fidelity Apple-style Phone Frame */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Phone outer frame with golden radial drop shadow */}
            <div className="relative w-[300px] h-[600px] rounded-[50px] border-[8px] border-zinc-800 bg-[#000000] p-3 shadow-[0_25px_60px_-10px_rgba(212,175,55,0.12)] flex flex-col justify-between overflow-hidden">
              
              {/* Dynamic Notification Bar Island / Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-full z-30 flex items-center justify-between px-4">
                <span className="text-[8px] font-mono text-zinc-400">9:41</span>
                {/* Simulated lens camera */}
                <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full" />
                <span className="text-[8px] font-mono text-zinc-400">5G ●</span>
              </div>

              {/* Dynamic screen content depending on tab index */}
              <div className={`w-full h-full rounded-[38px] bg-gradient-to-b ${activeScreen.bgColor} p-4 pt-10 pb-12 flex flex-col justify-between z-10 transition-colors duration-700 overflow-hidden text-left relative`}>
                
                {/* Floating ambient glow in phone screen */}
                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#d4af37]/10 rounded-full blur-[40px] pointer-events-none" />

                {/* Top header within app */}
                <div className="flex items-center justify-between relative mt-1">
                  <div className="flex flex-col">
                    <span className="text-[7px] font-mono text-[#d4af37] tracking-widest uppercase">Maison du Savoir</span>
                    <span className="text-xs font-sans text-white font-medium tracking-tight">Sâad'ev Convergence</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#d4af37]">
                    <UserCheck className="w-3 h-3" />
                  </div>
                </div>

                {/* Main dynamic screen graphics */}
                <div className="my-auto flex-1 flex flex-col justify-center relative mt-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreen.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full justify-between"
                    >
                      {/* Badge inside phone */}
                      <span className="inline-block px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-850 w-max text-[#d4af37] font-mono text-[6.5px] uppercase tracking-wider mb-2">
                        {activeScreen.badge}
                      </span>

                      {/* View contents depending on Active screen type */}
                      {activeScreen.id === 'lib' && (
                        <div className="flex-1 flex flex-col justify-center gap-2">
                          <h4 className="text-sm font-sans font-medium text-white leading-tight">Bibliothèque d'Élite mystique</h4>
                          <p className="text-[8.5px] text-zinc-400 font-light leading-relaxed">
                            32 ouvrages d'études traduits et annotés à votre entière disposition.
                          </p>
                          {/* Mini book lists inside app list */}
                          <div className="space-y-1 mt-1">
                            {['Le Jardin des Connaisseurs', 'Régulation de l\'Attention', 'La Conscience Pure'].map((book, idx) => (
                              <div key={idx} className="p-1 px-2 rounded bg-zinc-950 border border-zinc-900 flex items-center justify-between text-[8px] text-zinc-300">
                                <span className="truncate">{book}</span>
                                <BookOpen className="w-2.5 h-2.5 text-[#d4af37]" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeScreen.id === 'pod' && (
                        <div className="flex-1 flex flex-col justify-center gap-2.5">
                          <h4 className="text-sm font-sans font-medium text-white leading-tight">Podcasts d'Orateurs</h4>
                          {/* Simulated mini active player inside app mockup */}
                          <div className="p-3 rounded-2xl bg-black border border-zinc-900 flex flex-col items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                              <Play className="w-3.5 h-3.5 fill-[#d4af37]" />
                            </div>
                            <span className="text-[7.5px] font-mono text-zinc-400 text-center line-clamp-1">#14 — Neurobiologie du Deuil</span>
                            <div className="h-1 bg-zinc-850 w-full rounded-full overflow-hidden">
                              <div className="w-1/3 h-full bg-[#d4af37]" />
                            </div>
                          </div>
                        </div>
                      )}

                      {activeScreen.id === 'form' && (
                        <div className="flex-1 flex flex-col justify-center gap-2">
                          <h4 className="text-sm font-sans font-medium text-white leading-tight">Suivi des Formations</h4>
                          <p className="text-[8.5px] text-zinc-400 font-light">Reprenez votre programme initiatique en cours :</p>
                          <div className="p-2 bg-gradient-to-r from-zinc-950 to-zinc-900 border border-zinc-850 rounded-xl flex items-center gap-2 justify-between">
                            <div>
                              <span className="text-[6px] font-mono text-[#d4af37]">EN COURS • MOD. 4</span>
                              <h5 className="text-[8.5px] text-white font-medium line-clamp-1">Discernement & Clarté</h5>
                            </div>
                            <Video className="w-3 h-3 text-[#d4af37] shrink-0" />
                          </div>
                        </div>
                      )}

                      {activeScreen.id === 'dash' && (
                        <div className="flex-1 flex flex-col justify-center gap-2">
                          <h4 className="text-sm font-sans font-medium text-white leading-tight">Tableau de Conscience</h4>
                          <div className="grid grid-cols-2 gap-2 mt-1">
                            <div className="p-2 rounded bg-zinc-950 border border-zinc-900 text-left">
                              <span className="text-[6.5px] font-mono text-zinc-500 uppercase">ÉCOUTE</span>
                              <p className="text-xs font-semibold text-white mt-0.5">14.8h</p>
                            </div>
                            <div className="p-2 rounded bg-zinc-950 border border-zinc-900 text-left">
                              <span className="text-[6.5px] font-mono text-zinc-500 uppercase">SCORE</span>
                              <p className="text-xs font-semibold text-[#d4af37] mt-0.5">98%</p>
                            </div>
                          </div>
                          <div className="p-2 rounded bg-zinc-900/40 border border-zinc-800 text-[7px] text-zinc-400 flex items-center gap-1">
                            <Clock className="w-2.5 h-2.5 text-[#d4af37] shrink-0" />
                            <span>Prochain rituel respiratoire à 21:30</span>
                          </div>
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* iPhone Interactive App Dock menu frame */}
                <div className="border-t border-zinc-900 pt-2.5 flex justify-between relative z-20">
                  {APP_MOBILE_SCREENS.map((scr, idx) => {
                    const isSelected = activeScreenIndex === idx;
                    return (
                      <button
                        key={scr.id}
                        onClick={() => setActiveScreenIndex(idx)}
                        className="flex flex-col items-center gap-1 flex-1 cursor-pointer"
                      >
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#d4af37]/10 text-[#d4af37]' : 'text-zinc-650 hover:text-white'
                        }`}>
                          {scr.id === 'lib' && <BookOpen className="w-3 h-3" />}
                          {scr.id === 'pod' && <Headphones className="w-3 h-3" />}
                          {scr.id === 'form' && <Video className="w-3 h-3" />}
                          {scr.id === 'dash' && <Award className="w-3 h-3" />}
                        </div>
                        <span className={`text-[6.5px] font-mono tracking-wider transition-colors ${
                          isSelected ? 'text-[#d4af37] font-medium' : 'text-zinc-700'
                        }`}>
                          {scr.id.toUpperCase()}
                        </span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* iPhone screen bottom bar accent */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-zinc-800 rounded-full z-30" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
