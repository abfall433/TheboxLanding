
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="w-12 h-1 bg-red-600 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              L'Art de la <span className="text-red-500">Coupe</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Chez THE BOX, nous transformons une simple visite chez le barbier en une 
              véritable expérience. Notre équipe de professionnels passionnés 
              maîtrise l'art  de la coupe tout en intégrant les techniques 
              les plus modernes.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Dans notre salon il y une ambiance unique, chaque détail a été pensé 
              pour votre confort et votre satisfaction. De la consultation personnalisée 
              aux finitions parfaites, nous nous engageons à révéler le meilleur de votre style.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <AnimatedCounter
                end={5}
                suffix="+"
                label="Années d'expérience"
                duration={2000}
              />
              <AnimatedCounter
                end={1000}
                suffix="+"
                label="Clients satisfaits"
                duration={2500}
              />
              <AnimatedCounter
                end={4.9}
                decimals={1}
                label="Note moyenne"
                duration={2000}
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop"
                alt="Barbier au travail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">5★</div>
                <div className="text-xs">AVIS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
