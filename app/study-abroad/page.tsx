import StudyAbroadHero from "@/app/components/studyAbroad/StudyAbroadHero";
import StudyAbroadInfo from "@/app/components/studyAbroad/StudyAbroadInfo";
import StudyAbroadServices from "@/app/components/studyAbroad/StudyAbroadServices";
import DestinationCountries from "@/app/components/studyAbroad/DestinationCountries";
import StudyAbroadCTA from "@/app/components/studyAbroad/StudyAbroadCTA";

export default async function StudyAbroadPage() {
  return (
    <>
      <StudyAbroadHero />
      <StudyAbroadInfo />
      <StudyAbroadServices />
      <DestinationCountries />
      <StudyAbroadCTA />
    </>
  );
}
