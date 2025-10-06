'use client';

import React, { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
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

  const reasons = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Operated and Certified",
      description: "Through A4 Services Limited — giving you legal and professional assurance",
      color: "from-green-500 to-green-600"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: "Service + Software Blend",
      description: "You get both execution and platform control in one solution",
      color: "from-lime-500 to-lime-600"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rapid Technology Adoption",
      description: "Ensures you stay ahead with the latest innovations",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Flexible Support",
      description: "Whether you have an in-house team or none, we adapt to support you",
      color: "from-green-500 to-lime-500"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Transparent Pricing",
      description: "No hidden costs, optional maintenance, clear value proposition",
      color: "from-emerald-500 to-green-500"
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
            <span className="text-green-700 text-xs lg:text-sm font-medium tracking-wide uppercase">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
            Your <span className="bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">Competitive Advantage</span>
          </h2>
        </div>

        {/* Fresh Visual Design - Improved Hexagonal Style */}
        <div className="relative mb-16">
          {/* Central Hub - Responsive */}
          <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-green-500 via-lime-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute -inset-3 sm:-inset-4 lg:-inset-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -inset-6 sm:-inset-8 lg:-inset-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute -inset-9 sm:-inset-12 lg:-inset-18 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>

          {/* Responsive Grid Layout */}
          <div className="relative max-w-7xl mx-auto">
            {/* Mobile/Tablet: Single Column Stack */}
            <div className="block lg:hidden space-y-8">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{transitionDelay: `${index * 200}ms`}}
                >
                  <div className="relative group">
                    <div className="w-full max-w-sm mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                      {/* Enhanced Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 via-lime-100/30 to-emerald-100/40 rounded-3xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                            {reason.icon}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center sm:text-left">{reason.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center sm:text-left">{reason.description}</p>
                      </div>
                      
                      {/* Enhanced Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-500/15 to-lime-500/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-lime-500/10 to-emerald-500/15 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Hexagonal Layout */}
            <div className="hidden lg:block">
              {/* Row 1 - Single Large Card */}
              <div className="flex justify-center mb-12">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '0ms'}}>
                  <div className="relative group">
                    <div className="w-96 h-56 bg-white rounded-3xl p-10 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                      {/* Enhanced Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 via-lime-100/30 to-emerald-100/40 rounded-3xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-6 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${reasons[0].color} rounded-2xl flex items-center justify-center shadow-xl`}>
                            {reasons[0].icon}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{reasons[0].title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">{reasons[0].description}</p>
                      </div>
                      
                      {/* Enhanced Floating Elements */}
                      <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-green-500/15 to-lime-500/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-br from-lime-500/10 to-emerald-500/15 rounded-full blur-xl"></div>
                      <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-full blur-xl"></div>
                    </div>
                    
                    {/* Connection Arrows to Row 2 */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 - Two Enhanced Cards */}
              <div className="flex justify-center gap-12 mb-12">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
                  <div className="relative group">
                    <div className="w-80 h-48 bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-lime-100/40 via-emerald-100/30 to-green-100/40 rounded-3xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${reasons[1].color} rounded-xl flex items-center justify-center shadow-lg`}>
                            {reasons[1].icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{reasons[1].title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{reasons[1].description}</p>
                      </div>
                      
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-lime-500/15 to-emerald-500/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-green-500/15 rounded-full blur-xl"></div>
                    </div>
                    
                    {/* Connection Arrow to Row 3 */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <svg className="w-6 h-6 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
                  <div className="relative group">
                    <div className="w-80 h-48 bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-green-100/30 to-lime-100/40 rounded-3xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${reasons[2].color} rounded-xl flex items-center justify-center shadow-lg`}>
                            {reasons[2].icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{reasons[2].title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{reasons[2].description}</p>
                      </div>
                      
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-emerald-500/15 to-green-500/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-green-500/10 to-lime-500/15 rounded-full blur-xl"></div>
                    </div>
                    
                    {/* Connection Arrow to Row 3 */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 - Two Enhanced Cards */}
              <div className="flex justify-center gap-12">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '900ms'}}>
                  <div className="relative group">
                    <div className="w-80 h-48 bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 via-lime-100/30 to-emerald-100/40 rounded-3xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${reasons[3].color} rounded-xl flex items-center justify-center shadow-lg`}>
                            {reasons[3].icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{reasons[3].title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{reasons[3].description}</p>
                      </div>
                      
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500/15 to-lime-500/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-lime-500/10 to-emerald-500/15 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>
                
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1200ms'}}>
                  <div className="relative group">
                    <div className="w-80 h-48 bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-green-100/30 to-lime-100/40 rounded-3xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${reasons[4].color} rounded-xl flex items-center justify-center shadow-lg`}>
                            {reasons[4].icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{reasons[4].title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{reasons[4].description}</p>
                      </div>
                      
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-emerald-500/15 to-green-500/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-green-500/10 to-lime-500/15 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 rounded-3xl p-8 border border-green-200 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Difference?</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Join the businesses and firms that have already transformed their financial operations with Vacei.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-lime-500 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Schedule a Demo
              </button>
              <button className="bg-transparent border-2 border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;