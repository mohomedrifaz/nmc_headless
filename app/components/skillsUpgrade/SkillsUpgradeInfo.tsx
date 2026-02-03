"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Gain skills that employers value and accelerate your career growth in competitive markets.",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Earn recognized certifications that validate your expertise and boost your professional profile.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with real-world experience and proven track records.",
  },
  {
    icon: Briefcase,
    title: "Practical Training",
    description: "Hands-on learning experiences that prepare you for real workplace challenges.",
  },
];

const SkillsUpgradeInfo = () => (
  <section id="about" className="py-24 bg-gradient-to-br from-green-50 to-white bg-[url('/double-bubble-outline.png')] bg-repeat">
    <div className="container px-4 mx-auto max-w-6xl text-center lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-5xl font-extrabold leading-tight text-gray-900"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
          Why Upgrade Your Skills?
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-700"
      >
        In today's rapidly evolving job market, continuous learning is essential. Our skills upgrade programs are designed to keep you competitive, relevant, and ready for future opportunities.
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
                     hover:from-green-100 hover:to-emerald-100"
          >
            <div className="flex justify-center mb-4">
              <item.icon className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-base text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsUpgradeInfo;
