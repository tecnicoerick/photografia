import React from 'react';
import { Camera, Video, Heart, Check } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Ensaio Pessoal",
    price: "R$ 450",
    icon: <Camera className="w-8 h-8" />,
    features: [
      "2 horas de sessão",
      "30 fotos editadas em alta resolução",
      "Galeria online privada",
      "2 trocas de roupa",
      "Entrega em 5 dias"
    ]
  },
  {
    title: "Casamento Completo",
    price: "R$ 3.500",
    icon: <Heart className="w-8 h-8" />,
    features: [
      "Cobertura de 8 horas",
      "2 Fotógrafos",
      "500+ fotos editadas",
      "Álbum impresso de luxo",
      "Making of dos noivos",
      "Drone (se permitido)"
    ]
  },
  {
    title: "Comercial & Marca",
    price: "Sob Consulta",
    icon: <Video className="w-8 h-8" />,
    features: [
      "Fotografia de produtos",
      "Retratos corporativos",
      "Vídeos curtos para Reels/TikTok",
      "Direção de arte inclusa",
      "Licença de uso comercial"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-950 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-400 tracking-[0.2em] text-sm font-bold uppercase">Investimento</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-3 mb-6">Serviços & Planos</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Pacotes personalizados para atender às suas necessidades, com a qualidade e o olhar artístico que suas memórias merecem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-neutral-900 border border-white/5 p-8 rounded-lg hover:border-gold-500/50 transition-all duration-300 flex flex-col ${index === 1 ? 'transform md:-translate-y-4 shadow-2xl shadow-gold-900/10 relative' : ''}`}
            >
              {index === 1 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Mais Popular
                </div>
              )}
              
              <div className="text-gold-400 mb-6 p-3 bg-white/5 rounded-full w-fit self-center">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-serif text-center text-white mb-2">{service.title}</h3>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-white">{service.price}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-neutral-400 text-sm">
                    <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded font-medium tracking-wide transition-all ${
                index === 1 
                  ? 'bg-gold-500 text-black hover:bg-gold-400' 
                  : 'bg-transparent border border-white/20 text-white hover:bg-white hover:text-black'
              }`}>
                RESERVAR DATA
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;