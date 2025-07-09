
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

const Galerie = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
      alt: "Coupe dégradé moderne",
      category: "Coupes"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop",
      alt: "Intérieur du salon",
      category: "Salon"
    },
    {
      src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop",
      alt: "Soin barbe traditionnelle",
      category: "Barbe"
    },
    {
      src: "https://images.unsplash.com/photo-1521490878867-2bca2bc1c92b?q=80&w=1000&auto=format&fit=crop",
      alt: "Coupe scissor over comb",
      category: "Coupes"
    },
    {
      src: "https://images.unsplash.com/photo-1584369584011-b8821015a39c?q=80&w=1000&auto=format&fit=crop",
      alt: "Barbier au travail",
      category: "Salon"
    },
    {
      src: "https://images.unsplash.com/photo-1599351431613-37ad8c737b3d?q=80&w=1000&auto=format&fit=crop",
      alt: "Résultat coupe pompadour",
      category: "Coupes"
    },
    {
      src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=1000&auto=format&fit=crop",
      alt: "Taille de barbe précise",
      category: "Barbe"
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop",
      alt: "Ambiance industrielle",
      category: "Salon"
    },
    {
      src: "https://images.unsplash.com/photo-1618439884194-10f7f9ec4629?q=80&w=1000&auto=format&fit=crop",
      alt: "Coupe texturisée",
      category: "Coupes"
    },
    {
      src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
      alt: "Rasage traditionnel",
      category: "Barbe"
    },
    {
      src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1000&auto=format&fit=crop",
      alt: "Coupe fade parfaite",
      category: "Coupes"
    },
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
      alt: "Espace détente",
      category: "Salon"
    }
  ];

  const categories = ["Tous", "Coupes", "Barbe", "Salon"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredImages = selectedCategory === "Tous" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Notre <span className="text-red-500">Galerie</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos réalisations et l'ambiance unique de THE BOX à travers nos plus belles créations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="text-lg font-semibold mb-2">{image.alt}</div>
                    <div className="text-red-400 text-sm">{image.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Image agrandie"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Impressionné par nos réalisations ?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Venez découvrir l'expérience THE BOX et repartez avec une coupe qui vous ressemble
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

export default Galerie;
