"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Users, Trophy, GraduationCap, Globe, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: GraduationCap,
      title: "University Admissions",
      description: "Get expert guidance for top university admissions worldwide with personalized application strategies.",
      features: ["Application Strategy", "Essay Writing", "Interview Prep", "Scholarship Guidance"],
      gradient: "from-primary to-primary-glow",
      bgColor: "bg-primary/5"
    },
    {
      icon: Globe,
      title: "Study Abroad Programs",
      description: "Explore international education opportunities with comprehensive support for studying overseas.",
      features: ["Country Selection", "Visa Assistance", "Accommodation Help", "Cultural Orientation"],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: BookOpen,
      title: "Academic Counseling",
      description: "Personalized academic planning to help you choose the right courses and career paths.",
      features: ["Career Assessment", "Course Selection", "Academic Planning", "Goal Setting"],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Skill Development",
      description: "Enhance your professional skills with our comprehensive training and development programs.",
      features: ["Professional Training", "Soft Skills", "Technical Skills", "Leadership Development"],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Trophy,
      title: "Test Preparation",
      description: "Achieve your target scores with our intensive test preparation programs for all major exams.",
      features: ["IELTS/TOEFL", "SAT/ACT", "GRE/GMAT", "Mock Tests"],
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Briefcase,
      title: "Career Services",
      description: "Professional career guidance and job placement assistance to kickstart your career.",
      features: ["Resume Building", "Interview Training", "Job Placement", "Career Coaching"],
      gradient: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(services.length / 3)) % Math.ceil(services.length / 3));
  };

  const getVisibleServices = () => {
    const startIndex = currentSlide * 3;
    return services.slice(startIndex, startIndex + 3);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 mx-auto lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Services</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Comprehensive educational services designed to support your academic journey and career aspirations
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
            {getVisibleServices().map((service, index) => (
              <Card key={index} className={`p-8 rounded-2xl ${service.bgColor} border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-[1.03]`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="mt-6 w-full text-purple-600 border-2 border-purple-400 transition-colors duration-300 cursor-pointer hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                >
                  Learn More
                </Button>
              </Card>

            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="text-purple-600 rounded-full border border-purple-500 shadow-sm transition-all duration-300 cursor-pointer hover:bg-purple-600 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>


            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-purple-600 scale-125' : 'bg-purple-300 hover:bg-purple-400'
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
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

export default ServicesCarousel;