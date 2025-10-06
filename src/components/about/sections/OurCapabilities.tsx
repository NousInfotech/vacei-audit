'use client';

import React, { useState, useEffect, useRef } from 'react';
import Team from '../../common/Team';

const OurCapabilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const capabilities = [
    {
      category: "Core Services",
      items: [
        "End-to-end bookkeeping & accounting",
        "VAT, tax compliance, financial reporting",
        "Audit planning, risk assessment, working paper handling"
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      category: "Technology Solutions",
      items: [
        "White-label portals for firms & clients",
        "Integration with ERPs, open banking, Excel, and more",
        "Review trails, audit plan generation, AI-assisted procedures"
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "from-lime-500 to-lime-600"
    },
    {
      category: "Team Expertise",
      items: [
        "Expert professionals (accountants, auditors, data scientists)",
        "State-of-the-art technology integration",
        "Combined human expertise with automation"
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <div className="relative bg-white overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-300/20 to-lime-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-300/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-300/20 to-green-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-green-100/60 via-lime-100/70 to-emerald-100/60 backdrop-blur-md rounded-full border border-green-200/60 shadow-xl mb-6">
            <span className="text-green-700 text-xs lg:text-sm font-medium tracking-wide uppercase">Our Capabilities</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
            Expertise Meets <span className="bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">Technology</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We merge expert professionals (accountants, auditors, data scientists) with state-of-the-art technology. 
            This combination enables us to deliver comprehensive solutions.
          </p>
        </div>

        {/* Capabilities Grid - Fresh Hexagonal Design */}
        <div className="relative mb-16">
          {/* Central Hub */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 via-lime-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Hexagonal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="relative group">
                  {/* Hexagonal Card */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 h-full">
                    
                    {/* Connection Line */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${capability.color} rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{capability.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.category}</h3>
                    </div>
                    
                    {/* Items List */}
                    <div className="space-y-3">
                      {capability.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-br ${capability.color} rounded-full flex-shrink-0 mt-2`}></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Floating accent elements */}
                    <div className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br ${capability.color} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className={`absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br ${capability.color} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section - Using Team Component */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Team />
        </div>
      </div>
    </div>
  );
};

export default OurCapabilities;