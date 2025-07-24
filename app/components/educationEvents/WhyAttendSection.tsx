"use client";
import { motion } from "framer-motion";
import { FaUniversity, FaLightbulb, FaGlobe, FaComments } from "react-icons/fa";

const reasons = [
  {
    title: "Top-tier Networking",
    description: "Connect with leading universities and renowned industry experts.",
    icon: <FaUniversity className="mb-3 text-3xl text-purple-600" />,
  },
  {
    title: "Mentorship & Insights",
    description: "Gain real-world knowledge and guidance from seasoned professionals.",
    icon: <FaLightbulb className="mb-3 text-3xl text-purple-600" />,
  },
  {
    title: "Global Opportunities",
    description: "Explore scholarships, fellowships, and international programs.",
    icon: <FaGlobe className="mb-3 text-3xl text-purple-600" />,
  },
  {
    title: "Personal Growth",
    description: "Build confidence and sharpen your communication abilities.",
    icon: <FaComments className="mb-3 text-3xl text-purple-600" />,
  },
];

const WhyAttendSection = () => (
  <section className="py-24 bg-gradient-to-r from-purple-50 to-white">
    <div className="container px-4 mx-auto text-center lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-4xl font-extrabold text-purple-700"
      >
        Why Attend Our Events?
      </motion.h2>

      <div className="grid gap-10 mx-auto max-w-5xl sm:grid-cols-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="p-8 bg-white rounded-xl shadow-xl hover:shadow-purple-300 transition transform hover:scale-[1.03] border border-purple-100"
          >
            <div className="flex flex-col items-center text-center">
              {reason.icon}
              <h3 className="mb-2 text-xl font-semibold text-purple-800">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyAttendSection;