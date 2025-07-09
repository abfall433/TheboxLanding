
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-black text-white tracking-wider mb-2">THE BOX</h3>
              <p className="text-gray-400 text-sm tracking-widest">BARBER SHOP</p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              L'excellence masculine à Rouen. Découvrez l'art de la coiffure dans une ambiance 
              industrielle et moderne, où chaque détail compte pour révéler votre style unique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>123 Rue de la République</div>
                  <div>76000 Rouen</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-400">02 35 XX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-400">contact@thebox-rouen.fr</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Horaires</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Lun - Ven</span>
                <span>9h - 19h</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi</span>
                <span>9h - 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-red-500">Fermé</span>
              </div>
            </div>
            
            <a 
              href="https://www.planity.com/the-box-76000-rouen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 font-semibold transition-colors duration-200 block text-center"
            >
              Prendre RDV sur Planity
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 THE BOX Barber Shop. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
