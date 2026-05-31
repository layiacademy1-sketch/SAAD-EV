import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { VISION_NODES } from '../data';
import { VisionNode } from '../types';

export default function NotreVision() {
  // Select the first node by default so there's always interesting content visible!
  const [selectedNode, setSelectedNode] = useState<VisionNode>(VISION_NODES[1]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Center node config
  const centerNode = VISION_NODES[0];

  // Rest of nodes
  const nodes = VISION_NODES.slice(1);

  return (
    <section id="vision" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/[0.01] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/2a to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#d4af37]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              GÉOMÉTRIE SACRÉE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans tracking-tight text-white font-medium mt-4">
            Notre vision circulaire
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
            Cliquez sur les différents sommets éthiques pour observer comment la Maison du Savoir Unitaire connecte et harmonise chaque élan de l'expérience humaine.
          </p>
        </div>

        {/* Circular Layout Area */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Circle Construction */}
          <div className="lg:col-span-7 flex justify-center items-center py-8">
            
            <div className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] flex items-center justify-center">
              
              {/* Spinning outer decorative gold wire rings for high-end feel */}
              <div className="absolute inset-0 border border-dashed border-[#d4af37]/10 rounded-full animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute inset-8 border border-zinc-900 rounded-full" />
              <div className="absolute inset-16 border border-dashed border-[#d4af37]/5 rounded-full animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />

              {/* CONNECTIVE VECTOR SVG LINES (Drawn behind HTML nodes) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {nodes.map((node) => {
                  const angleRad = ((node.angle || 0) * Math.PI) / 180;
                  // Map coordinates on 100% basis
                  const r = 40; // radius percentage
                  const startX = 50; // center %
                  const startY = 50; // center %
                  const endX = 50 + r * Math.cos(angleRad);
                  const endY = 50 + r * Math.sin(angleRad);
                  
                  const isNodeActive = selectedNode.id === node.id;
                  const isNodeHovered = hoveredNodeId === node.id;

                  return (
                    <g key={`line-${node.id}`}>
                      {/* Ambient thick glow line */}
                      <line
                        x1={`${startX}%`}
                        y1={`${startY}%`}
                        x2={`${endX}%`}
                        y2={`${endY}%`}
                        stroke={isNodeActive || isNodeHovered ? '#d4af37' : 'rgba(212,175,55,0.08)'}
                        strokeWidth={isNodeActive || isNodeHovered ? '2' : '0.8'}
                        className="transition-all duration-500"
                        style={{
                          filter: isNodeActive || isNodeHovered ? 'drop-shadow(0 0 4px #d4af37)' : 'none'
                        }}
                      />
                      {/* Stardust nodes line animation points */}
                      {(isNodeActive || isNodeHovered) && (
                        <circle
                          r="3"
                          fill="#d4af37"
                          className="animate-pulse"
                        >
                          <animateMotion
                            path={`M ${startX * 4.5} ${startY * 4.5} L ${endX * 4.5} ${endY * 4.5}`}
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* 1. CENTER EPICENTRE NODE (INTEGRATED WITH BRAND LOGO IMAGE) */}
              <div className="z-10 bg-transparent border-2 border-[#d4af37] w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_35px_rgba(212,175,55,0.55)] relative group transition-transform duration-500 hover:scale-105">
                <img
                  src="https://image.noelshack.com/fichiers/2026/22/7/1780178760-chatgpt-image-31-mai-2026-00-00-01.jpg"
                  alt="Sâad'ev Convergence Logo"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-contain mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity duration-305"
                />
                
                {/* Delicate overlay to keep center labels clean & legible */}
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-300" />
                
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <LucideIcons.Sparkles className="w-4.5 h-4.5 text-[#d4af37] mb-0.5 animate-pulse" />
                  <span className="text-[8.5px] sm:text-[9.5px] font-sans font-bold tracking-wider text-white leading-tight">
                    RELIER
                  </span>
                  <span className="text-[6.5px] sm:text-[7.5px] font-mono tracking-widest text-[#d4af37] uppercase mt-0.5 font-bold">
                    LES SAVOIRS
                  </span>
                </div>
                {/* Micro-sparkle decorative border overlay */}
                <div className="absolute inset-0.5 rounded-full border border-[#d4af37]/30 pointer-events-none animate-pulse" />
              </div>

              {/* 2. CIRCULAR SATELLITE NODES */}
              {nodes.map((node) => {
                const angleRad = ((node.angle || 0) * Math.PI) / 180;
                // Calculate position offsets based on device width
                const radiusDist = window.innerWidth < 640 ? 120 : 165; 
                const cosX = radiusDist * Math.cos(angleRad);
                const sinY = radiusDist * Math.sin(angleRad);

                const isSelected = selectedNode.id === node.id;
                const isHovered = hoveredNodeId === node.id;
                
                // Get corresponding Lucide Icon
                const IconComponent = (LucideIcons as any)[node.iconName] || LucideIcons.Compass;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    className="absolute z-20 focus:outline-none transition-all duration-300"
                    style={{
                      transform: `translate(${cosX}px, ${sinY}px)`
                    }}
                  >
                    {/* Circle Button container with glowing outline */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
                      isSelected
                        ? 'bg-[#d4af37] text-black border-2 border-white scale-110 shadow-[0_0_20px_rgba(212,175,55,0.45)]'
                        : isHovered
                        ? 'bg-zinc-900 text-[#d4af37] border border-[#d4af37] scale-105'
                        : 'bg-black text-zinc-400 border border-zinc-800'
                    }`}>
                      <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>

                    {/* Node floating textual labels */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-28 text-center pointer-events-none hidden sm:block">
                      <span className={`text-[8.5px] font-mono tracking-widest block uppercase transition-colors duration-300 ${
                        isSelected || isHovered ? 'text-[#d4af37] font-medium' : 'text-zinc-550'
                      }`}>
                        {node.title.split(' ')[0]} {/* Simple label limit */}
                      </span>
                    </div>

                  </button>
                );
              })}

            </div>

          </div>

          {/* Right Column: Descriptions & Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl bg-[#050508] border border-zinc-900 shadow-2xl relative overflow-hidden"
              >
                {/* Edge gold highlight line */}
                <span className="absolute left-0 inset-y-0 w-1 bg-[#d4af37] rounded-l" />

                <div className="flex items-center gap-3 text-[#d4af37] mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest">{selectedNode.subtitle}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  <LucideIcons.Sparkles className="w-3.5 h-3.5" />
                </div>

                <h3 className="text-xl sm:text-2xl text-white font-sans font-medium tracking-tight mb-4">
                  {selectedNode.title}
                </h3>

                <p className="text-zinc-350 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {selectedNode.description}
                </p>

                {/* Sub-quote explaining theological/scientific connection */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-left text-[11px] text-zinc-500 font-light leading-relaxed">
                  <span className="font-mono text-zinc-400 font-semibold block uppercase tracking-wider mb-1">
                    ANALYSE COMPORTEMENTALE
                  </span>
                  Pour actualiser cet objectif, la plateforme croise les protocoles d'autorégulation stoïque, neuro-biologique, et les vertus prophétiques d'élévation morale de l'âme.
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
