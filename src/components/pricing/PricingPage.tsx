'use client';

import React from 'react';
import { PersonaProvider } from '@/contexts/PersonaContext';
import PricingHero from './sections/PricingHero';
import ServicePackages from './sections/ServicePackages';
import PortalPackages from './sections/PortalPackages';
import AddonsSection from './sections/AddonsSection';
import ComparePlans from './sections/ComparePlans';
import HowToChoose from './sections/HowToChoose';
import CTASection from '../homepage/CTASection';

const PricingPage = () => {
  return (
    <PersonaProvider>
      <div className="min-h-screen bg-white">
        <PricingHero />
        <ServicePackages />
        <PortalPackages />
        <AddonsSection />
        <ComparePlans />
        <HowToChoose />
        <CTASection
          backgroundColor="black"
          badgeText="Get Started Today"
          title="Ready for a tailored quote?"
          subtitle="Transform your accounting & audit operations with Vacei's comprehensive solutions."
          primaryButtonText="Get Your Custom Proposal"
          secondaryButtonText="Request a Demo"
          isHomepage={false}
        />
      </div>
    </PersonaProvider>
  );
};

export default PricingPage;
