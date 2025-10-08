'use client';

import React from 'react'
import { PersonaProvider } from '@/contexts/PersonaContext'
import HeroSection from './HeroSection'
import ValuePropositionSection from './ValuePropositionSection'
import HowItWorksSection from './HowItWorksSection'
import TrustSection from './TrustSection'
import PricingSection from './PricingSection'
import CTASection from './CTASection'

const Homepage = () => {
  return (
    <PersonaProvider>
      <div>
        <HeroSection />
        <ValuePropositionSection />
        <HowItWorksSection />
        <TrustSection />
        <PricingSection />
        <CTASection
          backgroundColor="black"
          badgeText="Get Started Today"
          title="Ready to Simplify"
          subtitle="Accounting & audit operations?"
          primaryButtonText="Get a Demo"
          secondaryButtonText="Learn More for Firms"
          isHomepage={true}
        />
      </div>
    </PersonaProvider>
  )
}

export default Homepage