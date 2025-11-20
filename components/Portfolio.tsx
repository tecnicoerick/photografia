import React, { useState } from 'react';
import { X, ZoomIn, FolderOpen, Image as ImageIcon, ArrowLeft, Calendar } from 'lucide-react';
import { PhotoItem, Album } from '../types';

interface PortfolioProps {
  photos: PhotoItem[];
  albums: Album[];
}

type PortfolioView = 'gallery' | 'albums';

const Portfolio: React.FC<PortfolioProps> = ({ photos, albums }) => {
  const [activeView, setActiveView] = useState<PortfolioView>('gallery');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const handleAlbumClick = (album: Album) => {
    setSelectedAlbum(album);
    // Scroll to top of portfolio section smoothly
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-gold-400 tracking-[0.2em] text-sm font-bold uppercase">Nossa Arte</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-3 mb-6">Portfólio & Eventos</h2>
          
          {/* Navigation Tabs */}
          {!selectedAlbum && (
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => setActiveView('gallery')}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-300 flex items-center ${
                  activeView === 'gallery' 
                    ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20' 
                    : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                }`}
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                DESTAQUES
              </button>
              <button
                onClick={() => setActiveView('albums')}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-300 flex items-center ${
                  activeView === 'albums' 
                    ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20' 
                    : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                }`}
              >
                <FolderOpen className="w-4 h-4 mr-2" />
                ÁLBUNS DE EVENTOS
              </button>
            </div>
          )}
        </div>

        {/* Content Area */}
        
        {/* 1. Single Album View (Detail) */}
        {selectedAlbum ? (
          <div className="animate-[fadeInUp_0.5s_ease-out]">
            <button 
              onClick={handleBackToAlbums}
              className="mb-8 flex items-center text-gold-400 hover:text-white transition-colors font-medium tracking-wide"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar para Álbuns
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Album Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <span className="inline-flex items-center px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-bold rounded-full mb-4 border border-gold-500/20">
                    <Calendar className="w-3 h-3 mr-2" />
                    {selectedAlbum.date}
                  </span>
                  <h3 className="font-serif text-4xl text-white mb-6 leading-tight">{selectedAlbum.title}</h3>
                  <div className="w-16 h-1 bg-gold-500 mb-6"></div>
                  <p className="text-neutral-300 leading-relaxed text-lg font-light whitespace-pre-line">
                    {selectedAlbum.description}
                  </p>
                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center text-neutral-500 text-sm">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    <span>{selectedAlbum.photos.length} Fotografias</span>
                  </div>
                </div>
              </div>

              {/* Album Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedAlbum.photos.map((photo) => (
                  <div 
                    key={photo.id} 
                    className="group relative overflow-hidden cursor-pointer rounded-sm aspect-[3/4]"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="text-white w-8 h-8" />
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : activeView === 'albums' ? (
          
          /* 2. Albums Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-[fadeIn_0.5s_ease-out]">
            {albums.map((album) => (
              <div 
                key={album.id} 
                className="group cursor-pointer bg-neutral-800 rounded-lg overflow-hidden border border-white/5 hover:border-gold-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
                onClick={() => handleAlbumClick(album)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={album.coverUrl} 
                    alt={album.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-1 block">{album.date}</span>
                    <h3 className="text-2xl font-serif text-white group-hover:text-gold-200 transition-colors">{album.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-400 text-sm line-clamp-3 leading-relaxed mb-4">
                    {album.description}
                  </p>
                  <span className="text-white text-xs font-bold tracking-widest uppercase border-b border-gold-500 pb-1 group-hover:text-gold-400 transition-colors">
                    Ver Álbum Completo
                  </span>
                </div>
              </div>
            ))}
          </div>

        ) : (
          
          /* 3. General Gallery Grid (Original View) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeIn_0.5s_ease-out]">
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
                  <h3 className="text-white font-serif text-2xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-center">
                    {photo.title}
                  </h3>
                  <button className="text-white border border-white/30 p-3 rounded-full hover:bg-white hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-150">
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <button 
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row items-center bg-neutral-900 rounded-lg overflow-hidden shadow-2xl border border-white/10">
            {/* Image Side */}
            <div className="w-full md:w-2/3 h-[50vh] md:h-[80vh] bg-black flex items-center justify-center">
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.title} 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center h-auto md:h-[80vh] overflow-y-auto">
              <span className="text-gold-400 tracking-widest text-sm font-bold uppercase mb-2 block">
                {selectedPhoto.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">{selectedPhoto.title}</h3>
              
              <div className="w-12 h-1 bg-gold-500/30 mb-6"></div>
              
              <p className="text-neutral-300 leading-relaxed text-lg font-light">
                {selectedPhoto.description || (selectedAlbum ? "Parte do álbum: " + selectedAlbum.title : "Uma captura única de um momento inesquecível.")}
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="text-white border border-white/30 py-3 px-6 w-full hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm">
                  Solicitar Orçamento Similar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;