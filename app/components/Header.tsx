"use client";

import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-md">
                            <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-800">EduGateway</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            className="text-indigo-600 hover:text-white hover:bg-indigo-600 transition-colors"
                        >
                            Sign In
                        </Button>
                        <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg transition-all duration-300">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium px-2 py-1"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                                <Button
                                    variant="ghost"
                                    className="text-indigo-600 hover:text-white hover:bg-indigo-600 justify-start"
                                >
                                    Sign In
                                </Button>
                                <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg transition-all duration-300 justify-start">
                                    Get Started
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
