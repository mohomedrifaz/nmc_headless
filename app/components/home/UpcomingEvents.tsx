"use client";

import { CalendarDays, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const events = [
    {
        title: "Study Abroad Webinar",
        date: "August 10, 2025",
        time: "6:00 PM IST",
        type: "Online",
        description: "Join our expert counselors to explore global education opportunities and get your questions answered live.",
    },
    {
        title: "Skill Training Workshop",
        date: "August 18, 2025",
        time: "10:00 AM IST",
        type: "In-Person",
        description: "Hands-on training session focused on career-ready skills with industry professionals.",
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

                <div className="grid gap-8 md:grid-cols-2">
                    {events.map((event, index) => (
                        <Card
                            key={index}
                            className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-purple-500/30"
                        >
                            <div className="flex items-center mb-6 space-x-4">
                                {event.type === "Online" ? (
                                    <Video className="w-7 h-7 text-purple-600" />
                                ) : (
                                    <CalendarDays className="w-7 h-7 text-purple-600" />
                                )}
                                <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                            </div>

                            <div className="mb-6 space-y-2">
                                <p className="text-base text-gray-700">
                                    <strong>Date:</strong> {event.date}
                                </p>
                                <p className="text-base text-gray-700">
                                    <strong>Time:</strong> {event.time}
                                </p>
                                <p className="text-base text-gray-600">{event.description}</p>
                            </div>

                            <Button className="py-3 w-full text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 cursor-pointer hover:shadow-lg">
                                Register Now
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEventsSection;
