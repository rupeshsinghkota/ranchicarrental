"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
    endTime: Date;
    message?: string;
}

export default function CountdownTimer({ endTime, message = "Offer ends in" }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = endTime.getTime() - new Date().getTime();

            if (difference > 0) {
                return {
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }
            return { hours: 0, minutes: 0, seconds: 0 };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        setTimeLeft(calculateTimeLeft());

        return () => clearInterval(timer);
    }, [endTime]);

    if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        return null;
    }

    return (
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
            <span>⏰</span>
            <span>{message}:</span>
            <div className="flex items-center gap-1 font-mono">
                <span className="bg-white/20 px-2 py-0.5 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-0.5 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-0.5 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
        </div>
    );
}
