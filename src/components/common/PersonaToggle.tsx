'use client';

import React from 'react';
import { usePersona } from '@/contexts/PersonaContext';

interface PersonaToggleProps {
  variant?: 'default' | 'minimal';
  className?: string;
}

const PersonaToggle = ({ variant = 'default', className = '' }: PersonaToggleProps) => {
  const { persona, setPersona } = usePersona();

  if (variant === 'minimal') {
    return (
      <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-lg ${className}`}>
        <button
          onClick={() => setPersona('business')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            persona === 'business'
              ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          I am a Business
        </button>
        <button
          onClick={() => setPersona('firm')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            persona === 'firm'
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          I am a Firm / Auditor
        </button>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}>
      <button
        onClick={() => setPersona('business')}
        className={`group relative w-full sm:w-64 p-6 rounded-2xl border-2 transition-all duration-300 ${
          persona === 'business'
            ? 'bg-gradient-to-br from-green-50 to-lime-50 border-green-600 shadow-xl scale-105'
            : 'bg-white border-gray-200 hover:border-green-300 hover:shadow-lg'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            persona === 'business'
              ? 'bg-gradient-to-br from-green-600 to-green-700'
              : 'bg-gray-100 group-hover:bg-green-100'
          }`}>
            <svg className={`w-6 h-6 ${persona === 'business' ? 'text-white' : 'text-gray-600 group-hover:text-green-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className="text-left">
            <div className={`text-lg font-bold ${persona === 'business' ? 'text-green-700' : 'text-gray-900'}`}>
              I am a Business
            </div>
            <div className="text-sm text-gray-600">Business Owner</div>
          </div>
        </div>
        {persona === 'business' && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </button>

      <button
        onClick={() => setPersona('firm')}
        className={`group relative w-full sm:w-64 p-6 rounded-2xl border-2 transition-all duration-300 ${
          persona === 'firm'
            ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-600 shadow-xl scale-105'
            : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            persona === 'firm'
              ? 'bg-gradient-to-br from-blue-600 to-blue-700'
              : 'bg-gray-100 group-hover:bg-blue-100'
          }`}>
            <svg className={`w-6 h-6 ${persona === 'firm' ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="text-left">
            <div className={`text-lg font-bold ${persona === 'firm' ? 'text-blue-700' : 'text-gray-900'}`}>
              I am a Firm
            </div>
            <div className="text-sm text-gray-600">Auditor / Accountant</div>
          </div>
        </div>
        {persona === 'firm' && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default PersonaToggle;

