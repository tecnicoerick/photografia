import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import AICaptionGenerator from './components/AICaptionGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <AICaptionGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;