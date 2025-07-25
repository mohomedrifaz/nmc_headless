"use client";
import { BookOpen, Users, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const ServicesGrid = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Admissions",
      description: "Get expert guidance for top university admissions worldwide with personalized application strategies.",
      features: ["Application Strategy", "Essay Writing", "Interview Prep"],
      imageUrl: "/student2.jpg",
    },
    {
      icon: BookOpen,
      title: "Academic Counseling",
      description: "Personalized academic planning to help you choose the right courses and career paths.",
      features: ["Career Assessment", "Course Selection", "Academic Planning"],
      imageUrl: "/student2.jpg",
    },
    {
      icon: Users,
      title: "Skill Development",
      description: "Enhance your professional skills with our comprehensive training and development programs.",
      features: ["Professional Training", "Soft Skills", "Technical Skills"],
      imageUrl: "/student2.jpg",
    },
  ];

  return (
    <section className="px-12 py-20 bg-gradient-to-br from-indigo-400 via-purple-200 to-white">
      <div className="container px-4 mx-auto lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 drop-shadow-sm lg:text-5xl">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">
              Services
            </span>
          </h2>
          <p className="py-4 mx-auto max-w-3xl text-lg text-gray-600">
            Our vision, values, and commitment to student success—directly from the heart of our leadership.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group rounded-2xl cursor-pointer h-[500px] py-0 gap-0 overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:scale-[1.08]"
            >
              {/* Top Image Section */}
              <div
                className="w-full h-72 bg-center bg-cover"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              />

              {/* Bottom Text Section */}
              <div className="p-6 h-full transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                <div className="flex justify-center items-center mb-4">
                  <h3 className="text-2xl font-bold text-center text-inherit">{service.title}</h3>
                </div>
                <p className="mb-6 leading-relaxed text-inherit">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full group-hover:bg-white" />
                      <span className="text-sm text-inherit">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
