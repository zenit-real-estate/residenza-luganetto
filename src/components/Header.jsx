import React, { useState, useEffect } from 'react';
import logo from '/static/img/loghi/luganetto-logo-transparent.png?url';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', text: 'IL PROGETTO' },
    { id: 'apartments', text: 'APPARTAMENTI' },
    { id: 'location', text: 'POSIZIONE' },
    { id: 'gallery', text: 'GALLERIA' },
    { id: 'contact', text: 'CONTATTI' }
  ];

  return (
    <header className={`sticky ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#hero">
          <img src={logo} alt="Residenza Luganetto Logo" />
        </a>
      </div>
      <nav>
        <ul className={isMenuOpen ? 'mobile-open' : ''}>
          {navItems.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={handleNavClick}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header;