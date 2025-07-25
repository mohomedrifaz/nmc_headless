import Image from "next/image";

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
            image: "/student2.jpg",
        },
        {
            title: "Career Talks",
            description: "Insights from professionals to guide students on career paths and industry trends.",
            image: "/student2.jpg",
        },
    ];

    return (
        <section className="py-20 bg-purple-50">
            <div className="container px-4 mx-auto lg:px-8">
                <h2 className="mb-12 text-3xl font-bold text-center text-purple-600">Explore Our Event Types</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {childServices.map((service, index) => (
                        <div key={index} className="overflow-hidden bg-white rounded-2xl shadow-lg transition-all hover:shadow-xl">
                            <Image src={service.image} alt={service.title} width={100} height={100} className="object-cover w-full h-48" />
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default EducationEventsDetails