
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Scissors, Clock, Star, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Coupe Classique",
      price: "25€",
      duration: "30 min",
      description: "Coupe traditionnelle avec finitions au rasoir et styling personnalisé",
      features: ["Consultation", "Shampoing", "Coupe", "Styling", "Finitions rasoir"]
    },
    {
      title: "Coupe + Barbe",
      price: "40€",
      duration: "45 min",
      description: "Service complet incluant coupe moderne et taille de barbe experte",
      features: ["Consultation", "Shampoing", "Coupe", "Taille barbe", "Styling", "Huile barbe"]
    },
    {
      title: "Barbe Premium",
      price: "30€",
      duration: "30 min",
      description: "Soin complet de la barbe avec rasage traditionnel et produits haut de gamme",
      features: ["Consultation", "Rasage traditionnel", "Taille précise", "Soin hydratant", "Huile premium"]
    },
    {
      title: "Coupe Enfant",
      price: "20€",
      duration: "25 min",
      description: "Coupe adaptée aux plus jeunes dans une ambiance détendue",
      features: ["Coupe adaptée", "Patience garantie", "Styling simple", "Bonbon offert"]
    },
    {
      title: "Forfait Marié",
      price: "80€",
      duration: "90 min",
      description: "Service premium pour votre jour J avec essai préalable inclus",
      features: ["Essai gratuit", "Coupe + barbe", "Styling longue tenue", "Retouches", "Photos souvenir"]
    },
    {
      title: "Soin Visage",
      price: "35€",
      duration: "40 min",
      description: "Soin du visage masculin avec produits naturels et massage relaxant",
      features: ["Nettoyage profond", "Gommage", "Masque hydratant", "Massage", "Crème de soin"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Nos <span className="text-red-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des prestations haut de gamme dans un cadre industriel moderne. 
            Chaque service est personnalisé selon vos besoins et votre style.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-red-600 p-3 rounded">
                    <Scissors className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-500">{service.price}</div>
                    <div className="text-gray-400 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition-colors duration-200">
                  Réserver
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt pour une nouvelle coupe ?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Réservez votre créneau sur Planity et découvrez l'expérience THE BOX
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105">
            Prendre rendez-vous
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
