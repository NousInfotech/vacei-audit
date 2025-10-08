'use client';

import React from 'react';
import { usePersona } from '@/contexts/PersonaContext';

const ValuePropositionSection = () => {
  const { persona } = usePersona();

  const businessSolutions = [
    {
      title: "Virtual Accounting & Audit as a Service",
      subtitle: "Upload your docs, we do the work — books, compliance, audit.",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="h-3 bg-gray-200 rounded w-24"></div>
              <div className="h-2 bg-gray-100 rounded w-16"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded"></div>
              </div>
              <div className="h-2 bg-gray-100 rounded w-8"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded"></div>
              </div>
              <div className="h-2 bg-gray-100 rounded w-8"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded"></div>
              </div>
              <div className="h-2 bg-gray-100 rounded w-8"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Hybrid / Augmented Support",
      subtitle: "Keep your team, add our automation and expertise as needed.",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div className="space-y-1">
              <div className="h-2 bg-gray-100 rounded w-20 mx-auto"></div>
              <div className="h-2 bg-gray-100 rounded w-16 mx-auto"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Complete Audit Support",
      subtitle: "Get audit-ready financials and full audit execution.",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="h-2 bg-gray-100 rounded w-20"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded"></div>
              <div className="h-2 bg-gray-100 rounded w-3/4"></div>
              <div className="h-2 bg-gray-100 rounded w-1/2"></div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded"></div>
              <div className="h-2 bg-gray-100 rounded w-3/4"></div>
              <div className="h-2 bg-gray-100 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const firmSolutions = [
    {
      title: "White-label Accounting Portal",
      subtitle: "Your branded portal, clients upload, OCR, dashboards, automation.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <div className="space-y-1">
              <div className="h-2 bg-gray-100 rounded w-20 mx-auto"></div>
              <div className="h-2 bg-gray-100 rounded w-16 mx-auto"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-100 rounded"></div>
              <div className="h-2 bg-gray-100 rounded w-24"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-100 rounded"></div>
              <div className="h-2 bg-gray-100 rounded w-20"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "White-label Audit Portal",
      subtitle: "Deploy our audit platform under your name — workflows, review tools, sign-off.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="h-2 bg-gray-100 rounded w-20"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded"></div>
              <div className="h-2 bg-gray-100 rounded w-3/4"></div>
              <div className="h-2 bg-gray-100 rounded w-1/2"></div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded"></div>
              <div className="h-2 bg-gray-100 rounded w-3/4"></div>
              <div className="h-2 bg-gray-100 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Multi-client Management",
      subtitle: "Scale capacity, manage entities, centralized dashboard for all clients.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="h-3 bg-gray-200 rounded w-24"></div>
              <div className="h-2 bg-gray-100 rounded w-16"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                </div>
                <div className="h-2 bg-gray-100 rounded w-8"></div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const solutions = persona === 'business' ? businessSolutions : firmSolutions;

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-100/20 to-lime-100/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-100/15 to-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-100/20 to-green-100/15 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 antialiased">
            What <span className="bg-green-600 bg-clip-text text-transparent">Vacei</span> Does
            <span className="block text-2xl md:text-3xl mt-4 text-green-600">
              {persona === 'business' ? 'For Your Business' : 'For Your Firm'}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {persona === 'business' 
              ? "Choose the service you need — we'll handle the rest with professional expertise."
              : "White-label solutions to scale your firm and delight your clients."
            }
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative">
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-green-50/40 via-lime-50/30 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-green-100/50 backdrop-blur-sm">
                
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-lime-100/10 to-emerald-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Window Controls */}
                <div className="relative flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm"></div>
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {solution.title}
                </h3>
                
                {/* Subtitle */}
                <p className="relative text-sm text-gray-600 mb-6 leading-relaxed">
                  {solution.subtitle}
                </p>

                {/* Content Area */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-green-50/80">
                  {solution.content}
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-200/30 to-lime-200/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-lime-200/20 to-emerald-200/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="relative inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-100/60 via-lime-100/70 to-emerald-100/60 backdrop-blur-md rounded-2xl border border-green-200/60 shadow-xl">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-lime-200/30 rounded-2xl animate-pulse"></div>
            
            <div className="relative w-3 h-3 bg-gradient-to-br from-green-500 to-lime-500 rounded-full animate-pulse shadow-sm"></div>
            <span className="relative text-lg font-semibold text-gray-800">
              {persona === 'business' ? 'Choose your service • We handle the rest' : 'White-label solutions • Your brand, our technology'}
            </span>
            <div className="relative w-3 h-3 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-full animate-pulse shadow-sm" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuePropositionSection;
