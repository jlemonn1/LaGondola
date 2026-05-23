import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FloatingOrderButton.css';

const HaloSVG = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="92" stroke="var(--color-red)" strokeWidth="2" strokeDasharray="10 8" opacity="0.45" />
    <circle cx="100" cy="100" r="82" stroke="var(--color-gold)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.35" />
  </svg>
);

const OrderLogoSVG = () => (
  <svg
    className="fob__svg"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Pedir Ahora"
  >
    <defs>
      <filter id="fobSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.35" />
      </filter>
      <filter id="fobRedGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="fobBlueGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <radialGradient id="fobHalo" cx="50%" cy="30%" r="50%">
        <stop offset="0%" stopColor="#C41E24" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#C41E24" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Fondo */}
    <circle className="fob-bg" cx="100" cy="100" r="92" fill="#0B0C10" />

    {/* Halo */}
    <circle cx="100" cy="70" r="50" fill="url(#fobHalo)" />

    {/* Anillo rojo */}
    <circle className="fob-ring" cx="100" cy="100" r="88" fill="none" stroke="#C41E24" strokeWidth="4.5" strokeLinecap="round" />

    {/* Anillo azul fino */}
    <circle className="fob-ring-blue" cx="100" cy="100" r="82" fill="none" stroke="#0F2B5B" strokeWidth="1.5" opacity="0.5" />

    {/* Faro mini */}
    <g transform="translate(70, 55)">
      {/* Base */}
      <path d="M12,25 L48,25 L52,75 L8,75 Z" fill="#0F2B5B" />
      {/* Rayas */}
      <path d="M12,25 L48,25 L50,40 L10,40 Z" fill="#C41E24" />
      <path d="M10,40 L50,40 L51,55 L9,55 Z" fill="#C41E24" />
      <path d="M9,55 L51,55 L52,70 L8,70 Z" fill="#C41E24" />
      <path d="M8,70 L52,70 L53,75 L7,75 Z" fill="#C41E24" />
      {/* Cúpula */}
      <path d="M8,25 Q30,5 52,25 Z" fill="#C41E24" />
      <circle cx="30" cy="18" r="2" fill="#F4F1EA" />
      {/* Balconcito */}
      <rect x="6" y="22" width="48" height="4" rx="1" fill="#0F2B5B" />
    </g>

    {/* Cinta */}
    <g className="fob-ribbon" filter="url(#fobSoftShadow)">
      <path
        d="M 30 108 L 58 100 Q 100 96 142 100 L 170 108 L 142 116 Q 100 120 58 116 Z"
        fill="#C41E24"
        stroke="#9E181D"
        strokeWidth="0.8"
      />
      <path d="M 30 108 L 58 100 L 58 116 Z" fill="#9E181D" opacity="0.6" />
      <path d="M 170 108 L 142 100 L 142 116 Z" fill="#9E181D" opacity="0.6" />
      <text
        className="fob-ribbon-text"
        x="100"
        y="110"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#F4F1EA"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="3"
        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.35)' }}
      >
        PEDIR
      </text>
    </g>

    {/* Destellos */}
    <g className="fob-sparkle fob-sparkle--1" filter="url(#fobBlueGlow)">
      <path d="M 48 52 L 51 60 L 59 60 L 53 65 L 55 73 L 48 68 L 41 73 L 43 65 L 37 60 L 45 60 Z" fill="#0F2B5B" />
      <circle cx="48" cy="64" r="3" fill="#7EB8DA" opacity="0.5" />
    </g>
    <g className="fob-sparkle fob-sparkle--2">
      <path d="M 148 42 L 150 48 L 156 48 L 152 51 L 153 57 L 148 54 L 143 57 L 144 51 L 140 48 L 146 48 Z" fill="#C5A059" opacity="0.8" />
    </g>

    {/* Líneas de acción */}
    <g className="fob-action-lines" stroke="#F4F1EA" strokeLinecap="round" opacity="0.15">
      <line x1="85" y1="48" x2="75" y2="38" strokeWidth="2" />
      <line x1="88" y1="40" x2="83" y2="28" strokeWidth="1.2" />
      <line x1="115" y1="48" x2="125" y2="38" strokeWidth="2" />
      <line x1="112" y1="40" x2="117" y2="28" strokeWidth="1.2" />
      <line x1="100" y1="38" x2="100" y2="26" strokeWidth="1.5" />
    </g>

    {/* Gotas */}
    <g className="fob-drips">
      <circle cx="70" cy="130" r="3" fill="#C41E24" opacity="0.85" />
      <circle cx="76" cy="126" r="1.8" fill="#C5A059" opacity="0.7" />
      <circle cx="130" cy="132" r="2.5" fill="#C41E24" opacity="0.75" />
      <circle cx="136" cy="138" r="1.5" fill="#0F2B5B" opacity="0.5" />
      <circle cx="100" cy="148" r="2" fill="#C5A059" opacity="0.6" />
    </g>
  </svg>
);

const FloatingOrderButton = () => {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observerRef.current.observe(hero);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <Link
      to="/pedido"
      className={`fob ${visible ? 'fob--visible' : ''}`}
      aria-label="Pedir Ahora"
    >
      <div className="fob__wrapper">
        <OrderLogoSVG />
        <HaloSVG className="fob__halo" aria-hidden="true" />
        <HaloSVG className="fob__halo fob__halo--delayed" aria-hidden="true" />
        <div className="fob__particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </Link>
  );
};

export default FloatingOrderButton;
