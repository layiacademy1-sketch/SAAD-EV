import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, BookOpen, User, Play, ChevronRight, X, ShieldCheck, HelpCircle } from 'lucide-react';
import { PREMIUM_COURSES } from '../data';
import { Course } from '../types';

export default function FormationsSection() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setRegisterSuccess(true);
    setTimeout(() => {
      setRegisterSuccess(false);
      setSelectedCourse(null);
      setEmailInput('');
    }, 4000);
  };

  return (
    <section id="formations" className="py-24 sm:py-32 bg-[#050507] relative overflow-hidden">
      
      {/* Dynamic graphic dividers */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent animate-pulse" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-20">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#d4af37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              ACADÉMIE DE CONNAISSANCES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white font-semibold mt-4 italic">
            Programmes d'<span className="text-[#d4af37] not-italic font-bold">excellence</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
            Suivez nos cursus de formations cinématiques conçus comme des Masterclasses artistiques. Chaque module allie la rigueur scientifique à la rectitude éthique et au sens.
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {PREMIUM_COURSES.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -6 }}
              onClick={() => {
                setSelectedCourse(course);
                setRegisterSuccess(false);
              }}
              className="relative rounded-3xl bg-gradient-to-br from-white/[0.04] to-zinc-950/20 border border-white/5 hover:border-[#d4af37]/40 transition-all duration-500 overflow-hidden cursor-pointer group flex flex-col justify-between shadow-2xl"
            >
              {/* Dynamic Image Wrapper with intense cinematic vibe & hover scale */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/10 to-transparent z-10" />
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out filter brightness-75 contrast-125"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float level badge */}
                <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/75 border border-[#d4af37]/40 text-[#d4af37] font-mono text-[9px] tracking-widest uppercase">
                  NIVEAU : {course.level}
                </span>

                {/* Simulated Floating gold particles aura under banner */}
                <div className="absolute inset-0 z-20 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none" />
              </div>

              {/* Core Info Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase text-[#d4af37] mb-2 font-medium">
                    <span>{course.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#d4af37] stroke-[#d4af37]" />
                      <span>{course.rating.toFixed(2)}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl text-white font-serif font-semibold tracking-tight group-hover:text-[#d4af37] transition-colors duration-300">
                    {course.title}
                  </h3>

                  <p className="mt-3.5 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Horizontal meta metrics */}
                <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Tiny instructor meta */}
                    <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                      <User className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-550 truncate max-w-[150px]">
                      {course.instructor}
                    </span>
                  </div>

                  {/* Dynamic interactive details arrow */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#d4af37] group-hover:gap-3 transition-all duration-300">
                    <span>DÉROULER SYLLABUS</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Detailed syllabus and enrollment modal */}
        <AnimatePresence>
          {selectedCourse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-950 border border-zinc-850 rounded-3xl max-w-2xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto shadow-[0_25px_60px_-15px_rgba(212,175,55,0.18)]"
              >
                {/* Close modal */}
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Subtitle brand */}
                <span className="text-[10px] font-mono uppercase text-[#d4af37] tracking-[0.2em] block mb-2">
                  CURRICULUM DE L'ACADÉMIE CONVERGENCE
                </span>

                <h3 className="text-2xl sm:text-3xl text-white font-serif font-semibold tracking-tight mb-2">
                  {selectedCourse.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500 mb-6 border-b border-zinc-900 pb-4">
                  <span className="text-[#d4af37]">PAR : {selectedCourse.instructor.toUpperCase()}</span>
                  <span>•</span>
                  <span>{selectedCourse.duration.toUpperCase()}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#d4af37] stroke-none" />
                    {selectedCourse.rating.toFixed(2)} / 5.0
                  </span>
                </div>

                {/* Highlights Syllabus bullet points */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-4 font-semibold">
                    AU PROGRAMME DES ENSEIGNEMENTS :
                  </h4>
                  <ul className="space-y-3">
                    {selectedCourse.highlights.map((hlt, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-zinc-350 font-light leading-relaxed">
                        <span className="w-5 h-5 rounded-md bg-[#d4af37]/10 border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] font-mono text-[9px] shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <span>{hlt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Masterclass sign-up area */}
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-850">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-semibold mb-2">
                    Accéder à cette Masterclass Premium
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-normal mb-5 font-light">
                    S'inscrire libre pour tester le premier module d’étude et recevoir un résumé de 24 pages contenant les axiomes fondamentaux directement par courriel.
                  </p>

                  <AnimatePresence mode="wait">
                    {!registerSuccess ? (
                      <form onSubmit={handleRegisterSubmit} className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          required
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          placeholder="votre.email@hautdegamme.com"
                          className="flex-1 px-4 py-3 rounded-full bg-zinc-950 border border-zinc-800 text-white font-mono text-xs placeholder-zinc-650 focus:border-[#d4af37] focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#bca03f] hover:from-amber-300 hover:to-amber-500 text-black font-semibold font-mono text-[11px] uppercase tracking-widest transition-transform shrink-0"
                        >
                          S'inscrire libre
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-emerald-400 text-xs text-left"
                      >
                        <ShieldCheck className="w-5 h-5 shrink-0" />
                        <div>
                          <p className="font-semibold uppercase tracking-wider text-[10px]">REQUÊTE TRANSMIS AVEC SUCCÈS</p>
                          <p className="font-light mt-0.5 text-[11px]">Un billet d’initiation vip, le syllabus complet ainsi que les codes de connexion ont été envoyés.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-zinc-550 uppercase">
                  <span>© CONVERGENCE CADEMY</span>
                  <span className="flex items-center gap-1 text-[#d4af37]">
                    <ShieldCheck className="w-3.5 h-3.5" /> CONFIDENTIALITÉ GARANTIE
                  </span>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
