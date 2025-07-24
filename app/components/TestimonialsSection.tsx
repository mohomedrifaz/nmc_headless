"use client"
import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-purple-50 to-white">
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
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Current Testimonial (Large) */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden relative p-8 bg-white rounded-2xl border border-gray-200 shadow-lg lg:p-12">
                <div className="absolute top-6 left-6 opacity-10">
                  <Quote className="w-16 h-16 text-purple-500" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="mb-8 text-xl font-medium leading-relaxed text-gray-900 lg:text-2xl">
                    {testimonials[currentTestimonial].content}
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <Image
                      width={100}
                      height={100}
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="object-cover w-16 h-16 rounded-full shadow-md"
                    />
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="font-medium text-purple-600">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[currentTestimonial].country}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Side Testimonials Preview */}
            <div className="space-y-4">
              {testimonials.slice(1, 3).map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 bg-purple-50 rounded-xl border border-purple-100 transition-all duration-300 cursor-pointer hover:shadow-md"
                  onClick={() => setCurrentTestimonial((currentTestimonial + index + 1) % testimonials.length)}
                >
                  <div className="flex items-center mb-3 space-x-3">
                    <Image
                      width={100}
                      height={100}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-xs text-purple-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
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
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 transform ${index === currentTestimonial
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