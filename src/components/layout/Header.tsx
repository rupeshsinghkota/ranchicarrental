"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Book a Car", href: "/book" },
    { name: "Services", href: "/services" },
    { name: "Our Fleet", href: "/cars" },
    { name: "Pricing", href: "/pricing" },
    // { name: "About", href: "/about" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn("fixed top-0 z-50 w-full transition-all duration-300", scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2 border-b border-white/20 supports-[backdrop-filter]:bg-white/60 text-foreground" : "bg-transparent py-4 text-white")}>
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className={cn("text-2xl font-bold transition-colors", scrolled ? "text-primary" : "text-white")}>Ranchi<span className="text-secondary">CarRental</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-secondary font-medium transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Call CTA & Mobile Menu */}
                <div className="flex items-center gap-4">
                    {/* Phone Number - Desktop */}
                    <a
                        href="tel:+918651144783"
                        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-colors hover:text-secondary"
                    >
                        <Phone size={18} />
                        <span className="text-sm">+91 86511 44783</span>
                    </a>

                    <a
                        href="https://wa.me/918651144783?text=Hi, I want to book a car."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-bold hover:bg-[#128C7E] transition-colors"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        <span>WhatsApp Us</span>
                    </a>

                    <button
                        className={cn("md:hidden p-2 hover:text-secondary transition-colors", scrolled ? "text-foreground" : "text-white")}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t animate-in slide-in-from-top-2">
                    <div className="flex flex-col p-4 gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-gray-900 hover:text-secondary py-2 border-b border-gray-100 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* Phone Number - Mobile Menu */}
                        <a
                            href="tel:+918651144783"
                            className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors mt-2"
                        >
                            <Phone size={20} />
                            <span>Call +91 86511 44783</span>
                        </a>
                        <a
                            href="https://wa.me/918651144783?text=Hi, I want to book a car."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg font-bold hover:bg-[#128C7E] transition-colors"
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            <span>WhatsApp +91 86511 44783</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
