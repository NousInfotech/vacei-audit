'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AuditFirmsPricingProps {
  title?: string;
  subtitle?: string;
  description?: string;
  tiers?: Array<{
    id: number;
    name: string;
    description: string;
    price: string;
    priceNote: string;
    features: string[];
    popular: boolean;
  }>;
  additionalInfo?: {
    title: string;
    description: string;
    features: Array<{ title: string; description: string; }>;
  };
}

const AuditFirmsPricing = ({ 
  title = "How We License to Audit Firms",
  subtitle = "We offer a one-time implementation fee + optional maintenance and support. No long-term locked subscriptions — you choose optional ongoing support.",
  description = "Final pricing depends on your scale, features, and complexity.",
  tiers = [
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
      popular: false
    }
  ],
  additionalInfo = {
    title: "Optional Maintenance & Support",
    description: "Choose ongoing support for updates, bug fixes, and enhancements. No long-term commitments — you control when and how you want support.",
    features: [
      { title: "Flexible", description: "Add or remove support as needed" },
      { title: "Transparent", description: "Clear pricing with no hidden fees" },
      { title: "Scalable", description: "Grows with your practice" }
    ]
  }
}: AuditFirmsPricingProps) => {
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

  // Dynamic color mapping for tiers
  const getTierColors = (index: number) => {
    const colors = [
      { color: "from-blue-500 to-cyan-500", bgColor: "from-blue-50/50 to-cyan-50/30", borderColor: "border-blue-200/50" },
      { color: "from-green-500 to-emerald-500", bgColor: "from-green-50/50 to-emerald-50/30", borderColor: "border-green-200/50" },
      { color: "from-purple-500 to-pink-500", bgColor: "from-purple-50/50 to-pink-50/30", borderColor: "border-purple-200/50" }
    ];
    return colors[index] || colors[0];
  };

  const pricingTiers = tiers.map((tier, index) => ({
    ...tier,
    ...getTierColors(index)
  }));

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Fallback solid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={sectionRef}>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-green-100 rounded-full border border-green-200 mb-6">
            <span className="text-green-700 text-xs lg:text-sm font-medium tracking-wide uppercase">Pricing</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
            {title}
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            {subtitle}
          </p>
          
          <div className="inline-block px-6 py-3 bg-green-50 rounded-2xl border border-green-200">
            <p className="text-lg text-gray-700 font-medium">
              <span className="text-green-600 font-semibold">{description}</span>
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
              <div className={`relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full ${
                tier.popular ? 'ring-2 ring-green-500 scale-105' : ''
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
                  <button 
                    onClick={() => {
                      if (tier.id === 3) {
                        window.location.href = '/contact';
                      } else {
                        window.location.href = '/wizard-flow';
                      }
                    }}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${tier.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
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
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{additionalInfo.title}</h3>
            <p className="text-lg text-gray-700 mb-6">
              {additionalInfo.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {additionalInfo.features.map((feature, index) => (
                <div key={index} className="p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-green-600 font-semibold mb-2">{feature.title}</div>
                  <div className="text-gray-600 text-sm">{feature.description}</div>
              </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 lg:mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-8 py-4 bg-green-50 rounded-2xl border border-green-200">
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