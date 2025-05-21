import React from 'react';
import logo from '/static/img/loghi/luganetto-logo-transparent.png';
import zenitLogo from '/static/img/loghi/zenit-logo-oro-transparent.png';
import nelLogo from '/static/img/loghi/nel-energy-logo-white.png';
import mongrenoLogo from '/static/img/loghi/mongreno-sa-logo-white.png';
import jpaLogo from '/static/img/loghi/jpa-logo-white.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-branding">
            <div className="footer-logo">
              <img src={logo} alt="Residenza Luganetto Logo" />
            </div>
            <p>Appartamenti di lusso nel cuore di Lugano</p>
          </div>
          
          <div className="footer-links">
            <h4>LINK UTILI</h4>
            <ul>
              <li><a href="#about">Il Progetto</a></li>
              <li><a href="#apartments">Appartamenti</a></li>
              <li><a href="#location">Posizione</a></li>
              <li><a href="#gallery">Galleria</a></li>
              <li><a href="#contact">Contatti</a></li>
              <li><a href="https://zenitrealestate.ch/">Zenit Real Estate</a></li>
            </ul>
          </div>
          
          <div className="footer-partners">
            <h4>PARTNER</h4>
            <div className="partner-logos">
              <img src={zenitLogo} alt="Zenit Immobiliare" />
              <img src={nelLogo} alt="N.E.L. New Energy Life SA" />
              <img src={mongrenoLogo} alt="Gruppo Mongreno SA" />
              <img src={jpaLogo} alt="JPA" />
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Residenza Luganetto - Tutti i diritti riservati | 
            <a href="#"> Privacy Policy</a> | <a href="#">Cookie Policy</a>
          </p>
          <p className="credits">
            Progetto sviluppato da N.E.L. New Energy Life SA in collaborazione con Zenit Immobiliare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;