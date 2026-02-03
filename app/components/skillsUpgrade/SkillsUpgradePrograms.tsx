import { Card } from "@/components/ui/card";
import { Code, BarChart3, Globe, Palette, Database, Shield } from "lucide-react";

const SkillsUpgradePrograms = () => {
    const programs = [
        {
            title: "IT & Technology",
            description: "Master cutting-edge technologies including programming, cloud computing, and cybersecurity.",
            icon: Code,
            skills: ["Web Development", "Cloud Computing", "Cybersecurity", "Data Science"],
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Business & Finance",
            description: "Develop strategic business acumen and financial expertise for leadership roles.",
            icon: BarChart3,
            skills: ["Project Management", "Financial Analysis", "Digital Marketing", "Business Strategy"],
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "Digital Skills",
            description: "Stay ahead with essential digital competencies for the modern workplace.",
            icon: Globe,
            skills: ["Digital Marketing", "SEO/SEM", "Social Media", "Content Creation"],
            color: "from-green-500 to-emerald-500",
        },
        {
            title: "Creative Design",
            description: "Unleash your creativity with professional design and multimedia skills.",
            icon: Palette,
            skills: ["Graphic Design", "UI/UX Design", "Video Editing", "Branding"],
            color: "from-orange-500 to-red-500",
        },
        {
            title: "Data Analytics",
            description: "Transform data into insights with advanced analytics and visualization tools.",
            icon: Database,
            skills: ["Excel Advanced", "Power BI", "Python Analytics", "SQL"],
            color: "from-indigo-500 to-purple-500",
        },
        {
            title: "Professional Development",
            description: "Enhance soft skills and leadership capabilities for career growth.",
            icon: Shield,
            skills: ["Leadership", "Communication", "Time Management", "Team Building"],
            color: "from-teal-500 to-cyan-500",
        },
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-white">
            <div className="container px-4 mx-auto lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 drop-shadow-sm lg:text-5xl">
                        Our Skills Upgrade{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                            Programs
                        </span>
                    </h2>
                    <p className="py-4 mx-auto max-w-3xl text-lg font-semibold text-gray-700">
                        Comprehensive training programs designed to enhance your professional capabilities and open new career opportunities.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map((program, index) => (
                        <Card
                            key={index}
                            className="group rounded-2xl cursor-pointer h-full py-6 px-6 border border-gray-200 shadow-md transition-all duration-300 hover:scale-[1.05] hover:shadow-xl overflow-hidden relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            <div className="relative z-10">
                                <div className="flex flex-col items-start mb-4">
                                    <div className={`p-3 mb-4 rounded-xl bg-gradient-to-br ${program.color} group-hover:bg-white transition-colors`}>
                                        <program.icon className={`w-6 h-6 ${program.color.includes('blue') || program.color.includes('indigo') || program.color.includes('purple') ? 'text-white group-hover:text-green-600' : 'text-white group-hover:text-green-600'}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors mb-2">{program.title}</h3>
                                    <p className="mb-4 text-sm leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors">{program.description}</p>
                                </div>
                                <ul className="space-y-2">
                                    {program.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex} className="flex items-center space-x-2 text-sm text-gray-700 group-hover:text-white transition-colors">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color} group-hover:bg-white transition-colors`} />
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsUpgradePrograms;
