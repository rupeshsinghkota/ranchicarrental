"use client";

import { useState, useEffect } from "react";
import { Users, Eye } from "lucide-react";

export default function LiveStats() {
    const [visitors, setVisitors] = useState(0);
    const [activeViewers, setActiveViewers] = useState(0);

    useEffect(() => {
        // Initialize with realistic numbers
        const baseVisitors = 127 + Math.floor(Math.random() * 20);
        const baseViewers = 8 + Math.floor(Math.random() * 5);

        setVisitors(baseVisitors);
        setActiveViewers(baseViewers);

        // Fluctuate numbers realistically
        const interval = setInterval(() => {
            setVisitors(prev => {
                const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
                return Math.max(100, Math.min(200, prev + change));
            });

            setActiveViewers(prev => {
                const change = Math.floor(Math.random() * 3) - 1; // -1 to +1
                return Math.max(5, Math.min(20, prev + change));
            });
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Users className="text-secondary" size={16} />
                <span className="font-semibold">{visitors}</span>
                <span className="text-slate-300">visitors today</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <Eye className="text-secondary" size={16} />
                <span className="font-semibold">{activeViewers}</span>
                <span className="text-slate-300">viewing now</span>
            </div>
        </div>
    );
}
