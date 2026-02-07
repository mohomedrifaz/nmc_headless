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
import Image from "next/image";

const Footer = () => {
    const quickLinks = [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    const services = [
        { name: "Study Abroad", href: "/study-abroad" },
        { name: "Skills Upgrade", href: "/skills-upgrade" },
        { name: "Edu Events", href: "/education-events" },
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
                <div className="grid grid-cols-1 gap-6 py-12 sm:gap-8 sm:py-16 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="w-full">
                            <Image
                                src="/mc-new-logo-1.png"
                                alt="NMC"
                                width={1000}
                                height={1000}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                            Your trusted partner in educational excellence. We are committed to helping students achieve their academic dreams and career aspirations.
                        </p>
                        <div className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <Phone className="flex-shrink-0 w-4 h-4 text-purple-400 sm:w-5 sm:h-5" />
                                <span className="break-all">+65 XXXX XXXX</span>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <Mail className="flex-shrink-0 w-4 h-4 text-purple-400 sm:w-5 sm:h-5" />
                                <span className="break-all">info@millenniumconcept.biz</span>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <MapPin className="flex-shrink-0 w-4 h-4 text-purple-400 sm:w-5 sm:h-5" />
                                <span>123 Education St, Learning City</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-base font-semibold text-purple-400 sm:mb-6 sm:text-lg">Quick Links</h3>
                        <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
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
                        <h3 className="mb-4 text-base font-semibold text-purple-400 sm:mb-6 sm:text-lg">Our Services</h3>
                        <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
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
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex justify-center items-center w-9 h-9 bg-gray-800 rounded-lg transition-all duration-300 sm:w-10 sm:h-10 hover:bg-purple-600"
                                    >
                                        <social.icon className="w-4 h-4 text-white sm:w-5 sm:h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col justify-between items-center py-6 text-xs text-center text-gray-400 border-t border-gray-700 sm:py-8 sm:text-sm md:flex-row md:text-left">
                    <div>© 2024 Millennium Concept. All rights reserved.</div>  
                </div>
            </div>
        </footer>
    );
};

export default Footer;
