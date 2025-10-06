'use client';

import React from 'react';
import Team from '../common/Team';

const TrustSection = () => {
  const trustElements = [
    {
      title: "Operated by A4 Services Limited",
      subtitle: "Licensed audit & accounting firm in Malta",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "Professional oversight by a fully licensed and regulated audit firm",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Security & Privacy",
      subtitle: "SSL encryption, daily backups, GDPR compliance",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      description: "Enterprise-grade security measures protecting your sensitive data",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Transparency & Roadmap",
      subtitle: "We share our development roadmap and evolve with clients",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Open development process with regular updates and client feedback integration",
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Pilot & Guarantee",
      subtitle: "30-day pilot or refund (subject to terms)",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: "Risk-free trial period with our satisfaction guarantee",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Team & Expertise",
      subtitle: "Developed by accountants, auditors & technologists",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Expert team combining deep domain knowledge with cutting-edge technology",
      color: "from-slate-600 to-gray-700"
    }
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Decorative Background Elements - Matching ValuePropositionSection */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-100/20 to-lime-100/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-100/15 to-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-100/20 to-green-100/15 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 antialiased">
            Built on <span className="bg-green-600 bg-clip-text text-transparent">Trust</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Professional oversight, enterprise security, and transparent development
          </p>
        </div>

        {/* Trust Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustElements.map((element, index) => (
            <div key={index} className="group relative">
              {/* Card Container - Enhanced with green/lime gradients like ValuePropositionSection */}
              <div className="relative bg-gradient-to-br from-green-50/40 via-lime-50/30 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-green-100/50 backdrop-blur-sm">
                
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-lime-100/10 to-emerald-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Window Controls (matching ValuePropositionSection) */}
                {/* <div className="relative flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                </div> */}
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-lime-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    {element.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {element.title}
                  </h3>
                  
                  <p className="text-green-600 font-semibold text-sm">
                    {element.subtitle}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {element.description}
                  </p>
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-200/30 to-lime-200/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-lime-200/20 to-emerald-200/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <Team />
        </div>

        {/* Bottom CTA - Enhanced like ValuePropositionSection */}
    
      </div>
    </div>
  );
};

export default TrustSection;
