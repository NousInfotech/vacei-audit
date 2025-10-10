'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePersona } from '@/contexts/PersonaContext';

interface CTASectionProps {
  backgroundColor: 'black' | 'white';
  badgeText: string;
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonIcon?: React.ReactNode;
  secondaryButtonIcon?: React.ReactNode;
  isHomepage?: boolean; // New prop to distinguish homepage vs other pages
}

const CTASection: React.FC<CTASectionProps> = ({
  backgroundColor,
  badgeText,
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonIcon,
  secondaryButtonIcon,
  isHomepage = false
}) => {
  const { persona } = usePersona();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Predefined positions to avoid hydration mismatch
  const particlePositions = [
    { left: 23.7, top: 2.9, delay: 1.5, duration: 4.6 },
    { left: 75.9, top: 95.2, delay: 2.9, duration: 4.1 },
    { left: 7.5, top: 22.0, delay: 3.0, duration: 4.0 },
    { left: 86.7, top: 25.8, delay: 0.9, duration: 3.7 },
    { left: 33.7, top: 2.4, delay: 0.5, duration: 3.0 },
    { left: 44.5, top: 29.9, delay: 0.0, duration: 3.1 },
    { left: 98.2, top: 47.7, delay: 1.0, duration: 3.4 },
    { left: 91.5, top: 87.9, delay: 0.3, duration: 4.3 },
    { left: 95.7, top: 92.9, delay: 1.8, duration: 4.5 },
    { left: 83.7, top: 58.1, delay: 2.8, duration: 4.0 },
    { left: 69.4, top: 3.9, delay: 2.7, duration: 4.5 },
    { left: 16.3, top: 70.8, delay: 0.8, duration: 3.9 },
    { left: 12.0, top: 47.3, delay: 0.5, duration: 5.0 },
    { left: 84.4, top: 24.5, delay: 0.3, duration: 3.1 },
    { left: 78.7, top: 48.4, delay: 1.9, duration: 4.3 }
  ];

  const isDark = backgroundColor === 'black';
  const bgClass = isDark ? 'bg-black' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subtextColor = isDark ? 'text-gray-300' : 'text-gray-700';
  const badgeBgColor = isDark ? 'bg-green-600/20' : 'bg-green-100/50';
  const badgeBorderColor = isDark ? 'border-green-600/30' : 'border-green-200/50';
  const badgeTextColor = isDark ? 'text-green-400' : 'text-green-700';
  const particleColor = isDark ? 'bg-green-500/30' : 'bg-green-500/20';
  const patternColor = isDark ? '%23059669' : '%23059669';

  // Handle button clicks
  const handlePrimaryClick = () => {
    router.push('/wizard-flow');
  };

  const handleSecondaryClick = () => {
    router.push('/pricing');
  };

  return (
    <div className={`relative ${bgClass} overflow-hidden`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-600/10 to-lime-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-600/5 to-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-600/10 to-green-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${patternColor}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Particles - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particlePositions.map((particle, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${particleColor} rounded-full animate-float`}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className={`inline-block px-6 py-3 ${badgeBgColor} backdrop-blur-sm rounded-full border ${badgeBorderColor} mb-6`}>
            <span className={`${badgeTextColor} text-sm font-medium tracking-wide uppercase`}>{badgeText}</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-6 antialiased tracking-tight`}>
            {isHomepage ? (
              <>
                Ready to Simplify{' '}
                <span className="text-green-600">
                  {persona === 'business' ? 'Your Accounting?' : 'Your Firm Operations?'}
                </span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className={`text-lg md:text-xl ${subtextColor} max-w-4xl mx-auto leading-relaxed mb-8`}>
            {isHomepage ? (
              persona === 'business' 
                ? 'Get started with professional accounting & audit services today.'
                : 'Scale your firm with our white-label accounting & audit platform.'
            ) : (
              subtitle
            )}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Primary CTA */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-lime-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            
            <button 
              onClick={handlePrimaryClick}
              className="relative bg-gradient-to-r from-green-600 to-lime-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[200px] justify-center"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {isHomepage ? (persona === 'business' ? 'Request Demo' : 'Get Proposal') : primaryButtonText}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Secondary CTA */}
          <div className="group relative">
            <button 
              onClick={handleSecondaryClick}
              className={`relative bg-transparent border-2 ${isDark ? 'border-green-600/50 text-green-400 hover:bg-green-600/10' : 'border-green-600/50 text-green-600 hover:bg-green-100/50'} font-bold py-4 px-8 rounded-2xl hover:border-green-600 transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[220px] justify-center backdrop-blur-sm`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {isHomepage ? (persona === 'business' ? 'View Pricing' : 'Explore Solutions') : secondaryButtonText}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-600/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-lime-600/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-emerald-600/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default CTASection;
