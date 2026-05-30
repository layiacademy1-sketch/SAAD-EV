import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Radio, Sparkles, Globe } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onJoin: () => void;
}

export default function Hero({ onExplore, onJoin }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Particle class for golden stardust
    interface GoldStar {
      x: number;
      y: number;
      size: number;
      alpha: number;
      speedY: number;
      speedX: number;
    }

    const stars: GoldStar[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      speedY: -(Math.random() * 0.2 + 0.05),
      speedX: (Math.random() - 0.5) * 0.1,
    }));

    // Wireframe Globe 3D Points Projections
    interface GlobePoint {
      x: number;
      y: number;
      z: number;
      px: number;
      py: number;
    }

    const globePoints: GlobePoint[] = [];
    const radius = Math.min(width, height) * 0.28; // Adaptive globe size
    const ringsCount = 14;
    const pointsPerRing = 18;

    for (let i = 0; i < ringsCount; i++) {
      const phi = (Math.PI * i) / ringsCount; // Angle latitude
      for (let j = 0; j < pointsPerRing; j++) {
        const theta = (2 * Math.PI * j) / pointsPerRing; // Angle longitude
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        globePoints.push({ x, y, z, px: 0, py: 0 });
      }
    }

    let angleX = 0.0012; // Rotation speeds
    let angleY = 0.0028;

    const rotateX = (point: GlobePoint, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y1 = point.y * cos - point.z * sin;
      const z1 = point.y * sin + point.z * cos;
      point.y = y1;
      point.z = z1;
    };

    const rotateY = (point: GlobePoint, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x1 = point.x * cos - point.z * sin;
      const z1 = point.x * sin + point.z * cos;
      point.x = x1;
      point.z = z1;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse movement inside canvas
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      });
    };

    const handleMouseLeave = () => {
      setMouse((prev) => ({ ...prev, active: false }));
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Core Draw Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw smooth gradient behind Everything (Intense Midnight Blue & Deep Black)
      const gradBg = ctx.createRadialGradient(
        width / 2,
        height / 2,
        width * 0.1,
        width / 2,
        height / 2,
        width * 0.8
      );
      gradBg.addColorStop(0, '#060a1e'); // Intense midnight blue
      gradBg.addColorStop(1, '#020204'); // Pure black
      ctx.fillStyle = gradBg;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw a giant glowing central nebulous aura (behind the globe)
      const centerX = width * 0.75;
      const centerY = height * 0.52;
      const glowGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, radius * 1.5);
      glowGrad.addColorStop(0, 'rgba(212, 175, 55, 0.08)'); // Gold glowing center
      glowGrad.addColorStop(0.3, 'rgba(10, 24, 78, 0.3)'); // Blue nebula
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // 3. Draw Background Constellations / Stars
      stars.forEach((star) => {
        star.y += star.speedY;
        star.x += star.speedX;

        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
        if (star.x < 0 || star.x > width) {
          star.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(212, 175, 55, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Update and Project Globe 3D points
      globePoints.forEach((pt) => {
        rotateX(pt, angleX);
        rotateY(pt, angleY);

        // Perspective projection
        const viewDistance = radius * 2.2;
        const perspective = viewDistance / (viewDistance - pt.z);
        
        // Output coordinates offset to the right side of screen (for desktop)
        const renderCenterY = width < 1024 ? height * 0.65 : centerY;
        const renderCenterX = width < 1024 ? width / 2 : width * 0.75;

        pt.px = pt.x * perspective + renderCenterX;
        pt.py = pt.y * perspective + renderCenterY;
      });

      // Draw subtle orbital rings aligned flat for space-faring futuristic vibe
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      const renderCenterX = width < 1024 ? width / 2 : width * 0.75;
      const renderCenterY = width < 1024 ? height * 0.65 : centerY;
      ctx.ellipse(renderCenterX, renderCenterY, radius * 1.4, radius * 0.4, -0.2, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(212, 175, 55, 0.05)';
      ctx.beginPath();
      ctx.ellipse(renderCenterX, renderCenterY, radius * 1.8, radius * 0.5, -0.2, 0, Math.PI * 2);
      ctx.stroke();

      // Draw wireframe grid connections (latitudes & longitudes)
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.12)';

      for (let i = 0; i < ringsCount; i++) {
        for (let j = 0; j < pointsPerRing; j++) {
          const idx = i * pointsPerRing + j;
          const point = globePoints[idx];

          if (point.z > -radius * 0.2) { // Render only front of globe for holographic depth
            const alpha = Math.max(0.05, (point.z + radius) / (radius * 2) * 0.28);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;

            // Draw horizontal rings segment
            const nextHIdx = i * pointsPerRing + ((j + 1) % pointsPerRing);
            const nextHPoint = globePoints[nextHIdx];
            if (nextHPoint && nextHPoint.z > -radius * 0.2) {
              ctx.beginPath();
              ctx.moveTo(point.px, point.py);
              ctx.lineTo(nextHPoint.px, nextHPoint.py);
              ctx.stroke();
            }

            // Draw vertical longitudinal segments
            if (i < ringsCount - 1) {
              const nextVIdx = (i + 1) * pointsPerRing + j;
              const nextVPoint = globePoints[nextVIdx];
              if (nextVPoint && nextVPoint.z > -radius * 0.2) {
                ctx.beginPath();
                ctx.moveTo(point.px, point.py);
                ctx.lineTo(nextVPoint.px, nextVPoint.py);
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw highlighted node dots
      globePoints.forEach((pt, index) => {
        if (pt.z > radius * 0.3 && index % 11 === 0) {
          const alpha = (pt.z + radius) / (radius * 1.6);
          
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#d4af37';
          ctx.fillStyle = `rgba(215, 180, 60, ${alpha * 0.85})`;
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 3.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.shadowBlur = 0; // Reset
          
          // Connect to mouse pointer with weak neon strands if close
          if (mouse.active) {
            const dx = mouse.x - pt.px;
            const dy = mouse.y - pt.py;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              ctx.strokeStyle = `rgba(212, 175, 55, ${(1 - dist / 130) * 0.45})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(pt.px, pt.py);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }
      });

      // 5. Draw mouse interactive reticle
      if (mouse.active) {
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#d4af37';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouse.active]);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Absolute Canvas Background covering full hero */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col text-left">
          
          {/* Top subtle badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full w-max text-[#d4af37] font-mono text-[10px] tracking-[0.2em] mb-8 uppercase animate-fade-in">
            <Radio className="w-3 h-3 animate-pulse" />
            La Connaissance Intégrative
          </div>

          {/* Epic Main Header, matching the exact wording requested */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white font-medium leading-[1.15] italic">
            <span className="block relative not-italic font-bold">
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#d4af37] opacity-0 lg:opacity-100 rounded-r-md shadow-[0_0_15px_#d4af37]" />
              Relier les savoirs.
            </span>
            <span className="block mt-2 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent italic font-light">
              Comprendre l’humain.
            </span>
            <span className="block mt-2 bg-gradient-to-r from-[#d4af37] via-amber-200 to-white bg-clip-text text-transparent not-italic font-semibold">
              Transformer les vies.
            </span>
          </h1>

          {/* Subtext, matching the exact text requested */}
          <p className="mt-8 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-light">
            Convergence est une plateforme globale dédiée à la connaissance intégrative reliant{' '}
            <span className="text-[#d4af37] font-normal">spiritualité</span>,{' '}
            <span className="text-white font-normal">neurosciences</span>,{' '}
            <span className="text-[#d4af37] font-normal">psychologie</span>,{' '}
            <span className="text-white font-normal">philosophie</span>,{' '}
            <span className="text-zinc-200 font-normal">développement personnel</span> et{' '}
            <span className="text-white font-normal">expérience humaine</span>.
          </p>

          {/* Subtle decoration lines */}
          <div className="flex items-center gap-2.5 mt-8 mb-10">
            <span className="w-16 h-[1.5px] bg-gradient-to-r from-[#d4af37] to-transparent shadow-[0_0_4px_#d4af37]" />
            <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span className="w-32 h-[0.5px] bg-zinc-800" />
          </div>

          {/* Interactive CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <button
              onClick={onExplore}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#bca03f] hover:from-[#eec64e] hover:to-[#c6a843] text-black font-semibold font-mono text-[11px] uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(212,175,55,0.25)] transition-all duration-300 hover:shadow-[0_4px_35px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Explorer l'Univers
            </button>
            <button
              onClick={onJoin}
              className="px-8 py-3.5 rounded-full border border-zinc-700 hover:border-[#d4af37] hover:bg-white/[0.03] text-white font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:-translate-y-0.5"
            >
              Rejoindre la communauté
            </button>
          </div>

        </div>

        {/* Dynamic Hologram label on the Right side for rich balance */}
        <div className="lg:col-span-5 h-[320px] lg:h-[450px] pointer-events-none flex items-end justify-center lg:justify-end pb-8">
          <div className="bg-black/40 border border-zinc-800/80 backdrop-blur-md px-6 py-4 rounded-xl max-w-xs flex flex-col gap-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] animate-pulse">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
                ORBITE COGNITIVE ACTIVE
              </span>
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
            </div>
            <p className="text-[11px] text-zinc-400 leading-normal font-light">
              La géométrie interactive ci-contre symbolise l’unification holistique de nos savoirs ancestraux et empiriques.
            </p>
          </div>
        </div>

      </div>

      {/* Floating Animated scroll indicator at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" onClick={onExplore}>
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-zinc-500">Explorer la profondeur</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="text-[#d4af37]"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>

    </section>
  );
}
