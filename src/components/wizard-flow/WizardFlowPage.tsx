'use client';

import React, { useState, useEffect, useRef } from 'react';

const WizardFlowPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [persona, setPersona] = useState<'business' | 'firm' | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [scaleInfo, setScaleInfo] = useState<string>('');
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    country: ''
  });
  const [additionalDetails, setAdditionalDetails] = useState({
    currentSoftware: '',
    timeline: '',
    painPoints: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
      { threshold: 0.2 }
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

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return persona !== null;
      case 2: return selectedServices.length > 0;
      case 3: return scaleInfo !== '';
      case 4: return contactInfo.fullName && contactInfo.email && contactInfo.company;
      case 5: return true; // Optional step
      case 6: return true;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/wizard-flow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          persona,
          selectedServices,
          scaleInfo,
          contactInfo,
          additionalDetails,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset all form data after successful submission
        setTimeout(() => {
          setPersona(null);
          setSelectedServices([]);
          setScaleInfo('');
          setContactInfo({
            fullName: '',
            email: '',
            company: '',
            phone: '',
            country: ''
          });
          setAdditionalDetails({
            currentSoftware: '',
            timeline: '',
            painPoints: '',
            requirements: ''
          });
          setCurrentStep(1);
          setSubmitStatus('idle');
        }, 3000); // Reset after 3 seconds to allow user to see success message
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting wizard flow:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" ref={sectionRef}>
      {/* Header */}
      <div className={`relative bg-gradient-to-br from-green-50 to-lime-50 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-3 bg-green-100 rounded-full border border-green-200 mb-6">
            <span className="text-green-700 text-sm font-medium tracking-wide uppercase">Interactive Wizard Flow</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Personalized Onboarding Wizard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our 6-step guided flow that adapts to your needs — whether you&apos;re a business owner or an accounting/audit firm.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Step {currentStep} of 6</span>
            <span className="text-sm font-medium text-green-600">{Math.round((currentStep / 6) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-500 to-lime-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Wizard Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          
          {/* Step Content */}
          <div className="p-8 md:p-12 min-h-[600px]">
            
            {/* Step 1: Persona Choice */}
            {currentStep === 1 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who are you?</h2>
                <p className="text-gray-600 mb-12 max-w-md mx-auto">
                  Select the type that best fits you — we&apos;ll tailor the next steps accordingly.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <button
                    onClick={() => setPersona('business')}
                    className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left ${
                      persona === 'business' 
                        ? 'border-green-500 bg-green-50 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      {persona === 'business' && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Owner</h3>
                    <p className="text-gray-600 text-sm">I need services for my business</p>
                  </button>

                  <button
                    onClick={() => setPersona('firm')}
                    className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left ${
                      persona === 'firm' 
                        ? 'border-green-500 bg-green-50 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      {persona === 'firm' && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Accounting / Audit Firm</h3>
                    <p className="text-gray-600 text-sm">I manage clients and need tools</p>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Service Interest */}
            {currentStep === 2 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Which services are you interested in?</h2>
                <p className="text-gray-600 mb-12 max-w-md mx-auto">
                  You can select one or both. We&apos;ll tailor the demo accordingly.
                </p>
                
                <div className="space-y-4 max-w-lg mx-auto">
                  {['Accounting & Bookkeeping', 'Audit & Assurance', 'Both'].map((service) => (
                    <button
                      key={service}
                      onClick={() => handleServiceToggle(service)}
                      className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-4 ${
                        selectedServices.includes(service)
                          ? 'border-green-500 bg-green-50 shadow-lg'
                          : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                        selectedServices.includes(service)
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedServices.includes(service) && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-lg font-semibold text-gray-900">{service}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Scale / Volume */}
            {currentStep === 3 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {persona === 'business' 
                    ? 'What&apos;s your monthly transaction volume?' 
                    : 'How many clients or engagements do you manage?'}
                </h2>
                <p className="text-gray-600 mb-12 max-w-md mx-auto">
                  {persona === 'business' 
                    ? 'This helps us tailor your setup and provide accurate pricing.'
                    : 'Knowing your scale helps us recommend the right modules and infrastructure.'}
                </p>
                
                <div className="space-y-4 max-w-lg mx-auto">
                  {(persona === 'business' 
                    ? ['0–500', '501–5,000', '5,001+', 'Other (specify)']
                    : ['1–10 clients', '11–50 clients', '51+ clients', 'Other (specify)']
                  ).map((option) => (
                    <button
                      key={option}
                      onClick={() => setScaleInfo(option)}
                      className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-4 ${
                        scaleInfo === option
                          ? 'border-green-500 bg-green-50 shadow-lg'
                          : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        scaleInfo === option
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`}>
                        {scaleInfo === option && (
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-lg font-semibold text-gray-900">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Tell us a bit about your organization</h2>
                <p className="text-gray-600 mb-12 text-center max-w-md mx-auto">
                  We&apos;ll use this to schedule your demo and prepare a personalized proposal.
                </p>
                
                <div className="space-y-6">
                  {[
                    { key: 'fullName', label: 'Full Name', type: 'text', required: true },
                    { key: 'email', label: 'Email Address', type: 'email', required: true },
                    { key: 'company', label: 'Company / Organization Name', type: 'text', required: true },
                    { key: 'phone', label: 'Phone', type: 'tel', required: false },
                    { key: 'country', label: 'Country / Jurisdiction', type: 'text', required: false }
                  ].map((field) => (
                    <div key={field.key} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={field.type}
                        value={contactInfo[field.key as keyof typeof contactInfo]}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Additional Details */}
            {currentStep === 5 && (
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-bold text-white">5</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Additional Notes</h2>
                <p className="text-gray-600 mb-12 text-center max-w-md mx-auto">
                  Any additional information you&apos;d like to share with us.
                </p>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Additional notes</label>
                    <textarea
                      value={additionalDetails.requirements}
                      onChange={(e) => setAdditionalDetails(prev => ({ ...prev, requirements: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors h-32 resize-none"
                      placeholder="Any additional information you&apos;d like to share..."
                    />
                  </div>
                  
                  {/* Commented out optional questions - keeping for future reference */}
                  {/*
                  {persona === 'business' ? (
                    // For business owners, only show a single notes field
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Notes to add or additional notes</label>
                      <textarea
                        value={additionalDetails.requirements}
                        onChange={(e) => setAdditionalDetails(prev => ({ ...prev, requirements: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors h-32 resize-none"
                        placeholder="Any additional information you&apos;d like to share..."
                      />
                    </div>
                  ) : (
                    // For firms, show all the detailed questions
                    [
                      { key: 'currentSoftware', label: 'Current accounting / ERP / software used', type: 'text', placeholder: 'e.g., QuickBooks, Xero, Excel' },
                      { key: 'timeline', label: 'Desired go-live or timeline', type: 'text', placeholder: 'e.g., Within 1 month, Q1 2024' },
                      { key: 'painPoints', label: 'Key pain points / challenges you currently face', type: 'textarea', placeholder: 'What challenges are you facing?' },
                      { key: 'requirements', label: 'Any special requirements (multi-entity, multi-currency, compliance needs)', type: 'textarea', placeholder: 'Any specific needs or requirements?' }
                    ].map((field) => (
                      <div key={field.key} className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={additionalDetails[field.key as keyof typeof additionalDetails]}
                            onChange={(e) => setAdditionalDetails(prev => ({ ...prev, [field.key]: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors h-24 resize-none"
                            placeholder={field.placeholder}
                          />
                        ) : (
                          <input
                            type={field.type}
                            value={additionalDetails[field.key as keyof typeof additionalDetails]}
                            onChange={(e) => setAdditionalDetails(prev => ({ ...prev, [field.key]: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    ))
                  )}
                  */}
                </div>
              </div>
            )}

            {/* Step 6: Summary & Submit */}
            {currentStep === 6 && (
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-bold text-white">6</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Review & Submit</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Persona:</span>
                        <span className="text-gray-900 font-medium">{persona === 'business' ? 'Business Owner' : 'Accounting / Audit Firm'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Services:</span>
                        <span className="text-gray-900 font-medium">{selectedServices.join(', ') || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Scale:</span>
                        <span className="text-gray-900 font-medium">{scaleInfo || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Company:</span>
                        <span className="text-gray-900 font-medium">{contactInfo.company || 'Not provided'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="text-gray-900 font-medium">{contactInfo.email || 'Not provided'}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submission Status */}
                  {submitStatus === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-green-800 font-semibold">Successfully Submitted! 🎉</span>
                      </div>
                      <p className="text-green-700 text-sm">
                        Thank you for completing our wizard! We&apos;ve received your information and are preparing your personalized demo. 
                        You should receive a confirmation email shortly, and our team will contact you within 4-6 hours to schedule your demo.
                        <br/><br/>
                        <span className="text-green-600 font-medium">Form will reset automatically in a few seconds...</span>
                      </p>
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-red-800 font-semibold">Submission Failed</span>
                      </div>
                      <p className="text-red-700 text-sm">
                        We encountered an error while submitting your information. Please try again or contact us directly at info@vacei.com.
                      </p>
                    </div>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-green-800 font-semibold">Ready to Submit!</span>
                      </div>
                      <p className="text-green-700 text-sm">
                        Thanks for your input! Someone from Vacei will reach out shortly to set up your personalized demo. In the meantime, we&apos;ll prepare a walkthrough tailored to your needs.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Footer */}
          <div className="bg-gray-50 border-t border-gray-200 px-8 py-6 flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    step === currentStep ? 'bg-green-500 w-8' : step < currentStep ? 'bg-green-400' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>

            <button
              onClick={currentStep === 6 ? handleSubmit : nextStep}
              disabled={currentStep === 6 ? (isSubmitting || submitStatus === 'success') : !canProceed()}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                currentStep === 6 
                  ? (isSubmitting || submitStatus === 'success')
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700 shadow-lg'
                  : !canProceed()
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700 shadow-lg'
              }`}
            >
              {currentStep === 6 ? (
                isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Submitting...
                  </>
                ) : submitStatus === 'success' ? (
                  'Submitted Successfully!'
                ) : (
                  'Submit & Schedule Demo'
                )
              ) : (
                'Next'
              )}
              {currentStep !== 6 && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Trust Microcopy */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Your data is secure • Operated by licensed audit firm • We&apos;ll never share your information
          </p>
        </div>
      </div>
    </div>
  );
};

export default WizardFlowPage;