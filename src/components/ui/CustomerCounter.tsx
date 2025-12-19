"use client";

import { useEffect, useState } from "react";

export default function CustomerCounter() {
    const [count, setCount] = useState(0);
    const targetCount = 500;

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 50;
        const increment = targetCount / steps;
        const stepDuration = duration / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetCount) {
                setCount(targetCount);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-center">
            <div className="inline-flex flex-col items-center bg-gradient-to-br from-primary to-blue-700 text-white px-8 py-6 rounded-2xl shadow-xl">
                <div className="text-5xl font-bold mb-2">
                    {count}+
                </div>
                <div className="text-lg font-semibold opacity-90">
                    Happy Customers
                </div>
                <div className="text-sm opacity-75 mt-1">
                    Trusted across Ranchi
                </div>
            </div>
        </div>
    );
}
