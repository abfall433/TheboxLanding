
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const AnimatedStats = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Nos <span className="text-red-500">Chiffres</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedCounter
            end={5}
            suffix="+"
            label="Années d'expérience"
            duration={2000}
          />
          <AnimatedCounter
            end={1000}
            suffix="+"
            label="Clients satisfaits"
            duration={2500}
          />
          <AnimatedCounter
            end={4.9}
            decimals={1}
            label="Note moyenne"
            duration={2000}
          />
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
