'use client';

import React from 'react';
import { 
  BusinessHero, 
  BusinessPathSelector, 
  BusinessChallenges, 
  BusinessValueProposition, 
  BusinessFeatures, 
  BusinessWorkflow, 
  BusinessTrust, 
  BusinessPricing, 
  BusinessFAQ, 
  BusinessCTA 
} from '@/components/features/business/BusinessComponents';

const BusinessPage = () => {
  return (
    <div className="min-h-screen">
      <BusinessHero />
      <BusinessPathSelector />
      <BusinessChallenges />
      <BusinessValueProposition />
      <BusinessFeatures />
      <BusinessWorkflow />
      <BusinessTrust />
      <BusinessPricing />
      <BusinessFAQ />
      <BusinessCTA />
    </div>
  );
};

export default BusinessPage;