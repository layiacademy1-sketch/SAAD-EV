import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { 
  BookOpen, 
  Tablet, 
  Headphones, 
  Mic, 
  Eye, 
  GraduationCap, 
  Presentation, 
  Wrench, 
  X, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';
import { MISSION_ITEMS } from '../data';

// Define the 8 service categories following the provided photo layout
const SERVICES_DATA = [
  {
    id: 'livres',
    label: 'LIVRES',
    icon: BookOpen,
    title: 'Éditions de Prestige Convergence',
    tagline: 'L’ancrage par l’écrit physique de prestige',
    description: 'Des volumes d\'exception à couverture rigide et reliure dorée. Conçus pour traverser les âges, ces ouvrages conjuguent exégèse spirituelle, philosophie existentielle et conclusions de psychologie humaine.',
    featured: '« La Trait d’Union Interne » par Sâad Abdel (428 pages • Édition Prestige d\'Art)',
    actionText: 'Consulter l’ouvrage physique',
    targetSection: 'contenus',
    contentType: 'livre',
    badge: 'EDITION LIMITEE',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ebooks',
    label: 'E-BOOKS',
    icon: Tablet,
    title: 'Bibliothèque Numérique Interconnectée',
    tagline: 'La clarté universelle au format portatif',
    description: 'Une collection complète d’e-books interactifs haut de gamme, encryptés et entièrement optimisés pour liseuses et tablettes. Ils intègrent des synthèses graphiques claires et des protocoles comportementaux actionnables.',
    featured: '« Les Neurosciences de la Paix Soufie » par le Dr. Y. Ben Souda (124 pages • PDF interactif / EPub)',
    actionText: 'Ouvrir l’E-book numérique',
    targetSection: 'contenus',
    contentType: 'ebook',
    badge: 'LUXURY DIGITAL',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'livres-audio',
    label: 'LIVRES AUDIO',
    icon: Headphones,
    title: 'Expériences Acoustiques Immersives',
    tagline: 'La voix de la sagesse en immersion totale',
    description: 'Des livres audio contés directement par les auteurs sur fond de paysages sonores subtilement accordés en ondes binaurales, idéal pour optimiser l\'assimilation intellectuelle lors de vos temps d’étude ou d\'introspection.',
    featured: '« Sagesse de l’Ombre & Clarté du Matin » (8h 45m d’écoute • Qualité HD Lossless)',
    actionText: 'Écouter l’extrait',
    targetSection: 'contenus',
    contentType: 'audio',
    badge: 'SON SPATIAL BINAURAL',
    image: 'https://images.unsplash.com/photo-1484755560695-a4c7302cce25?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'podcasts',
    label: 'PODCASTS',
    icon: Mic,
    title: 'La Rupture du Bruit — Conversations',
    tagline: 'Rompre avec le vacarme médiatique contemporain',
    description: 'Des dialogues profonds et authentiques menés par Sâad Abdel avec des experts internationaux : neurologues, cliniciens d’élite et maîtres de sagesse universelle pour décrypter rationnellement la conscience humaine.',
    featured: 'Série Exclusive « Convergence Studio Live » (64 épisodes en Audio 3D spatialisé)',
    actionText: 'Lancer un Épisode',
    targetSection: 'contenus',
    contentType: 'podcast',
    badge: 'HAUTE QUALITE FLAC',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'syntheses',
    label: 'SYNTHÈSES VISUELLES',
    icon: Eye,
    title: 'Cartographies de la Conscience',
    tagline: 'Conceptualiser la complexité par la géométrie sacrée',
    description: 'Des schémas vectoriels de prestige et des cartographies synthétiques en format géométrique doré ultra HD. Elles résument en un coup d\'œil l\'ensemble des concepts neuroscientifiques et des étapes de purification.',
    featured: '« La Cartographie de l’Âme » (Maquette SVG Vectoriel de Prestige Ultra HD)',
    actionText: 'Visualiser la synthèse',
    targetSection: 'contenus',
    contentType: 'synthese',
    badge: 'BLUEPRINT EXCLUSIF',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'formations',
    label: 'FORMATIONS',
    icon: GraduationCap,
    title: 'Académie d’Apprentissage de Haut Niveau',
    tagline: 'Des cursus de transformation cinématiques',
    description: 'Des programmes de formation exclusifs dispensés sous format de cours vidéo immersifs de calibre cinéma. Chaque enseignement propose un syllabus académique rigoureux avec livrets d’exercices d\'excellence.',
    featured: 'Masterclass « Discernement & Clarté Mentale » (18 modules, 24 heures de contenu)',
    actionText: 'Explorer le programme d\'études',
    targetSection: 'formations',
    badge: 'ACADEMIE PRESTIGE',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'conferences',
    label: 'CONFÉRENCES',
    icon: Presentation,
    title: 'Séminaires & Tables Rondes de Prestige',
    tagline: 'La clarté collective vécue sous la lumière du dialogue',
    description: 'Séminaires privés, rencontres à huis clos et réunions d\'envergure pour élever nos savoirs. Un espace sacré où universitaires, praticiens de la psychologie et esprits de value échangent en présentiel.',
    featured: '« Le Sommet de la Conformation » (Paris • Genève • Casablanca, Session d\'Automne, Invitation Privée)',
    actionText: 'Réserver ma place en conférence',
    targetSection: 'communaute',
    badge: 'SELECT ET PRIVE',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'outils',
    label: 'OUTILS PRATIQUES',
    icon: Wrench,
    title: 'Protocoles, Routine & Outils d\'Ancrage',
    tagline: 'La sagesse vécue par l’habitude et la statistique éthique',
    description: 'Des applications d\'évaluation, des synthétiseurs de cohérence somato-respiratoire, des grilles de journalisation et des rituels matinaux structurés cliniquement pour ancrer la sérénité au quotidien.',
    featured: '« L’Application Mobile Convergence » (Outils de suivi neuro-cardiaque, respiration active & rituels)',
    actionText: 'Installer l\'Application mobile',
    targetSection: 'mobile',
    badge: 'BIOMETRIE & ROUTINES',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600'
  }
];

export default function NotreMission() {
  const [selectedService, setSelectedService] = useState<typeof SERVICES_DATA[number] | null>(null);

  const handleAccessService = (service: typeof SERVICES_DATA[number]) => {
    setSelectedService(null);
    
    // Smooth scroll to the target section
    const section = document.getElementById(service.targetSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // If the service matches an interactive content type, dispatch the event to auto-select that tab
    if (service.contentType) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('select-content', { detail: { type: service.contentType } }));
      }, 350);
    }
  };

  return (
    <section id="mission" className="pt-12 pb-24 sm:pt-16 sm:pb-32 bg-[#020204] relative overflow-hidden">
      
      {/* Background Decorative Mesh Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
      <div className="absolute -left-48 top-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* --- DESKTOP PHOTOREALISTIC SERVICES NAVIGATION BAR (MATCHING THE ATTACHED PHOTO) --- */}
        <div className="hidden sm:block mb-20 max-w-full">
          <div className="text-center mb-6">
            <span className="font-mono text-[9px] text-[#d4af37] tracking-[0.3em] uppercase block">EXPLORER NOS OFFRES</span>
            <div className="w-10 h-px bg-[#d4af37]/40 mx-auto mt-2" />
          </div>

          <div 
            className="w-full border-y border-zinc-850 bg-black/60 backdrop-blur-md flex items-stretch justify-between overflow-x-auto gap-0 scrollbar-none snap-x py-0.5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SERVICES_DATA.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="flex-1 min-w-[130px] sm:min-w-0 py-6 px-3 flex flex-col items-center justify-center gap-3.5 text-center group transition-all duration-300 hover:bg-[#d4af37]/[0.02] snap-align-none border-r border-zinc-850 last:border-r-0 relative overflow-hidden"
                >
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/0 to-[#d4af37]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon with beautiful gold tint/halo */}
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform duration-300 relative">
                    <div className="absolute inset-0 rounded-full bg-[#d4af37]/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <IconComponent className="w-6 h-6 stroke-[1.25]" />
                  </div>

                  {/* Multiline/Single line label text matching the typography of the picture */}
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-zinc-450 group-hover:text-[#d4af37] transition-colors duration-300 font-medium">
                      {service.label}
                    </span>
                  </div>

                  {/* Subtle pointer focus bottom light indicator */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              );
            })}
          </div>
        </div>

        {/* --- MOBILE DETAILED PHOTO FEED (LIVRES, E-BOOKS, ETC.) --- */}
        <div className="block sm:hidden mb-16 space-y-6">
          <div className="text-center mb-6">
            <span className="font-mono text-[9px] text-[#d4af37] tracking-[0.3em] uppercase block">EXPLORER NOS OFFRES</span>
            <div className="w-10 h-px bg-[#d4af37]/40 mx-auto mt-2" />
          </div>

          <div className="flex flex-col gap-6">
            {SERVICES_DATA.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="bg-[#050508]/90 border border-zinc-900 rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.6)] flex flex-col active:border-[#d4af37]/30 transition-all duration-300 cursor-pointer"
                >
                  {/* Image Header wrapper with rich dark overlay */}
                  <div className="relative h-44 w-full overflow-hidden bg-zinc-950">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />
                    
                    {/* Badge top-left & Icon top-right */}
                    <div className="absolute top-3.5 left-4 right-4 flex justify-between items-center">
                      <span className="px-2.5 py-0.5 bg-black/90 border border-[#d4af37]/30 text-[#d4af37] font-mono text-[8px] tracking-widest uppercase rounded">
                        {service.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/80 border border-zinc-800 flex items-center justify-center text-[#d4af37]">
                        <IconComponent className="w-4 h-4 stroke-[1.25]" />
                      </div>
                    </div>

                    {/* Bottom-left label overlap */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="font-mono text-[9px] text-[#d4af37] tracking-[0.2em] uppercase font-bold">
                        {service.label}
                      </p>
                      <h4 className="text-white text-base font-serif font-semibold mt-0.5 tracking-tight">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  {/* Below photo area - "C'est quoi" description */}
                  <div className="p-4 flex flex-col gap-3.5">
                    <div className="border-l border-[#d4af37]/45 pl-3 py-0.5">
                      <p className="text-[10px] text-[#d4af37] font-mono tracking-widest uppercase font-semibold">C'EST QUOI ?</p>
                      <p className="text-zinc-300 text-xs font-light leading-relaxed mt-1">
                        {service.description}
                      </p>
                    </div>

                    {/* Flagship focus detail card */}
                    <div className="bg-zinc-900/50 border border-zinc-850/60 p-3 rounded-lg">
                      <div className="flex items-center gap-1 text-[#d4af37] mb-1">
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                        <span className="font-mono text-[8px] uppercase tracking-wider font-semibold">Support vedette :</span>
                      </div>
                      <p className="text-zinc-200 text-xs italic font-serif leading-snug">
                        {service.featured}
                      </p>
                    </div>

                    {/* Highly aesthetic action trigger button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAccessService(service);
                      }}
                      className="w-full mt-1.5 py-2.5 rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-955 border border-zinc-800 text-zinc-350 active:border-[#d4af37] active:text-white font-mono text-[9px] uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span className="text-[#d4af37] font-semibold">{service.actionText}</span>
                      <ArrowRight className="w-3 h-3 text-[#d4af37]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl text-left mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#d4af37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              PILIERS D'ACTION
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-white font-semibold mt-3 italic">
            Nos orientations <span className="text-[#d4af37] not-italic font-bold">fondatrices</span>
          </h2>
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

      {/* --- PRESTIGE SERVICE PREVIEW DIALOG MODAL (DETAILS OF PROPOSAL) --- */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-950 border border-zinc-850 rounded-3xl max-w-xl w-full p-6 sm:p-10 relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(212,175,55,0.15)]"
            >
              <div className="absolute -right-24 -top-24 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-805 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Service Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] font-mono text-[9px] tracking-widest uppercase rounded-full">
                  {selectedService.badge}
                </span>
                <span className="text-zinc-550 font-mono text-[9px] uppercase tracking-widest">Service Premium</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37] border border-[#d4af37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  {(() => {
                    const SvcIcon = selectedService.icon;
                    return <SvcIcon className="w-6 h-6 stroke-[1.5]" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl text-white font-serif font-medium tracking-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#d4af37] italic font-serif">
                    {selectedService.tagline}
                  </p>
                </div>
              </div>

              {/* Service Proposal Details */}
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-zinc-400 block mb-2 uppercase font-semibold">CE QUE PROPOSE LE SERVICE :</span>
                  <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-850/80">
                  <div className="flex items-center gap-2 mb-2 text-[#d4af37]">
                    <Sparkles className="w-4 h-4 shrink-0 animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">Coup d'œil ou support vedette :</span>
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium font-serif italic">
                    {selectedService.featured}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center gap-3 justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 font-mono text-xs transition-colors"
                >
                  Fermer
                </button>
                <button
                  onClick={() => handleAccessService(selectedService)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#bca03f] hover:from-amber-300 hover:to-amber-500 text-black font-semibold font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(212,175,55,0.15)] group"
                >
                  <span>{selectedService.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-6 flex items-center gap-1.5 justify-center text-[9px] font-mono text-zinc-600 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" /> Excellence & Intégrité des Savoirs • Sâad’ev
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
