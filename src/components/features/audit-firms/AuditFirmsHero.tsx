'use client';

import React, { useState, useEffect, useRef } from 'react';

const AuditFirmsHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

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

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/10 to-lime-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={heroRef}>
        
        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Trust Badge */}
            <div className="inline-block px-4 py-2 bg-green-100/50 backdrop-blur-sm rounded-full border border-green-200/50 mb-6">
              <span className="text-green-700 text-xs font-medium tracking-wide uppercase">Modern Audit Technology</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 antialiased tracking-tight leading-tight">
              Modern Audit Technology —{' '}
              <span className="text-green-600 relative">
                Under Your Brand
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-lime-500 rounded-full opacity-60"></div>
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
              Vacei gives audit firms a full-feature white-label audit portal, with automation, client collaboration, working papers, and review workflows — all branded to you.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-lime-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <span className="relative z-10">Schedule a Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-lime-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-lime-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50/50 transition-all duration-300 transform hover:-translate-y-1">
                See Features
              </button>
            </div>
            
            {/* Trust Microcopy */}
            <div className="text-sm text-gray-600 leading-relaxed">
              <p>
                <span className="font-semibold text-green-700">Operated by A4 Services Limited</span> (licensed audit & accounting firm) • 
                <span className="text-green-600 font-medium"> SSL encrypted</span> • 
                <span className="text-green-600 font-medium"> GDPR compliant</span>
              </p>
            </div>
          </div>
          
          {/* Right Column - Visual Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                </div>
                
                {/* Portal Interface Mockup */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-lime-500/20 rounded-xl border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-lime-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Audit Portal</h3>
                        <p className="text-green-400 text-sm">Your Brand • Secure</p>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Work Papers Section */}
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <h4 className="text-white font-medium">Working Papers</h4>
                    </div>
                    <div className="space-y-2">
                      {['Financial Statements', 'Audit Evidence', 'Risk Assessment', 'Compliance Check'].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 bg-gray-700/30 rounded-lg">
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                          <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Client Collaboration */}
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <h4 className="text-white font-medium">Client Collaboration</h4>
                    </div>
                    <div className="space-y-2">
                      {['Document Upload', 'Review Requests', 'Communication Hub', 'Progress Tracking'].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 bg-gray-700/30 rounded-lg">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                          <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500/20 to-lime-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-lime-500/10 to-emerald-500/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-500 to-lime-500 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditFirmsHero;