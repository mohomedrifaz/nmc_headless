"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const StudyAbroadCTA = () => {
  const whatsappNumber = "65XXXXXXXX";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-20 text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800">
      <div className="container px-4 mx-auto text-center lg:px-8">
        <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
           Ready to Explore
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
          Let&apos;s discuss your study abroad goals and create a personalized plan to make your international education dreams a reality.
        </p>
        <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
            <Link href={whatsappLink} className="inline-flex items-center px-8 py-6 text-lg font-semibold text-white bg-transparent rounded-full border-2 border-white transition-all cursor-pointer hover:bg-white/10 hover:scale-105">
              Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadCTA;
