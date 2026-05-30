import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Hourglass, Radio, Book, Calendar, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

export default function CommunauteStats() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Stats Counters
  const [counts, setCounts] = useState({
    members: 2400,
    hours: 1200,
    podcasts: 64,
    books: 32,
    conferences: 48
  });

  // Simple and highly performant counter effect upon screen loading
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => {
        const next = { ...prev };
        let updated = false;
        
        if (next.members < 12800) {
          next.members += 220;
          updated = true;
        }
        if (next.hours < 4800) {
          next.hours += 90;
          updated = true;
        }
        if (!updated) {
          clearInterval(interval);
        }
        return next;
      });
    }, 28);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const statItems = [
    { label: 'MEMBRES ACTIFS', val: counts.members.toLocaleString() + '+', icon: Users, desc: 'Esprits éclairés unis' },
    { label: 'HEURES DE CONTENU', val: counts.hours.toLocaleString() + 'h', icon: Hourglass, desc: 'Savoir pur condensé' },
    { label: 'ÉPISODES DE PODCAST', val: '64', icon: Radio, desc: 'Conversations spatiales 3D' },
    { label: 'TRAITÉS ET LIVRES', val: '32', icon: Book, desc: 'Éditions prestige gold' },
    { label: 'CONFÉRENCES ÉLITE', val: '48', icon: Calendar, desc: 'Colloques d’intégration' }
  ];

  return (
    <section id="communaute" className="py-24 sm:py-32 bg-[#050507] relative overflow-hidden">
      
      {/* Absolute glow background particles */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-12 w-64 h-64 bg-indigo-500/[0.01] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-20">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#d4af37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              COMMUNAUTÉ DU SAVOIR VIVANT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white font-semibold mt-4 italic">
            Un écosystème grandissant d’<span className="text-[#d4af37] not-italic font-bold">esprits contemplatifs</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
            Rejoignez des milliers de leaders, d'étudiants, de chercheurs et d'esprits libres s'exerçant quotidiennement à harmoniser l'esprit et la matière.
          </p>
        </div>

        {/* Stats Figures Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {statItems.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={stat.label}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-zinc-950/20 border border-white/5 text-left hover:border-[#d4af37]/25 hover:shadow-[0_0_20px_rgba(212,175,55,0.04)] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-[#d4af37] mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[17px] sm:text-xl font-mono text-white font-semibold block tracking-tight">
                  {stat.val}
                </span>
                <span className="text-[8.5px] font-mono tracking-widest text-[#d4af37] uppercase block mt-1">
                  {stat.label}
                </span>
                <p className="text-[10px] text-zinc-500 font-light mt-1.5 leading-tight">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter Signup Panel (Masterclass-inspired box) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-zinc-950/20 border border-white/5 relative overflow-hidden flex flex-col lg:flex-row items-center gap-10 justify-between">
          <div className="absolute inset-y-0 right-0 w-[400px] bg-gradient-to-l from-[#d4af37]/3 to-transparent pointer-events-none" />
          
          <div className="text-left flex-1">
            <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase block mb-2 font-semibold">LA LETTRE DE CONVERGENCE</span>
            <h3 className="text-xl sm:text-2xl text-white font-serif font-semibold tracking-tight">
              Axiomes Hebdomadaires
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light mt-2 max-w-lg leading-relaxed">
              Recevez chaque dimanche midi une réflexion exclusive rédigée par Sâad Abdel ainsi que les rapports de recherche croisés en neurosciences de l’âme.
            </p>
          </div>

          <div className="shrink-0 w-full lg:max-w-md">
            <AnimatePresence mode="wait">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre.email@excellence.com"
                      className="w-full pl-11 pr-4 py-3.5 rounded-full bg-zinc-950 border border-zinc-800 text-white font-mono text-xs placeholder-zinc-650 focus:border-[#d4af37] focus:outline-none focus:shadow-[0_0_12px_rgba(212,175,55,0.08)]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#bca03f] hover:from-amber-300 hover:to-amber-500 font-mono text-[11px] uppercase tracking-widest text-black font-semibold shrink-0 transition-transform flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(212,175,55,0.15)]"
                  >
                    <span>Rejoindre</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs text-left flex items-start gap-3"
                >
                  <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-mono text-[9px] uppercase tracking-widest font-bold">BIENVENUE PARMI NOUS</h5>
                    <p className="font-light mt-0.5 leading-normal">
                      Votre adresse a été enregistrée de manière parfaitement sécurisée. Vous recevrez l'axiome fondateur ce dimanche.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
