import React, { useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload, FaPaperPlane } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const now = new Date();

    const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
    // const date_and_time = {
    //   date: now.toLocaleDateString(),
    //   time: now.toLocaleTimeString()
    // }
    // console.log(date_and_time.date)
    emailjs.sendForm(serviceID, templateID, form.current, publicKey, {
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString()
    })
      .then((result) => {
        alert('Messaggio inviato con successo!');
        e.target.reset();
      }, (error) => {
        alert('Errore nell\'invio del messaggio. Riprova più tardi.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">CONTATTI</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>PER INFORMAZIONI E VISITE</h3>
            <p><FaPhone /> <a href="tel:+41787461996">+41 78 746 19 96</a></p>
            {/* TO DO - COMMENT OUT ON PRODUCTION <p><FaEnvelope /> <a href="mailto:info@residenzaluganetto.com">info@residenzaluganetto.com</a></p> */}
            <p><FaEnvelope /> <a href="mailto:enricobenedettini@gmail.com">enricobenedettini@gmail.com</a></p>
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
                download="Luganetto_Palazzina_Presentazione_Prezzi_2025.pdf"
              >
                <FaDownload /> SCARICA LA BROCHURE COMPLETA
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <div className="form-group half-width">
                  <input type="text" name="name" placeholder="Nome*" required />
                </div>
                <div className="form-group half-width">
                  <input type="text" name="surname" placeholder="Cognome*" required />
                </div>
              </div>
              
              <div className="form-group">
                <input type="email" name="email" placeholder="Email*" required />
              </div>
              
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Telefono" />
              </div>
              
              <div className="form-group">
                <select name="interest" required>
                  <option value="Non specificato">Interessato a...</option>
                  <option value="4.5 Locali">Appartamento 4.5 locali</option>
                  <option value="5.5 Locali">Appartamento 5.5 locali</option>
                  <option value="Super attico">Super attico</option>
                  <option value="Autorimessa/Cantine">Autorimessa/Cantine</option>
                  <option value="informazioni">Informazioni generali</option>
                  <option value="visita">Prenotazione visita</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea name="message" placeholder="Messaggio*" required></textarea>
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