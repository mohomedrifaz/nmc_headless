"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Determine the base path for navigation based on current page
    const getBasePath = () => {
        if (pathname?.startsWith("/study-abroad")) return "/study-abroad";
        if (pathname?.startsWith("/skills-upgrade")) return "/skills-upgrade";
        if (pathname?.startsWith("/education-events")) return "/education-events";
        return "/";
    };

    const basePath = getBasePath();

    // Build navigation items based on current page
    const navigationItems = [
        { name: "Home", href: "/", anchor: "home" },
        { name: "About", href: basePath, anchor: "about" },
        { name: "Services", href: basePath, anchor: "services" },
        { name: "Gallery", href: basePath, anchor: "gallery" },
        ...(pathname === "/" ? [{ name: "Testimonials", href: "/", anchor: "testimonials" }] : []), // Only show on homepage
        { name: "Contact", href: basePath, anchor: "contact" },
    ];

    const handleNavClick = (href: string, anchor: string | undefined, e: React.MouseEvent<HTMLAnchorElement>) => {
        // If we're on the same page and anchor exists, scroll to it
        if (pathname === href && anchor) {
            e.preventDefault();
            setTimeout(() => {
                const element = document.getElementById(anchor);
                if (element) {
                    const headerOffset = 100; // Account for fixed header
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        } else if (pathname !== href && anchor) {
            // If navigating to a different page, let Next.js handle it
            // The anchor will be handled after navigation
            setTimeout(() => {
                const element = document.getElementById(anchor);
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 300);
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 backdrop-blur-lg bg-white/80">
            <div className="flex justify-between items-center px-4 py-2 text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600">
                <span>Email: info@millenniumconcept.biz</span>
                <span>WhatsApp: +65 XXXX XXXX</span>
            </div>
            <div className="container px-4 mx-auto lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/mc-new-logo-1.png" alt="Logo" width={150} height={150} className="object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-8 md:flex">
                        {navigationItems.map((item) => {
                            const href = item.anchor ? `${item.href}#${item.anchor}` : item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={href}
                                    onClick={(e) => handleNavClick(item.href, item.anchor, e)}
                                    className="font-medium text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>


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
                            {navigationItems.map((item) => {
                                const href = item.anchor ? `${item.href}#${item.anchor}` : item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={href}
                                        onClick={(e) => handleNavClick(item.href, item.anchor, e)}
                                        className="px-2 py-1 font-medium text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
