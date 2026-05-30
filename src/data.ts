import { Course, ContentItem, KnowledgeSource, MissionItem, VisionNode, PodcastItem } from './types';

export const KNOWLEDGE_SOURCES: KnowledgeSource[] = [
  {
    id: 'prophetic',
    title: 'Coran & Sagesse Prophétique',
    category: 'Spiritualité & Révélation',
    description: 'Une exégèse moderne des textes sacrés centrée sur l’affinement éthique de l’âme et l’universel.',
    detailedDescription: 'En puisant dans la rigueur des sciences traditionnelles et en les croisant avec les questionnements contemporains, nous explorons le sens profond de la Révélation comme boussole comportementale et spirituelle durable.',
    iconName: 'BookOpen',
    quote: '« Dis : Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ? »',
    quoteAuthor: 'Sourate Az-Zumar, V. 9',
    glowColor: 'rgba(212, 175, 55, 0.25)' // Gold
  },
  {
    id: 'psychology',
    title: 'Psychologie Clinique & Humaniste',
    category: 'Compréhension du Soi',
    description: 'Étude des profondeurs de la psyché humaine, des blessures de l’enfance aux mécanismes de l’ego.',
    detailedDescription: 'Intégration des théories analytiques et thérapies cognitives pour offrir des outils concrets de restructuration émotionnelle, de levée des refoulements et d’accomplissement individuel.',
    iconName: 'Sparkles',
    quote: '« Qui regarde à l’extérieur rêve. Qui regarde à l’intérieur s’éveille. »',
    quoteAuthor: 'Carl Gustav Jung',
    glowColor: 'rgba(123, 97, 255, 0.25)' // Indigo
  },
  {
    id: 'neurosciences',
    title: 'Neurosciences Cognitives',
    category: 'Biologie de la Pensée',
    description: 'Décryptage de la plasticité cérébrale, des circuits de la motivation, de l’attention et de la paix intérieure.',
    detailedDescription: 'Comment notre câblage neuronal réagit à la méditation, à la gratitude et aux croyances limitantes. Nous étudions comment reconfigurer activement nos réseaux pour stimuler la clarté d’esprit.',
    iconName: 'Brain',
    quote: '« La plasticité cérébrale est la preuve biologique que nous sommes conçus pour changer. »',
    quoteAuthor: 'Dr. Michael Merzenich',
    glowColor: 'rgba(0, 229, 255, 0.25)' // Cyan
  },
  {
    id: 'development',
    title: 'Développement Personnel Intégral',
    category: 'Action & Discipline',
    description: 'Bâtir une vie d’excellence par la maîtrise des habitudes, la gestion émotionnelle et la rigueur d’action.',
    detailedDescription: 'Une méthodologie axée sur les meilleures techniques de productivité éthique et de clarté décisionnelle, loin des promesses superficielles et ancrée dans le réel.',
    iconName: 'Compass',
    quote: '« Nous sommes ce que nous répétons sans cesse. L’excellence n’est alors pas un acte, mais une habitude. »',
    quoteAuthor: 'Aristote',
    glowColor: 'rgba(255, 107, 107, 0.25)' // Amber
  },
  {
    id: 'philosophy',
    title: 'Philosophie & Histoire des Idées',
    category: 'Sagesse des Anciens',
    description: 'Un voyage à travers les stoïciens, les penseurs arabo-andalous et les grands courants de la métaphysique.',
    detailedDescription: 'Analyser les paradigmes historiques pour décrypter notre époque moderne, comprendre nos crises existentielles et restaurer un art de vivre vertueux.',
    iconName: 'HeartHandshake',
    quote: '« La vie sans examen ne vaut la peine d’être vécue. »',
    quoteAuthor: 'Socrate',
    glowColor: 'rgba(212, 175, 55, 0.25)' // Gold
  },
  {
    id: 'leadership',
    title: 'Leadership & Influence Éthique',
    category: 'Impact Social',
    description: 'L’art d’inspirer les autres par l’alignement intérieur, l’écoute d’élite et l’intégrité inébranlable.',
    detailedDescription: 'Former des leaders doués d’empathie systémique et d’une force de persuasion noble, capables de bâtir des structures durables basées sur la confiance absolue.',
    iconName: 'TrendingUp',
    quote: '« Le véritable leader n’a pas besoin de mener, il suffit qu’il montre la voie. »',
    quoteAuthor: 'Sagesse Ancestrale',
    glowColor: 'rgba(30, 215, 96, 0.25)' // Emerald
  },
  {
    id: 'human_experience',
    title: 'Expérience Humaine & Sens',
    category: 'Mystique & Existence',
    description: 'Exploration de la transcendance, du deuil, de la résilience et de l’émerveillement quotidien.',
    detailedDescription: 'Comprendre comment l’épreuve façonne l’être et comment la quête de sens transforme de simples trajectoires biologiques en récits divinement ordonnés.',
    iconName: 'Eye',
    quote: '« Ce qui ne donne pas de sens à la vie la dépouille de sa valeur absolue. »',
    quoteAuthor: 'Viktor Frankl',
    glowColor: 'rgba(255, 179, 0, 0.25)' // Warm Gold
  }
];

export const MISSION_ITEMS: MissionItem[] = [
  {
    id: 'm1',
    title: 'Éclairer la conscience',
    description: 'Proposer une grille de lecture profonde et lucide, exempte de dogmatisme réducteur et de relativisme ambiant, pour naviguer les défis du 21e siècle.',
    iconName: 'Sun',
    glowColor: 'from-[#d4af37]/20 to-transparent'
  },
  {
    id: 'm2',
    title: 'Harmoniser les savoirs',
    description: 'Faire tomber les barrières artificielles entre sciences empiriques, traditions spirituelles et quête philosophique afin de reconstituer le savoir en un tout cohérent.',
    iconName: 'Combine',
    glowColor: 'from-[#7b61ff]/10 to-transparent'
  },
  {
    id: 'm3',
    title: 'Bâtir un héritage vivant',
    description: 'Guider chaque individu vers l’excellence éthique pour qu’il devienne à son tour un phare d’inspiration, transmettant sagesse et droiture à son époque.',
    iconName: 'Award',
    glowColor: 'from-[#00e5ff]/15 to-transparent'
  }
];

export const PREMIUM_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Discernement & Clarté Mentale',
    category: 'Cognition & Sagesse',
    description: 'Maîtriser les biais cognitifs, réguler l’attention à l’ère des distractions et instaurer le silence intérieur nécessaire à la prise de décision d’élite.',
    duration: '18 modules • 24 heures de contenu',
    modulesCount: 18,
    rating: 4.96,
    instructor: 'Sâad Abdel & Dr. Y. Ben Souda',
    level: 'Avancé',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    glowColor: 'rgba(212, 175, 55, 0.3)',
    highlights: [
      'Alchimie cognitive et dépassement des biais',
      'Neurobiologie de la contemplation spirituelle',
      'Architecture des rituels matinaux stoïciens et prophétiques',
      'Méditations guidées d’activation synaptique'
    ]
  },
  {
    id: 'c2',
    title: 'Masterclass : Leadership & Impact',
    category: 'Influence & Éthique',
    description: 'Se positionner comme pivot de confiance pour sa famille, son entreprise et son écosystème en alliant charisme spirituel et vision stratégique.',
    duration: '15 modules • 20 heures de contenu',
    modulesCount: 15,
    rating: 4.98,
    instructor: 'Sâad Abdel',
    level: 'Exécutif',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    glowColor: 'rgba(123, 97, 255, 0.3)',
    highlights: [
      'Anatomie psychologique de la persuasion',
      'Régulation de crise et charisme non-verbal',
      'Le leader serviteur : paradigmes historiques du pouvoir',
      'Atelier pratique de communication oratoire d’élite'
    ]
  },
  {
    id: 'c3',
    title: 'Neuro-Alchimie & Maîtrise de Soi',
    category: 'Psychologie & Neuroergonomie',
    description: 'Reconfigurer en profondeur vos schémas comportementaux inconscients grâce à l’entrelacs unique de la psychologie des profondeurs et de la plasticité cérébrale.',
    duration: '22 modules • 30 heures de contenu',
    modulesCount: 22,
    rating: 4.95,
    instructor: 'Dr. Sarah Lamy & Sâad Abdel',
    level: 'Fondational',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    glowColor: 'rgba(0, 229, 255, 0.3)',
    highlights: [
      'Reprogrammation des croyances limitantes inconscientes',
      'Mécanismes biologiques du détachement de l’Ego (Zuhd)',
      'Dépasser les traumatismes par la cohérence somato-cérébrale',
      'Protocoles de gestion du stress extrême par la respiration'
    ]
  },
  {
    id: 'c4',
    title: 'L’Art de l’Influence Vertueuse',
    category: 'Communication d’Élite',
    description: 'Étude minutieuse de la rhétorique classique, de la négociation avancée et des secrets conversationnels des plus grands pacificateurs de l’histoire.',
    duration: '12 modules • 16 heures de contenu',
    modulesCount: 12,
    rating: 4.92,
    instructor: 'Sâad Abdel',
    level: 'Tous niveaux',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    glowColor: 'rgba(255, 107, 107, 0.3)',
    highlights: [
      'Principes de médiation et d’écoute empathique d’élite',
      'Rhétorique stoïque : formuler l’essentiel sous tension',
      'Le storytelling d’impact pour inspirer le changement',
      'Négociation complexe et résolution pacifique de conflits'
    ]
  }
];

export const CONTENT_UNIVERSE: ContentItem[] = [
  {
    id: 'u1',
    title: 'La Trait d’Union Interne',
    type: 'livre',
    typeLabel: 'Livre Prestige',
    description: 'Un traité d’intégration reliant la théologie contemplative aux grandes théories de la psychologie de Carl Jung.',
    stats: '428 pages • Édition Limitée Gold-Bound',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop',
    glowColor: 'rgba(212, 175, 55, 0.4)',
    featuredQuote: '« La convergence suprême n’est pas l’annulation de nos paradoxes, mais leur sacralisation sous une même clarté. »',
    author: 'Sâad Abdel'
  },
  {
    id: 'u2',
    title: 'Les Neurosciences de la Paix Soufie',
    type: 'ebook',
    typeLabel: 'E-Book Premium',
    description: 'Une étude inédite démontrant le ralentissement des ondes cérébrales de l’amygdale lors de la méditation théocentrique.',
    stats: '124 pages • PDF Interactif / EPub',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop',
    glowColor: 'rgba(0, 229, 255, 0.4)',
    featuredQuote: '« Entraîner le cortex préfrontal à la gratitude réécrit l’architecture hormonale de notre anxiété héréditaire. »',
    author: 'Dr. Y. Ben Souda'
  },
  {
    id: 'u3',
    title: 'Sagesse de l’Ombre & Clarté du Matin',
    type: 'audio',
    typeLabel: 'Audiobook Immersif',
    description: 'Une lecture contée par Sâad Abdel sur un fond sonore binaural subtil, idéal pour vos séances d’étude nocturnes.',
    stats: '8h 45m d’écoute • Qualité HD Lossless',
    rating: 4.97,
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop',
    glowColor: 'rgba(123, 97, 255, 0.4)',
    featuredQuote: '« Épuiser ses nuits dans la contemplation du silence prépare le verbe à briser les obscurités du monde. »',
    author: 'Sâad Abdel'
  },
  {
    id: 'u4',
    title: 'La Rupture du Bruit',
    type: 'podcast',
    typeLabel: 'Podcast Élite',
    description: 'Des conversations authentiques avec de grands neurologues, théologiens et philosophes d’Orient et d’Occident.',
    stats: '64 épisodes • Diffusé en Audio 3D Spatial',
    rating: 4.99,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop',
    glowColor: 'rgba(255, 107, 107, 0.4)',
    featuredQuote: '« La sagesse commence là où se brise le vacarme médiatique contemporain. »',
    author: 'Convergence Studios'
  },
  {
    id: 'u5',
    title: 'Synthèse Graphique : La Cartographie de l’Âme',
    type: 'synthese',
    typeLabel: 'Synthèse Visuelle',
    description: 'Une somptueuse infographie grand format réunissant l’intellect, le cœur, le cerveau, et les étapes traditionnelles de purification.',
    stats: 'Fichier SVG Vectoriel Ultra HD',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    glowColor: 'rgba(212, 175, 55, 0.4)',
    featuredQuote: '« Voir les schémas complexes de la conscience résumés en une seule géométrie dorée libère un choc d’intelligence immédiat. »',
    author: 'Designers de l’Académie'
  }
];

export const VISION_NODES: VisionNode[] = [
  {
    id: 'v_center',
    title: 'Relier les Savoirs',
    subtitle: 'Épicentre',
    description: 'Faire rayonner la vérité par la synthèse unifiée de l’esprit humain.',
    iconName: 'Sparkles',
    position: 'center'
  },
  {
    id: 'v1',
    title: 'Comprendre en profondeur',
    subtitle: 'Niveau I',
    description: 'Sortir et s’extraire du consumérisme de l’information rapide pour explorer la vérité structurelle.',
    iconName: 'Eye',
    position: 'node',
    angle: 0
  },
  {
    id: 'v2',
    title: 'Construire un héritage durable',
    subtitle: 'Niveau II',
    description: 'Poser des fondations à l’épreuve du temps pour laisser une empreinte de noblesse sur Terre.',
    iconName: 'Award',
    position: 'node',
    angle: 60
  },
  {
    id: 'v3',
    title: 'Inspirer les générations',
    subtitle: 'Niveau III',
    description: 'Devenir et s’incarner en un repère éthique de clarté pour réveiller la grandeur d’autrui.',
    iconName: 'Sun',
    position: 'node',
    angle: 120
  },
  {
    id: 'v4',
    title: 'Transformer les vies',
    subtitle: 'Niveau IV',
    description: 'Passer du savoir théorique passif à la métamorphose totale de l’art de vivre.',
    iconName: 'Zap',
    position: 'node',
    angle: 180
  },
  {
    id: 'v5',
    title: 'Transmettre avec clarté',
    subtitle: 'Niveau V',
    description: 'Maîtriser la pédagogie d’élite pour diffuser le savoir d’une manière magnifiquement digestible et inoubliable.',
    iconName: 'Send',
    position: 'node',
    angle: 240
  },
  {
    id: 'v6',
    title: 'Relier ce qui semble séparé',
    subtitle: 'Niveau VI',
    description: 'Prouver que la raison cartésienne et l’aspiration divine sont les deux faces d’une même lumière.',
    iconName: 'Combine',
    position: 'node',
    angle: 300
  }
];

export const PODCAST_EPISODES: PodcastItem[] = [
  {
    id: 'p1',
    title: '#14 — Neurobiologie du Deuil et Sagesse de la Soumission Spirituelle',
    host: 'Sâad Abdel avec le Dr. Youssef Nour',
    duration: '1h 14m',
    category: 'Neurosciences & Esprit',
    episodeNumber: 'ÉPISODE 14',
    description: 'Comment le cerveau humain intègre-t-il l’absence ? Exploration croisée des théories de l’attachement de Bowlby et des concepts de Ridâ et d’acceptation suprême dans les disciplines traditionnelles.',
    waveform: [10, 30, 45, 20, 60, 80, 50, 40, 95, 30, 40, 50, 70, 80, 40, 20, 60, 90, 70, 40, 20, 45, 60, 30, 10, 25, 40, 80, 100, 75, 40, 60, 80, 50, 30, 40, 70, 90, 50, 20, 30, 45, 10]
  },
  {
    id: 'p2',
    title: '#13 — L’Empire de l’Attention : Bâtir ses Remparts contre l’Addiction Digitale',
    host: 'Sâad Abdel',
    duration: '52m',
    category: 'Maîtrise de Soi',
    episodeNumber: 'ÉPISODE 13',
    description: 'Guide neuroergonomique de réappropriation de votre attention. Comprendre la boucle de dopamine créée par l’économie de l’attention et mettre en place un monachisme urbain moderne et pragmatique.',
    waveform: [20, 40, 30, 50, 70, 60, 80, 40, 30, 45, 60, 75, 90, 80, 50, 30, 60, 85, 70, 50, 40, 20, 5, 15, 35, 60, 80, 100, 70, 50, 30, 40, 60, 75, 50, 35, 20, 45, 80, 60, 40, 30, 20]
  },
  {
    id: 'p3',
    title: '#12 — Le Traité d’Athènes à Cordoue : L’Histoire Oubliée de la Psychologie Divine',
    host: 'Sâad Abdel avec le Pr. Tareq Al-Andalusi',
    duration: '1h 38m',
    category: 'Philosophie & Histoire',
    episodeNumber: 'ÉPISODE 12',
    description: 'Immersion historique au cœur de la Maison de la Sagesse de Bagdad et de Cordoue. Découverte des premiers hôpitaux psychiatriques et de la psychothérapie d’Ibn Sina (Avicenne) et d’Al-Ghazali.',
    waveform: [15, 25, 35, 45, 30, 20, 50, 70, 80, 90, 85, 65, 40, 30, 60, 80, 95, 70, 50, 40, 60, 75, 90, 80, 60, 40, 30, 20, 15, 30, 50, 70, 85, 90, 75, 45, 35, 60, 80, 50, 30, 10, 5]
  }
];

export const APP_MOBILE_SCREENS = [
  {
    id: 'lib',
    title: 'Bibliothèque Divine',
    subtitle: 'Sagesse en main',
    description: 'Accédez à l’intégralité des ouvrages et e-books premium cryptés. Lisez et surlignez grâce aux reflets dorés tactiles haute fluidité.',
    badge: 'LUXURY PLAYER',
    bgColor: 'from-[#050508] to-[#0d0a20]'
  },
  {
    id: 'pod',
    title: 'Podcasts Spatialisés',
    subtitle: 'Audio 3D',
    description: 'Une acoustique binaurale en 3D immersive pour se couper totalement du monde et vibrer au son des savoirs vivants à haute intensité.',
    badge: 'ATMOSPHERE 3D',
    bgColor: 'from-[#050508] to-[#1a1105]'
  },
  {
    id: 'form',
    title: 'Programmes Initiatiques',
    subtitle: 'Apprentissage d’Élite',
    description: 'Une interface de formation d’une fluidité absolue inspirée de Masterclass et Netflix, avec contrôle de vitesse neuronal.',
    badge: 'MASTERCLASS',
    bgColor: 'from-[#050508] to-[#041a1c]'
  },
  {
    id: 'dash',
    title: 'Rituels de Conscience',
    subtitle: 'Tableau de Bord',
    description: 'Visualisez vos heures d’études, vos séances d’exercices respiratoires et vos micro-habitudes mesurées par notre algorithme éthique.',
    badge: 'BIOHEADSET SYNC',
    bgColor: 'from-[#050508] to-[#12040b]'
  }
];
