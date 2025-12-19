"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function OfferBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if banner was dismissed
        const dismissed = localStorage.getItem("offerBannerDismissed");
        if (!dismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem("offerBannerDismissed", "true");
    };

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-2 px-4 relative animate-pulse-subtle">
            <div className="container-custom flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-bold text-center">
                <span className="hidden sm:inline">🎉</span>
                <span className="leading-tight">Limited Time Offer: Book Today & Get 10% OFF on your first booking!</span>
                <span className="hidden sm:inline">🎉</span>
                <a
                    href="https://wa.me/918651144783?text=Hi, I want to book a car and claim my 10% discount!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-orange-600 px-3 py-1 rounded-full text-xs sm:text-sm font-bold hover:bg-orange-50 hover:scale-105 transition-all whitespace-nowrap"
                >
                    Claim Now
                </a>
            </div>
            <button
                onClick={handleDismiss}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:scale-110 transition-all"
                aria-label="Dismiss offer"
            >
                <X size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
        </div>
    );
}
