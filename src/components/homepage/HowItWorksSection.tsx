'use client';

import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Connect & Onboard",
      description: "We link systems, import data, configure branding & users",
      business: "You connect your accounting / ERP, upload historical data",
      auditor: "Your firm sets up your branded instance, defines client entities & mappings"
    },
    {
      number: "2", 
      title: "Automate & Review",
      description: "Automated extraction, classification, reconciliation + human review",
      business: "Documents (invoices, receipts, statements) are processed automatically; you review exceptions",
      auditor: "Automation runs across your clients; auditors review flagged items, perform checks"
    },
    {
      number: "3",
      title: "Deliver & Scale", 
      description: "Dashboards, reports, audit outputs are issued; you expand features / users",
      business: "You receive financial statements, analytics, optional audit outputs",
      auditor: "You deliver working papers, client portals, review flows, and scale capacity"
    }
  ];

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 antialiased">
            How It <span className="text-green-400">Works</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-gray-400">(Tailored to Your Role)</span>
          </p>
        </div>

        {/* Steps Container */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number & Title */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-black">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Role-specific Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-22">
                {/* Business Column */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white">If You&apos;re a Business</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {step.business}
                  </p>
                </div>

                {/* Auditor Column */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white">If You&apos;re a Firm / Auditor</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {step.auditor}
                  </p>
                </div>
              </div>

              {/* Connecting Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-32 w-0.5 h-16 bg-gray-700 ml-7"></div>
              )}
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default HowItWorksSection;
