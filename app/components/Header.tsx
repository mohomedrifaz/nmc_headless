"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 backdrop-blur-lg bg-white/80">
            <div className="flex justify-between items-center px-4 py-2 text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600">
                <span>Email: info@nmc.com</span>
                <span>Call: +94 77 123 4567</span>
            </div>
            <div className="container px-4 mx-auto lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Image src="/mc-new-logo-1.png" alt="Logo" width={100} height={100} />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-8 md:flex">
                        {navigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="font-medium text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden items-center space-x-4 md:flex">
                        <Button className="text-white bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 cursor-pointer hover:shadow-lg">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="p-2 text-gray-600 md:hidden hover:text-indigo-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="py-4 border-t border-gray-200 md:hidden">
                        <nav className="flex flex-col space-y-4">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-2 py-1 font-medium text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex flex-col pt-4 space-y-2 border-t border-gray-200">
                                <Button
                                    variant="ghost"
                                    className="justify-start text-indigo-600 hover:text-white hover:bg-indigo-600"
                                >
                                    Sign In
                                </Button>
                                <Button className="justify-start text-white bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 hover:shadow-lg">
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
