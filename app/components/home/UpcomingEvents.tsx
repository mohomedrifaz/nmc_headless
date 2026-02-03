"use client";

import { CalendarDays, Video } from "lucide-react";
import { Card } from "@/components/ui/card";

const events = [
    {
        title: "Singapore Government Scholarships",
        subtitle: "Webinar",
        schedule: "Every Saturday 5 pm – 6 pm IST",
        type: "Online",
        description: "Learn about Singapore Government Scholarships and how to apply for them. Get expert guidance on eligibility criteria and application process.",
    },
    {
        title: "70% Future Skills grant",
        subtitle: "Information Session",
        schedule: "Ongoing",
        type: "Online",
        description: "Discover how you can benefit from the 70% Future Skills grant. Learn about eligible courses and how to apply for funding support.",
    },
    {
        title: "Next Event",
        subtitle: "Coming Soon",
        schedule: "TBA",
        type: "TBA",
        description: "Stay tuned for our upcoming educational events and webinars. We're constantly organizing sessions to help you achieve your goals.",
    },
];

const UpcomingEventsSection = () => {
    return (
        <section
            id="events"
            className="py-20 text-white bg-gradient-to-br from-purple-600 via-indigo-500 to-purple-300"
        >
            <div className="container px-4 mx-auto lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-extrabold lg:text-5xl">
                        Upcoming <span className="text-yellow-300">Events & Webinars</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-indigo-100">
                        Stay informed and inspired with our latest sessions designed to guide your educational journey.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {events.map((event, index) => (
                        <Card
                            key={index}
                            className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-purple-500/30"
                        >
                            <div className="flex items-center mb-6 space-x-4">
                                {event.type === "Online" || event.type === "TBA" ? (
                                    <Video className="w-7 h-7 text-purple-600" />
                                ) : (
                                    <CalendarDays className="w-7 h-7 text-purple-600" />
                                )}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                                    {event.subtitle && (
                                        <p className="text-sm text-purple-600 font-medium">{event.subtitle}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6 space-y-2">
                                <p className="text-base text-gray-700">
                                    <strong>Schedule:</strong> {event.schedule}
                                </p>
                                <p className="text-base text-gray-600">{event.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEventsSection;
