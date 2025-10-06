'use client';

import React, { useState, useEffect, useRef } from 'react';

const LegalAccreditation = () => {
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
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-300/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-300/20 to-green-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-green-100/60 via-lime-100/70 to-emerald-100/60 backdrop-blur-md rounded-full border border-green-200/60 shadow-xl mb-6">
            <span className="text-green-700 text-xs lg:text-sm font-medium tracking-wide uppercase">Legal & Accreditation</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
            Trust Through <span className="bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">Compliance</span>
          </h2>
        </div>

        {/* Main Accreditation Card */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">A4 Services Limited</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Listed on the Malta Register of Audit Firms & Principals under registration 
                    <span className="font-semibold text-green-600"> AB/2/22/01</span>
                  </p>
                  
                  <div className="bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We adhere to all relevant audit, accounting, data privacy, and financial service regulations 
                      ensuring your operations meet the highest standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                {/* Accreditation Badge */}
                <div className="bg-gradient-to-br from-green-500 to-lime-500 rounded-3xl p-8 text-center shadow-2xl">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Malta Accountancy Board</h4>
                  <p className="text-green-100 mb-4">Registered Audit Firm</p>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-white font-mono text-lg">AB/2/22/01</p>
                    <p className="text-green-200 text-sm">Registration Number</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-lime-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              ),
              title: "Audit Standards",
              description: "Compliance with international audit standards and local regulations",
              color: "from-green-500 to-green-600"
            },
            {
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: "Data Privacy",
              description: "GDPR compliance and comprehensive data protection measures",
              color: "from-lime-500 to-lime-600"
            },
            {
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Financial Services",
              description: "Adherence to financial service regulations and reporting requirements",
              color: "from-emerald-500 to-emerald-600"
            }
          ].map((standard, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-2xl flex items-center justify-center shadow-lg mb-6`}>
                {standard.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{standard.title}</h3>
              <p className="text-gray-700 leading-relaxed">{standard.description}</p>
              
              {/* Floating accent elements */}
              <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${standard.color} opacity-10 rounded-full blur-xl`}></div>
              <div className={`absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br ${standard.color} opacity-5 rounded-full blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Statement */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 rounded-3xl p-8 border border-green-200 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Trust is Our Foundation</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Every decision we make, every solution we build, and every relationship we nurture 
              is grounded in our commitment to regulatory compliance and professional integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-lime-500 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                View Certifications
              </button>
              <button className="bg-transparent border-2 border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all duration-300">
                Contact Compliance Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAccreditation;