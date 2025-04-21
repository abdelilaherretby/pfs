import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-xs py-6 px-6 h-[15vh]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex flex-wrap gap-4 font-semibold">
          <a href="#" className="hover:underline">Aide & Contact</a>
          <a href="#" className="hover:underline">Informations générales</a>
          <a href="#" className="hover:underline">SIXT pour les entreprises</a>
          <a href="#" className="hover:underline">SIXT Partenaires</a>
          <a href="#" className="hover:underline">SIXT Magazine</a>
          <a href="#" className="hover:underline">Mentions légales</a>
          <a href="#" className="hover:underline">Données personnelles</a>
          <a href="#" className="hover:underline">CGL</a>
          <a href="#" className="hover:underline">Paramètres des cookies</a>
        </div>
        <div className="text-gray-400 whitespace-nowrap">
          © Sixt 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
