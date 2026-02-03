"use client";

import { motion } from "framer-motion";
import { Globe, GraduationCap, Award, FileText } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Global University Network",
    description: "Access to 500+ top universities across USA, UK, Canada, Australia, and more.",
  },
  {
    icon: GraduationCap,
    title: "Expert Counseling",
    description: "Personalized guidance from experienced counselors who understand international education systems.",
  },
  {
    icon: Award,
    title: "Scholarship Assistance",
    description: "Maximize your chances of securing scholarships and financial aid for your studies.",
  },
  {
    icon: FileText,
    title: "Application Support",
    description: "Complete assistance with applications, essays, and documentation requirements.",
  },
];

const StudyAbroadInfo = () => (
  <section id="about" className="py-24 bg-gradient-to-br from-purple-50 to-white bg-[url('/double-bubble-outline.png')] bg-repeat">
    <div className="container px-4 mx-auto max-w-6xl text-center lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-5xl font-extrabold leading-tight text-gray-900"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Why Choose Our Study Abroad Services?
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-700"
      >
        We've helped thousands of students achieve their dreams of studying abroad. Our comprehensive services cover everything from university selection to visa processing, ensuring a smooth transition to your new academic home.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-6 bg-white rounded-2xl shadow-md transition-all cursor-pointer 
                     hover:shadow-2xl hover:scale-[1.03] hover:bg-gradient-to-br 
                     hover:from-purple-100 hover:to-indigo-100"
          >
            <div className="flex justify-center mb-4">
              <item.icon className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-base text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StudyAbroadInfo;
