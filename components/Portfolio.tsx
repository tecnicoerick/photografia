import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { PhotoItem } from '../types';

const photos: PhotoItem[] = [
  { id: 1, url: "https://picsum.photos/seed/portrait1/600/800", title: "Olhar Sereno", category: "Retrato" },
  { id: 2, url: "https://picsum.photos/seed/wedding/800/600", title: "União Eterna", category: "Casamento" },
  { id: 3, url: "https://picsum.photos/seed/urban/600/800", title: "Luzes da Cidade", category: "Urbano" },
  { id: 4, url: "https://picsum.photos/seed/nature/800/600", title: "Manhã na Montanha", category: "Natureza" },
  { id: 5, url: "https://picsum.photos/seed/fashion/600/800", title: "Alta Costura", category: "Moda" },
  { id: 6, url: "https://picsum.photos/seed/arch/800/600", title: "Geometria", category: "Arquitetura" },
];

const Portfolio: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-400 tracking-[0.2em] text-sm font-bold uppercase">Trabalhos Recentes</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-3 mb-6">Portfólio Selecionado</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="group relative overflow-hidden cursor-pointer rounded-sm"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-800">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <p className="text-gold-400 text-sm tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {photo.category.toUpperCase()}
                </p>
                <h3 className="text-white font-serif text-2xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {photo.title}
                </h3>
                <button className="text-white border border-white/30 p-3 rounded-full hover:bg-white hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-150">
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <button 
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <img 
              src={selectedPhoto.url} 
              alt={selectedPhoto.title} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-white">{selectedPhoto.title}</h3>
              <p className="text-gold-400 mt-2 tracking-widest text-sm">{selectedPhoto.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;