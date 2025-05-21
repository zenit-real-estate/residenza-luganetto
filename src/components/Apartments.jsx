import React from 'react';
import { FaThermometerHalf, FaDoorOpen, FaBorderStyle, FaUtensils, FaCar, FaWarehouse } from 'react-icons/fa';

const Apartments = () => {
  // Dati estratti dalla brochure PDF
  const apartments = [
    {
      type: "4.5 LOCALI",
      size: "149.30 mq",
      terrace: "18.90 mq",
      price: "da CHF 1'375'000",
      floor: "Quarto/Quinto piano",
      version: "Versione 4.5 locali"
    },
    {
      type: "5.5 LOCALI",
      size: "149.30 mq",
      terrace: "18.90 mq",
      price: "da CHF 1'435'000",
      floor: "Quarto/Quinto piano",
      version: "Versione 5.5 locali"
    },
    {
      type: "SUPER ATTICO",
      size: "226 mq",
      terrace: "113 mq",
      price: "CHF 2'969'000",
      floor: "Ultimo piano",
      version: "Comprende tutto l'ultimo piano"
    }
  ];

  const parking = [
    { type: "Posto auto coperto", price: "CHF 75'000" },
    { type: "Cantina A", price: "CHF 6'500" },
    { type: "Cantine B/C", price: "CHF 5'000" }
  ];

  const specs = [
    {
      icon: <FaThermometerHalf />,
      title: "CLIMA",
      description: "Pompa di calore aria-acqua reversibile con riscaldamento a pavimento e raffrescamento con ventilconvettori"
    },
    {
      icon: <FaDoorOpen />,
      title: "PORTE INTERNE",
      description: "Porte pantografate laccate PantoQuadra con design elegante e linee semplici"
    },
    {
      icon: <FaBorderStyle />,
      title: "PAVIMENTI",
      description: "Gres porcellanato 'Energie Ker' formato 60x120 cm (Select NEBBIA, Loft Cream, Sunstone)"
    },
    {
      icon: <FaUtensils />,
      title: "CUCINA",
      description: "Modello Ernestomeda 'One 80' con elettrodomestici Siemens e piano in quarzo"
    },
    {
      icon: <FaCar />,
      title: "AUTORIMESSA",
      description: "Posti auto coperti e cantine disponibili (vedi sezione dedicata)"
    },
    {
      icon: <FaWarehouse />,
      title: "SERRAMENTI",
      description: "SCHÜCO con vetri tripli, tende frangisole Warema con comando elettrico"
    }
  ];

  return (
    <section id="apartments" className="apartments">
      <div className="container">
        <h2 className="section-title">GLI APPARTAMENTI</h2>
        <p className="section-subtitle">Soluzioni residenziali esclusive con finiture di alta qualità</p>
        
        <div className="apartment-types">
          {apartments.map((apt, index) => (
            <div className="apartment-card" key={index}>
              <div className="card-content">
                <h3>{apt.type}</h3>
                <p><strong>Piano:</strong> {apt.floor}</p>
                <p><strong>Superficie:</strong> {apt.size}</p>
                <p><strong>Terrazza:</strong> {apt.terrace}</p>
                <p className="price">{apt.price}</p>
                <p className="version">{apt.version}</p>
                <a href="#contact" className="card-button">
                  Richiedi informazioni <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="parking-section">
          <h3>OPZIONI AUTORIMESSA E CANTINE</h3>
          <div className="parking-grid">
            {parking.map((item, index) => (
              <div className="parking-item" key={index}>
                <h4>{item.type}</h4>
                <p className="price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="technical-specs">
          <h3>DESCRITTIVO TECNICO</h3>
          <div className="specs-grid">
            {specs.map((spec, index) => (
              <div className="spec-item" key={index}>
                <h4>{spec.icon} {spec.title}</h4>
                <p>{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apartments;