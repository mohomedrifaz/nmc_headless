import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudents from "@/app/assets/student1.jpg";
import heroStudents2 from "@/app/assets/studentshero2.jpg";
import heroStudents3 from "@/app/assets/studentshero3.jpg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="flex overflow-hidden relative items-center pt-20 sm:pt-24 md:pt-[96px] min-h-screen bg-gradient-to-br from-indigo-400 via-purple-300 to-purple-100"
        >
            <div className="container px-4 py-8 mx-auto lg:px-8 sm:py-12">

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-96px)]">
                    {/* Left Section */}
                    <div className="space-y-3 text-center sm:space-y-4 lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-300">
                            <Star className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4 text-indigo-600" />
                            Hi, Lets work together
                        </div>

                        {/* Heading */}
                        <div className="space-y-3 sm:space-y-4">
                            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                                <span>Your Gateway</span>
                                <br />
                                <span>to a </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                                    New World
                                </span>
                                <br />
                                <span>of Success!</span>
                            </h1>
                            <p className="mx-auto max-w-lg text-sm italic leading-relaxed text-gray-700 md:mx-0 sm:text-base md:text-lg">
                                Step into a world of endless possibilities with us! Unlock the
                                doors to success and discover a brighter future filled with
                                growth and success.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col gap-3 justify-center sm:gap-4 sm:flex-row lg:justify-start">
                            <Link href="#contact">
                                <Button className="px-6 py-3 w-full h-auto text-base text-white bg-gradient-to-r from-indigo-500 to-purple-500 transition-all cursor-pointer sm:w-auto sm:px-8 sm:py-4 sm:text-lg hover:shadow-lg">
                                    Get Started
                                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Section with Staggered Cards */}
                    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] xl:h-[500px] hidden lg:flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {[
                                { title: "Study Abroad", className: "top-4 left-24", wide: false, image: heroStudents, href: "/study-abroad" },
                                { title: "Skills Upgrade", className: "top-20 right-8", wide: false, image: heroStudents2, href: "/skills-upgrade" },
                                { title: "Edu Events", className: "bottom-12 left-0", wide: true, image: heroStudents3, href: "/education-events" },
                            ].map((item) => (
                                <Link key={item.title} href={item.href}>
                                <div
                                    className={`absolute ${item.className} ${item.wide ? "w-80 h-44" : "w-52 h-60"}
    rounded-2xl overflow-hidden shadow-xl group hover:scale-[1.05] transition-transform duration-300
    border border-white/20 backdrop-blur-sm cursor-pointer`}
                                >

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60 via-black/30" />
                                    <div className="absolute bottom-4 left-4 z-10 text-white">
                                        <h4 className="text-xl font-bold tracking-wide drop-shadow-md transition-colors duration-300 group-hover:text-yellow-300">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                                </Link>

                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
