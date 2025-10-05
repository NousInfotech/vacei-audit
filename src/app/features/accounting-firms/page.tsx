// 'use client';

// import React from 'react';
// import AccountingFirmsHero from '../../../components/features/accounting-firms/AccountingFirmsHero';
// import AccountingFirmsIntroduction from '../../../components/features/accounting-firms/AccountingFirmsIntroduction';
// import { 
//   AccountingFirmsChallenges, 
//   AccountingFirmsOfferings, 
//   AccountingFirmsWorkflow, 
//   AccountingFirmsAdvantages, 
//   AccountingFirmsPricing, 
//   AccountingFirmsFAQ, 
//   AccountingFirmsCTA 
// } from '../../../components/features/accounting-firms/AccountingFirmsComponents';

// const AccountingFirmsPage = () => {
//   return (
//     <div className="min-h-screen">
//       <AccountingFirmsHero />
//       <AccountingFirmsIntroduction />
//       <AccountingFirmsChallenges />
//       <AccountingFirmsOfferings />
//       <AccountingFirmsWorkflow />
//       <AccountingFirmsAdvantages />
//       <AccountingFirmsPricing />
//       <AccountingFirmsFAQ />
//       <AccountingFirmsCTA />
//     </div>
//   );
// };

// export default AccountingFirmsPage;

'use client';

import React from 'react';

const AccountingFirmsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        {/* Coming Soon Badge */}
        <div className="inline-block px-6 py-3 bg-green-100/50 backdrop-blur-sm rounded-full border border-green-200/50 mb-8">
          <span className="text-green-700 text-sm font-medium tracking-wide uppercase">Coming Soon</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
          Accounting Firms <span className="text-green-600 relative">Portal</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
          We&apos;re building something amazing for accounting firms. Stay tuned for a comprehensive solution that will revolutionize how you manage your practice.
        </p>
        
        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
            <p className="text-gray-600">Comprehensive reporting and insights for your accounting practice.</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Collaboration</h3>
            <p className="text-gray-600">Seamless communication and document sharing with your clients.</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Automation Tools</h3>
            <p className="text-gray-600">Streamline repetitive tasks and focus on what matters most.</p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-green-600 to-lime-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Get Notified When Ready
          </button>
          
          <button className="bg-transparent border-2 border-green-600/50 text-green-600 font-bold py-4 px-8 rounded-2xl hover:border-green-600 hover:bg-green-100/50 transition-all duration-300 hover:scale-105 flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Learn More
          </button>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-600/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-emerald-600/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default AccountingFirmsPage;