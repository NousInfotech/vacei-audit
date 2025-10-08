'use client';

import React from 'react';

const AddonsSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Add-ons & Extras
          </h2>
          <p className="text-lg text-gray-600">
            You can extend any package with additional modules or services:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            'KYC / Identity Verification Module',
            'Advanced Analytics / AI Insights',
            'Priority Support & SLA Upgrades',
            'Custom Integrations (ERP, CRMs, third-party tools)',
            'Ongoing Maintenance & Feature Upgrades'
          ].map((addon, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{addon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddonsSection;
