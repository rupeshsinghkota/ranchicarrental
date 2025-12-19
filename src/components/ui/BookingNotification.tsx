"use client";

import { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

const SAMPLE_BOOKINGS = [
    { name: "Rajesh Kumar", car: "Swift Dzire", location: "Ranchi", time: "2 minutes ago" },
    { name: "Priya Singh", car: "Thar 4x4", location: "Ranchi", time: "5 minutes ago" },
    { name: "Amit Sharma", car: "Ertiga", location: "Ranchi", time: "8 minutes ago" },
    { name: "Neha Verma", car: "Scorpio", location: "Ranchi", time: "12 minutes ago" },
    { name: "Vikash Yadav", car: "Innova Crysta", location: "Ranchi", time: "15 minutes ago" },
    { name: "Sanjay Gupta", car: "Swift New", location: "Ranchi", time: "18 minutes ago" },
    { name: "Pooja Kumari", car: "Creta", location: "Ranchi", time: "22 minutes ago" },
];

export default function BookingNotification() {
    const [visible, setVisible] = useState(false);
    const [currentBooking, setCurrentBooking] = useState(SAMPLE_BOOKINGS[0]);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (dismissed) return;

        // Show first notification after 5 seconds
        const initialDelay = setTimeout(() => {
            setVisible(true);
        }, 5000);

        // Rotate notifications every 15 seconds
        const interval = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                const randomBooking = SAMPLE_BOOKINGS[Math.floor(Math.random() * SAMPLE_BOOKINGS.length)];
                setCurrentBooking(randomBooking);
                setVisible(true);
            }, 500);
        }, 15000);

        return () => {
            clearTimeout(initialDelay);
            clearInterval(interval);
        };
    }, [dismissed]);

    // Auto-hide after 8 seconds
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    const handleDismiss = () => {
        setVisible(false);
        setDismissed(true);
    };

    if (!visible || dismissed) return null;

    return (
        <div className="fixed bottom-20 left-4 z-40 animate-in slide-in-from-left-4 duration-500">
            <div className="bg-white rounded-lg shadow-2xl border border-slate-200 p-4 max-w-sm flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">
                        {currentBooking.name}
                    </p>
                    <p className="text-xs text-slate-600">
                        Just booked <span className="font-medium text-primary">{currentBooking.car}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                        📍 {currentBooking.location} • {currentBooking.time}
                    </p>
                </div>
                <button
                    onClick={handleDismiss}
                    className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
                    aria-label="Dismiss notification"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}
