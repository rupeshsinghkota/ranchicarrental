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
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-2.5 px-4 relative">
            <div className="container-custom flex items-center justify-center gap-2 text-sm md:text-base font-bold text-center">
                <span className="hidden sm:inline">🎉</span>
                <span>Limited Time Offer: Book Today & Get 10% OFF on your first booking!</span>
                <span className="hidden sm:inline">🎉</span>
                <a
                    href="https://wa.me/918651144783?text=Hi, I want to book a car and claim my 10% discount!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-bold hover:bg-orange-50 transition-colors"
                >
                    Claim Now
                </a>
            </div>
            <button
                onClick={handleDismiss}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                aria-label="Dismiss offer"
            >
                <X size={18} />
            </button>
        </div>
    );
}
