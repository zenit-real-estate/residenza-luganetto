import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Apartments from './components/Apartments';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Apartments />
        <Location />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;