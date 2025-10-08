'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const PricingHero = () => {
  const router = useRouter();

  const handleRequestDemo = () => {
    router.push('/wizard-flow');
  };

  return (
    <div className=" bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Flexible Packages for Services & Portals
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
          Choose between Vacei&apos;s service offering (we do the work) and platform / portal licensing (you use the software) — or combine both.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors">
            Get a Proposal
          </button>
          <button 
            onClick={handleRequestDemo}
            className="border-2 border-green-600 text-green-600 font-semibold px-8 py-4 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
          >
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
