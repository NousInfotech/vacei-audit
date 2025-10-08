'use client';

import React from 'react';

const HowToChoose = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How to Choose
          </h2>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "Service Package",
              description: "If you want Vacei to run your accounting and audits so you don't worry about the technology, pick a Service package.",
              color: "blue"
            },
            {
              title: "Portal / Licensing Package",
              description: "If you want your own branded portal / platform to serve clients or internal teams, go for a Portal / Licensing package (or the combined Full package).",
              color: "purple"
            },
            {
              title: "Flexible Growth",
              description: "You can start with just one side (service or portal) and upgrade later to combine both.",
              color: "green"
            }
          ].map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                item.color === 'blue' ? 'bg-blue-100' : 
                item.color === 'purple' ? 'bg-purple-100' : 'bg-green-100'
              }`}>
                <span className={`font-bold text-lg ${
                  item.color === 'blue' ? 'text-blue-600' : 
                  item.color === 'purple' ? 'text-purple-600' : 'text-green-600'
                }`}>{index + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToChoose;
