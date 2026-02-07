import StudyAbroadHero from "@/app/components/studyAbroad/StudyAbroadHero";
import CountryFlagSlider from "@/app/components/studyAbroad/CountryFlagSlider";
import StudyAbroadInfo from "@/app/components/studyAbroad/StudyAbroadInfo";
import StudyAbroadServices from "@/app/components/studyAbroad/StudyAbroadServices";
import DestinationCountries from "@/app/components/studyAbroad/DestinationCountries";
import StudyAbroadCTA from "@/app/components/studyAbroad/StudyAbroadCTA";
import StudyAbroadTestimonials from "@/app/components/studyAbroad/StudyAbroadTestimonials";

export default async function StudyAbroadPage() {
  return (
    <>
      <StudyAbroadHero />
      <CountryFlagSlider />
      <StudyAbroadInfo />
      <StudyAbroadServices />
      <DestinationCountries />
      <StudyAbroadTestimonials />
      <StudyAbroadCTA />
    </>
  );
}
