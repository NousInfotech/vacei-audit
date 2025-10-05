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
        <CTASection
          backgroundColor="black"
          badgeText="Get Started Today"
          title="Ready to Simplify"
          subtitle="Accounting & audit operations?"
          primaryButtonText="Get a Demo"
          secondaryButtonText="Learn More for Firms"
        />
    </div>
  )
}

export default Homepage