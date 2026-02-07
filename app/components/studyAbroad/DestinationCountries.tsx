"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const countries = [
  {
    name: "United Kingdom",
    description: "World-renowned institutions with rich academic heritage and global recognition.",
    flag: "🇬🇧",
    universities: "160+",
    monumentImage: "/ukmonument.jpg",
  },
  {
    name: "Canada",
    description: "High-quality education, welcoming environment, and post-graduation work opportunities.",
    flag: "🇨🇦",
    universities: "200+",
    monumentImage: "/canadamonument.jpg",
  },
  {
    name: "Australia",
    description: "Innovative programs, beautiful campuses, and strong industry connections.",
    flag: "🇦🇺",
    universities: "43",
    monumentImage: "/australiamonument.jpg",
  },
  {
    name: "New Zealand",
    description: "Innovative programs, beautiful campuses, and strong industry connections.",
    flag: "🇳🇿",
    universities: "43",
    monumentImage: "/nzmonument.jpg",
  },
  {
    name: "Singapore",
    description: "Asian education hub with cutting-edge facilities and multicultural environment.",
    flag: "🇸🇬",
    universities: "6",
    monumentImage: "/singaporemonument.jpg",
  },
  {
    name: "Malaysia",
    description: "Tuition-free education at public universities with excellent research facilities.",
    flag: "🇩🇪",
    universities: "400+",
    monumentImage: "/malaysiamonument.jpg",
  },
];

const DestinationCountries = () => (
  <section id="gallery" className="py-24 bg-gradient-to-r from-purple-50 to-white bg-[url('/double-bubble-outline.png')] bg-repeat">
    <div className="container px-4 mx-auto text-center lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-4xl font-extrabold text-purple-700 lg:text-5xl"
      >
        Popular Study Destinations
      </motion.h2>
      <p className="mb-12 mx-auto max-w-2xl text-lg text-gray-600">
        Explore top study destinations around the world and find the perfect fit for your academic and career goals.
      </p>

      <div className="grid gap-6 mx-auto max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden bg-white rounded-xl cursor-pointer shadow-lg hover:shadow-purple-300 transition transform hover:scale-[1.03] border border-purple-100 h-full">

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${country.monumentImage})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center p-6 h-full">
                <h3 className="mb-2 text-3xl font-bold text-white">
                  {country.name}
                </h3>

                <p className="mb-4 text-gray-200 text-sm">
                  {country.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-300 w-full">
                  <p className="text-sm font-medium text-purple-200">
                    {country.universities} Universities
                  </p>
                </div>
              </div>

            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DestinationCountries;
