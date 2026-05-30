import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X, Volume2, VolumeX, Sparkles, Compass } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AcousticPlayerProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  author: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function AcousticPlayer({ isVisible, onClose, title, author, isPlaying, onTogglePlay }: AcousticPlayerProps) {
  const [progress, setProgress] = useState(12); // Start at 12% progress
  const [isMuted, setIsMuted] = useState(false);
  const [spatialEnabled, setSpatialEnabled] = useState(true);

  // Auto-progress simulation if playing
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress(p => {
          if (p >= 100) return 0;
          return p + 0.15;
        });
      }, 400);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed bottom-6 left-6 right-6 z-40 max-w-4xl mx-auto rounded-2xl bg-black/95 border border-[#d4af37]/45 backdrop-blur-md p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_20px_50px_rgba(212,175,55,0.18)]"
        >
          {/* Decorative left accent gold dot */}
          <span className="absolute left-0 inset-y-4 w-1 bg-[#d4af37] rounded-r-md" />

          {/* Left: Metadata & Artwork */}
          <div className="flex items-center gap-3.5 text-left w-full md:w-auto">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 relative overflow-hidden">
              <Compass className="w-5 h-5 text-[#d4af37] animate-spin" style={{ animationDuration: '40s' }} />
              {isPlaying && (
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-t from-[#d4af37] to-transparent animate-pulse" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <span className="text-[7.5px] font-mono tracking-widest text-[#d4af37] uppercase font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                LECTURE EN COURS (PREVIEW)
              </span>
              <h4 className="text-xs sm:text-sm text-white font-medium truncate tracking-tight mt-0.5 max-w-[280px]">
                {title}
              </h4>
              <p className="text-[10px] text-zinc-500 truncate mt-0.5">
                {author}
              </p>
            </div>
          </div>

          {/* Middle: Main Player Controls & Wave Progress */}
          <div className="flex-1 flex flex-col gap-1.5 w-full">
            {/* Wave simulated list */}
            <div className="flex items-center gap-4">
              
              {/* Play Pause trigger */}
              <button
                onClick={onTogglePlay}
                className="w-10 h-10 rounded-full bg-[#d4af37] hover:bg-amber-300 text-black flex items-center justify-center shrink-0 transition-all hover:scale-105 active:scale-95 shadow-[0_0_12px_rgba(212,175,55,0.25)]"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
              </button>

              {/* Progress track */}
              <div className="flex-1">
                <div className="h-1 bg-zinc-850 rounded-full relative overflow-hidden cursor-pointer">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[8px] font-mono mt-1 text-zinc-500 uppercase">
                  <span>PROGRESSION : {Math.round(progress)}%</span>
                  <span className="text-[#d4af37] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> AUDIO HD SPATLIAL 3D
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Aux settings and Close */}
          <div className="flex items-center gap-4 justify-between w-full md:w-auto border-t border-zinc-900 md:border-none pt-3 md:pt-0 shrink-0">
            
            {/* Spatial stage toggle */}
            <button
              onClick={() => setSpatialEnabled(!spatialEnabled)}
              className={`px-3 py-1 rounded-full border font-mono text-[8px] tracking-wider transition-colors uppercase ${
                spatialEnabled
                  ? 'bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37]'
                  : 'bg-transparent border-zinc-800 text-zinc-650 hover:text-white'
              }`}
              title="Activer la spatialisation du son dans vos écouteurs"
            >
              SPATIAL {spatialEnabled ? 'ON' : 'OFF'}
            </button>

            {/* Mute button */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1 px-2 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 relative"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-zinc-500" /> : <Volume2 className="w-4 h-4 text-[#d4af37]" />}
            </button>

            {/* Close trigger */}
            <button
              onClick={onClose}
              className="p-1 px-2 border-l border-zinc-850 text-zinc-500 hover:text-white"
            >
              <X className="w-4.5 h-4.5" />
            </button>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
