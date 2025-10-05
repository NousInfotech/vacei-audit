'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AuditFirmsIntroductionProps {
  title?: string;
  content?: string;
}

const AuditFirmsIntroduction = ({ 
  title = "Built Specifically for Today's Audit Firms",
  content = "Tired of inefficient audit processes, scattered working papers, and juggling multiple systems? Vacei is the all-in-one white-label solution built for firms that want to scale, automate, and strengthen their brand."
}: AuditFirmsIntroductionProps) => {
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
    <div className="relative bg-transparent overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-green-500/20 to-lime-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='4' height='4' rx='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={sectionRef}>
        
        {/* Section Content */}
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-white text-xs lg:text-sm font-medium tracking-wide uppercase">Who This Is For</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 antialiased tracking-tight">
              {title}
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {content}
            </p>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Efficiency */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative bg-gradient-to-br from-white/10 via-green-50/20 to-emerald-50/30 rounded-3xl p-8 shadow-lg border border-white/20 backdrop-blur-sm h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Efficiency</h3>
                <p className="text-gray-300 leading-relaxed">
                  Streamline your audit processes with automation and intelligent workflows that reduce manual work and accelerate delivery.
                </p>
              </div>
            </div>

            {/* Consistency */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative bg-gradient-to-br from-white/10 via-blue-50/20 to-cyan-50/30 rounded-3xl p-8 shadow-lg border border-white/20 backdrop-blur-sm h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Consistency</h3>
                <p className="text-gray-300 leading-relaxed">
                  Standardize your audit methodology across all engagements with built-in templates and quality controls.
                </p>
              </div>
            </div>

            {/* Client Experience */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative bg-gradient-to-br from-white/10 via-purple-50/20 to-pink-50/30 rounded-3xl p-8 shadow-lg border border-white/20 backdrop-blur-sm h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Client Experience</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deliver exceptional client service with branded portals, real-time collaboration, and transparent progress tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className={`mt-12 lg:mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-lg text-gray-300 font-medium">
                Ready to modernize your audit practice?{' '}
                <span className="text-green-400 font-semibold">Discover how Vacei can transform your workflow</span> while maintaining complete control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditFirmsIntroduction;