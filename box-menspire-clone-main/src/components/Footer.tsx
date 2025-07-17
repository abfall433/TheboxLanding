
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">NEWSLETTER</h3>
            <p className="text-gray-400 text-sm">
              Restez au courant des dernières tendances et offres spéciales.
            </p>
            <div className="flex">
              <Input 
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <Button className="btn-primary ml-2">
                REJOINDRE
              </Button>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">SUIVEZ-NOUS</h3>
            <p className="text-gray-400 text-sm">
              Découvrez nos dernières réalisations sur nos réseaux sociaux.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="bg-white/10 p-3 rounded-full hover:bg-box-red transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="bg-white/10 p-3 rounded-full hover:bg-box-red transition-colors duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Liens */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">INFORMATIONS</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Nos Services
              </Link>
              <Link to="/equipe" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Notre Équipe
              </Link>
              <Link to="/galerie" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Galerie
              </Link>
              <Link to="/avis" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Avis Clients
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">CONTACT</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-box-red" />
                <span className="text-gray-400 text-sm">123 Rue de la République<br />76000 Rouen</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-box-red" />
                <span className="text-gray-400 text-sm">02 35 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-box-red" />
                <span className="text-gray-400 text-sm">contact@thebox-rouen.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-box-red" />
                <div className="text-gray-400 text-sm">
                  <div>Mar-Sam: 9h-19h</div>
                  <div>Dim-Lun: Fermé</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 THE BOX | COIFFURE MASCULINE - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
