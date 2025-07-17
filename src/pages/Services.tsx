
import React from 'react';
import { Scissors, Star, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      name: 'Coupe Classique',
      price: '35€',
      description: 'Une coupe traditionnelle réalisée avec précision. Consultation personnalisée, lavage, coupe aux ciseaux et mise en forme selon vos désirs.',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=400&fit=crop&crop=face'
    },
    {
      name: 'Coupe Moderne',
      price: '40€',
      description: 'Coupe contemporaine avec techniques modernes. Dégradés, textures et finitions tendance pour un look actuel et stylé.',
      duration: '50 min',
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=500&h=400&fit=crop&crop=face'
    },
    {
      name: 'Taille de Barbe',
      price: '25€',
      description: 'Entretien expert de votre barbe. Taille, design, contours nets et soins nourrissants pour une barbe impeccable.',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&h=400&fit=crop&crop=face'
    },
    {
      name: 'Soin Complet',
      price: '55€',
      description: 'L\'expérience ultime : coupe + barbe + soins premium. Masque capillaire, massage et produits haut de gamme.',
      duration: '75 min',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop&crop=face'
    },
    {
      name: 'Coloration',
      price: '45€',
      description: 'Colorations et mèches professionnelles. Camouflage cheveux blancs ou changement complet de couleur.',
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1605497788516-7a08fe6d48b7?w=500&h=400&fit=crop&crop=face'
    },
    {
      name: 'Rasage Traditionnel',
      price: '30€',
      description: 'Rasage à l\'ancienne au rasoir. Serviettes chaudes, mousse traditionnelle et finition parfaite.',
      duration: '40 min',
      image: 'https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=500&h=400&fit=crop&crop=face'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'CONSULTATION',
      description: 'Échange personnalisé pour comprendre vos attentes et conseils adaptés à votre morphologie.',
      icon: <Star className="text-box-red" size={32} />
    },
    {
      step: '02',
      title: 'RÉALISATION',
      description: 'Mise en œuvre experte avec les meilleures techniques et outils professionnels.',
      icon: <Scissors className="text-box-red" size={32} />
    },
    {
      step: '03',
      title: 'FINITION',
      description: 'Retouches finales, conseils d\'entretien et styling pour un résultat parfait.',
      icon: <Award className="text-box-red" size={32} />
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=400&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-display font-bold mb-4">NOS SERVICES PREMIUM</h1>
          <div className="w-16 h-1 bg-box-red mx-auto mb-4"></div>
          <p className="text-xl">Excellence et savoir-faire depuis 2019</p>
        </div>
      </section>

      {/* Services Détaillés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
                  />
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-display font-bold text-black mb-2">
                      {service.name}
                    </h2>
                    <div className="w-12 h-1 bg-box-red mb-4"></div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-8 mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-box-red">{service.price}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={20} className="text-gray-500" />
                      <span className="text-gray-600">{service.duration}</span>
                    </div>
                  </div>
                  
                  <Button className="btn-primary text-lg px-8 py-3">
                    <a href="https://www.planity.com" target="_blank" rel="noopener noreferrer">
                      RÉSERVER
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Méthode */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-black mb-4">
              NOTRE MÉTHODE
            </h2>
            <div className="w-16 h-1 bg-box-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une approche méthodique et personnalisée pour des résultats exceptionnels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-display font-bold text-gray-200 mb-4">
                    {step.step}
                  </div>
                  <div className="mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-black mb-4">
            Prêt pour une nouvelle coupe ?
          </h2>
          <div className="w-16 h-1 bg-box-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 mb-8">
            Réservez dès maintenant votre rendez-vous avec nos experts
          </p>
          <Button className="btn-primary text-xl px-12 py-4">
            <a href="https://www.planity.com" target="_blank" rel="noopener noreferrer">
              RÉSERVER MAINTENANT
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
