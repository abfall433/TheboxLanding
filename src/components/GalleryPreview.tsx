
import React from 'react';
import { Link } from 'react-router-dom';

const GalleryPreview = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
      alt: "Coupe moderne"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop",
      alt: "Ambiance salon"
    },
    {
      src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop",
      alt: "Soin barbe"
    },
    
   
    
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Notre <span className="text-red-500">Galerie</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez nos réalisations et l'ambiance unique de THE BOX
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-lg font-bold">{image.alt}</div>
                  <div className="w-8 h-0.5 bg-red-500 mx-auto mt-2"></div>
                </div>
              </div>
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-red-500/50 rounded-lg transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/galerie"
            className="bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
          >
            Voir galerie complète
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
