'use client';

import React from 'react';
import AuditFirmsHero from '../../../components/features/audit-firms/AuditFirmsHero';
import AuditFirmsIntroduction from '../../../components/features/audit-firms/AuditFirmsIntroduction';
import AuditFirmsChallenges from '../../../components/features/audit-firms/AuditFirmsChallenges';
import AuditFirmsOfferings from '../../../components/features/audit-firms/AuditFirmsOfferings';
import AuditFirmsWorkflow from '../../../components/features/audit-firms/AuditFirmsWorkflow';
import AuditFirmsAdvantages from '../../../components/features/audit-firms/AuditFirmsAdvantages';
import ReusablePricing from '../../../components/common/ReusablePricing';
import AuditFirmsFAQ from '../../../components/features/audit-firms/AuditFirmsFAQ';
import CTASection from '../../../components/homepage/CTASection';

const AuditFirmsPage = () => {
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
  ];

  const additionalPricingInfo = {
    title: "Optional Maintenance & Support",
    description: "Choose ongoing support for updates, bug fixes, and enhancements. No long-term commitments — you control when and how you want support.",
    features: [
      { title: "Flexible", description: "Add or remove support as needed" },
      { title: "Transparent", description: "Clear pricing with no hidden fees" },
      { title: "Scalable", description: "Grows with your practice" }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero - Light */}
      <AuditFirmsHero />
      
      {/* Section 2: Introduction - Dark */}
      <div className="relative bg-black overflow-hidden">
        <AuditFirmsIntroduction />
      </div>
      
      {/* Section 3: Challenges - Light */}
      <AuditFirmsChallenges />
      
      {/* Section 4: Offerings - Dark */}
      <div className="relative bg-black overflow-hidden">
        <AuditFirmsOfferings />
      </div>
      
      {/* Section 5: Workflow - Light */}
      <AuditFirmsWorkflow />
      
      {/* Section 6: Advantages - Dark */}
      <div className="relative bg-black overflow-hidden">
        <AuditFirmsAdvantages />
      </div>
      
      {/* Section 7: Pricing - Light */}
      <ReusablePricing
        title="How We License to Audit Firms"
        subtitle="We offer a one-time implementation fee + optional maintenance and support. No long-term locked subscriptions — you choose optional ongoing support."
        description="Final pricing depends on your scale, features, and complexity."
        tiers={pricingTiers}
        backgroundColor="light"
        accentColor="green"
        additionalInfo={additionalPricingInfo}
      />
      
      {/* Section 8: FAQ - Dark */}
      <div className="relative bg-black overflow-hidden">
        <AuditFirmsFAQ />
      </div>
      
      {/* Section 9: CTA - Light */}
      <CTASection
        backgroundColor="white"
        badgeText="Ready to Transform"
        title="Ready to Run Audits Smarter, On Your Platform?"
        subtitle="Deliver audits under your name. We provide the engine behind you."
        primaryButtonText="Schedule a Demo"
        secondaryButtonText="Request a Quote"
        primaryButtonIcon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
        secondaryButtonIcon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        }
      />
    </div>
  );
};

export default AuditFirmsPage;