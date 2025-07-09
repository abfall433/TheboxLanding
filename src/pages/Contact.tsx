
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Phone, Clock, Mail, Calendar } from 'lucide-react';

const Contact = () => {
  const openingHours = [
    { day: "Lundi", hours: "09h00 - 19h00" },
    { day: "Mardi", hours: "09h00 - 19h00" },
    { day: "Mercredi", hours: "09h00 - 19h00" },
    { day: "Jeudi", hours: "09h00 - 19h00" },
    { day: "Vendredi", hours: "09h00 - 19h00" },
    { day: "Samedi", hours: "09h00 - 18h00" },
    { day: "Dimanche", hours: "Fermé" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gérer l'envoi du formulaire
    console.log('Formulaire envoyé');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="text-red-500">Contact</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Besoin d'informations ou envie de prendre rendez-vous ? 
            Nous sommes là pour répondre à toutes vos questions.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Informations pratiques</h2>
              
              {/* Address */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-red-600 p-3 rounded">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-400">
                    123 Rue de la République<br />
                    76000 Rouen<br />
                    France
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-red-600 p-3 rounded">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Téléphone</h3>
                  <p className="text-gray-400">02 35 XX XX XX</p>
                  <p className="text-sm text-gray-500">Réservations uniquement sur Planity</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-red-600 p-3 rounded">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">contact@thebox-rouen.fr</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-red-600 p-3 rounded">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Horaires d'ouverture</h3>
                  <div className="space-y-2">
                    {openingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-400">{schedule.day}</span>
                        <span className={`font-medium ${
                          schedule.hours === "Fermé" ? "text-red-400" : "text-white"
                        }`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Button */}
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-semibold transition-colors duration-200 flex items-center justify-center">
                <Calendar className="h-5 w-5 mr-2" />
                Réserver sur Planity
              </button>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Nous contacter</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-medium mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-medium mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white focus:border-red-500 focus:outline-none"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="rdv">Prise de rendez-vous</option>
                    <option value="info">Demande d'informations</option>
                    <option value="tarifs">Questions sur les tarifs</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white focus:border-red-500 focus:outline-none resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-semibold transition-colors duration-200"
                >
                  Envoyer le message
                </button>

                <p className="text-gray-400 text-sm">
                  * Champs obligatoires. Nous vous répondrons dans les plus brefs délais.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nous trouver</h2>
          <div className="bg-gray-800 rounded-lg p-4 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <p className="text-white text-lg font-semibold mb-2">123 Rue de la République</p>
              <p className="text-gray-400">76000 Rouen, France</p>
              <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors duration-200">
                Voir sur Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
