import { TypewriterHero } from "@/components/typewriter-hero"
import { BenefitTiles } from "@/components/benefit-tiles"
import { FeatureShowcase } from "@/components/feature-showcase"
import { Testimonials } from "@/components/testimonials"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <TypewriterHero />
      
      {/* Benefit Tiles */}
      <BenefitTiles />
      
      {/* Feature Showcase */}
      <FeatureShowcase />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Pricing */}
      <PricingSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
}