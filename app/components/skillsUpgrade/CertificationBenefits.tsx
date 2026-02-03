"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Award, Briefcase, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Increase your earning potential and open doors to better job opportunities.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Gain credentials that are recognized and valued by employers worldwide.",
  },
  {
    icon: Users,
    title: "Professional Network",
    description: "Connect with like-minded professionals and expand your industry contacts.",
  },
  {
    icon: Briefcase,
    title: "Job Security",
    description: "Stay relevant in your field and reduce the risk of career obsolescence.",
  },
  {
    icon: DollarSign,
    title: "Higher Salary",
    description: "Certified professionals typically earn 15-25% more than non-certified peers.",
  },
  {
    icon: CheckCircle,
    title: "Confidence Boost",
    description: "Build confidence in your abilities with validated skills and knowledge.",
  },
];

const CertificationBenefits = () => (
  <section id="gallery" className="py-24 bg-gradient-to-r from-green-50 to-white bg-[url('/double-bubble-outline.png')] bg-repeat">
    <div className="container px-4 mx-auto text-center lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-4xl font-extrabold text-gray-900 lg:text-5xl"
      >
        Benefits of Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Certification</span>
      </motion.h2>
      <p className="mb-12 mx-auto max-w-2xl text-lg text-gray-600">
        Investing in skills certification is investing in your future. Discover how professional certifications can transform your career.
      </p>

      <div className="grid gap-6 mx-auto max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-white rounded-xl cursor-pointer shadow-lg hover:shadow-green-300 transition transform hover:scale-[1.03] border border-green-100 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationBenefits;
