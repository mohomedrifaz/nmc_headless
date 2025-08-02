import HeroSection from "@/app/components/home/HeroSection";
import AboutSection from "@/app/components/home/AboutSection";
import ServicesCarousel from "@/app/components/home/ServicesCarousal";
import TestimonialsSection from "@/app/components/home/TestimonialsSection";
import CeoMessageSection from "./components/home/CEOMessage";
import CTASection from "./components/home/CTASection";
import SecondaryHero from "./components/home/SecondaryHero";
import PartnersSlider from "./components/home/PartnersSlider";
import UpcomingEventsSection from "./components/home/UpcomingEvents";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesCarousel />
      <PartnersSlider/>
      <SecondaryHero />
      <CeoMessageSection />
      <UpcomingEventsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
