'use client';

import React, { useState, useEffect, useRef } from 'react';

const AuditFirmsWorkflow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set visible immediately to prevent blank content
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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

  const steps = [
    {
      number: "01",
      title: "Onboard & Configure",
      description: "We help you configure your branded instance, upload templates, connect to client accounting systems, define user roles.",
      microcopy: "We set your environment & brand up.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        "Branded instance setup",
        "Template configuration",
        "System integrations",
        "User role definition",
        "Initial data migration"
      ]
    },
    {
      number: "02",
      title: "Execute & Automate",
      description: "You plan, set procedures, link tasks, run audit workflows. Automation helps with document linking, flagging, test suggestions.",
      microcopy: "Core work is streamlined — your team focuses on judgments.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        "Audit planning & procedures",
        "Task linking & workflows",
        "Document automation",
        "Exception flagging",
        "Test suggestions"
      ]
    },
    {
      number: "03",
      title: "Review, Deliver & Scale",
      description: "Review paths, sign-offs, client deliverables, maintain audit history, reuse templates, expand to new clients.",
      microcopy: "Deliver audits under your brand. Add more clients easily.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Review & approval workflows",
        "Client deliverables",
        "Audit history maintenance",
        "Template reuse",
        "Client expansion"
      ]
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50/30 via-white to-green-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={sectionRef}>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-green-100/50 backdrop-blur-sm rounded-full border border-green-200/50 mb-6">
            <span className="text-green-700 text-xs lg:text-sm font-medium tracking-wide uppercase">Workflow</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
            Deploying Vacei in Your Audit Practice —{' '}
            <span className="text-green-600 relative">
              3 Steps
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            A streamlined process designed to get your audit practice up and running quickly while maintaining complete control.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
            <div className={`absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full transition-all duration-3000 ease-in-out ${
              isVisible ? 'h-full' : 'h-0'
            }`}></div>
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 transition-all duration-1000 opacity-100 translate-y-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{transitionDelay: `${index * 300}ms`}}
              >
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="relative bg-gradient-to-br from-white/80 via-green-50/30 to-emerald-50/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                    {/* Step Header */}
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                        {step.icon}
                      </div>
                      <div>
                        <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30 mb-2">
                          <span className="text-green-600 font-semibold text-sm">Step {step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.microcopy}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Floating accent elements */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-green-500/20 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 hidden lg:flex">
                  <div className="relative w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full border-4 border-white shadow-lg">
                    <div className="absolute inset-1 bg-green-400 rounded-full opacity-50"></div>
                  </div>
                  <div className="absolute w-8 h-8 bg-green-500/30 rounded-full animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 lg:mt-16 text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-600/10 to-emerald-600/10 backdrop-blur-sm rounded-2xl border border-green-200/50">
            <p className="text-lg text-gray-700 font-medium">
              Ready to start your Vacei journey?{' '}
              <span className="text-green-600 font-semibold">Contact us</span> to begin the onboarding process and transform your audit practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditFirmsWorkflow;