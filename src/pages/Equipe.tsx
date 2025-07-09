
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, Calendar, Scissors } from 'lucide-react';

const Equipe = () => {
  const teamMembers = [
    {
      name: "Alexandre Martin",
      role: "Fondateur & Barbier Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
      experience: "12 ans d'expérience",
      specialties: ["Coupes classiques", "Barbe traditionnelle", "Styling vintage"],
      description: "Passionné par l'art de la barberie depuis plus d'une décennie, Alexandre a fondé THE BOX pour offrir une expérience premium à Rouen.",
      rating: 4.9,
      reviews: 89
    },
    {
      name: "Thomas Dubois",
      role: "Barbier Senior",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      experience: "8 ans d'expérience",
      specialties: ["Coupes modernes", "Dégradés", "Barbe design"],
      description: "Spécialiste des coupes tendances et des techniques modernes, Thomas apporte créativité et précision à chaque prestation.",
      rating: 4.8,
      reviews: 67
    },
    {
      name: "Julie Moreau",
      role: "Barbière & Spécialiste Soins",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1000&auto=format&fit=crop",
      experience: "6 ans d'expérience",
      specialties: ["Soins visage", "Coupes femmes", "Conseils styling"],
      description: "Experte en soins du visage masculin et techniques de coupe, Julie apporte une approche douce et professionnelle.",
      rating: 4.9,
      reviews: 54
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
            Notre <span className="text-red-500">Équipe</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des professionnels passionnés, formés aux dernières techniques et dédiés à l'excellence masculine.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Image */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-red-500 text-xl font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-400">{member.experience}</p>
                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center justify-center lg:justify-start">
                      <Scissors className="h-5 w-5 text-red-500 mr-2" />
                      Spécialités
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold ml-1">{member.rating}</span>
                    </div>
                    <span className="text-gray-400">({member.reviews} avis)</span>
                  </div>

                  {/* Book Button */}
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition-colors duration-200 flex items-center justify-center lg:justify-start mx-auto lg:mx-0">
                    <Calendar className="h-5 w-5 mr-2" />
                    Réserver avec {member.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rencontrez notre équipe
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Chaque membre de notre équipe est sélectionné pour son expertise et sa passion
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

export default Equipe;
