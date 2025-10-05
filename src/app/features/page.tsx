'use client';

import React from 'react';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-600/10 to-lime-600/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-600/5 to-green-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-600/10 to-green-600/5 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-block px-6 py-3 bg-green-100/50 backdrop-blur-sm rounded-full border border-green-200/50 mb-8">
              <span className="text-green-700 text-sm font-medium tracking-wide uppercase">Features Overview</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 antialiased tracking-tight">
              Powerful Features for <span className="text-green-600 relative">Every Business</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16">
              Discover how Vacei transforms accounting and audit operations across different business types. 
              Choose the solution that fits your needs.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Audit Firms Card */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Audit Firms</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    White-label audit portal with automation, client collaboration, and comprehensive audit workflows.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      White-label branding
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Automated workflows
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Client collaboration
                    </div>
                  </div>
                  <a href="/features/audit-firms" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
                    Explore Audit Features
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Accounting Firms Card */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Accounting Firms</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive accounting solutions with advanced analytics, client management, and automation tools.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Advanced analytics
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Client management
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Automation tools
                    </div>
                  </div>
                  <a href="/features/accounting-firms" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Coming Soon
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Business Card */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Tailored solutions for businesses seeking efficient accounting and audit management systems.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Custom solutions
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Scalable platform
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Integrated workflows
                    </div>
                  </div>
                  <a href="/features/business" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    Coming Soon
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Choose the solution that fits your business needs and transform your accounting operations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/features/audit-firms" className="bg-gradient-to-r from-green-600 to-lime-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3 justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Explore Audit Features
                </Link>
                <Link href="/" className="bg-transparent border-2 border-green-600/50 text-green-600 font-bold py-4 px-8 rounded-2xl hover:border-green-600 hover:bg-green-100/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}