import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NosSources from './components/NosSources';
import UniversContenus from './components/UniversContenus';
import ApplicationMobile from './components/ApplicationMobile';
import FormationsSection from './components/FormationsSection';
import NotreVision from './components/NotreVision';
import CommunauteStats from './components/CommunauteStats';
import Footer from './components/Footer';
import AcousticPlayer from './components/AcousticPlayer';
import DiscoverModal from './components/DiscoverModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);

  // Bottom Floating Audio Player State
  const [audioPlayer, setAudioPlayer] = useState({
    isVisible: false,
    title: '',
    author: '',
    isPlaying: false,
  });

  // Smooth Navigation Trigger
  const handleNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer to highlight current active section on the navbar as the user scrolls
  useEffect(() => {
    const sections = ['accueil', 'mission', 'sources', 'contenus', 'mobile', 'formations', 'vision', 'communaute'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Center-weighted threshold
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'accueil') {
            setActiveSection('accueil');
          } else if (id === 'contenus' || id === 'formations') {
            setActiveSection('contenus');
          } else if (id === 'mobile') {
            setActiveSection('mobile');
          } else if (id === 'mission' || id === 'sources' || id === 'vision') {
            setActiveSection('mission');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Handle preview playing podcasts or audiobooks
  const handlePlayPodcast = (title: string, author: string) => {
    setAudioPlayer({
      isVisible: true,
      title,
      author,
      isPlaying: true,
    });
  };

  const handleTogglePlay = () => {
    setAudioPlayer((prev) => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));
  };

  const handleClosePlayer = () => {
    setAudioPlayer((prev) => ({
      ...prev,
      isVisible: false,
      isPlaying: false,
    }));
  };

  return (
    <div className="bg-black text-white min-h-screen relative font-sans antialiased selection:bg-[#d4af37]/35 selection:text-white overflow-x-hidden">
      
      {/* 1. Header Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigation}
        onOpenDiscover={() => setIsDiscoverOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        onExplore={() => handleNavigation('contenus')}
        onJoin={() => handleNavigation('communaute')}
      />

      {/* 3. Nos Sources grid dashboards */}
      <NosSources />

      {/* 5. Univers De Contenus Interactive Mockups */}
      <UniversContenus
        onPlayPodcast={handlePlayPodcast}
        isPlayingPodcast={audioPlayer.isPlaying}
        currentPlayingTitle={audioPlayer.title}
      />

      {/* 6. Mobile Application previews mockups */}
      <ApplicationMobile />

      {/* 7. Formations Section premium cards */}
      <FormationsSection />

      {/* 8. Notre Vision Interactive circle diagram */}
      <NotreVision />

      {/* 9. Communauté Statistics interactive and News bulletin signup */}
      <CommunauteStats />

      {/* 10. Footer Quick navigation footer */}
      <Footer onNavigate={handleNavigation} />

      {/* --- FLOATING CONTROLS & CAPABILITIES (MODALS & PLAYER BAR) --- */}
      
      {/* Floating Bottom Acoustic Player Preview bar */}
      <AcousticPlayer
        isVisible={audioPlayer.isVisible}
        title={audioPlayer.title}
        author={audioPlayer.author}
        isPlaying={audioPlayer.isPlaying}
        onTogglePlay={handleTogglePlay}
        onClose={handleClosePlayer}
      />

      {/* Search database & Executive 1-on-1 counseling concierge overlay */}
      <DiscoverModal
        isOpen={isDiscoverOpen}
        onClose={() => setIsDiscoverOpen(false)}
        onNavigate={handleNavigation}
      />

    </div>
  );
}
