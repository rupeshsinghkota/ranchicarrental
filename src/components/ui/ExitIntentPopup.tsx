"use client";

import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if popup was already shown in this session
        const shown = sessionStorage.getItem("exitPopupShown");
        if (shown) {
            setHasShown(true);
            return;
        }

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem("exitPopupShown", "true");
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [hasShown]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-in zoom-in-95 duration-300">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Wait! Don't Miss Out</h2>
                    <p className="text-xl text-gray-700 mb-2">Get <span className="text-orange-600 font-bold">10% OFF</span> on your first booking!</p>
                    <p className="text-gray-600 mb-6">Limited time offer - Book now and save</p>

                    <div className="space-y-3">
                        <a
                            href="https://wa.me/918651144783?text=Hi, I want to claim my 10% discount and book a car!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-[#25D366] text-white py-4 rounded-lg font-bold hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
                            onClick={() => setIsVisible(false)}
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Claim Discount on WhatsApp
                        </a>

                        <a
                            href="tel:+918651144783"
                            className="block w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            onClick={() => setIsVisible(false)}
                        >
                            <Phone size={20} />
                            Call Now for Instant Discount
                        </a>
                    </div>

                    <p className="text-sm text-gray-500 mt-4">Use code: <span className="font-bold text-orange-600">FIRST10</span></p>
                </div>
            </div>
        </div>
    );
}
