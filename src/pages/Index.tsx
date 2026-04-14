import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ValuesSection from "@/components/ValuesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <PortfolioSection />
    <ValuesSection />
    <ProcessSection />
    <TestimonialsSection />
    <CtaSection />
    <Footer />
  </div>
);

export default Index;
