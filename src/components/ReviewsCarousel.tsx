
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const ReviewsCarousel = () => {
  const reviews = [
    {
      name: "Pierre M.",
      rating: 5,
      comment: "Service exceptionnel ! Alexandre est un vrai professionnel, j'y retournerai sans hésiter. L'ambiance du salon est top.",
      date: "Il y a 2 jours",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Thomas L.",
      rating: 5,
      comment: "THE BOX c'est LA référence à Rouen ! Thomas m'a fait une coupe parfaite, exactement ce que je voulais.",
      date: "Il y a 1 semaine",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Marc D.",
      rating: 5,
      comment: "Je recommande à 100% ! Julie est très professionnelle et à l'écoute. Le soin visage était parfait.",
      date: "Il y a 2 semaines",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Antoine R.",
      rating: 5,
      comment: "Barbershop au top ! Ambiance industrielle moderne, équipe pro et résultat parfait.",
      date: "Il y a 3 semaines",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Kevin S.",
      rating: 5,
      comment: "Service de qualité, Alexandre maîtrise parfaitement son art. La barbe est taillée avec précision !",
      date: "Il y a 1 mois",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Julien B.",
      rating: 4,
      comment: "Très satisfait de ma coupe ! Personnel accueillant et cadre sympa. Petit bémol sur l'attente mais ça valait le coup.",
      date: "Il y a 1 mois",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c96956db?q=80&w=100&auto=format&fit=crop"
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-black p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300 h-full group hover:scale-105 hover:shadow-xl hover:shadow-red-500/10">
                  <div className="flex items-center mb-6">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4 ring-2 ring-gray-700 group-hover:ring-red-500 transition-colors duration-300"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-red-600 hover:bg-red-700 border-red-600 text-white" />
          <CarouselNext className="hidden md:flex -right-12 bg-red-600 hover:bg-red-700 border-red-600 text-white" />
        </Carousel>

        <div className="text-center mt-12">
          <div className="mb-8">
            <div className="text-4xl font-black text-amber-400 mb-2">4.9/5</div>
            <div className="text-gray-400">Basé sur 127 avis clients</div>
          </div>
          
          <Link 
            to="/avis"
            className="bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
          >
            Voir tous les avis
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
