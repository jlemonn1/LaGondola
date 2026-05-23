import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import ParallaxLayer from '../../components/ui/ParallaxLayer/ParallaxLayer';
import './HeroBackground.css';

const StarSVG = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 0 L28 17 L48 24 L28 31 L24 48 L20 31 L0 24 L20 17 Z" fill="var(--color-gold)"/>
  </svg>
);

const SplashSVG = ({ className = '', style = {}, color = 'var(--color-red)' }) => (
  <svg className={className} style={style} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 100 Q40 50 100 40 Q160 30 150 90 Q180 130 130 150 Q80 180 60 130 Q30 120 60 100Z" fill={color} opacity="0.2"/>
    <circle cx="80" cy="70" r="8" fill={color} opacity="0.3"/>
    <circle cx="130" cy="60" r="5" fill={color} opacity="0.3"/>
    <circle cx="150" cy="110" r="6" fill={color} opacity="0.3"/>
    <circle cx="100" cy="160" r="7" fill={color} opacity="0.3"/>
  </svg>
);

const WaveSVG = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0 30 Q50 0 100 30 T200 30 T300 30 T400 30" stroke="var(--color-gold)" strokeWidth="2" fill="none" opacity="0.25"/>
    <path d="M0 40 Q50 10 100 40 T200 40 T300 40 T400 40" stroke="var(--color-red)" strokeWidth="2" fill="none" opacity="0.2"/>
  </svg>
);

const HeroBackground = ({ mouse = { x: 0, y: 0 } }) => {
  const reduced = useReducedMotion();

  const mStyle = (intensity) => ({
    transform: `translate(${mouse.x * intensity}px, ${mouse.y * intensity}px)`,
    transition: 'transform 0.15s linear',
  });

  if (reduced) {
    return (
      <div className="hero-background hero-background--reduced">
        <div className="hero-background__gradient" />
      </div>
    );
  }

  return (
    <div className="hero-background hero-background--photo">
      {/* Capa 0: Imagen de fondo real */}
      <div className="hero-background__image" aria-hidden="true" />
      <div className="hero-background__image-fade" aria-hidden="true" />

      {/* SVG Filters */}
      <svg className="hero-background__filters" aria-hidden="true">
        <defs>
          <filter id="hb-glow-red">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="hb-glow-gold">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
      </svg>

      {/* Capa 1: Fondo ladrillo — velocidad 0.1 */}
      <ParallaxLayer speed={0.1} zIndex={-3} className="hero-background__brick">
        <div className="hero-background__brick-pattern" />
      </ParallaxLayer>

      {/* Capa 2: Splashes decorativas */}
      <ParallaxLayer speed={0.15} zIndex={-2} className="hero-background__splash-layer">
        <SplashSVG className="hero-background__splash hero-background__splash--1" color="var(--color-red)" />
        <SplashSVG className="hero-background__splash hero-background__splash--2" color="var(--color-blue)" />
        <SplashSVG className="hero-background__splash hero-background__splash--3" color="var(--color-gold)" />
      </ParallaxLayer>

      {/* Capa 3: Nubes difuminadas — velocidad 0.2 */}
      <ParallaxLayer speed={0.2} zIndex={-1} className="hero-background__clouds">
        <div className="hero-background__cloud hero-background__cloud--red" />
        <div className="hero-background__cloud hero-background__cloud--gold" />
        <div className="hero-background__cloud hero-background__cloud--blue" />
        <div className="hero-background__cloud hero-background__cloud--red2" />
      </ParallaxLayer>

      {/* Capa 4: Texto decorativo gigante — velocidad 0.4 */}
      <ParallaxLayer speed={0.4} zIndex={0} className="hero-background__watermark">
        <span className="hero-background__watermark-text">GÓNDOLA</span>
      </ParallaxLayer>

      {/* Capa 5: Ondas decorativas */}
      <ParallaxLayer speed={0.45} zIndex={0} className="hero-background__waves">
        <WaveSVG className="hero-background__wave hero-background__wave--1" />
        <WaveSVG className="hero-background__wave hero-background__wave--2" />
      </ParallaxLayer>

      {/* Capa 6: Estrellas flotantes */}
      <ParallaxLayer speed={0.8} zIndex={2} className="hero-background__float-layer">
        <div style={{ position: 'absolute', top: '20%', left: '45%', ...mStyle(-40) }}>
          <StarSVG className="hero-background__star" />
        </div>
        <div style={{ position: 'absolute', top: '45%', left: '25%', ...mStyle(35) }}>
          <StarSVG className="hero-background__star hero-background__star--2" />
        </div>
        <div style={{ position: 'absolute', top: '60%', right: '35%', ...mStyle(-25) }}>
          <StarSVG className="hero-background__star hero-background__star--3" />
        </div>
      </ParallaxLayer>

      {/* Capa 7: Gradientes y luces — velocidad 0.6 */}
      <ParallaxLayer speed={0.6} zIndex={1} className="hero-background__lights">
        <div className="hero-background__gradient" />
        <div className="hero-background__spotlight" />
        <div className="hero-background__spotlight hero-background__spotlight--secondary" />
      </ParallaxLayer>

      {/* Grain overlay */}
      <div className="hero-background__grain" aria-hidden="true" />
    </div>
  );
};

export default HeroBackground;
