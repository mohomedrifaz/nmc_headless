'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { Card } from "@/components/ui/card";

// Testimonial Data
const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        country: "United Kingdom",
        flag: "gb",
        image: "/student2.jpg",
        message: "Studying in the UK has been a life-changing experience. The academic support and cultural exposure have been phenomenal!"
    },
    {
        id: 2,
        name: "Amara Perera",
        country: "Australia",
        flag: "au",
        image: "/student3.webp",
        message: "The process was so smooth thanks to the NMC team. Australia is beautiful and the universities here are top-notch."
    },
    {
        id: 3,
        name: "Michael Chen",
        country: "Canada",
        flag: "ca",
        image: "/student4.webp",
        message: "I never thought I'd adjust so quickly. The friendly environment in Canada and the guidance I received made it easy."
    },
    {
        id: 4,
        name: "Priya Sharma",
        country: "United States",
        flag: "us",
        image: "/student2.jpg",
        message: "The US education system is very flexible. I'm loving my major and the diverse campus life!"
    },
    {
        id: 5,
        name: "Jason Lee",
        country: "New Zealand",
        flag: "nz",
        image: "/student3.webp",
        message: "New Zealand is peaceful and perfect for studies. The consultants helped me find the best scholarship options."
    },
    {
        id: 6,
        name: "Fatima Al-Sayed",
        country: "Malaysia",
        flag: "my",
        image: "/student4.webp",
        message: "Affordable and high quality. Malaysia was the right choice for me, and I'm grateful for the excellent advice."
    },
    {
        id: 7,
        name: "David Silva",
        country: "Germany",
        flag: "de",
        image: "/student2.jpg",
        message: "Learning German was a challenge, but the free education and research facilities are worth every bit of effort."
    },
    {
        id: 8,
        name: "Emma Watson",
        country: "Ireland",
        flag: "ie",
        image: "/student3.webp",
        message: "Ireland is so welcoming! The tech industry here is booming, and I'm excited about my career prospects."
    },
    {
        id: 9,
        name: "Raj Patel",
        country: "Singapore",
        flag: "sg",
        image: "/student4.webp",
        message: "Singapore is fast-paced and efficient. If you want a world-class degree in Asia, this is the place to be."
    },
    {
        id: 10,
        name: "Maria Gonzalez",
        country: "Spain",
        flag: "es",
        image: "/student2.jpg",
        message: "The culture, the food, and the spirited people! Spain has given me a global perspective I wouldn't trade."
    },
    {
        id: 11,
        name: "Hassan Ahmed",
        country: "United Arab Emirates",
        flag: "ae",
        image: "/student3.webp",
        message: "Studying in Dubai has connected me with people from all over the world. It's a true hub of innovation."
    },
    {
        id: 12,
        name: "Linda Kim",
        country: "South Korea",
        flag: "kr",
        image: "/student4.webp",
        message: "The blend of tradition and modernity in Korea is fascinating. My university experience has been outstanding."
    },
];

const sliderOptions = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    gap: '2rem',
    arrows: false,
    pagination: true,
    grid: true,
    breakpoints: {
        1024: { perPage: 2 },
        640: { perPage: 1 },
    },
};

const StudyAbroadTestimonials = () => {
    return (
        <section className="py-24 bg-gray-50 bg-[url('/double-bubble-outline.png')] bg-repeat">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 lg:text-5xl">
                        Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Success Stories</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        Hear from our students who have embarked on their global education journeys with us.
                    </p>
                </div>

                <Splide options={sliderOptions} aria-label="Student Testimonials">
                    {testimonials.map((student) => (
                        <SplideSlide key={student.id} className="pb-10">
                            <Card className="h-full p-6 transition-all duration-300 border-none shadow-lg hover:shadow-xl hover:-translate-y-1 bg-white rounded-2xl flex flex-col items-center text-center relative overflow-hidden">
                                
                                {/* Top Section: Flag - Empty for now */}
                                <div className="mb-6 h-10"></div>

                                {/* Middle Section: Student Photo */}
                                <div className="mb-6 relative">
                                    <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-purple-50 shadow-md mx-auto">
                                        <Image
                                            src={student.image}
                                            alt={student.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="mt-auto">
                                    <blockquote className="italic text-gray-700 mb-6 relative">
                                        <span className="text-4xl text-purple-200 absolute -top-4 -left-2">&quot;</span>
                                        {student.message}
                                        <span className="text-4xl text-purple-200 absolute -bottom-8 -right-2">&quot;</span>
                                    </blockquote>
                                    
                                    <h4 className="font-bold text-gray-900 text-lg">{student.name}</h4>
                                    <p className="text-sm text-purple-600 font-medium">{student.country}</p>
                                </div>
                            </Card>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
};

export default StudyAbroadTestimonials;
