'use client';

import React, { useState, useEffect, useRef } from 'react';

const OurStory = () => {
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
    <div className="relative bg-white overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-300/20 to-lime-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-300/20 to-green-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-300/20 to-green-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-green-100/60 via-lime-100/70 to-emerald-100/60 backdrop-blur-md rounded-full border border-green-200/60 shadow-xl mb-6">
            <span className="text-green-700 text-xs lg:text-sm font-medium tracking-wide uppercase">Our Story</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
            Foundation & <span className="bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">Innovation</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-lime-500 to-emerald-500 rounded-full shadow-lg"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            
            {/* Item 1 */}
            <div className={`flex items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50">
                  <div className="text-sm text-green-600 font-semibold mb-2">Heritage</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">A4 Services Foundation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A4 Services Limited has a heritage in Malta as an accounting & auditing firm with strong local presence and regulatory compliance.
                  </p>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="w-1/2 pl-8">
                {/* Placeholder for heritage visual */}
                <div className="bg-gradient-to-br from-green-500 to-lime-500 rounded-2xl p-8 text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg">Malta Heritage</h4>
                  <p className="text-green-100 text-sm">Established Presence</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className={`flex items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="w-1/2 pr-8 text-right">
                {/* Placeholder for problem visual */}
                <div className="bg-gradient-to-br from-lime-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg">Recognition</h4>
                  <p className="text-lime-100 text-sm">Industry Challenges</p>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-lime-500 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="w-1/2 pl-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="text-sm text-lime-600 font-semibold mb-2">Recognition</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Problem Identification</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We recognized that many firms and businesses suffer from fragmented tools, excessive manual processing, and weak integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className={`flex items-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="text-sm text-emerald-600 font-semibold mb-2">Innovation</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Vacei Creation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    That led to the creation of Vacei — a platform + service model that modernizes how accounting and audits are done.
                  </p>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="w-1/2 pl-8">
                {/* Placeholder for innovation visual */}
                <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl p-8 text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg">Vacei Platform</h4>
                  <p className="text-emerald-100 text-sm">Modern Solution</p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className={`flex items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="w-1/2 pr-8 text-right">
                {/* Placeholder for recognition visual */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg">Recognition</h4>
                  <p className="text-green-100 text-sm">Industry Award</p>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="w-1/2 pl-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="text-sm text-green-600 font-semibold mb-2">Achievement</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Recognition</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recently, our innovation in audit software was called a &ldquo;game-changing solution&rdquo; for professional auditors in Malta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 max-w-4xl mx-auto">
            <blockquote className="text-xl sm:text-2xl text-gray-700 font-medium italic mb-4">
              &ldquo;Technology should augment professionals, not replace them.&rdquo;
            </blockquote>
            <p className="text-gray-500">— Our Core Principle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;