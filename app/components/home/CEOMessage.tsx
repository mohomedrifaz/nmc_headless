"use client";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const CeoMessageSection = () => {
    return (
        <section id="ceo-message" className="py-20 bg-gradient-to-b from-purple-50 to-white bg-[url('/double-bubble-outline.png')] bg-repeat">
            <div className="container px-4 mx-auto lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                        A Word from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">CEO</span>
                    </h2>
                </div>

                {/* CEO Message Card */}
                <Card
                    className="group p-8 mx-auto max-w-6xl bg-white rounded-2xl border border-gray-200 shadow-lg lg:p-12 
             transition-all duration-300 cursor-pointer"
                >
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Column 1: Photo */}
                        <div className="flex justify-center items-center">
                            <Image
                                src="/suresh.jpg"
                                alt="CEO Portrait"
                                width={200}
                                height={200}
                                className="object-cover rounded-full border-4 border-white shadow-lg"
                                style={{ aspectRatio: '1 / 1' }}
                            />
                        </div>
                        
                        {/* Column 2: Message */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-4">
                                <Quote className="mb-2 w-8 h-8 text-purple-500 transition-colors duration-300" />
                                <p className="text-lg font-medium leading-relaxed text-gray-700 transition-colors duration-300">
                                    At NMC, we believe every student deserves a chance to shine. Our mission is to empower dreams through education, innovation, and unwavering support. Your success is our purpose.
                                </p>
                            </div>
                        </div>
                        
                        {/* Column 3: Name and Title */}
                        <div className="flex flex-col justify-center">
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 transition-colors duration-300 mb-2">
                                    Mr. Suresh Reeza
                                </h4>
                                <p className="text-lg text-purple-600 transition-colors duration-300">
                                    Founder & CEO, NMC
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>

            </div>
        </section>
    );
};

export default CeoMessageSection;
