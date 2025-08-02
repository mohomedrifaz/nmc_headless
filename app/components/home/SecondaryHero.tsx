'use client';

import Image from "next/image";
import Link from "next/link";

const SecondaryHero = () => {
  return (
    <section className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src="/studentshero.jpg"
        alt="Lifelong Learning"
        width={1000}
        height={1000}
        className="object-cover absolute inset-0 w-full h-full"
      />

      {/* Right Overlay */}
      <div className="flex absolute inset-0 justify-end items-center bg-gradient-to-l to-transparent from-purple-800/70">
        <div className="p-8 max-w-md text-right text-white">
          <h2 className="mb-4 text-4xl font-bold">Become A Leader In Lifelong Learning</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Ready to take the leap and reach your next career milestone? At our Academy for Continuing Education, you’ll deepen your knowledge, take ownership of your learning, and master skills that will give you an edge.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-3 font-semibold text-white bg-green-500 rounded transition hover:bg-green-600"
          >
            FIND OUT MORE »
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHero;
