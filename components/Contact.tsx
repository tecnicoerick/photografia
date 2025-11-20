import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-gold-400 tracking-[0.2em] text-sm font-bold uppercase">Vamos Conversar</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-8">Agende sua Sessão</h2>
            <p className="text-neutral-400 mb-10 leading-relaxed">
              Cada projeto é único. Estou disponível para tomar um café e discutir como podemos transformar sua visão em realidade.
              Entre em contato pelo formulário ou pelas redes sociais.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center rounded-full group-hover:bg-gold-500 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-white group-hover:text-black" />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">Telefone</p>
                  <p className="text-lg font-medium">+55 (11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center rounded-full group-hover:bg-gold-500 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white group-hover:text-black" />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-medium">contato@luminalens.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center rounded-full group-hover:bg-gold-500 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-white group-hover:text-black" />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">Estúdio</p>
                  <p className="text-lg font-medium">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-neutral-400 hover:text-gold-400 transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-neutral-900 p-8 rounded-sm border border-white/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Nome</label>
                  <input type="text" className="w-full bg-black border border-neutral-800 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Email</label>
                  <input type="email" className="w-full bg-black border border-neutral-800 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Seu email" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Assunto</label>
                <select className="w-full bg-black border border-neutral-800 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                  <option>Interesse em Ensaio</option>
                  <option>Casamento</option>
                  <option>Comercial</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full bg-black border border-neutral-800 text-white p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Conte um pouco sobre o seu projeto..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gold-500 text-black font-bold py-4 px-8 hover:bg-gold-400 transition-colors tracking-widest uppercase text-sm">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;