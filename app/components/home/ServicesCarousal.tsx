"use client";
import { BookOpen, Users, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const ServicesGrid = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Study Abroad",
      description: "Get expert guidance for top university admissions worldwide with personalized application strategies.",
      features: ["Application Strategy", "Essay Writing", "Interview Prep"],
      imageUrl: "/student2.jpg",
      href: "/study-abroad",
    },
    {
      icon: Users,
      title: "Skills Upgrade",
      description: "Enhance your professional skills with our comprehensive training and development programs.",
      features: ["Professional Training", "Soft Skills", "Technical Skills"],
      imageUrl: "/student2.jpg",
      href: "/skills-upgrade",
    },
    {
      icon: BookOpen,
      title: "Edu Events",
      description: "Join our educational events and webinars to stay informed about the latest opportunities.",
      features: ["Webinars", "Workshops", "Networking Events"],
      imageUrl: "/student2.jpg",
      href: "/education-events",
    },
  ];

  return (
    <section id="services" className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-400 via-purple-300 to-white">
      <div className="container px-4 mx-auto lg:px-8">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 drop-shadow-sm lg:text-5xl">
            Our{" "}
            <span className="text-yellow-300">
              Services
            </span>
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
            <Card
              className="group rounded-2xl cursor-pointer h-auto sm:h-[450px] md:h-[500px] py-0 gap-0 overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:scale-[1.05] sm:hover:scale-[1.08]"
            >
              {/* Top Image Section */}
              <div
                className="w-full h-48 sm:h-56 md:h-72 bg-center bg-cover"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              />

              {/* Bottom Text Section */}
              <div className="p-4 sm:p-5 md:p-6 h-full transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                <div className="flex justify-center items-center mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-center text-inherit">{service.title}</h3>
                </div>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-inherit">{service.description}</p>

                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full group-hover:bg-white" />
                      <span className="text-xs sm:text-sm text-inherit">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
