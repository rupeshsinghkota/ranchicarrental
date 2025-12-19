"use client";

import { MessageCircle } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show immediately or after scroll - let's show immediately with a fade in
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const phoneNumber = "918651144783"; // Using the admin number from BookingForm
    const message = "Hi, I am interested in renting a car.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-24 lg:bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} strokeWidth={2.5} />
            <div className="absolute right-full mr-3 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </div>
            {/* Ping animation effect */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping"></span>
        </a>
    );
}
