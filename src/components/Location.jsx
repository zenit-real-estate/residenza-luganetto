import React from 'react';
import { FaShoppingCart, FaGraduationCap, FaBus, FaUmbrellaBeach } from 'react-icons/fa';

const Location = () => {
  const amenities = [
    {
      icon: <FaShoppingCart />,
      category: "NEGOZI",
      items: [
        "Migros - 2 minuti a piedi",
        "Coop - 3 minuti a piedi",
        "Farmacia - 4 minuti a piedi"
      ]
    },
    {
      icon: <FaGraduationCap />,
      category: "ISTRUZIONE",
      items: [
        "Università della Svizzera italiana - 5 minuti",
        "Scuole elementari - 3 minuti"
      ]
    },
    {
      icon: <FaBus />,
      category: "TRASPORTI",
      items: [
        "Fermata autobus - 1 minuto",
        "Stazione FFS Lugano - 10 minuti"
      ]
    },
    {
      icon: <FaUmbrellaBeach />,
      category: "TEMPO LIBERO",
      items: [
        "Lago di Lugano - 8 minuti",
        "Parco Ciani - 12 minuti"
      ]
    }
  ];

  return (
    <section id="location" className="location">
      <div className="container">
        <h2 className="section-title">POSIZIONE STRATEGICA</h2>
        <div className="location-content">
          <div className="location-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88693.28582972844!2d8.925735957889428!3d45.99791399641163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47842df55c86edf5%3A0xd7fd0494f466c37a!2sVia%20Luganetto%203%2C%206962%20Lugano!5e0!3m2!1sit!2sch!4v1743157880009!5m2!1sit!2sch" 
              width="600" 
              height="450" 
              style={{border:0}}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Residenza Luganetto">
            </iframe>
          </div>
          <div className="location-info">
            <h3>VIA LUGANETTO 3, 6900 LUGANO</h3>
            <p>Al confine tra il tranquillo quartiere di Viganello e Cassarate, a pochi passi da tutti i servizi essenziali:</p>
            
            <div className="amenities">
              {amenities.map((amenity, index) => (
                <div className="amenity-category" key={index}>
                  <h4>{amenity.icon} {amenity.category}</h4>
                  <ul>
                    {amenity.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;