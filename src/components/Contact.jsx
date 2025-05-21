import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload, FaPaperPlane } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Grazie per il tuo messaggio! Ti contatteremo al più presto.');
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">CONTATTI</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>PER INFORMAZIONI E VISITE</h3>
            <p><FaPhone /> <a href="tel:+41787461996">+41 78 746 19 96</a></p>
            <p><FaEnvelope /> <a href="mailto:info@residenzaluganetto.com">info@residenzaluganetto.com</a></p>
            <p><FaMapMarkerAlt /> Via Luganetto 3, 6900 Lugano</p>
            
            <div className="social-links">
              <a href="https://www.facebook.com/ZenitRealEstateFiduciariaImmobiliare/" target='_blank'><FaFacebookF /></a>
              <a href="https://www.instagram.com/zenitrealestate/" target='_blank'><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/zenit-real-estate/" target='_blank'><FaLinkedinIn /></a>
            </div>
            
            <div className="brochure-download">
              <a 
                href="/static/Luganetto_Palazzina_Presentazione_Prezzi_2025.pdf" 
                className="download-button"
                download
              >
                <FaDownload /> SCARICA LA BROCHURE COMPLETA
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group half-width">
                  <input type="text" placeholder="Nome*" required />
                </div>
                <div className="form-group half-width">
                  <input type="text" placeholder="Cognome*" required />
                </div>
              </div>
              
              <div className="form-group">
                <input type="email" placeholder="Email*" required />
              </div>
              
              <div className="form-group">
                <input type="tel" placeholder="Telefono" />
              </div>
              
              <div className="form-group">
                <select required>
                  <option value="">Interessato a...</option>
                  <option value="4.5">Appartamento 4.5 locali</option>
                  <option value="5.5">Appartamento 5.5 locali</option>
                  <option value="attico">Super attico</option>
                  <option value="parking">Autorimessa/Cantine</option>
                  <option value="info">Informazioni generali</option>
                  <option value="visita">Prenotazione visita</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea placeholder="Messaggio*" required></textarea>
              </div>
              
              <div className="form-group">
                <button type="submit" className="submit-button">
                  INVIA MESSAGGIO <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;