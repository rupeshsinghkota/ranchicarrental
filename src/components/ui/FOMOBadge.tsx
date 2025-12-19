"use client";

interface FOMOBadgeProps {
    type: "available" | "demand" | "trending";
    count?: number;
}

export default function FOMOBadge({ type, count = 2 }: FOMOBadgeProps) {
    if (type === "available") {
        return (
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-orange-200">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                <span>Only {count} left</span>
            </div>
        );
    }

    if (type === "demand") {
        return (
            <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-red-200">
                <span>🔥</span>
                <span>High Demand</span>
            </div>
        );
    }

    if (type === "trending") {
        return (
            <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-blue-200">
                <span>📈</span>
                <span>Trending</span>
            </div>
        );
    }

    return null;
}
