"use client";

import Link from "next/link";

const StudyAbroadHero = () => (
  <section id="home" className="relative min-h-[90vh] pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </div>

    {/* Content */}
    <div className="relative z-10 px-6 py-10 max-w-4xl text-center">
      <h1 className="mt-10 mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow-xl lg:text-6xl">
        Study Abroad<br className="hidden lg:block" /> Your Global Future Awaits
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-2xl font-medium leading-relaxed text-white/90">
        Unlock world-class education opportunities across top universities worldwide. We guide you through every step of your international study journey.
      </p>
      <Link href="#gallery" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg transition cursor-pointer hover:scale-105 hover:shadow-xl">
        Start Your Journey
      </Link>
    </div>
  </section>
);

export default StudyAbroadHero;
