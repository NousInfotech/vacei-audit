'use client';

import React, { useState, useEffect, useRef } from 'react';

const AuditFirmsPricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [selectedTier, setSelectedTier] = useState(1);
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

  const pricingTiers = [
    {
      id: 1,
      name: "Audit Firm Starter",
      description: "Perfect for small to medium audit practices getting started",
      price: "€X,XXX",
      priceNote: "One-time implementation",
      features: [
        "Branded portal setup",
        "Basic audit modules (planning, working papers)",
        "Document request management",
        "Client collaboration portal",
        "Basic integrations",
        "Standard support",
        "Up to 10 concurrent clients"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50/50 to-cyan-50/30",
      borderColor: "border-blue-200/50",
      popular: false
    },
    {
      id: 2,
      name: "Audit Growth",
      description: "Ideal for growing practices with multiple clients and complex needs",
      price: "€Y,YYY",
      priceNote: "One-time implementation",
      features: [
        "Everything in Starter",
        "Advanced integrations",
        "Advanced workflows",
        "Volume client support",
        "Custom reporting",
        "Priority support",
        "Up to 50 concurrent clients",
        "API access",
        "Custom branding options"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50/50 to-emerald-50/30",
      borderColor: "border-green-200/50",
      popular: true
    },
    {
      id: 3,
      name: "Enterprise / Custom",
      description: "Tailored solutions for large practices with specific requirements",
      price: "Custom",
      priceNote: "Contact us for pricing",
      features: [
        "Everything in Growth",
        "Full accounting portal integration",
        "Advanced APIs",
        "Dedicated support",
        "Custom development",
        "Unlimited clients",
        "White-label mobile apps",
        "Advanced security features",
        "Custom compliance modules"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50/50 to-pink-50/30",
      borderColor: "border-purple-200/50",
      popular: false
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50/50 via-white to-green-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/5 to-emerald-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={sectionRef}>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-green-100/50 backdrop-blur-sm rounded-full border border-green-200/50 mb-6">
            <span className="text-green-700 text-xs lg:text-sm font-medium tracking-wide uppercase">Pricing</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
            How We{' '}
            <span className="text-green-600 relative">
              License to Audit Firms
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            We offer a one-time implementation fee + optional maintenance and support. No long-term locked subscriptions — you choose optional ongoing support.
          </p>
          
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm rounded-2xl border border-green-200/50">
            <p className="text-lg text-gray-700 font-medium">
              <span className="text-green-600 font-semibold">Final pricing</span> depends on your scale, features, and complexity.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.id}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <div className={`relative bg-gradient-to-br ${tier.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-lg border ${tier.borderColor} hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full ${
                tier.popular ? 'ring-2 ring-green-500/50 scale-105' : ''
              }`}>
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Tier Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{tier.price}</div>
                    <div className="text-sm text-gray-600">{tier.priceNote}</div>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="text-center">
                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${tier.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    {tier.id === 3 ? 'Contact Us' : 'Request Demo'}
                  </button>
                </div>
                
                {/* Floating accent elements */}
                <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${tier.color} opacity-10 rounded-full blur-xl`}></div>
                <div className={`absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br ${tier.color} opacity-5 rounded-full blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-50/80 to-blue-50/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Optional Maintenance & Support</h3>
            <p className="text-lg text-gray-700 mb-6">
              Choose ongoing support for updates, bug fixes, and enhancements. No long-term commitments — you control when and how you want support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white/50 rounded-xl">
                <div className="text-green-600 font-semibold mb-2">Flexible</div>
                <div className="text-gray-600 text-sm">Add or remove support as needed</div>
              </div>
              <div className="p-4 bg-white/50 rounded-xl">
                <div className="text-green-600 font-semibold mb-2">Transparent</div>
                <div className="text-gray-600 text-sm">Clear pricing with no hidden fees</div>
              </div>
              <div className="p-4 bg-white/50 rounded-xl">
                <div className="text-green-600 font-semibold mb-2">Scalable</div>
                <div className="text-gray-600 text-sm">Grows with your practice</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 lg:mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm rounded-2xl border border-green-200/50">
            <p className="text-lg text-gray-700 font-medium">
              Ready to get started?{' '}
              <span className="text-green-600 font-semibold">Request a demo</span> or{' '}
              <span className="text-green-600 font-semibold">get your audit proposal</span> today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditFirmsPricing;