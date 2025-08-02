"use client";

const EducationEventsHero = () => (
  <section className="relative min-h-[90vh] pt-20 flex items-center justify-center overflow-hidden">
    {/* Background Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="object-cover absolute inset-0 w-full h-full"
    >
      <source src="/test.mp4" type="video/mp4" />
    </video>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-900/70 z-[1]" />

    {/* Content */}
    <div className="relative z-10 px-6 py-10 max-w-4xl text-center">
      <h1 className="mt-10 mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow-xl lg:text-6xl">
        Empowering Minds<br className="hidden lg:block" /> Through Events
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-2xl font-medium leading-relaxed text-white/90">
        Discover transformative educational experiences that inspire, connect, and elevate learning across the globe.
      </p>
      <div className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg transition cursor-pointer hover:scale-105 hover:shadow-xl">
        Explore Events
      </div>
    </div>
  </section>
);

export default EducationEventsHero;
