"use client";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const CeoMessageSection = () => {
    return (
        <section id="ceo-message" className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container px-4 mx-auto lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                        A Word from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">CEO</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600">
                        Our vision, values, and commitment to student success—directly from the heart of our leadership.
                    </p>
                </div>

                {/* CEO Message Card */}
                <Card className="p-8 mx-auto max-w-4xl bg-white rounded-2xl border border-gray-200 shadow-lg lg:p-12">
                    <div className="flex flex-col gap-8 items-center lg:flex-row">
                        <Image
                            src="/suresh.png"
                            alt="CEO Portrait"
                            width={120}
                            height={120}
                            className="object-cover rounded-full border-4 border-white shadow-lg"
                            style={{ aspectRatio: '1 / 1' }}
                        />
                        <div className="flex-1">
                            <div className="mb-4">
                                <Quote className="mb-2 w-8 h-8 text-purple-500" />
                                <p className="text-lg font-medium leading-relaxed text-gray-700">
                                    At EduGateway, we believe every student deserves a chance to shine. Our mission is to empower dreams through education, innovation, and unwavering support. Your success is our purpose.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Mr. Suresh Reeza</h4>
                                <p className="text-sm text-purple-600">Founder & CEO, NMC</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default CeoMessageSection;
