import React from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero">
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