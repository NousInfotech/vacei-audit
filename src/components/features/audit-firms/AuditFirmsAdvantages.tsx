'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AuditFirmsAdvantagesProps {
  title?: string;
  points?: string[];
}

const AuditFirmsAdvantages = ({ 
  title = "Your Competitive Edge",
  points = [
    "Your Brand Everywhere — clients always see your portal",
    "Lower Operational Cost — automation reduces hours per client",
    "Client Delight — real-time insights, dashboards, cleaner delivery",
    "Scalable Growth — you don't need to proportionally increase staff",
    "Backed by Experts — built and operated by accounting & audit professionals",
    "Security & Control — you own the environment, data, access"
  ]
}: AuditFirmsAdvantagesProps) => {
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

  const advantages = points.map((point, index) => ({
    title: point.split(' — ')[0] || point,
    description: point.split(' — ')[1] || point,
    icon: ["🎨", "🔗", "⚡", "💎", "📊", "🔒", "👥"][index] || "✨",
    gradient: ["from-green-500 to-emerald-500", "from-blue-500 to-cyan-500", "from-emerald-500 to-green-500", "from-green-500 to-blue-500", "from-blue-500 to-emerald-500", "from-emerald-500 to-cyan-500", "from-green-500 to-emerald-500"][index] || "from-green-500 to-emerald-500"
  }));

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

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" ref={sectionRef}>
        
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-white text-xs lg:text-sm font-medium tracking-wide uppercase">Advantages</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 antialiased tracking-tight">
            {title}
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Why leading audit firms choose Vacei to modernize their practice and deliver exceptional client experiences.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Advantages List */}
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className={`group transition-all duration-1000 opacity-100 translate-y-0`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="relative flex items-start gap-6 p-6 rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:bg-white/5 backdrop-blur-sm">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${advantage.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{advantage.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-8 h-8 bg-gradient-to-r ${advantage.gradient} rounded-full flex items-center justify-center`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              
              {/* Floating Elements */}
              <div className="relative h-96">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-3xl">🏢</span>
                </div>

                {/* Orbiting Elements */}
                {advantages.slice(0, 6).map((advantage, index) => {
                  const angle = (index * 60) * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-12 h-12 bg-gradient-to-br ${advantage.gradient} rounded-xl flex items-center justify-center shadow-lg transition-all duration-1000 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      <span className="text-lg">{advantage.icon}</span>
                    </div>
                  );
                })}

                {/* Connection Lines */}
                {advantages.slice(0, 6).map((_, index) => {
                  const angle = (index * 60) * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-px h-24 bg-gradient-to-b from-green-400/50 to-transparent transition-all duration-1000 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `rotate(${angle * (180 / Math.PI)}deg)`,
                        transformOrigin: 'bottom center',
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    ></div>
                  );
                })}
              </div>

              {/* Bottom Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-gray-300">White-Label</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">∞</div>
                  <div className="text-sm text-gray-300">Scalable</div>
                </div>
              </div>
            </div>

            {/* Floating Accent Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 lg:mt-20 text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-8 py-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-lg text-gray-300 font-medium">
              Ready to gain your competitive edge?{' '}
              <span className="text-green-400 font-semibold">Schedule a demo</span> to see how Vacei can transform your audit practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditFirmsAdvantages;