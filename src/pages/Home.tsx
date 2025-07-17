import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Star, Clock, Award, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BOX from "../assets/thebox.png"
import ABDEL from "../assets/abdel.png"
import ZAK from "../assets/zak.png"
import P1 from "../assets/real1.jpg"
import P2 from "../assets/real2.jpg"
import P3 from "../assets/real3.jpg"
import P4 from "../assets/real4.jpg"
import P5 from "../assets/real5.jpg"
import P6 from "../assets/real6.jpg"
import SARACIDE from "../assets/saracide.png"



const Home = () => {
  const services = [
    {
      name: 'Coupe Classique',
      price: '35€',
      description: 'Coupe traditionnelle avec finition impeccable',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop&crop=face'
    },
    {
      name: 'Taille Barbe',
      price: '25€',
      description: 'Entretien et design de barbe personnalisé',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop&crop=face'
    },
    {
      name: 'Soin Complet',
      price: '55€',
      description: 'Coupe + barbe + soins premium',
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=300&fit=crop&crop=face'
    }
  ];

  const team = [
    {
      name: 'Saracide',
      specialty: 'Barbier expert',
      experience: '8 ans',
      image: SARACIDE
    },
    {
      name: 'Abdel',
      specialty: 'Barbier expert',
      experience: '6 ans',
      image: ABDEL
    },
    {
      name: 'Zak',
      specialty: 'Barbier Expert',
      experience: '5 ans',
      image: ZAK
    }
  ];

  const gallery = [
    P1,P2,P3,P4,P5,P6
  ];

  const testimonials = [
    {
      name: 'Pierre M.',
      rating: 5,
      comment: 'Service exceptionnel, je recommande vivement. L\'équipe est professionnelle et à l\'écoute.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Lucas D.',
      rating: 5,
      comment: 'Meilleur salon de Rouen ! Ambiance détendue et résultat parfait à chaque fois.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    }
  ];

  return (
    <div>
      {/* Hero Section - Parallax Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed grayscale animate-hero-bg"
          style={{
            backgroundImage: `url('/lovable-uploads/a188cbf1-750f-4493-aea8-9af87b01a1ad.png')`,
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Dark Overlay with animated opacity */}
          <div className="absolute inset-0 bg-black/60 animate-hero-overlay"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-hero-content">
          <div className="space-y-6 md:space-y-8">
            {/* Logo and Title with staggered animations */}
            <div className="space-y-4">
              <div className="flex flex-col items-center animate-hero-logo">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-2 animate-hero-title">
                  THE BOX
                </h1>
                <div className="w-16 h-1 bg-accent animate-hero-line"></div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-white animate-hero-subtitle">
                L'Art de la Coiffure Masculine
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-4 animate-hero-description">
                Salon premium à Rouen depuis 2019. Excellence et savoir-faire traditionnel 
                dans un cadre moderne et chaleureux.
              </p>
            </div>

            {/* CTA Button with hover animation */}
            <div className="space-y-6">
              <Button className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-4 w-full sm:w-auto font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 animate-hero-cta transform">
                <a href="https://www.planity.com" target="_blank" rel="noopener noreferrer">
                  RÉSERVER MAINTENANT
                </a>
              </Button>
              
              {/* Practical Information with fade in animation */}
              <div className="text-white space-y-2 text-sm sm:text-base animate-hero-info">
                <div className="flex items-center justify-center space-x-2">
                  <Clock size={16} className="text-accent" />
                  <span>Mar-Sam: 9h-19h | Dim-Lun: Fermé</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>📍 123 Rue de la République, 76000 Rouen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À Propos Section */}
      <section className="py-16 md:py-20 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-black">
                Notre Histoire
              </h2>
              <div className="w-16 h-1 bg-accent"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                The Box incarne l'excellence de la coiffure masculine à Rouen. Depuis 2019, 
                nous redéfinissons les standards du barbershop moderne en alliant savoir-faire 
                traditionnel et techniques contemporaines.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre équipe de professionnels passionnés vous accueille dans un cadre 
                élégant et chaleureux, où chaque détail compte pour vous offrir une 
                expérience unique et sur-mesure.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <Scissors className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-black">Abdel</p>
                  <p className="text-gray-600">Fondateur &  Barber Expert</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={BOX}
                alt="Intérieur salon The Box"
                className="w-full h-64 md:h-96 object-cover grayscale shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
              NOS SERVICES
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-display font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-accent mb-4">{service.price}</div>
                  <Button className="btn-primary w-full">
                    RÉSERVER
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3">
                DÉCOUVRIR NOS SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Équipe Preview */}
      <section className="py-16 md:py-20 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
              NOTRE ÉQUIPE
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-display font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.specialty}</p>
                  <p className="text-sm text-gray-500">{member.experience} d'expérience</p>
                </div>
                <Button className="btn-primary">
                  RÉSERVER AVEC {member.name.toUpperCase()}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/equipe">
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3">
                RENCONTRER L'ÉQUIPE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Galerie Preview */}
      <section className="py-16 md:py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
              NOS RÉALISATIONS
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {gallery.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Réalisation ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/galerie">
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3">
                VOIR TOUTES NOS RÉALISATIONS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Avis Preview */}
      <section className="py-16 md:py-20 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
              ILS NOUS FONT CONFIANCE
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl md:text-6xl text-gray-300 font-serif">"</div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4 italic text-sm md:text-base">{testimonial.comment}</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full grayscale"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/avis">
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3">
                LIRE TOUS LES AVIS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
