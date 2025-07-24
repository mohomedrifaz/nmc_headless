"use client";

const EducationEventsHero = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="object-cover absolute inset-0 w-full h-full"
    >
      <source src="/test.mp4" type="video/mp4" />
    </video>

    <div className="relative z-10 px-6 py-10 max-w-4xl text-center">
      <h1 className="mt-10 mb-4 text-5xl font-black text-white drop-shadow-lg">
        Empowering Minds Through Events
      </h1>
      <p className="mb-6 text-xl font-medium text-white/90">
        Discover transformative educational events that inspire, connect, and elevate learning experiences.
      </p>
      <div className="inline-block px-6 py-3 font-semibold text-white bg-purple-600 rounded-full shadow-md transition text-md hover:bg-purple-700">
        Explore Events
      </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-900/70 z-[1]" />
  </section>
);

export default EducationEventsHero;