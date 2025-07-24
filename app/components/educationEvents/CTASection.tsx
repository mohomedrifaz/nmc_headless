import { Button } from "@/components/ui/button";
const CTASection = () => (
    <section className="py-20 text-center text-white bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="container px-4 mx-auto lg:px-8">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Ready to Join an Event?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
                Take the next step toward a transformative learning experience. Connect, grow, and succeed with EduGateway.
            </p>
            <Button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-purple-600 bg-white rounded-full transition-all cursor-pointer hover:bg-purple-100">
                Explore Upcoming Events
            </Button>
        </div>
    </section>
);

export default CTASection