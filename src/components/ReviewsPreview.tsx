
import React from 'react';
import { Star } from 'lucide-react';

const ReviewsPreview = () => {
  const reviews = [
    {
      name: "Thomas M.",
      rating: 5,
      comment: "Service exceptionnel, ambiance au top et résultat parfait. Je recommande vivement THE BOX pour tous les hommes qui cherchent la qualité.",
      date: "Il y a 2 semaines",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Kevin L.",
      rating: 5,
      comment: "Marco est un vrai artiste ! Ma barbe n'a jamais été aussi bien taillée. L'accueil est chaleureux et le salon magnifique.",
      date: "Il y a 1 mois",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Antoine R.",
      rating: 5,
      comment: "Enfin un barbershop à la hauteur à Rouen ! Prestation premium, équipe pro et ambiance industrielle parfaite. Je ne changerai plus !",
      date: "Il y a 3 semaines",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Avis <span className="text-red-500">Clients</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ce que disent nos clients de leur expérience chez THE BOX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-black p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="text-gray-500 text-sm">{review.date}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-8">
            <div className="text-4xl font-black text-amber-400 mb-2">4.9/5</div>
            <div className="text-gray-400">Basé sur 127 avis clients</div>
          </div>
          
          <button className="bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 font-semibold transition-all duration-200">
            Voir tous les avis
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPreview;
