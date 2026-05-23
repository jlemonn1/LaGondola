import React from 'react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import './StoryIcon.css';

const StoryIcon = ({ index }) => {
  const icons = [
    <svg key="pizza" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>,
    <svg key="lighthouse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L12 6" />
      <path d="M8 6L16 6" />
      <path d="M10 6L8 22" />
      <path d="M14 6L16 22" />
      <path d="M8 22L16 22" />
      <path d="M10 10L14 10" />
      <path d="M9 14L15 14" />
      <path d="M8 18L16 18" />
    </svg>,
    <svg key="family" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
  ];

  const glows = ['glow-red', 'glow-gold', 'glow-blue'];
  const colors = ['var(--color-red)', 'var(--color-gold)', 'var(--color-blue)'];

  return (
    <ScrollReveal delay={index * 0.1} scale={0.8} rotate={-10}>
      <div className={`story-icon ${glows[index]}`} style={{ color: colors[index] }}>
        {icons[index]}
      </div>
    </ScrollReveal>
  );
};

export default StoryIcon;
