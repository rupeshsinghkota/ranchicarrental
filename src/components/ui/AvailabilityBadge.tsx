"use client";

interface AvailabilityBadgeProps {
    available: number;
    total?: number;
}

export default function AvailabilityBadge({ available, total = 5 }: AvailabilityBadgeProps) {
    // Determine urgency level
    const getUrgencyStyle = () => {
        if (available <= 1) {
            return "bg-red-50 text-red-700 border-red-200";
        } else if (available <= 2) {
            return "bg-orange-50 text-orange-700 border-orange-200";
        } else {
            return "bg-green-50 text-green-700 border-green-200";
        }
    };

    const getMessage = () => {
        if (available === 0) return "Sold Out";
        if (available === 1) return "Only 1 left!";
        if (available <= 2) return `Only ${available} left`;
        return `${available} available`;
    };

    return (
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${getUrgencyStyle()} animate-pulse-subtle`}>
            <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${available <= 2 ? 'bg-red-400' : 'bg-green-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${available <= 2 ? 'bg-red-500' : 'bg-green-500'}`}></span>
            </span>
            {getMessage()}
        </div>
    );
}
