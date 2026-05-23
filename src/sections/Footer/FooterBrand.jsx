import React from 'react';
import './FooterBrand.css';

const FooterBrand = () => {
  return (
    <div className="footer-brand">
      <img
        src="/favicon.svg"
        alt="Pizzería Góndola"
        className="footer-brand__logo"
      />
      <span className="footer-brand__name">GÓNDOLA</span>
    </div>
  );
};

export default FooterBrand;
