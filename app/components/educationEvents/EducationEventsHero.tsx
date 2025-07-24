const EducationEventsHero = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center text-white text-center overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="object-cover absolute inset-0 z-0 w-full h-full"
    >
      <source src="./test.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 p-8 max-w-3xl rounded-xl bg-black/50">
      <h1 className="mb-4 text-4xl font-bold lg:text-5xl">Empowering Minds Through Events</h1>
      <p className="text-lg">
        Discover transformative educational events that inspire, connect, and elevate learning experiences.
      </p>
    </div>
  </section>
);

export default EducationEventsHero