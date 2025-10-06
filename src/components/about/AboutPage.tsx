'use client';

import React from 'react';
import OurIdentity from './sections/OurIdentity';
import OurMission from './sections/OurMission';
import OurStory from './sections/OurStory';
import OurValues from './sections/OurValues';
import OurCapabilities from './sections/OurCapabilities';
import WhyChooseUs from './sections/WhyChooseUs';
import OurVision from './sections/OurVision';
import LegalAccreditation from './sections/LegalAccreditation';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Section 1: Our Identity - White Theme */}
      <OurIdentity />
      
      {/* Section 2: Our Mission - Dark Theme */}
      <OurMission />
      
      {/* Section 3: Our Story - White Theme */}
      <OurStory />
      
      {/* Section 4: Our Values - Dark Theme */}
      <OurValues />
      
      {/* Section 5: Our Capabilities - White Theme */}
      <OurCapabilities />
      
      {/* Section 6: Why Choose Us - Dark Theme */}
      <WhyChooseUs />
      
      {/* Section 7: Our Vision - White Theme */}
      <OurVision />
      
      {/* Section 8: Legal Accreditation - Dark Theme */}
      <LegalAccreditation />
    </div>
  );
};

export default AboutPage;