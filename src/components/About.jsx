import React from 'react';
import salottoImg from '/static/img/Salotto.png?url';
import { FaBuilding, FaSun, FaParking } from 'react-icons/fa';

const About = () => {
  const features = [
    { icon: <FaBuilding />, text: 'Palazzina completamente ristrutturata' },
    { icon: <FaSun />, text: 'Ampie terrazze e logge soleggiate' },
    { icon: <FaParking />, text: 'Autorimessa con posti auto coperti' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">IL PROGETTO</h2>
        <div className="about-grid">
          <div className="about-text">
            <p className="highlight">
              Appartamenti di lusso completamente ristrutturati con finiture di alta qualità, situati ai piani alti per offrire ambienti luminosi e una vista panoramica esclusiva.
            </p>
            <p>
              La posizione strategica, a pochi passi dal centro di Lugano, combina il dinamismo della vita urbana con la serenità di un contesto ben servito. Spazi ampi e raffinati donano a ogni ambiente un'eleganza senza tempo, creando un'atmosfera accogliente e sofisticata, perfetta per chi desidera coniugare stile, comfort e praticità.
            </p>
            <div className="features">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src={salottoImg} alt="Render salotto" className="shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;