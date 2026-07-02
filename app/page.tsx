/* ============================================================
   Page: Home (Landing Page)
   Assembles all 11 core sections in story-telling structure.
   ============================================================ */

'use client';

import { useAnalytics } from '@/hooks/useAnalytics';
import { HeroSection } from '@/sections/HeroSection';
import { ProblemSection } from '@/sections/ProblemSection';
import { SolutionSection } from '@/sections/SolutionSection';
import { HowItWorksSection } from '@/sections/HowItWorksSection';
import { SmartFeaturesSection } from '@/sections/SmartFeaturesSection';
import { ProductShowcaseSection } from '@/sections/ProductShowcaseSection';
import { SpecificationsSection } from '@/sections/SpecificationsSection';
import { ComparisonSection } from '@/sections/ComparisonSection';
import { ReviewsSection } from '@/sections/ReviewsSection';
import { FAQSection } from '@/sections/FAQSection';
import { RegistrationSection } from '@/sections/RegistrationSection';

export default function HomePage() {
  // Initialize scroll depth analytics tracking
  useAnalytics();

  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Problem */}
      <ProblemSection />

      {/* 3. Solution */}
      <SolutionSection />

      {/* 4. How It Works */}
      <HowItWorksSection />

      {/* 5. Smart Features */}
      <SmartFeaturesSection />

      {/* 6. Product Showcase */}
      <ProductShowcaseSection />

      {/* 7. Specifications */}
      <SpecificationsSection />

      {/* 8. Comparison */}
      <ComparisonSection />

      {/* 9. Customer Reviews */}
      <ReviewsSection />

      {/* 10. FAQ */}
      <FAQSection />

      {/* 11. Registration Form */}
      <RegistrationSection />
    </>
  );
}
