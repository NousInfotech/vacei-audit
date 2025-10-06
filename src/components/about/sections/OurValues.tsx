'use client';

import React, { useState, useEffect, useRef } from 'react';

const OurValues = () => {
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

  const values = [
    {
      number: "01",
      title: "Professional Integrity & Independence",
      description: "Our audit services are delivered under A4 Services, abiding by regulatory standards and audit independence.",
      icon: "⚖️",
      color: "from-green-500 to-green-600"
    },
    {
      number: "02", 
      title: "Technology-First Approach",
      description: "We always utilize the latest technologies — OCR, AI/ML, open banking, live integrations — to simplify workflows and reduce error.",
      icon: "🚀",
      color: "from-lime-500 to-lime-600"
    },
    {
      number: "03",
      title: "Client-First Mindset", 
      description: "Every client is a partner. We tailor solutions, listen to feedback, and evolve alongside your business.",
      icon: "🤝",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      number: "04",
      title: "Elegance & Simplicity",
      description: "Complex problems deserve elegant solutions. We strive for clarity in UX, logic, and outcomes.",
      icon: "✨",
      color: "from-green-500 to-lime-500"
    },
    {
      number: "05",
      title: "Security & Compliance",
      description: "Data security, privacy, and compliance are non-negotiable. We apply industry standards for encryption, backups, access control, and legal safeguards.",
      icon: "🔒",
      color: "from-emerald-500 to-green-500"
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
            <span className="text-green-400 text-xs lg:text-sm font-medium tracking-wide uppercase">Our Values</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 antialiased tracking-tight">
            What We Value & <span className="text-green-400">How We Work</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="space-y-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                
                {/* Left Side - Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-6">
                    {/* Number */}
                    <div className="text-6xl font-bold text-gray-700/30">
                      {value.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                      <span className="text-3xl">{value.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{value.description}</p>
                  
                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${value.color} h-2 rounded-full transition-all duration-1000 delay-${(index + 1) * 200}ms ${isVisible ? 'w-full' : 'w-0'}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-black/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Living Our Values</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
                These values guide every decision we make, every solution we build, and every relationship we nurture.
                They&apos;re not just words on a page — they&apos;re the foundation of how we operate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;