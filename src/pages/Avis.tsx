
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, Quote, ThumbsUp } from 'lucide-react';

const Avis = () => {
  const reviews = [
    {
      name: "Pierre M.",
      rating: 5,
      date: "Il y a 2 jours",
      comment: "Excellent service ! Saracide est un vrai professionnel, j'y retournerai sans hésiter. L'ambiance du salon est top.",
      service: "Coupe + Barbe",
      verified: true
    },
    {
      name: "Thomas L.",
      rating: 5,
      date: "Il y a 1 semaine",
      comment: "THE BOX c'est LA référence à Rouen ! Thomas m'a fait une coupe parfaite, exactement ce que je voulais. Service impeccable.",
      service: "Coupe Moderne",
      verified: true
    },
    {
      name: "Marc D.",
      rating: 5,
      date: "Il y a 2 semaines",
      comment: "Je recommande à 100% ! Julie est très professionnelle et à l'écoute. Le soin visage était parfait, très relaxant.",
      service: "Soin Visage",
      verified: true
    },
    {
      name: "Antoine R.",
      rating: 5,
      date: "Il y a 3 semaines",
      comment: "Barbershop au top ! Ambiance industrielle moderne, équipe pro et résultat parfait. Mon nouveau QG capillaire !",
      service: "Coupe Dégradé",
      verified: true
    },
    {
      name: "Julien B.",
      rating: 4,
      date: "Il y a 1 mois",
      comment: "Très satisfait de ma coupe ! Personnel accueillant et cadre sympa. Petit bémol sur l'attente mais ça valait le coup.",
      service: "Coupe Classique",
      verified: true
    },
    {
      name: "Kevin S.",
      rating: 5,
      date: "Il y a 1 mois",
      comment: "Service de qualité, Alexandre maîtrise parfaitement son art. La barbe est taillée avec précision, excellent travail !",
      service: "Barbe Premium",
      verified: true
    },
    {
      name: "Nicolas T.",
      rating: 5,
      date: "Il y a 2 mois",
      comment: "Parfait pour mon mariage ! Thomas a su me conseiller la coupe idéale. Le forfait marié est vraiment complet, je recommande.",
      service: "Forfait Marié",
      verified: true
    },
    {
      name: "Maxime P.",
      rating: 5,
      date: "Il y a 2 mois",
      comment: "Ambiance au top, personnel sympa et résultat nickel ! C'est devenu mon barbier attitré. Rapport qualité/prix excellent.",
      service: "Coupe + Barbe",
      verified: true
    }
  ];

  const stats = [
    { label: "Note moyenne", value: "4.9/5", icon: Star },
    { label: "Avis clients", value: "127+", icon: ThumbsUp },
    { label: "Clients satisfaits", value: "98%", icon: Quote }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Avis <span className="text-red-500">Clients</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez ce que nos clients pensent de leur expérience THE BOX. 
            Leur satisfaction est notre plus belle récompense.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-900 p-8 rounded-lg border border-gray-800">
                <stat.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold">{review.name}</h3>
                    <p className="text-gray-400 text-sm">{review.date}</p>
                  </div>
                  {review.verified && (
                    <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                      Vérifié
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                  <span className="text-white ml-2 font-semibold">{review.rating}/5</span>
                </div>

                {/* Service */}
                <div className="bg-red-600/10 text-red-400 text-sm px-3 py-1 rounded-full inline-block mb-4">
                  {review.service}
                </div>

                {/* Comment */}
                <div className="relative">
                  <Quote className="h-6 w-6 text-red-500 mb-2" />
                  <p className="text-gray-300 leading-relaxed">{review.comment}</p>
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
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Vivez l'expérience THE BOX et découvrez pourquoi nos clients nous font confiance
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

export default Avis;
