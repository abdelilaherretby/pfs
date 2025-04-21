import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaRobot ,
} from "react-icons/fa";
import logo from "../../public/images/logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

const FirstFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-20 relative min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-full">
        {/* Présentation */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <img src={logo} alt="Logo Wovoiture" className="w-44 mb-4  " />
            <h2 className="text-[#1DA1F2] text-xl font-semibold mb-4">Chez Loca Voiture ,</h2>
            <p className="text-sm text-gray-300">
              Nous vous offrons la meilleure expérience de location de voitures avec un service client exceptionnel et des tarifs compétitifs.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between h-full bg-black p-4">
      <div>
        <h2 className="text-white text-2xl font-bold mb-6 uppercase">Nos Contact Info</h2>
        <ul className="text-base text-white divide-y divide-gray-700">
          <li className="group flex items-start gap-3 py-3 cursor-pointer">
            <FaMapMarkerAlt className="w-6 h-6 text-[color:#1DA1F2] mt-1 transform transition duration-300 group-hover:scale-150" />
            <span className="transition duration-300 group-hover:text-[color:#1DA1F2]">
               Avenue Abdelkrim Khattabi, 40000, Guéliz - Marrakech
            </span>
          </li>
          <li className="group flex items-center gap-3 py-3 cursor-pointer">
            <FaPhoneAlt className="w-6 h-6 text-[color:#1DA1F2] transform transition duration-300 group-hover:scale-150" />
            <span className="transition duration-300 group-hover:text-[color:#1DA1F2]">
              +212 6 11 43 65 82
            </span>
          </li>
          <li className="group flex items-center gap-3 py-3 cursor-pointer">
            <FaWhatsapp  className="w-6 h-6 text-[#25D366] transform transition duration-300 group-hover:scale-150" />
            <span className="transition duration-300 group-hover:text-[#25D366]">
             +212 6 12 34 56 78
            </span>
          </li>
          <li className="group flex items-center gap-3 py-3 cursor-pointer">
            <FaEnvelope className="w-6 h-6 text-[color:#1DA1F2] transform transition duration-300 group-hover:scale-150" />
            <span className="transition duration-300 group-hover:text-[color:#1DA1F2]">
               contact@locavoiture.ma
            </span>
          </li>
        </ul>
      </div>
    </div>

        {/* Liens rapides */}
        <div className="flex flex-col justify-between h-full bg-black p-4">
        <div>
          <h2 className="text-white text-2xl font-bold mb-6 uppercase">Liens rapides</h2>
          <ul className="text-base text-white divide-y divide-gray-700">
            <li className="group flex items-center gap-2 py-3 cursor-pointer">
              <IoIosArrowForward className="text-[color:#1DA1F2] text-lg transform transition duration-300 group-hover:scale-150" />
              <a href="#" className="transition duration-300 group-hover:text-[color:#1DA1F2]">Accueil</a>
            </li>
            <li className="group flex items-center gap-2 py-3 cursor-pointer">
              <IoIosArrowForward className="text-[color:#1DA1F2] text-lg transform transition duration-300 group-hover:scale-150" />
              <a href="#" className="transition duration-300 group-hover:text-[color:#1DA1F2]">Se connecter</a>
            </li>
            <li className="group flex items-center gap-2 py-3 cursor-pointer">
              <IoIosArrowForward className="text-[color:#1DA1F2] text-lg transform transition duration-300 group-hover:scale-150" />
              <a href="#" className="transition duration-300 group-hover:text-[color:#1DA1F2]">S'inscrire</a>
            </li>
            <li className="group flex items-center gap-2 py-3 cursor-pointer">
              <IoIosArrowForward className="text-[color:#1DA1F2] text-lg transform transition duration-300 group-hover:scale-150" />
              <a href="#" className="transition duration-300 group-hover:text-[color:#1DA1F2]">Rechercher une voiture</a>
            </li>
            <li className="group flex items-center gap-2 py-3 cursor-pointer">
              <IoIosArrowForward className="text-[color:#1DA1F2] text-lg transform transition duration-300 group-hover:scale-150" />
              <a href="#" className="transition duration-300 group-hover:text-[color:#1DA1F2]">Liste des voitures</a>
            </li>
             <li className="group flex items-center gap-2 py-3 cursor-pointer">
              <IoIosArrowForward className="text-[color:#1DA1F2] text-lg transform transition duration-300 group-hover:scale-150" />
              <a href="#" className="transition duration-300 group-hover:text-[color:#1DA1F2]">Gerer mes réservations</a>
            </li>
          </ul>
        </div>
      </div>

        {/* Réseaux sociaux en colonne */}
        <div className="flex flex-col justify-between h-full bg-black p-4">
      <div>
        <h2 className="text-white text-2xl font-bold mb-6 uppercase">Social Network</h2>
        <ul className="text-base text-white divide-y divide-gray-700">
          <li className="group flex items-center gap-4 py-3 cursor-pointer">
            <span className="w-10 h-10 bg-white text-[#1877F2] rounded-full flex items-center justify-center transform transition duration-300 group-hover:scale-150">
              <FaFacebookF />
            </span>
            <span className="transition duration-300 group-hover:text-[#1877F2]">Facebook</span>
          </li>
          <li className="group flex items-center gap-4 py-3 cursor-pointer">
            <span className="w-10 h-10 bg-white text-[#1DA1F2] rounded-full flex items-center justify-center transform transition duration-300 group-hover:scale-150">
              <FaTwitter />
            </span>
            <span className="transition duration-300 group-hover:text-[#1DA1F2]">Twitter</span>
          </li>
          <li className="group flex items-center gap-4 py-3 cursor-pointer">
            <span className="w-10 h-10 bg-white text-[#0A66C2] rounded-full flex items-center justify-center transform transition duration-300 group-hover:scale-150">
              <FaLinkedinIn />
            </span>
            <span className="transition duration-300 group-hover:text-[#0A66C2]">LinkedIn</span>
          </li>
          <li className="group flex items-center gap-4 py-3 cursor-pointer">
            <span className="w-10 h-10 bg-white text-[#E1306C] rounded-full flex items-center justify-center transform transition duration-300 group-hover:scale-150">
              <FaInstagram />
            </span>
            <span className="transition duration-300 group-hover:text-[#E1306C]">Instagram</span>
          </li>
          <li className="group flex items-center gap-4 py-3 cursor-pointer">
            <span className="w-10 h-10 bg-white text-[#FF0000] rounded-full flex items-center justify-center transform transition duration-300 group-hover:scale-150">
              <FaYoutube />
            </span>
            <span className="transition duration-300 group-hover:text-[#FF0000]">YouTube</span>
          </li>
        </ul>
      </div>
    </div>
      </div>

      {/* WhatsApp floating button */}
      <a
  href="#"
  className="fixed bottom-5 right-5 z-50 w-28 h-28 rounded-full flex items-center justify-center bg-[#25D366] hover:bg-[#1DA955] transition shadow-lg "
  title="Ouvrir le chatbot"
>
  <div className="relative w-full h-full">
    <IoChatbubbleOutline className="text-white w-full h-full " />
    <FaRobot className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  text-5xl" />
  </div>
</a>



    </footer>
  );
};

export default FirstFooter;
