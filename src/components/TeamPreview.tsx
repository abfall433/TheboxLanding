import Abdel from "../assets/abdel.png"
import Saracide from "../assets/saracide.png"
import Zak from "../assets/zak.png"
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const TeamPreview = () => {
  const team = [
    {
      name: "Abdel",
      role: "Barbier Senior",
      speciality: "Dégradés & Styling",
      image: Abdel,
      instagram: "@alex_thebox",
      facebook: "alexandre.barbier"
    },
    {
      name: "Zak",
      role: "Barbier Senior",
      speciality: "Dégradés & Styling",
      image: Zak,
      instagram: "@thomas_cuts",
      facebook: "thomas.barbier"
    },
    {
      name: "Saracide",
      role: "Barbier Senior",
      speciality: "Dégradés & Styling ",
      image: Saracide,
      instagram: "@julie_beauty",
      facebook: "julie.soins"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Notre <span className="text-red-500">Équipe</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des artistes passionnés au service de votre style
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                    <p className="text-red-400 font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gray-300 mb-4">{member.speciality}</p>
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="text-white hover:text-red-400 transition-colors">
                        <Instagram size={20} />
                      </a>
                      <a href="#" className="text-white hover:text-red-400 transition-colors">
                        <Facebook size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-red-500/50 rounded-lg transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/equipe"
            className="bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
          >
            Rencontrer l'équipe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
