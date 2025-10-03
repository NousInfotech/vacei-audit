'use client';

import React, { useState, useEffect, useRef } from 'react';

const PricingSection = () => {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTimelineVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the timeline is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully visible
      }
    );

    const currentTimelineRef = timelineRef.current;
    if (currentTimelineRef) {
      observer.observe(currentTimelineRef);
    }

    return () => {
      if (currentTimelineRef) {
        observer.unobserve(currentTimelineRef);
      }
    };
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Background Elements - Matching ValuePropositionSection */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-100/20 to-lime-100/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-100/15 to-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-100/20 to-green-100/15 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-green-100/50 backdrop-blur-sm rounded-full border border-green-200/50 mb-6">
            <span className="text-green-700 text-sm font-medium tracking-wide uppercase">Simple Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
            Pricing & <span className="text-green-600">Engagement</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            One-time implementation + optional maintenance basis
          </p>
        </div>

        {/* Pricing Timeline */}
        <div className="relative mb-16" ref={timelineRef}>
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full overflow-hidden">
            {/* Background gray line */}
            <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
            {/* Animated green fill */}
            <div className={`absolute top-0 left-0 w-full h-0 bg-green-600 rounded-full transition-all duration-3000 ease-in-out ${
              isTimelineVisible ? 'h-full' : 'h-0'
            }`}></div>
          </div>
          
          {/* Implementation Phase */}
          <div className="relative flex items-center justify-between mb-12">
            <div className="flex-1 pr-8">
              <div className="relative bg-gradient-to-br from-green-50/40 via-lime-50/30 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-green-100/50 backdrop-blur-sm">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-lime-100/10 to-emerald-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Window Controls (matching ValuePropositionSection) */}
                <div className="relative flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                </div>
                
                <div className="relative flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Implementation</h3>
                    <p className="text-gray-600 text-lg">One-time setup & configuration</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Complete setup and configuration of your accounting system
                </p>
                
                <div className="space-y-4">
                  {["Setup & configuration", "Data migration", "System integrations", "Custom branding", "Team training"].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-200/30 to-lime-200/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-lime-200/20 to-emerald-200/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
            
            {/* Enhanced Timeline Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute w-12 h-12 bg-green-600/20 rounded-full animate-pulse"></div>
              {/* Main node */}
              <div className="relative w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg z-10">
                {/* Inner highlight */}
                <div className="absolute inset-1 bg-green-400 rounded-full opacity-50"></div>
              </div>
              {/* Pulse animation */}
              <div className="absolute w-6 h-6 bg-green-600/30 rounded-full animate-ping"></div>
            </div>
            
            <div className="flex-1 pl-8">
              <div className="text-left">
                <div className="inline-block px-4 py-2 bg-green-600/20 rounded-full border border-green-600/30 backdrop-blur-sm">
                  <span className="text-green-600 font-semibold">One-Time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Phase */}
          <div className="relative flex items-center justify-between">
            <div className="flex-1 pr-8">
              <div className="text-right">
                <div className="inline-block px-4 py-2 bg-green-600/20 rounded-full border border-green-600/30">
                  <span className="text-green-600 font-semibold">Optional</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Timeline Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute w-12 h-12 bg-green-600/20 rounded-full animate-pulse"></div>
              {/* Main node */}
              <div className="relative w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg z-10">
                {/* Inner highlight */}
                <div className="absolute inset-1 bg-green-400 rounded-full opacity-50"></div>
              </div>
              {/* Pulse animation */}
              <div className="absolute w-6 h-6 bg-green-600/30 rounded-full animate-ping"></div>
            </div>
            
            <div className="flex-1 pl-8">
              <div className="relative bg-gradient-to-br from-green-50/40 via-lime-50/30 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-green-100/50 backdrop-blur-sm">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-lime-100/10 to-emerald-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Window Controls (matching ValuePropositionSection) */}
                <div className="relative flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                </div>
                
                <div className="relative flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Maintenance & Support</h3>
                    <div className="inline-block px-4 py-2 bg-green-600/20 rounded-full border border-green-600/30">
                      <span className="text-green-600 font-semibold text-sm">Optional</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Ongoing assistance and continuous system enhancements
                </p>
                
                <div className="space-y-4">
                  {["System upgrades", "Feature enhancements", "Ongoing support", "Performance monitoring", "Technical assistance"].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-200/30 to-lime-200/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-lime-200/20 to-emerald-200/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing CTA Text */}
        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            To see exact pricing for your scope, <span className="text-green-600 font-semibold">Book a Demo</span> and receive a custom proposal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
