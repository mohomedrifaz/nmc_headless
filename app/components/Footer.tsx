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
                <div className="grid gap-6 sm:gap-8 py-12 sm:py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="">
                                <Image src="/mc-new-logo-1.png" alt="NMC" width={100} height={100} className="w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]" />
                            </div>
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                            Your trusted partner in educational excellence. We are committed to helping students achieve their academic dreams and career aspirations.
                        </p>
                        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                                <span className="break-all">+65 XXXX XXXX</span>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                                <span className="break-all">info@millenniumconcept.biz</span>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                                <span>123 Education St, Learning City</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-purple-400">Quick Links</h3>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
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
                        <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-purple-400">Our Services</h3>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
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
                                        className="flex justify-center items-center w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-purple-600"
                                    >
                                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col justify-between items-center py-6 sm:py-8 text-xs sm:text-sm text-gray-400 border-t border-gray-700 md:flex-row text-center md:text-left">
                    <div>© 2024 Millennium Concept. All rights reserved.</div>  
                </div>
            </div>
        </footer>
    );
};

export default Footer;
