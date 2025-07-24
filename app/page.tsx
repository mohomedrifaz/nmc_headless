import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ServicesCarousel from "@/app/components/ServicesCarousal";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import CeoMessageSection from "./components/CEOMessage";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesCarousel />
      <CeoMessageSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
