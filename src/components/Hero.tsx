
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/ae2f38d6-a00d-4ba2-820c-845cafca5adb.png"
          alt="Barbier professionnel au travail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-wider leading-tight">
          THE BOX
        </h1>
        
        <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200 tracking-wide mb-8 leading-relaxed">
          L'excellence masculine à Rouen - Où chaque coupe devient une œuvre d'art
        </h2>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a 
            href="https://www.planity.com/the-box-76000-rouen"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold uppercase tracking-wider transition-all duration-300 rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(239, 68, 68, 0.4))'
            }}
          >
            <span className="relative z-10">Réserver maintenant</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
          
          <Link 
            to="/services"
            className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg hover:scale-105"
          >
            Découvrir nos tarifs
          </Link>
        </div>

        {/* Urgency Indicator */}
        <div className="text-orange-400 text-sm font-semibold mb-6 animate-pulse">
          ⚡ Plus que 3 créneaux aujourd'hui
        </div>

        {/* Reassurance Elements */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-300 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span className="font-semibold">4.9/5</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
          <div className="font-semibold">1000+ clients satisfaits</div>
          <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
          <div className="text-green-400 font-semibold">✓ Réservation instantanée</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
