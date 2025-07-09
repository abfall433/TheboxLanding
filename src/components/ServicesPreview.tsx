
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Users } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Coupes Homme",
      description: "Styles classiques et modernes adaptés à votre personnalité et morphologie",
      price: "À partir de 35€",
      features: ["Consultation personnalisée", "Shampoing inclus", "Finition au rasoir"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Soins Visage & Barbe",
      description: "Taille, entretien et soins premium pour une barbe parfaitement sculptée",
      price: "À partir de 25€",
      features: ["Produits haut de gamme", "Massage facial", "Conseils personnalisés"]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Nos <span className="text-red-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des prestations d'excellence pour révéler votre style unique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:border-red-500 border border-gray-800 group"
            >
              <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <span className="text-2xl font-black text-amber-400">{service.price}</span>
              </div>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/services"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-semibold transition-colors duration-200 block text-center"
              >
                En savoir plus
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/services"
            className="bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 font-semibold transition-all duration-200"
          >
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
