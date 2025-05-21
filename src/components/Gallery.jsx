import React from 'react';
import salottoImg from '/static/img/Salotto.png?url';
import stanzaImg from '/static/img/StanzaDaLetto.png?url';
import cucinaImg from '/static/img/Cucina.png?url';
import bagnoImg from '/static/img/Bagno.png?url';
// import terrazzaImg from '/public/static/img/Terrazza.png?url';
import esterniImg from '/static/img/Esterni.png?url';

const Gallery = () => {
  const galleryItems = [
    {
      img: salottoImg,
      caption: "Soggiorno con finiture di alta qualità"
    },
    {
      img: stanzaImg,
      caption: "Camera da letto principale"
    },
    {
      img: cucinaImg,
      caption: "Cucina Ernestomeda con elettrodomestici Siemens"
    },
    {
      img: bagnoImg,
      caption: "Bagno con sanitari GSG e rubinetteria Paffoni"
    },
    // {
    //   img: terrazzaImg,
    //   caption: "Ampia terrazza con vista panoramica"
    // },
    {
      img: esterniImg,
      caption: "Vista esterna della residenza"
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">GALLERIA</h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index}>
              <img src={item.img} alt={item.caption} />
              <div className="gallery-overlay">
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;