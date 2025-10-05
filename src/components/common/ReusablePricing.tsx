'use client';

import React, { useState, useEffect, useRef } from 'react';

interface PricingTier {
  id: number;
  name: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  popular?: boolean;
}

interface ReusablePricingProps {
  title: string;
  subtitle: string;
  description?: string;
  tiers: PricingTier[];
  backgroundColor?: 'dark' | 'light';
  accentColor?: 'green' | 'blue' | 'purple';
  additionalInfo?: {
    title: string;
    description: string;
    features: Array<{ title: string; description: string }>;
  };
}

const ReusablePricing = ({
  title,
  subtitle,
  description,
  tiers,
  backgroundColor = 'light',
  accentColor = 'green',
  additionalInfo
}: ReusablePricingProps) => {
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

  const getBackgroundClasses = () => {
    if (backgroundColor === 'dark') {
      return 'bg-black';
    }
    return 'bg-gradient-to-br from-gray-50/50 via-white to-green-50/30';
  };

  const getAccentClasses = () => {
    switch (accentColor) {
      case 'blue':
        return {
          primary: 'from-blue-500 to-cyan-500',
          secondary: 'from-blue-600 to-cyan-600',
          text: 'text-blue-600',
          border: 'border-blue-200/50',
          bg: 'from-blue-50/50 to-cyan-50/30',
          badge: 'from-blue-500 to-cyan-500'
        };
      case 'purple':
        return {
          primary: 'from-purple-500 to-pink-500',
          secondary: 'from-purple-600 to-pink-600',
          text: 'text-purple-600',
          border: 'border-purple-200/50',
          bg: 'from-purple-50/50 to-pink-50/30',
          badge: 'from-purple-500 to-pink-500'
        };
      default:
        return {
          primary: 'from-green-500 to-emerald-500',
          secondary: 'from-green-600 to-emerald-600',
          text: 'text-green-600',
          border: 'border-green-200/50',
          bg: 'from-green-50/50 to-emerald-50/30',
          badge: 'from-green-500 to-emerald-500'
        };
    }
  };

  const accentClasses = getAccentClasses();
  const textColor = backgroundColor === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleColor = backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className={`relative ${getBackgroundClasses()} overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br ${accentClasses.primary}/5 to-cyan-500/3 rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-green-500/5 to-emerald-500/3 rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/3 rounded-full blur-3xl animate-pulse`} style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={sectionRef}>
        
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`inline-block px-4 py-2 lg:px-6 lg:py-3 ${backgroundColor === 'dark' ? 'bg-white/10 backdrop-blur-sm border border-white/20' : 'bg-green-100/50 backdrop-blur-sm border border-green-200/50'} rounded-full mb-6`}>
            <span className={`${backgroundColor === 'dark' ? 'text-white' : 'text-green-700'} text-xs lg:text-sm font-medium tracking-wide uppercase`}>Pricing</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-6 antialiased tracking-tight`}>
            {title}
          </h2>
          
          <p className={`text-lg sm:text-xl md:text-2xl ${subtitleColor} leading-relaxed max-w-4xl mx-auto mb-8`}>
            {subtitle}
          </p>
          
          {description && (
            <div className={`inline-block px-6 py-3 ${backgroundColor === 'dark' ? 'bg-white/5 backdrop-blur-sm border border-white/10' : 'bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm border border-green-200/50'} rounded-2xl`}>
              <p className={`text-lg ${subtitleColor} font-medium`}>
                <span className={`${accentClasses.text} font-semibold`}>Final pricing</span> depends on your scale, features, and complexity.
              </p>
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-12">
          {tiers.map((tier, index) => (
            <div 
              key={tier.id}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <div className={`relative bg-gradient-to-br ${backgroundColor === 'dark' ? 'from-white/10 via-blue-50/10 to-green-50/10' : accentClasses.bg} backdrop-blur-sm rounded-3xl p-8 shadow-lg border ${backgroundColor === 'dark' ? 'border-white/20' : accentClasses.border} hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full ${
                tier.popular ? 'ring-2 ring-green-500/50 scale-105' : ''
              }`}>
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`px-4 py-2 bg-gradient-to-r ${accentClasses.badge} text-white text-sm font-semibold rounded-full shadow-lg`}>
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Tier Header */}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold ${textColor} mb-2`}>{tier.name}</h3>
                  <p className={`${subtitleColor} mb-6`}>{tier.description}</p>
                  
                  <div className="mb-6">
                    <div className={`text-4xl font-bold ${textColor} mb-2`}>{tier.price}</div>
                    <div className={`text-sm ${subtitleColor}`}>{tier.priceNote}</div>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 bg-gradient-to-br ${accentClasses.primary} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`${subtitleColor}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="text-center">
                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${accentClasses.primary} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    {tier.id === tiers.length ? 'Contact Us' : 'Request Demo'}
                  </button>
                </div>
                
                {/* Floating accent elements */}
                <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${accentClasses.primary} opacity-10 rounded-full blur-xl`}></div>
                <div className={`absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br ${accentClasses.primary} opacity-5 rounded-full blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        {additionalInfo && (
          <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`${backgroundColor === 'dark' ? 'bg-white/5 backdrop-blur-sm border border-white/10' : 'bg-gradient-to-r from-gray-50/80 to-blue-50/50 backdrop-blur-sm border border-gray-200/50'} rounded-3xl p-8`}>
              <h3 className={`text-2xl font-bold ${textColor} mb-4`}>{additionalInfo.title}</h3>
              <p className={`text-lg ${subtitleColor} mb-6`}>
                {additionalInfo.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {additionalInfo.features.map((feature, index) => (
                  <div key={index} className={`p-4 ${backgroundColor === 'dark' ? 'bg-white/10' : 'bg-white/50'} rounded-xl`}>
                    <div className={`${accentClasses.text} font-semibold mb-2`}>{feature.title}</div>
                    <div className={`${subtitleColor} text-sm`}>{feature.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className={`mt-12 lg:mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`inline-block px-8 py-4 ${backgroundColor === 'dark' ? 'bg-white/5 backdrop-blur-sm border border-white/10' : 'bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm border border-green-200/50'} rounded-2xl`}>
            <p className={`text-lg ${subtitleColor} font-medium`}>
              Ready to get started?{' '}
              <span className={`${accentClasses.text} font-semibold`}>Request a demo</span> or{' '}
              <span className={`${accentClasses.text} font-semibold`}>get your proposal</span> today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusablePricing;