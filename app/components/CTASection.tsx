"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 text-white bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="container px-4 mx-auto text-center lg:px-8">
        <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
          Ready to Begin Your Journey?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
          Take the first step toward your academic and career success with EduGateway. Our expert team is here to guide you every step of the way.
        </p>
        <Button
          className="inline-flex items-center px-16 py-8 text-lg font-semibold text-purple-600 bg-white rounded-full transition-all cursor-pointer hover:bg-purple-100"
        >
          Book a Free Consultation
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
