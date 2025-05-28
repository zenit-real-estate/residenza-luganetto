import React from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import esterniImg from '/static/img/Esterni.png?url';

const Hero = () => {
  return (
    <section id="hero" className="hero" style={{
  background: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.5)), url(${esterniImg}) center/cover no-repeat`
}}>
      <div className="hero-content">
        <h1>RESIDENZA LUGANETTO</h1>
        <p className="subtitle">Un sogno che prende forma nel cuore di Lugano</p>
        <a href="#contact" className="cta-button">
          RICHIEDI INFORMAZIONI <FaChevronRight />
        </a>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <FaChevronDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;