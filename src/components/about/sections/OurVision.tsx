'use client';

import React, { useState, useEffect, useRef } from 'react';

const OurVision = () => {
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

  const visionItems = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Expansion",
      description: "Expansion into new jurisdictions and markets worldwide",
      color: "from-green-500 to-green-600"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Advanced AI & Automation",
      description: "Stronger AI / automation features for enhanced efficiency",
      color: "from-lime-500 to-lime-600"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Partner Networks",
      description: "Partner networks & white-label adoption across industries",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Continuous Innovation",
      description: "Continuous innovation while preserving audit trust and integrity",
      color: "from-green-500 to-lime-500"
    }
  ];

  return (
    <div className="relative bg-black overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/10 to-lime-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-500/10 to-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30 mb-6">
            <span className="text-green-400 text-xs lg:text-sm font-medium tracking-wide uppercase">Our Vision</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 antialiased tracking-tight">
            Our Future & <span className="text-green-400">Vision</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We envision Vacei becoming a global platform for accounting and audit practitioners. 
            Over time, we expect to revolutionize the industry while maintaining our core values.
          </p>
        </div>

        {/* Vision Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visionItems.map((item, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-700/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center shadow-lg mb-6`}>
                  {item.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
                
                {/* Progress indicator */}
                <div className="mt-6">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-1000 delay-${(index + 1) * 200}ms ${isVisible ? 'w-full' : 'w-0'}`}
                    ></div>
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-xl`}></div>
                <div className={`absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Timeline */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">The Road Ahead</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our journey is just beginning. We're committed to continuous innovation while preserving 
                the trust and integrity that define professional accounting and auditing.
              </p>
            </div>
            
            {/* Timeline Visual */}
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white">Today</h4>
                  <p className="text-gray-300 text-sm">Malta Operations</p>
                </div>
                
                <div className="flex-1 h-1 bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 mx-4"></div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white">2025</h4>
                  <p className="text-gray-300 text-sm">EU Expansion</p>
                </div>
                
                <div className="flex-1 h-1 bg-gradient-to-r from-lime-500 via-emerald-500 to-green-500 mx-4"></div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white">2030</h4>
                  <p className="text-gray-300 text-sm">Global Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 max-w-4xl mx-auto">
            <blockquote className="text-xl sm:text-2xl text-gray-700 font-medium italic mb-4">
              "The future of accounting and auditing is not just about technology — it's about technology that serves humanity."
            </blockquote>
            <p className="text-gray-500">— Our Vision Statement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;