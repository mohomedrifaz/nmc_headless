"use client";

import { Users, Handshake, Globe } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Community Driven",
    description: "Be part of a growing network of learners, educators, and changemakers.",
  },
  {
    icon: Handshake,
    title: "Collaborate & Connect",
    description: "Partner with us to host, speak, or support future events.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Join hands to make education accessible and inspiring worldwide.",
  },
];

const GetInvolvedSection = () => (
  <section className="overflow-hidden relative py-20 bg-white bg-[url('/double-bubble-outline.png')] bg-repeat">
    {/* Pattern Background */}

    <div className="container px-4 mx-auto text-center lg:px-8">
      <h2 className="mb-6 text-4xl font-extrabold text-gray-900 lg:text-5xl">
        Join the <span className="text-yellow-300">Movement</span>
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-700">
        Whether you are a student, educator, or institution—there is a place for you in our journey to transform education.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md transition-all cursor-pointer hover:shadow-lg hover:bg-purple-50"
          >
            <div className="flex justify-center mb-4">
              <item.icon className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-base text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GetInvolvedSection;
