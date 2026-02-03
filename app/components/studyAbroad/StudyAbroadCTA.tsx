"use client";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudyAbroadCTA = () => {
  // WhatsApp link - placeholder for Singapore number
  const whatsappNumber = "65XXXXXXXX"; // Replace X with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-20 text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800">
      <div className="container px-4 mx-auto text-center lg:px-8">
        <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
          Ready to Study Abroad?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
          Let's discuss your study abroad goals and create a personalized plan to make your international education dreams a reality.
        </p>
        <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="inline-flex items-center px-8 py-6 text-lg font-semibold text-purple-600 bg-white rounded-full transition-all cursor-pointer hover:bg-purple-100 hover:scale-105">
              <MessageCircle className="mr-2 w-5 h-5" />
              Chat with Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a href="#contact">
            <Button className="inline-flex items-center px-8 py-6 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full transition-all cursor-pointer hover:bg-white/10 hover:scale-105">
              Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadCTA;
