export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  modulesCount: number;
  rating: number;
  image: string;
  glowColor: string;
  instructor: string;
  level: string;
  highlights: string[];
}

export interface ContentItem {
  id: string;
  title: string;
  type: 'livre' | 'ebook' | 'audio' | 'podcast' | 'synthese' | 'formation' | 'conference' | 'outil';
  typeLabel: string;
  description: string;
  stats: string;
  rating: number;
  image: string;
  glowColor: string;
  featuredQuote?: string;
  author?: string;
}

export interface KnowledgeSource {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  quote: string;
  quoteAuthor: string;
  glowColor: string;
}

export interface MissionItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  glowColor: string;
}

export interface VisionNode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  position: 'center' | 'node';
  angle?: number; // in degrees for circular layout
}

export interface PodcastItem {
  id: string;
  title: string;
  host: string;
  duration: string;
  category: string;
  episodeNumber: string;
  description: string;
  waveform: number[];
}
