// app/education-events/page.tsx
// import { fetchFromWP } from "@/lib/fetch";
import EducationEventsHero from "@/app/components/educationEvents/EducationEventsHero";
import EducationEventsInfo from "@/app/components/educationEvents/EducationEventsInfo";
import EducationEventsDetails from "@/app/components/educationEvents/EducationEventsDetails";
import CTASection from "@/app/components/educationEvents/CTASection";
import WhyAttendSection from "../components/educationEvents/WhyAttendSection";


export default async function EducationEventsPage() {
  return (
    <>
      <EducationEventsHero />
      <EducationEventsInfo />
      <EducationEventsDetails />
      <WhyAttendSection/>
      <CTASection />
    </>
  );

  // const pages = await fetchFromWP("pages?slug=education-events");
  // const page = pages[0];

  // console.log(page);

  // if (!page) {
  //   return <p>Page not found</p>;
  // }

  // const { title, acf } = page;


}

// <main className="p-6">
//   <h1 className="text-3xl font-bold" dangerouslySetInnerHTML={{ __html: title.rendered }} />
//   <h2 className="mt-4 text-2xl">{acf?.heading}</h2>
//   <div className="mt-2" dangerouslySetInnerHTML={{ __html: acf?.hero_content }} />
// </main>