import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { MISSION_ITEMS } from '../data';

export default function NotreMission() {
  return (
    <section id="mission" className="pt-12 pb-24 sm:pt-16 sm:pb-32 bg-[#020204] relative overflow-hidden">
      
      {/* Background Decorative Mesh Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
      <div className="absolute -left-48 top-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-20">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#d4af37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              NOTRE ENGAGEMENT
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white font-semibold mt-4 italic">
            Notre <span className="text-[#d4af37] not-italic font-bold">mission</span>
          </h2>
          
          <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            <p className="font-serif italic text-xl sm:text-2xl text-white">
              Est de relier les savoirs. Comprendre l'humain. Transformer les vies.
            </p>
            <p className="font-medium text-zinc-200">
              Convergence est une plateforme globale dédiée à la connaissance intégrative.
            </p>
            <p className="text-sm sm:text-base text-zinc-400">
              Nous construisons des ponts entre spiritualité, sciences humaines, neurosciences, développement personnel et sagesse universelle pour offrir une compréhension profonde, pratique et accessible à tous.
            </p>
          </div>
        </div>

        {/* Bullet Points / Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {MISSION_ITEMS.map((item, index) => {
            // Dynamically resolve lucide icons
            const IconComponent = (LucideIcons as any)[item.iconName] || LucideIcons.Compass;
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                key={item.id}
                className="relative group p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-zinc-950/20 border border-white/5 hover:border-[#d4af37]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Micro background gradient glow */}
                <div className={`absolute -right-12 -bottom-12 w-32 h-32 bg-gradient-to-tr ${item.glowColor} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700`} />
                
                {/* Decorative gold number in corners */}
                <span className="absolute top-6 right-8 font-mono text-[10px] text-zinc-700 tracking-widest font-semibold group-hover:text-[#d4af37]/45 transition-colors duration-500">
                  0{index + 1}
                </span>

                {/* Glowing Gold Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#d4af37]/10 to-zinc-950 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-105 group-hover:border-[#d4af37]/50 shadow-[0_0_15px_rgba(212,175,55,0.05)] transition-all duration-500">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif text-white tracking-tight font-semibold group-hover:text-[#d4af37] transition-colors duration-500">
                  {item.title}
                </h3>
                
                <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/0 to-transparent group-hover:via-[#d4af37]/40 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>

        {/* Immersive quote block */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-zinc-950 to-[#040407] border border-zinc-850 flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
          <div className="absolute right-[-100px] top-[-100px] w-80 h-80 bg-[#d4af37]/2 rounded-full blur-3xl pointer-events-none" />
          <div className="flex-1">
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Axiome d'Enseignement</p>
            <blockquote className="mt-3 text-lg font-sans italic text-white font-light">
              « Le savoir isolé fragmente l’esprit. La convergence des vérités l’illumine. »
            </blockquote>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="w-4 h-[1px] bg-zinc-700" />
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Sâad’ev Convergence</span>
          </div>
        </div>

      </div>
    </section>
  );
}
