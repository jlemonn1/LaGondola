import React from 'react';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__watermark" aria-hidden="true">GÓNDOLA</div>
      <div className="container">
        <div className="footer__content">
          <FooterBrand />
          <FooterLinks />
          <FooterSocials />
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Pizzería Góndola. Todos los derechos reservados.
          </p>
          <p className="footer__city">Mocejón — Toledo — España</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
