'use client';

import React from 'react';

const PortalPackages = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Portal / Licensing Packages
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Your Own Branded Platform
          </p>
          <p className="text-sm text-gray-400 mt-2">
            These are for accounting firms, audit firms, or businesses who want to license Vacei&apos;s platform so they (or their internal team) can use it, brand it, and serve clients via it.
          </p>
        </div>

        {/* Portal Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Accounting Portal License */}
          <div className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-8 hover:border-green-400 transition-colors">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                Accounting Portal License
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Accounting Portal License</h3>
              <p className="text-gray-300 text-sm">Firms / teams that want a branded portal for bookkeeping workflows</p>
            </div>
            
            <div className="space-y-3">
              {[
                'Branded portal (UI, logo, domain)',
                'Client / team document upload & request interface',
                'OCR / auto data extraction',
                'Integration with accounting software (ERP, bookkeeping tools)',
                'Dashboard & analytics for clients'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Portal License */}
          <div className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-8 hover:border-green-400 transition-colors">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                Audit Portal License
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Audit Portal License</h3>
              <p className="text-gray-300 text-sm">Firms / audit departments that want full audit workflow under their brand</p>
            </div>
            
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-300 mb-2">Everything in Accounting Portal plus:</p>
            </div>
            
            <div className="space-y-3">
              {[
                'Automated audit plan & procedure generation',
                'Import working papers, review trails',
                'Risk-based methodologies, control testing modules',
                'Open banking + ERP integrations & Excel live links',
                'Governance & compliance tools (e.g. ISQM, audit logs)'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Portal + Service License */}
          <div className="bg-gradient-to-br from-green-900 to-green-800 border-2 border-green-400 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                HIGHEST VALUE
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Full Portal + Service License</h3>
              <p className="text-gray-300 text-sm">Firms that want both service + portal under one package</p>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-300 mb-2">All features from Service + Audit Enhancements and Audit Portal License combined:</p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-300">you get full team support and your own branded platform to serve clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalPackages;
