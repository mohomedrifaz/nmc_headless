"use client"
import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Harvard University Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c717?w=150&h=150&fit=crop&crop=face",
      content: "EduGateway transformed my dream of studying at Harvard into reality. Their personalized guidance and expert counseling made the entire application process seamless. I couldn't have done it without their amazing support!",
      rating: 5,
      country: "USA"
    },
    {
      name: "Ahmed Hassan",
      role: "Oxford University Graduate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The team at EduGateway is exceptional! They helped me secure admission to Oxford with a full scholarship. Their detailed approach to applications and interview preparation was invaluable.",
      rating: 5,
      country: "UK"
    },
    {
      name: "Maria Rodriguez",
      role: "Stanford MBA Graduate",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
      content: "From GMAT preparation to visa assistance, EduGateway supported me throughout my MBA journey. Their expertise in business school admissions is unmatched. Highly recommended!",
      rating: 5,
      country: "USA"
    },
    {
      name: "David Kim",
      role: "MIT Engineering Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "EduGateway's technical program guidance was perfect for my engineering aspirations. They understood my goals and helped me craft a compelling application that got me into MIT.",
      rating: 5,
      country: "USA"
    },
    {
      name: "Priya Sharma",
      role: "Cambridge University Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The scholarship guidance I received was incredible. EduGateway helped me secure funding for my studies at Cambridge. Their team truly cares about student success.",
      rating: 5,
      country: "UK"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  // Get three testimonials to display
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-purple-50 to-white bg-[url('/double-bubble-outline.png')] bg-repeat">
      <div className="container px-4 mx-auto lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Students Say</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Real stories from students who achieved their dreams with our guidance and support
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={index}
                className="group overflow-hidden relative p-6 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl border border-purple-300 shadow-xl lg:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="absolute top-4 left-4 opacity-10">
                  <Quote className="w-12 h-12 text-white" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="mb-6 text-base font-medium leading-relaxed text-gray-900 transition-colors duration-300 lg:text-lg">
                    {testimonial.content}
                  </blockquote>

                  <div className="flex items-center space-x-3">
                    <Image
                      width={60}
                      height={60}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-12 h-12 rounded-full shadow-md"
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-900 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-xs font-medium text-purple-600 transition-colors duration-300">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="text-purple-600 rounded-full border border-purple-500 shadow-sm transition-all duration-300 cursor-pointer hover:bg-purple-600 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex justify-center space-x-2">
              {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 transform ${
                    index === currentIndex
                      ? 'bg-purple-600 scale-125 shadow-md'
                      : 'bg-purple-300 hover:bg-purple-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="text-purple-600 rounded-full border border-purple-500 shadow-sm transition-all duration-300 cursor-pointer hover:bg-purple-600 hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;