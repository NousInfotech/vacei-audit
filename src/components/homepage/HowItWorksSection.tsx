'use client';

import React, { useState, useEffect, useRef } from 'react';

const HowItWorksSection = () => {
  // const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const steps = [
    {
      number: "01",
      title: "Connect & Onboard",
      description: "We link systems, import data, configure branding & users",
      business: "You connect your accounting / ERP, upload historical data",
      auditor: "Your firm sets up your branded instance, defines client entities & mappings",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      number: "02", 
      title: "Automate & Review",
      description: "Automated extraction, classification, reconciliation + human review",
      business: "Documents (invoices, receipts, statements) are processed automatically; you review exceptions",
      auditor: "Automation runs across your clients; auditors review flagged items, perform checks",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Deliver & Scale", 
      description: "Dashboards, reports, audit outputs are issued; you expand features / users",
      business: "You receive financial statements, analytics, optional audit outputs",
      auditor: "You deliver working papers, client portals, review flows, and scale capacity",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    // Set visible immediately to prevent blank content
    setIsVisible(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
      setScrollDirection(direction);
      lastScrollY.current = currentScrollY;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // When section goes out of view, reset based on scroll direction
            if (scrollDirection === 'up') {
              setIsVisible(false);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [scrollDirection]);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/10 to-lime-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={sectionRef}>
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30 mb-4 lg:mb-6">
            <span className="text-green-400 text-xs lg:text-sm font-medium tracking-wide uppercase">Process</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 antialiased tracking-tight">
            How It <span className="text-green-400">Works</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            <span className="text-gray-400">Tailored to Your Role</span>
          </p>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="hidden lg:block">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gray-700 rounded-full"></div>
            <div className={`absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-green-500 to-lime-500 rounded-full transition-all duration-3000 ease-in-out ${
              isVisible ? 'h-full' : 'h-0'
            }`}></div>
          </div>

          {/* Steps */}
          <div className="space-y-24">
          {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-1000 opacity-100 translate-y-0`} style={{transitionDelay: `${index * 200}ms`}}>
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-500 transform hover:-translate-y-2">
                    {/* Window Controls */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-sm"></div>
                      <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-sm"></div>
                      <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                    </div>

                    {/* Step Header */}
              <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        {step.icon}
                </div>
                <div>
                        <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30 mb-2">
                          <span className="text-green-400 font-semibold text-sm">Step {step.number}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 text-lg">{step.description}</p>
                </div>
              </div>

                    {/* Role Cards */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                      {/* Business Card */}
                      <div className="bg-gradient-to-br from-green-500/10 to-lime-500/5 rounded-2xl p-6 border border-green-500/20">
                  <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                          <h4 className="text-lg font-semibold text-white">For Businesses</h4>
                  </div>
                        <p className="text-gray-300 leading-relaxed text-sm">{step.business}</p>
                </div>

                      {/* Auditor Card */}
                      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl p-6 border border-blue-500/20">
                  <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                          <h4 className="text-lg font-semibold text-white">For Auditors</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">{step.auditor}</p>
                      </div>
                  </div>

                    {/* Floating accent elements */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500/20 to-lime-500/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-lime-500/10 to-emerald-500/20 rounded-full blur-xl"></div>
                </div>
              </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="relative w-8 h-8 bg-gradient-to-br from-green-500 to-lime-500 rounded-full border-4 border-gray-900 shadow-lg">
                    <div className="absolute inset-1 bg-green-400 rounded-full opacity-50"></div>
                  </div>
                  <div className="absolute w-8 h-8 bg-green-500/30 rounded-full animate-ping"></div>
                </div>
            </div>
          ))}
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className={`transition-all duration-1000 opacity-100 translate-y-0`} style={{transitionDelay: `${index * 200}ms`}}>
              <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-700/50">
                {/* Step Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-500 rounded-xl flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30 mb-1">
                      <span className="text-green-400 font-semibold text-xs">Step {step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
        </div>

                {/* Role Cards */}
                <div className="space-y-4">
                  {/* Business Card */}
                  <div className="bg-gradient-to-br from-green-500/10 to-lime-500/5 rounded-xl p-4 border border-green-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="text-base font-semibold text-white">For Businesses</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">{step.business}</p>
                  </div>

                  {/* Auditor Card */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-xl p-4 border border-blue-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-base font-semibold text-white">For Auditors</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">{step.auditor}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
