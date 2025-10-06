'use client';

import React, { useState, useEffect, useRef } from 'react';

const OurMission = () => {
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
    <div className="relative bg-black overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/10 to-lime-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30 mb-6">
            <span className="text-green-400 text-xs lg:text-sm font-medium tracking-wide uppercase">Our Mission</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 antialiased tracking-tight">
            Making Accounting <span className="text-green-400">Effortless</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We believe that accounting and audit shouldn't be a burden. Our mission is to make bookkeeping, financial statements, and audits effortless, transparent, and intelligent.
          </p>
        </div>

        {/* Mission Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Eliminate Manual Work",
              description: "Automate tedious processes and reduce human error"
            },
            {
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Raise Accuracy",
              description: "Ensure compliance and precision in every task"
            },
            {
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: "Deep Insights",
              description: "Provide meaningful analysis, not just reports"
            },
            {
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "Universal Support",
              description: "Help businesses, teams, and firms alike"
            }
          ].map((goal, index) => (
            <div 
              key={index}
              className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-500 transform hover:-translate-y-2 h-full shadow-2xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <span className="text-3xl">{goal.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{goal.title}</h3>
                <p className="text-gray-300 leading-relaxed">{goal.description}</p>
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-green-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-black/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 max-w-4xl mx-auto shadow-2xl">
            <blockquote className="text-xl sm:text-2xl text-gray-200 font-medium italic mb-4">
              "Technology should augment professionals, not replace them."
            </blockquote>
            <p className="text-gray-400">— Our Core Principle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;