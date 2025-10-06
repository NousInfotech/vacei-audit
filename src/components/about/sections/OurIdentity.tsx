'use client';

import React, { useState, useEffect, useRef } from 'react';

const OurIdentity = () => {
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

  return (
    <div className="relative bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-300/20 to-lime-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-300/20 to-green-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-200/20 to-lime-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-green-100/60 via-lime-100/70 to-emerald-100/60 backdrop-blur-md rounded-full border border-green-200/60 shadow-xl mb-6">
            <span className="text-green-700 text-xs lg:text-sm font-medium tracking-wide uppercase">Our Identity</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
            Who We Are
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Vacei is the brand under which we deliver modern accounting, bookkeeping, and auditing services — powered by technology, backed by expertise.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                We operate under <span className="font-semibold text-green-600">A4 Services Limited</span>, a registered audit & accounting firm in Malta (Registration: AB/2/22/01 on the Malta Register of Audit Firms & Principals).
              </p>
              
              <div className="bg-gradient-to-r from-green-100/60 via-lime-100/70 to-emerald-100/60 backdrop-blur-md rounded-2xl p-6 border border-green-200/60 shadow-xl">
                <p className="text-gray-700 font-medium">
                  By combining human professionals with automation, we help businesses and firms simplify financial operations, ensure compliance, and unlock growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Placeholder for company logo/visual */}
              <div className="bg-gradient-to-br from-green-500 via-lime-500 to-emerald-500 rounded-3xl p-12 text-center shadow-2xl">
                <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">A4 Services Limited</h3>
                <p className="text-green-100">Registered Audit & Accounting Firm</p>
                <p className="text-green-200 text-sm mt-2">Malta Registration: AB/2/22/01</p>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-gray-600">Professional Integrity</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-gray-600">Technology Support</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-gray-600">Compliance Focused</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OurIdentity;