"use client"

import { motion } from 'framer-motion';

const EducationEventsInfo = () => (
  <section className="py-24">
    <div className="container px-4 mx-auto max-w-4xl text-center lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-4xl font-extrabold text-blue-900"
      >
        <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          What Are Education Events?
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl leading-relaxed text-gray-700"
      >
        Our education events bring together students, educators, and industry experts to foster learning, collaboration, and innovation. From seminars to workshops, we create impactful experiences that shape futures.
      </motion.p>
    </div>
  </section>
);

export default EducationEventsInfo;
