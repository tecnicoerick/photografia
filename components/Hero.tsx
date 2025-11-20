import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/nature_dark/1920/1080" 
          alt="Background Landscape" 
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          style={{ filter: 'brightness(0.4)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-transparent to-neutral-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold-400 font-medium tracking-[0.3em] mb-4 animate-[fadeInDown_1s_ease-out]">
          FOTOGRAFIA FINE ART
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-[fadeInUp_1s_ease-out_0.2s_both]">
          Capturando a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 italic">
            Alma do Momento
          </span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-[fadeInUp_1s_ease-out_0.4s_both]">
          Especializado em retratos, paisagens e momentos inesquecíveis. 
          Transformamos visões em memórias eternas.
        </p>
        <div className="animate-[fadeInUp_1s_ease-out_0.6s_both]">
          <a 
            href="#portfolio" 
            className="inline-block px-8 py-4 border border-gold-500 text-gold-400 font-medium tracking-widest hover:bg-gold-500 hover:text-black transition-all duration-300 rounded-sm"
          >
            VER PORTFÓLIO
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#portfolio" className="text-white/50 hover:text-gold-400 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;