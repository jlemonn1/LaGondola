import React from 'react';
import SprayText from '../../components/ui/SprayText/SprayText';
import './HeroTitle.css';

const StarSVG = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0 L19 12 L32 16 L19 20 L16 32 L13 20 L0 16 L13 12 Z" fill="var(--color-gold)"/>
  </svg>
);

const HeroTitle = () => {

  return (
    <div className="hero-title">
      <div className="hero-title__badge animate-fade-in-up delay-1">
        <span className="hero-title__badge-text">Abierto Ahora</span>
        <span className="hero-title__badge-pulse" aria-hidden="true" />
      </div>
      <SprayText tag="h1" className="spray-text--xl hero-title__main" delay={0.3}>
        GÓNDOLA
      </SprayText>
      <div className="hero-title__decor" aria-hidden="true">
        <StarSVG className="hero-title__star" />
        <svg className="hero-title__underline-svg" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <filter id="title-glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <path d="M2 6 Q75 0 150 6 T298 6" stroke="var(--color-gold)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#title-glow)"/>
          <circle cx="150" cy="6" r="4" fill="var(--color-red)"/>
        </svg>
        <StarSVG className="hero-title__star hero-title__star--right" />
      </div>
      <p className="hero-title__slogan animate-fade-in-up delay-3">
        Desde 1983, el sabor que guía a Mocejón
      </p>
      <p className="hero-title__sub-slogan animate-fade-in-up delay-4">
        Pizzas artesanales, Smash Burgers y mucho más
      </p>
    </div>
  );
};

export default HeroTitle;
