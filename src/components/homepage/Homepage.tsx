import React from 'react'
import HeroSection from './HeroSection'
import ValuePropositionSection from './ValuePropositionSection'
import HowItWorksSection from './HowItWorksSection'
import TrustSection from './TrustSection'
import PricingSection from './PricingSection'
import CTASection from './CTASection'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <ValuePropositionSection />
        <HowItWorksSection />
        <TrustSection />
        <PricingSection />
        <CTASection />
    </div>
  )
}

export default Homepage