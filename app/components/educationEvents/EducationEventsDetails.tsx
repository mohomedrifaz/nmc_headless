import { Card } from "@/components/ui/card";

const EducationEventsDetails = () => {
    const childServices = [
        {
            title: "Workshops & Seminars",
            description: "Interactive sessions led by experts to enhance skills and knowledge.",
            image: "/student2.jpg",
        },
        {
            title: "University Fairs",
            description: "Meet representatives from top universities and explore global opportunities.",
            image: "/student3.webp",
        },
        {
            title: "Career Talks",
            description: "Insights from professionals to guide students on career paths and industry trends.",
            image: "/student4.webp",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-400 via-purple-300 to-white">
            <div className="container px-4 mx-auto lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 drop-shadow-sm lg:text-5xl">
                        Explore our{" "}
                        <span className="text-yellow-300">
                            Events
                        </span>
                    </h2>
                    <p className="py-4 mx-auto max-w-3xl text-lg font-semibold text-gray-700">
                        Our vision, values, and commitment to student success—directly from the heart of our leadership.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {childServices.map((service, index) => (
                        <Card
                            key={index}
                            className="group rounded-2xl cursor-pointer h-[400px] py-0 gap-0 overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:scale-[1.08]"
                        >
                            {/* Top Image Section */}
                            <div
                                className="w-full h-full bg-center bg-cover"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* Bottom Text Section */}
                            <div className="p-6 h-full transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                                <div className="flex justify-center items-center mb-4">
                                    <h3 className="text-2xl font-bold text-center text-inherit">{service.title}</h3>
                                </div>
                                <p className="mb-6 leading-relaxed text-inherit">{service.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default EducationEventsDetails