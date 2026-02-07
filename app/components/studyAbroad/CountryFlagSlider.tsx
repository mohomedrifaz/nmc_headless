'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

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
    perPage: 5,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    speed: 1000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    drag: true,
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
        <section className="py-12 bg-white border-b border-gray-100">
             <div className="container px-4 mx-auto">
                <div className="mb-8 text-center">
                    <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
                        Choose Your Destination
                    </p>
                </div>
                <Splide options={sliderOptions} aria-label="Study Abroad Destinations">
                    {destinations.map((country, index) => (
                        <SplideSlide key={index} className="py-4">
                            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full group">
                                <div className="relative w-20 h-14 mb-4 shadow-sm rounded-md overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                                     <Image
                                        src={country.flag}
                                        alt={`${country.name} Flag`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{country.name}</h3>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
             </div>
        </section>
    );
};

export default CountryFlagSlider;
