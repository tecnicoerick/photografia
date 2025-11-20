import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 py-8 border-t border-white/5 text-center">
      <p className="text-neutral-600 text-sm">
        &copy; {new Date().getFullYear()} Lumina Lens. Todos os direitos reservados.
      </p>
      <p className="text-neutral-700 text-xs mt-2">
        Desenvolvido com React & Gemini AI
      </p>
    </footer>
  );
};

export default Footer;