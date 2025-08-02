"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, CalendarDays } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Expert-Led Sessions",
    description: "Learn directly from educators, professionals, and thought leaders in the field.",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Connect with peers, mentors, and institutions to expand your academic horizons.",
  },
  {
    icon: CalendarDays,
    title: "Diverse Formats",
    description: "Attend seminars, workshops, webinars, and more tailored to your goals.",
  },
];

const EducationEventsInfo = () => (
  <section className="py-24 bg-gradient-to-br from-purple-50 to-white bg-[url('/double-bubble-outline.png')] bg-repeat">
    <div className="container px-4 mx-auto max-w-5xl text-center lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-5xl font-extrabold leading-tight text-gray-900"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          What Are Education Events?
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-700"
      >
        Our education events bring together students, educators, and industry experts to foster learning, collaboration, and innovation. From seminars to workshops, we create impactful experiences that shape futures.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 bg-white rounded-2xl shadow-md transition-all cursor-pointer 
                     hover:shadow-2xl hover:scale-[1.03] hover:bg-gradient-to-br 
                     hover:from-purple-100 hover:to-indigo-100"
          >
            <div className="flex justify-center mb-4">
              <item.icon className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-base text-gray-600">{item.description}</p>
          </motion.div>

        ))}
      </div>
    </div>
  </section>
);

export default EducationEventsInfo;
