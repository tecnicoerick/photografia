import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import AICaptionGenerator from './components/AICaptionGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PhotoItem, Album } from './types';

// Initial Photos (Highlights)
const initialPhotos: PhotoItem[] = [
  { 
    id: 1, 
    url: "https://picsum.photos/seed/portrait1/600/800", 
    title: "Olhar Sereno", 
    category: "Retrato",
    description: "Um retrato íntimo capturado com luz natural, destacando a expressão serena e a profundidade do olhar."
  },
  { 
    id: 2, 
    url: "https://picsum.photos/seed/wedding/800/600", 
    title: "União Eterna", 
    category: "Casamento",
    description: "O momento exato do 'sim'. Capturado em uma cerimônia ao ar livre no pôr do sol." 
  },
  { 
    id: 3, 
    url: "https://picsum.photos/seed/urban/600/800", 
    title: "Luzes da Cidade", 
    category: "Urbano",
    description: "A vida noturna da cidade em longa exposição. As luzes dos carros criam rios de energia." 
  },
  { 
    id: 4, 
    url: "https://picsum.photos/seed/nature/800/600", 
    title: "Manhã na Montanha", 
    category: "Natureza",
    description: "O amanhecer nas montanhas, onde o silêncio encontra a majestade da natureza." 
  },
  { 
    id: 5, 
    url: "https://picsum.photos/seed/fashion/600/800", 
    title: "Alta Costura", 
    category: "Moda",
    description: "Editorial de moda para revista local, focando em texturas e movimento." 
  },
  { 
    id: 6, 
    url: "https://picsum.photos/seed/arch/800/600", 
    title: "Geometria", 
    category: "Arquitetura",
    description: "Linhas retas e sombras duras criando uma composição abstrata na arquitetura moderna." 
  },
];

// Mock Albums Data
const initialAlbums: Album[] = [
  {
    id: 101,
    title: "Casamento Juliana & Roberto",
    date: "Setembro 2023",
    coverUrl: "https://picsum.photos/seed/wedding_cover/800/600",
    description: "Uma cerimônia emocionante realizada ao pôr do sol na Villa Toscana. \n\nA luz dourada do fim de tarde proporcionou o cenário perfeito para capturar a conexão genuína entre Juliana e Roberto. O evento contou com uma decoração rústica-chic, repleta de flores do campo e madeira de demolição. \n\nCada foto deste álbum busca contar a história não apenas do evento, mas do amor que permeou cada segundo, desde a preparação ansiosa da noiva até a festa vibrante sob as estrelas.",
    photos: [
      { id: 1011, title: "A Preparação", category: "Casamento", url: "https://picsum.photos/seed/wedding1/600/800" },
      { id: 1012, title: "A Chegada", category: "Casamento", url: "https://picsum.photos/seed/wedding2/800/600" },
      { id: 1013, title: "O Sim", category: "Casamento", url: "https://picsum.photos/seed/wedding3/600/800" },
      { id: 1014, title: "Detalhes", category: "Casamento", url: "https://picsum.photos/seed/wedding4/800/600" },
      { id: 1015, title: "Primeira Dança", category: "Casamento", url: "https://picsum.photos/seed/wedding5/600/800" },
    ]
  },
  {
    id: 102,
    title: "Editorial: Urban Soul",
    date: "Agosto 2023",
    coverUrl: "https://picsum.photos/seed/fashion_cover/800/600",
    description: "Um ensaio de moda que explora o contraste entre a elegância da alta costura e a crueza da arquitetura urbana de São Paulo. \n\nUtilizamos luz natural dura e sombras profundas para criar uma atmosfera dramática e moderna. As texturas do concreto e do metal serviram como pano de fundo para destacar os tecidos fluidos e as cores vibrantes da coleção de outono.",
    photos: [
      { id: 1021, title: "Concreto", category: "Moda", url: "https://picsum.photos/seed/fashion1/600/800" },
      { id: 1022, title: "Movimento", category: "Moda", url: "https://picsum.photos/seed/fashion2/600/800" },
      { id: 1023, title: "Reflexos", category: "Moda", url: "https://picsum.photos/seed/fashion3/800/600" },
      { id: 1024, title: "Sombras", category: "Moda", url: "https://picsum.photos/seed/fashion4/600/800" },
    ]
  },
  {
    id: 103,
    title: "Expedição Patagônia",
    date: "Julho 2023",
    coverUrl: "https://picsum.photos/seed/nature_cover/800/600",
    description: "Dez dias imersos na natureza selvagem da Patagônia. Este álbum documenta a jornada através de geleiras milenares, picos nevados e lagos de cor turquesa.\n\nO objetivo foi capturar a escala monumental da paisagem em contraste com a fragilidade humana. Enfrentamos ventos fortes e temperaturas negativas para conseguir essas capturas únicas.",
    photos: [
      { id: 1031, title: "O Glaciar", category: "Natureza", url: "https://picsum.photos/seed/nature1/800/600" },
      { id: 1032, title: "Pico Fitz Roy", category: "Natureza", url: "https://picsum.photos/seed/nature2/600/800" },
      { id: 1033, title: "Lago Espelho", category: "Natureza", url: "https://picsum.photos/seed/nature3/800/600" },
    ]
  }
];

const App: React.FC = () => {
  const [photos] = useState<PhotoItem[]>(initialPhotos);
  const [albums] = useState<Album[]>(initialAlbums);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Portfolio photos={photos} albums={albums} />
        <Services />
        <AICaptionGenerator />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;