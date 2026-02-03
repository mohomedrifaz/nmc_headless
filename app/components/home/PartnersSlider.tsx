'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

// Sri Lankan Partners
const sriLankanPartners = [
    '/logoicbt.png',
    '/partner1.png',
    '/partner2.png',
    '/partner3.png',
    '/partner4.png',
    '/partner5.png',
    '/partner6.png',
    '/partner7.png',
];

// Other Partners
const otherPartners = [
    '/partner8.png',
    '/partner9.png',
    '/partner10.png',
    '/partner11.png',
    '/partner12.png',
    '/partner13.png',
    '/partner14.png',
    '/partner15.png',
    '/partner16.png',
    '/partner17.png',
    '/partner18.png',
    '/partner19.png',
    '/partner20.png',
];


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
        <section id="gallery" className="py-24 text-white bg-[url('/double-bubble-outline.png')] bg-repeat">
            <div className="container px-4 mx-auto text-center">
                <h2 className="mb-8 text-4xl font-bold text-gray-800 drop-shadow-sm lg:text-5xl">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">
                        Partners
                    </span>
                    <p className="py-4 mx-auto max-w-3xl text-lg font-semibold text-gray-700">
                        Our vision, values, and commitment to student success—directly from the heart of our leadership.
                    </p>
                </h2>

                {/* Sri Lankan Partners Row */}
                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-700">Sri Lankan Partners</h3>
                    <Splide options={sliderOptions('ltr')} aria-label="Sri Lankan Partners" className="mb-6">
                        {sriLankanPartners.map((logo, index) => (
                            <SplideSlide key={`sri-lankan-${index}`}>
                                <Image
                                    src={logo}
                                    alt={`Sri Lankan Partner ${index + 1}`}
                                    width={120}
                                    height={120}
                                    className="object-contain mx-auto w-auto h-20"
                                />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>

                {/* Other Partners Row 1 */}
                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-700">International Partners</h3>
                    <Splide options={sliderOptions('rtl')} aria-label="International Partners Row 1" className="mb-6">
                        {otherPartners.slice(0, Math.ceil(otherPartners.length / 2)).map((logo, index) => (
                            <SplideSlide key={`other-1-${index}`}>
                                <Image
                                    src={logo}
                                    alt={`International Partner ${index + 1}`}
                                    width={120}
                                    height={120}
                                    className="object-contain mx-auto w-auto h-20"
                                />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>

                {/* Other Partners Row 2 */}
                <Splide options={sliderOptions('ltr')} aria-label="International Partners Row 2">
                    {otherPartners.slice(Math.ceil(otherPartners.length / 2)).map((logo, index) => (
                        <SplideSlide key={`other-2-${index}`}>
                            <Image
                                src={logo}
                                alt={`International Partner ${index + Math.ceil(otherPartners.length / 2) + 1}`}
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
