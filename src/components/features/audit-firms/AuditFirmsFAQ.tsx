'use client';

import React, { useState, useEffect, useRef } from 'react';

const AuditFirmsFAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      question: "Can clients see my branding only?",
      answer: "Yes, absolutely. Vacei is 100% white-labeled. Your clients will only see your firm's logo, colors, domain, and branding throughout their entire experience. They'll never know Vacei exists behind the scenes."
    },
    {
      question: "What audit standards do you support?",
      answer: "We support major international audit standards including ISA (International Standards on Auditing), GAAS (Generally Accepted Auditing Standards), and local standards. Our platform is designed to be flexible and can be configured to meet specific jurisdictional requirements."
    },
    {
      question: "Can I add accounting modules later?",
      answer: "Yes, our modular architecture allows you to start with audit-focused features and add accounting modules as your practice grows. You can seamlessly integrate accounting capabilities without disrupting your existing audit workflows."
    },
    {
      question: "How is maintenance handled?",
      answer: "Maintenance is completely optional and flexible. You can choose to handle updates yourself or opt for our maintenance service. When you do choose maintenance, we provide regular updates, bug fixes, security patches, and new features without disrupting your operations."
    },
    {
      question: "How secure is audit data?",
      answer: "Security is our top priority. We use enterprise-grade encryption (AES-256), secure data centers, regular security audits, role-based access controls, and comprehensive audit trails. All data is backed up regularly and we maintain SOC 2 compliance."
    },
    {
      question: "How long does onboarding take?",
      answer: "Typical onboarding takes 2-4 weeks depending on your requirements. This includes branded portal setup, template configuration, system integrations, user training, and initial data migration. We provide dedicated support throughout the process."
    },
    {
      question: "Can I export or migrate data later?",
      answer: "Absolutely. You maintain full control of your data. We provide comprehensive export capabilities in standard formats (CSV, PDF, Excel) and can assist with data migration if you ever need to move to another system. Your data belongs to you."
    },
    {
      question: "What integrations are available?",
      answer: "We offer integrations with major accounting systems (Xero, QuickBooks, Sage), ERPs, banking systems, and document management platforms. We also provide APIs for custom integrations. Our integration library continues to grow based on client needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-transparent overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/5 to-emerald-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-green-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='4' height='4' rx='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content - Increased Width */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={sectionRef}>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-white text-xs lg:text-sm font-medium tracking-wide uppercase">FAQ</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 antialiased tracking-tight">
            Frequently Asked{' '}
            <span className="text-green-400 relative">
              Questions
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Common questions from audit firms considering Vacei. Can&apos;t find your answer? Contact us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{transitionDelay: `${index * 100}ms`}}
            >
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-green-400/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-8 group-hover:text-green-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-white/20">
                      <p className="text-gray-300 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 lg:mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Our audit experts are here to help. Schedule a consultation to discuss your specific needs and get personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditFirmsFAQ;