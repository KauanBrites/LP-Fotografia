import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ForWhoSection } from "@/components/ForWhoSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ForWhoSection />
      <BenefitsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
