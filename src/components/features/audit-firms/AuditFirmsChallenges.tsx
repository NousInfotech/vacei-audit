'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AuditFirmsChallengesProps {
  title?: string;
  points?: string[];
  transition?: string;
}

const AuditFirmsChallenges = ({ 
  title = "What You're Facing — We Understand",
  points = [
    "You manage many clients with varying audit requirements and deadlines",
    "You lose time on repetitive audit tasks, document collection, and working paper preparation",
    "Clients want more transparency, real-time updates, and digital audit delivery",
    "Tools you use are fragmented — accounting, audit software, client portals, communications",
    "Scaling means more hires, more training, more operational overhead"
  ],
  transition = "You deserve tools that make your firm more efficient, modern, and profitable."
}: AuditFirmsChallengesProps) => {
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

  const challenges = points.map((point, index) => ({
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    title: `Challenge ${index + 1}`,
    description: point
  }));

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Fallback solid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={sectionRef}>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-green-100 rounded-full border border-green-200 mb-6">
            <span className="text-green-700 text-xs lg:text-sm font-medium tracking-wide uppercase">Pain Points</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
            {title}
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            {transition}
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${index * 100}ms`}}
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  {challenge.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
                <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-green-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Transition */}
        <div className={`mt-12 lg:mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-8 py-4 bg-green-50 rounded-2xl border border-green-200">
            <p className="text-lg text-gray-700 font-medium">
              These challenges are real, but they don&apos;t have to define your practice.{' '}
              <span className="text-green-600 font-semibold">Vacei transforms these pain points into competitive advantages.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditFirmsChallenges;