import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
    const quickLinks = [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    const services = [
        { name: "Skill Training", href: "#" },
        { name: "Study Abroad", href: "#" },
        { name: "Edu Events", href: "#" },
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Youtube, href: "#", label: "YouTube" },
    ];

    return (
        <footer className="text-white bg-gray-900">
            <div className="container px-4 mx-auto lg:px-8">
                {/* Main Footer Content */}
                <div className="grid gap-8 py-16 lg:grid-cols-4 md:grid-cols-2">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="">
                                <Image src="/mc-new-logo-1.png" alt="NMC" width={100} height={100} />    
                            </div>
                        </div>
                        <p className="leading-relaxed text-gray-400">
                            Your trusted partner in educational excellence. We are committed to helping students achieve their academic dreams and career aspirations.
                        </p>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-purple-400" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-purple-400" />
                                <span>info@NMC.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-purple-400" />
                                <span>123 Education St, Learning City</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-purple-400">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 transition-colors duration-300 hover:text-white"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-purple-400">Our Services</h3>
                        <ul className="space-y-3 text-sm">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <a
                                        href={service.href}
                                        className="text-gray-400 transition-colors duration-300 hover:text-white"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Social */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-purple-400">Stay Connected</h3>
                        <p className="mb-4 text-sm text-gray-400">
                            Subscribe to our newsletter for the latest updates and educational insights.
                        </p>
                        <div className="space-y-4">
                            <form className="flex w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 min-w-0 placeholder-gray-400 text-white bg-gray-800 rounded-l-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                                />
                                <Button
                                    type="submit"
                                    className="flex-shrink-0 px-6 h-auto text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-r-lg rounded-l-none transition-all duration-300 hover:shadow-lg"
                                >
                                    Subscribe
                                </Button>
                            </form>

                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex justify-center items-center w-10 h-10 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-purple-600"
                                    >
                                        <social.icon className="w-5 h-5 text-white" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col justify-between items-center py-8 text-sm text-gray-400 border-t border-gray-700 md:flex-row">
                    <div>© 2024 EduGateway. All rights reserved.</div>
                    <div className="flex space-x-6">
                        <a href="#" className="transition-colors duration-300 hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="transition-colors duration-300 hover:text-white">
                            Terms of Service
                        </a>
                        <a href="#" className="transition-colors duration-300 hover:text-white">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
