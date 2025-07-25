import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudents from "@/app/assets/student1.jpg";
import Image from "next/image";

const HeroSection = () => {
    return (

        <section
            id="home"
            className="flex overflow-hidden relative items-center h-screen bg-gradient-to-br from-indigo-400 via-purple-200 to-white"
        >
            <div className="container px-4 mx-auto lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
                    {/* Left Section */}
                    <div className="space-y-4">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-300">
                            <Star className="mr-2 w-4 h-4 text-indigo-600" />
                            Hi, Lets work together
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl font-bold text-gray-900 lg:text-6xl">
                                <span>Your Gateway</span>
                                <br />
                                <span>to a </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                                    New World
                                </span>
                                <br />
                                <span>of Success!</span>
                            </h1>
                            <p className="max-w-lg text-lg leading-relaxed text-gray-600">
                                Step into a world of endless possibilities with us! Unlock the
                                doors to success and discover a brighter future filled with
                                growth, innovation, and achievement. Your journey to greatness
                                starts here.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button className="px-8 py-4 h-auto text-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 transition-all cursor-pointer hover:shadow-lg">
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                className="px-8 py-4 h-auto text-lg text-indigo-600 border-indigo-600 transition-all cursor-pointer hover:bg-indigo-600 hover:text-white"
                            >
                                <Play className="mr-2 w-5 h-5" />
                                Watch Demo
                            </Button>
                        </div>
                    </div>

                    {/* Right Section with Staggered Cards */}
                    <div className="relative h-[550px] flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {[
                                { title: "Study Abroad", className: "top-12 left-16", wide: false },
                                { title: "Skill Training", className: "top-24 right-0", wide: false },
                                { title: "Edu Events", className: "bottom-0 left-0", wide: true },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${item.className} ${item.wide ? "w-80 h-50" : "w-60 h-70"
                                        } rounded-2xl overflow-hidden shadow-md group hover:scale-[1.05] transition-transform duration-300`}
                                >
                                    <Image
                                        src={heroStudents}
                                        alt={item.title}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60 via-black/30" />
                                    <div className="absolute bottom-4 left-4 z-10 text-white">
                                        <h4 className="text-lg font-semibold">{item.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
