'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

const logos = Array(10).fill('/logoicbt.png'); // Replace with your actual logo

const sliderOptions = (direction: 'ltr' | 'rtl') => ({
    type: 'loop',
    perPage: 5,
    perMove: 1,
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    drag: true,
    speed: 2000,
    direction,
    gap: '2rem',
    breakpoints: {
        1024: { perPage: 4 },
        768: { perPage: 3 },
        480: { perPage: 2 },
    },
});

const PartnersSlider = () => {
    return (
        <section className="py-24 text-white bg-gradient-to-br from-indigo-400 via-purple-200 to-white">
            <div className="container px-4 mx-auto text-center">
                <h2 className="mb-8 text-4xl font-bold text-gray-800 drop-shadow-sm lg:text-5xl">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">
                        Partners
                    </span>
                    <p className="py-4 mx-auto max-w-3xl text-lg text-gray-600">
                        Our vision, values, and commitment to student success—directly from the heart of our leadership.
                    </p>
                </h2>

                {/* Top Row - scrolls left */}
                <Splide options={sliderOptions('ltr')} aria-label="Top Row Logos" className="mb-10">
                    {[...logos, ...logos].map((logo, index) => (
                        <SplideSlide key={`top-${index}`}>
                            <Image
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                width={120}
                                height={120}
                                className="object-contain mx-auto w-auto h-20"
                            />
                        </SplideSlide>
                    ))}
                </Splide>

                {/* Bottom Row - scrolls right */}
                <Splide options={sliderOptions('rtl')} aria-label="Bottom Row Logos">
                    {[...logos, ...logos].map((logo, index) => (
                        <SplideSlide key={`bottom-${index}`}>
                            <Image
                                src={logo}
                                alt={`Partner ${index + 11}`}
                                width={120}
                                height={120}
                                className="object-contain mx-auto w-auto h-20"
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
};

export default PartnersSlider;
