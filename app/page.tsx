import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ServicesCarousel from "@/app/components/ServicesCarousal";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import CeoMessageSection from "./components/CEOMessage";
import CTASection from "./components/CTASection";
import SecondaryHero from "./components/SecondaryHero";
import PartnersSlider from "./components/PartnersSlider";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesCarousel />
      <SecondaryHero />
      <CeoMessageSection />
      <PartnersSlider/>
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
