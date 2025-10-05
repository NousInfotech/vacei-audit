'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AuditFirmsOfferingsProps {
  title?: string;
  items?: Array<{ title: string; description: string; }>;
}

const AuditFirmsOfferings = ({ 
  title = "Your Firm's White-Label Portal + Service Stack",
  items = [
    {
      title: "White-Label Audit Portal",
      description: "Deploy Vacei's audit engine under your firm's brand — clients see your portal, not ours."
    },
    {
      title: "Centralized Client Management",
      description: "Onboard, manage, monitor clients from one dashboard — see which ones need help, see performance, exceptions."
    },
    {
      title: "Automation of Audit Tasks",
      description: "Document collection, categorization, working paper preparation — your firm's team only deals with exceptions."
    },
    {
      title: "Integrations & Imports",
      description: "Connect with clients' systems (Xero, QuickBooks, local ERPs). Pull data in automatically without manual exports."
    },
    {
      title: "Dashboards & Reports to Clients",
      description: "Your clients get dashboards, live KPIs, audit reports — in your portal, under your branding."
    },
    {
      title: "Working Papers & Audit Trail",
      description: "Complete audit documentation, versioning, and compliance tracking white-labeled into your firm's portal."
    },
    {
      title: "User / Role & Access Management",
      description: "You control which users (partners, auditors, clients) can see what — multi-tenant security."
    },
    {
      title: "Security, Versioning & Audit Trail",
      description: "Full logs, versioning, encrypted data, backups — firm-level control and reporting."
    },
    {
      title: "Support & Updates",
      description: "Maintenance, bug fixes, enhancements are optional add-ons — you stay current with minimal burden."
    }
  ]
}: AuditFirmsOfferingsProps) => {
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

  const offerings = items.map((item, index) => ({
    title: item.title,
    description: item.description,
    icon: ["🎨", "📊", "📋", "🔗", "📈", "📄", "👥", "🔒", "🛠️"][index] || "✨",
    gradient: ["from-green-500 to-emerald-500", "from-blue-500 to-cyan-500", "from-purple-500 to-pink-500", "from-orange-500 to-red-500", "from-teal-500 to-blue-500", "from-indigo-500 to-purple-500", "from-pink-500 to-rose-500", "from-gray-500 to-slate-500", "from-yellow-500 to-orange-500"][index] || "from-green-500 to-emerald-500"
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
            <span className="text-white text-xs lg:text-sm font-medium tracking-wide uppercase">Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 antialiased tracking-tight">
            {title}
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Comprehensive capabilities tailored specifically for audit firms ready to modernize their practice.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Offerings List */}
          <div className="space-y-6">
            {offerings.slice(0, 6).map((offering, index) => (
              <div 
                key={index} 
                className={`group transition-all duration-1000 opacity-100 translate-y-0`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="relative flex items-start gap-6 p-6 rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:bg-white/5 backdrop-blur-sm">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${offering.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{offering.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {offering.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {offering.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-8 h-8 bg-gradient-to-r ${offering.gradient} rounded-full flex items-center justify-center`}>
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
              
              {/* Central Dashboard Mockup */}
              <div className="relative h-96">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">V</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Audit Portal</div>
                      <div className="text-gray-400 text-sm">Your Firm Name</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Dashboard Content Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Active Clients */}
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-xl p-4 border border-green-400/20">
                    <div className="text-2xl font-bold text-white mb-1">24</div>
                    <div className="text-green-400 text-sm">Active Clients</div>
                  </div>
                  
                  {/* Pending Reviews */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl p-4 border border-blue-400/20">
                    <div className="text-2xl font-bold text-white mb-1">8</div>
                    <div className="text-blue-400 text-sm">Pending Reviews</div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="space-y-3">
                  <div className="text-white font-semibold mb-3">Recent Activities</div>
                  
                  {[
                    { icon: "📄", text: "Document uploaded", time: "2 min ago", color: "green" },
                    { icon: "✅", text: "Review completed", time: "15 min ago", color: "blue" },
                    { icon: "📊", text: "Report generated", time: "1 hour ago", color: "emerald" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <span className="text-lg">{activity.icon}</span>
                      <div className="flex-1">
                        <div className="text-white text-sm">{activity.text}</div>
                        <div className="text-gray-400 text-xs">{activity.time}</div>
                      </div>
                      <div className={`w-2 h-2 bg-${activity.color}-400 rounded-full`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Feature Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-2xl flex items-center justify-center border border-green-400/20">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl flex items-center justify-center border border-blue-400/20">
                <span className="text-2xl">📈</span>
              </div>
              <div className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/10 rounded-xl flex items-center justify-center border border-emerald-400/20">
                <span className="text-lg">⚡</span>
              </div>
            </div>

            {/* Additional Offerings */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {offerings.slice(6, 11).map((offering, index) => (
                <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                  <div className={`w-10 h-10 bg-gradient-to-br ${offering.gradient} rounded-lg flex items-center justify-center mb-3`}>
                    <span className="text-lg">{offering.icon}</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">{offering.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{offering.description}</p>
                </div>
              ))}
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
              Ready to see these capabilities in action?{' '}
              <span className="text-green-400 font-semibold">Schedule a demo</span> to explore how Vacei can transform your audit practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditFirmsOfferings;