'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { motion } from "framer-motion";

const destinations = [
    { name: 'Australia', flag: '/australia.svg' },
    { name: 'Canada', flag: '/canada.png' },
    { name: 'Malaysia', flag: '/malaysia.svg' },
    { name: 'New Zealand', flag: '/nz.png' },
    { name: 'Singapore', flag: '/sinagpore.svg' },
    { name: 'UK', flag: '/uk.png' },
];

const sliderOptions = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    speed: 1000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    drag: 'free',
    flickPower: 100,
    gap: '2rem',
    breakpoints: {
        1024: { perPage: 4 },
        768: { perPage: 3 },
        640: { perPage: 2 },
        480: { perPage: 1, padding: '2rem' },
    },
};

const CountryFlagSlider = () => {
    return (
        <section className="pt-12 bg-gradient-to-br from-purple-50 to-white bg-[url('/double-bubble-outline.png')] bg-repeat">
            <div className="container px-4 mx-auto max-w-6xl text-center lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-5xl font-extrabold leading-tight text-gray-900"
                >
                </motion.h2>
                <Splide options={sliderOptions} aria-label="Study Abroad Destinations">
                    {destinations.map((country, index) => (
                        <SplideSlide key={index} className="py-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white via-white to-purple-50 rounded-2xl shadow-lg transition-all duration-500 border border-purple-100 h-full group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-indigo-400/0 to-blue-400/0 group-hover:from-purple-400/5 group-hover:via-indigo-400/5 group-hover:to-blue-400/5 transition-all duration-500"></div>
                                <div className="relative w-32 h-20 mb-6 shadow-lg rounded-xl overflow-hidden transform group-hover:scale-110 transition-transform duration-500 ring-4 ring-white/50 group-hover:ring-purple-200">
                                    <Image
                                        src={country.flag}
                                        alt={`${country.name} Flag`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-500 relative z-10">{country.name}</h3>
                            </motion.div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
};

export default CountryFlagSlider;
