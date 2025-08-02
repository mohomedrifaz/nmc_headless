"use client";

import Image from "next/image";

const images = [
    "/events/event1.jpg",
    "/events/event2.jpg",
    "/events/event3.jpg",
    "/events/event4.webp",
    "/events/event5.jpg",
    "/events/event6.jpg",
    "/events/event7.jpg",
    "/events/event8.jpg",
];

const PastEventsGallery = () => {
    return (
        <section className="text-white bg-gradient-to-br from-purple-600 via-indigo-500 to-purple-300 pt -20">
            <div className="container mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="pt-16 mb-4 text-4xl font-extrabold lg:text-5xl">
                        Highlights from <span className="text-yellow-300">Past Events</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-indigo-100">
                        A glimpse into the inspiring moments we have shared with students and educators.
                    </p>
                </div>

                <div className="grid grid-cols-4 grid-rows-2 gap-0">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden rounded-none shadow-none transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                        >
                            <Image
                                src={src}
                                alt={`Event ${index + 1}`}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PastEventsGallery;
