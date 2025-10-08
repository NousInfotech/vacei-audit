'use client';

import React from 'react';

const ServicePackages = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vacei as Your Accounting & Audit Team
          </p>
          <p className="text-sm text-gray-500 mt-2">
            These are for businesses (or firms) who want Vacei to handle accounting, auditing, and financial compliance — without needing to manage the portal technology.
          </p>
        </div>

        {/* Service Package Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Tier Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Tier</h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-2">Core Service</h4>
                <p className="text-sm text-blue-700">Businesses that want full accounting + audit support</p>
              </div>
            </div>

            {/* What's Included Column */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s Included</h3>
              <div className="space-y-3">
                {[
                  'Document upload (PDF, Excel, bank statements)',
                  'Bookkeeping, ledger, reconciliation',
                  'Financial statements preparation',
                  'Audit / review support (risk detection, procedures)',
                  'Dashboards & reporting',
                  'Meetings & support with your Vacei team'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>All service plans include:</strong> onboarding, integration with your accounting system, and setup. Maintenance / support is available as an optional add-on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePackages;
