'use client';

import Image from "next/image";
import Link from "next/link";

const SecondaryHero = () => {
  return (
    <section className="relative w-full min-h-[400px] sm:h-[500px] md:h-[600px]">
      {/* Background Image */}
      <Image
        src="/studentshero.jpg"
        alt="Lifelong Learning"
        width={1000}
        height={1000}
        className="object-cover absolute inset-0 w-full h-full"
      />

      {/* Right Overlay */}
      <div className="flex absolute inset-0 justify-end items-center bg-gradient-to-l to-transparent from-purple-800/70 sm:from-purple-800/70">
        <div className="p-4 max-w-md text-center text-white sm:p-6 md:p-8 sm:text-right">
          <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">Don&apos;t Pray but Get Invited for Global Careers</h2>
          <p className="mb-4 text-sm leading-relaxed sm:mb-6 sm:text-base md:text-lg">
            Ready to take the leap and reach your next career milestone? At our Academy for Continuing Education, you&apos;ll deepen your knowledge, take ownership of your learning, and master skills that will give you an edge.
          </p>
          <Link
            href="#"
            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white bg-green-500 rounded transition hover:bg-green-600"
          >
            I Want to Know More »
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHero;
