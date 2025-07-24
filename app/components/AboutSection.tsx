import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering students to achieve their academic and career goals through innovative education solutions."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced counselors and educators provide personalized guidance for every student's journey."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge learning methodologies and technology to enhance the educational experience."
    }
  ];

  const achievements = [
    "Trusted by 10,000+ students worldwide",
    "95% success rate in university admissions",
    "Partnership with 500+ universities",
    "Award-winning education consultancy",
    "24/7 student support services"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto lg:px-8">
        <div className="grid gap-16 items-center lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                About
                <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
                  NMC
                </span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                We are a leading educational consultancy dedicated to transforming lives through quality education.
                Our mission is to bridge the gap between dreams and achievements, providing students with the tools,
                guidance, and opportunities they need to succeed in todays competitive world.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 rounded-xl shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Why Choose Us?</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="flex-shrink-0 w-6 h-6 text-purple-600" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>


            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 text-center bg-white rounded-xl border border-purple-200 shadow-md">
                <div className="mb-2 text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-700">Years Experience</div>
              </div>
              <div className="p-6 text-center bg-white rounded-xl border border-purple-200 shadow-md">
                <div className="mb-2 text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-700">Countries Served</div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;