import React from 'react';
import './HeroLogo.css';

const HaloSVG = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="92" stroke="var(--color-red)" strokeWidth="2" strokeDasharray="10 8" opacity="0.45" />
    <circle cx="100" cy="100" r="82" stroke="var(--color-gold)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.35" />
  </svg>
);

const GondolaLogoSVG = () => (
  <svg
    className="hero-logo__svg"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Pizzería Góndola — Faro de Mocejón"
  >
    <defs>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.2" />
      </filter>
      <filter id="lightGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <radialGradient id="beamGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C41E24" stopOpacity="0.35" />
        <stop offset="60%" stopColor="#C41E24" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#C41E24" stopOpacity="0" />
      </radialGradient>
      <clipPath id="faroClip">
        <path d="M160,330 L240,330 L248,148 L152,148 Z" />
      </clipPath>
      <path id="arcTop" d="M 45,215 A 170,170 0 0,1 355,215" fill="none" />
      <path id="arcBottom" d="M 355,215 A 170,170 0 0,1 45,215" fill="none" />
    </defs>

    {/* ===== 1. FONDO BLANCO ===== */}
    <circle className="logo-bg" cx="200" cy="200" r="190" fill="#F4F1EA" />

    {/* ===== 2. BORDE FINO ===== */}
    <circle className="logo-ring" cx="200" cy="200" r="185" fill="none" stroke="#0F2B5B" strokeWidth="3" strokeLinecap="round" />
    <circle className="logo-ring-inner" cx="200" cy="200" r="178" fill="none" stroke="#C41E24" strokeWidth="1.5" opacity="0.4" />

    {/* ===== 3. TEXTO CURVO SUPERIOR ===== */}
    <g className="logo-text-top">
      <text
        fill="#0F2B5B"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="6"
      >
        <textPath href="#arcTop" startOffset="50%" textAnchor="middle">
          GONDOLA · Pizzería
        </textPath>
      </text>
    </g>

    {/* ===== 4. TEXTO CURVO INFERIOR ===== */}
    <g className="logo-text-bottom">
      <text
        fill="#C41E24"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="6"
      >
        <textPath href="#arcBottom" startOffset="50%" textAnchor="middle">
          Pizzería · GONDOLA
        </textPath>
      </text>
    </g>

    {/* ===== 5. HALO DE LUZ DEL FARO ===== */}
    <g className="logo-faro-beam">
      <polygon points="200,148 80,40 320,40" fill="url(#beamGrad)" opacity="0.5" />
      <circle cx="200" cy="148" r="60" fill="url(#beamGrad)" opacity="0.4" />
    </g>

    {/* ===== 6. ESTRUCTURA DEL FARO ===== */}
    <g className="logo-faro">
      {/* Base roja (clippeada) */}
      <g clipPath="url(#faroClip)">
        <rect x="140" y="140" width="120" height="200" fill="#C41E24" />

        {/* Rayas blancas diagonales */}
        <path d="M140,180 L260,140 L260,165 L140,205 Z" fill="#F4F1EA" />
        <path d="M140,230 L260,190 L260,215 L140,255 Z" fill="#F4F1EA" />
        <path d="M140,280 L260,240 L260,265 L140,305 Z" fill="#F4F1EA" />
        <path d="M140,330 L260,290 L260,315 L140,355 Z" fill="#F4F1EA" />
      </g>

    </g>

    {/* ===== 7. BALCONCITO ===== */}
    <g className="logo-faro-balcony">
      <rect x="145" y="152" width="110" height="10" rx="2" fill="#0F2B5B" />
      <rect x="148" y="148" width="104" height="6" rx="2" fill="#C41E24" opacity="0.8" />
    </g>

    {/* ===== 8. CÚPULA ===== */}
    <g className="logo-faro-dome">
      <path d="M148,148 Q200,118 252,148 Z" fill="#C41E24" />
      <circle cx="200" cy="125" r="4" fill="#0F2B5B" />
    </g>

    {/* ===== 9. DESTELLO SUPERIOR ===== */}
    <g className="logo-faro-light" filter="url(#lightGlow)">
      <circle cx="200" cy="125" r="7" fill="#C5A059" opacity="0.85" />
      <circle cx="200" cy="125" r="3" fill="#FFFFFF" />
    </g>

    {/* ===== 10. ACCENTOS DECORATIVOS ===== */}
    <g className="logo-accents" stroke="#0F2B5B" strokeLinecap="round" opacity="0.2">
      <line x1="90" y1="110" x2="75" y2="95" strokeWidth="2" />
      <line x1="95" y1="100" x2="88" y2="83" strokeWidth="1.5" />
      <line x1="310" y1="110" x2="325" y2="95" strokeWidth="2" />
      <line x1="305" y1="100" x2="312" y2="83" strokeWidth="1.5" />
    </g>
  </svg>
);

const HeroLogo = () => {
  return (
    <div className="hero-logo animate-fade-in-up">
      <div className="hero-logo__wrapper">
        <GondolaLogoSVG />
        <HaloSVG className="hero-logo__halo" aria-hidden="true" />
        <HaloSVG className="hero-logo__halo hero-logo__halo--delayed" aria-hidden="true" />
        <div className="hero-logo__particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default HeroLogo;