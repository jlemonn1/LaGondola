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
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000" floodOpacity="0.35" />
      </filter>
      <filter id="redGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <radialGradient id="haloGrad" cx="50%" cy="18%" r="55%">
        <stop offset="0%" stopColor="#C41E24" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#C41E24" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="faroGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* ===== 1. FONDO ===== */}
    <circle className="logo-bg" cx="200" cy="200" r="192" fill="#0B0C10" />

    {/* ===== 2. ANILLO EXTERIOR ROJO ===== */}
    <circle className="logo-ring" cx="200" cy="200" r="186" fill="none" stroke="#C41E24" strokeWidth="5" strokeLinecap="round" />

    {/* ===== 3. ANILLO EXTERIOR AZUL (delgado, doble) ===== */}
    <circle className="logo-ring-blue" cx="200" cy="200" r="178" fill="none" stroke="#0F2B5B" strokeWidth="2" opacity="0.5" />

    {/* ===== 4. HALO DE LUZ DEL FARO ===== */}
    <circle cx="200" cy="130" r="90" fill="url(#haloGrad)" opacity="0.6" />

    {/* ===== 5. ESTRUCTURA DEL FARO ===== */}
    <g className="logo-faro">
      {/* Base azul */}
      <path d="M152,160 L248,160 L258,320 L142,320 Z" fill="#0F2B5B" />

      {/* Rayas rojas diagonales (patrón) */}
      <path d="M152,160 L248,160 L258,200 L142,200 Z" fill="#C41E24" />
      <path d="M142,200 L258,200 L262,240 L138,240 Z" fill="#C41E24" />
      <path d="M138,240 L262,240 L266,280 L134,280 Z" fill="#C41E24" />
      <path d="M134,280 L266,280 L270,320 L130,320 Z" fill="#C41E24" />

      {/* Degradado sutil */}
      <path d="M152,160 L248,160 L258,320 L142,320 Z" fill="url(#faroGrad)" opacity="0.15" />

      {/* Balconcito */}
      <rect x="140" y="150" width="120" height="10" rx="3" fill="#0F2B5B" />
    </g>

    {/* ===== 6. CÚPULA ===== */}
    <path d="M140,150 Q200,90 260,150 Z" fill="#C41E24" />
    <circle cx="200" cy="115" r="5" fill="#F4F1EA" />

    {/* ===== 7. CINTA / BANDA ROJA ===== */}
    <g className="logo-ribbon" filter="url(#softShadow)">
      <path
        d="M52,205 L92,192 Q200,186 308,192 L348,205 L308,218 Q200,224 92,218 Z"
        fill="#C41E24"
        stroke="#9E181D"
        strokeWidth="1"
      />
      <path d="M52,205 L92,192 L92,218 Z" fill="#9E181D" opacity="0.6" />
      <path d="M348,205 L308,192 L308,218 Z" fill="#9E181D" opacity="0.6" />
      <text
        className="logo-ribbon-text"
        x="200"
        y="210"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#F4F1EA"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="38"
        fontWeight="700"
        letterSpacing="5"
        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}
      >
        GÓNDOLA
      </text>
    </g>

    {/* ===== 8. TEXTOS INFERIORES ===== */}
    <text
      className="logo-sub"
      x="200"
      y="355"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#C5A059"
      fontFamily="'Inter', sans-serif"
      fontSize="13"
      fontWeight="600"
      letterSpacing="4.5"
      opacity="0.9"
    >
      DESDE 1983 — MOCEJÓN
    </text>

    {/* ===== 9. DESTELLOS / ESTRELLAS ===== */}
    <g className="logo-sparkle sparkle-1" filter="url(#blueGlow)">
      <path d="M78,95 L83,108 L96,108 L86,116 L90,129 L78,121 L66,129 L70,116 L60,108 L73,108 Z" fill="#0F2B5B" />
      <circle cx="78" cy="114" r="5" fill="#7EB8DA" opacity="0.5" />
    </g>

    <g className="logo-sparkle sparkle-2">
      <path d="M320,78 L323,86 L331,86 L325,91 L327,99 L320,94 L313,99 L315,91 L309,86 L317,86 Z" fill="#C5A059" opacity="0.8" />
    </g>

    {/* ===== 10. ELEMENTOS DECORATIVOS ===== */}
    <g className="logo-action-lines" stroke="#F4F1EA" strokeLinecap="round" opacity="0.15">
      <line x1="120" y1="85" x2="105" y2="70" strokeWidth="2.5" />
      <line x1="125" y1="75" x2="118" y2="58" strokeWidth="1.5" />
      <line x1="280" y1="85" x2="295" y2="70" strokeWidth="2.5" />
      <line x1="275" y1="75" x2="282" y2="58" strokeWidth="1.5" />
      <line x1="200" y1="68" x2="200" y2="52" strokeWidth="2" />
    </g>

    {/* Gotas / partículas */}
    <g className="logo-drips">
      <circle cx="110" cy="240" r="4.5" fill="#C41E24" opacity="0.85" />
      <circle cx="118" cy="235" r="2.5" fill="#C5A059" opacity="0.7" />
      <circle cx="290" cy="245" r="3.5" fill="#C41E24" opacity="0.75" />
      <circle cx="298" cy="252" r="2" fill="#0F2B5B" opacity="0.5" />
      <circle cx="200" cy="325" r="3" fill="#C5A059" opacity="0.6" />
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
