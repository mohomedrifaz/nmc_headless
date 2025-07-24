"use client";
import { motion } from "framer-motion";

const WhyAttendSection = () => {
  const reasons = [
    "Network with top universities and industry leaders",
    "Gain real-world insights and mentorship",
    "Discover scholarships and global opportunities",
    "Boost your confidence and communication skills",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold text-purple-600"
        >
          Why Attend Our Events?
        </motion.h2>
        <div className="grid gap-8 mx-auto max-w-4xl md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-purple-50 rounded-xl shadow-sm transition hover:shadow-md"
            >
              <p className="font-medium text-gray-700">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection