import { Card } from "@/components/ui/card";
import { MapPin, DollarSign, Users, BookOpen } from "lucide-react";

const StudyAbroadServices = () => {
    const services = [
        {
            title: "University Selection",
            description: "Find the perfect university match based on your academic profile, interests, and career goals.",
            icon: MapPin,
            features: ["Country Selection", "University Rankings", "Program Matching"],
        },
        {
            title: "Scholarship Guidance",
            description: "Navigate scholarship opportunities and maximize your financial aid options.",
            icon: DollarSign,
            features: ["Merit Scholarships", "Need-Based Aid", "Application Support"],
        },
        {
            title: "Visa Assistance",
            description: "Complete visa application support with expert guidance and documentation help.",
            icon: Users,
            features: ["Documentation", "Interview Prep", "Application Filing"],
        },
        {
            title: "Application Support",
            description: "End-to-end application assistance including essays, recommendations, and deadlines.",
            icon: BookOpen,
            features: ["Essay Writing", "Recommendations", "Deadline Management"],
        },
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-br from-indigo-400 via-purple-300 to-white">
            <div className="container px-4 mx-auto lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 drop-shadow-sm lg:text-5xl">
                        Our Study Abroad{" "}
                        <span className="text-yellow-300">
                            Services
                        </span>
                    </h2>
                    <p className="py-4 mx-auto max-w-3xl text-lg font-semibold text-gray-700">
                        Comprehensive support for your entire study abroad journey, from initial planning to arrival at your destination.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group rounded-2xl cursor-pointer h-full py-6 px-6 border border-gray-200 shadow-md transition-all duration-300 hover:scale-[1.05] hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-600 hover:text-white"
                        >
                            <div className="flex flex-col items-center text-center mb-4">
                                <service.icon className="w-12 h-12 mb-4 text-purple-600 group-hover:text-white transition-colors" />
                                <h3 className="text-xl font-bold text-inherit mb-2">{service.title}</h3>
                                <p className="mb-4 text-sm leading-relaxed text-inherit">{service.description}</p>
                            </div>
                            <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-inherit">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full group-hover:bg-white transition-colors" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudyAbroadServices;
