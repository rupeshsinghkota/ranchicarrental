"use client";

interface PriceBadgeProps {
    savings?: number;
    discount?: number;
    type?: "save" | "discount" | "popular";
}

export default function PriceBadge({ savings, discount, type = "save" }: PriceBadgeProps) {
    if (type === "popular") {
        return (
            <div className="absolute top-3 right-3 z-10">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <span>⭐</span>
                    <span>MOST POPULAR</span>
                </div>
            </div>
        );
    }

    if (savings) {
        return (
            <div className="absolute top-3 left-3 z-10">
                <div className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    Save ₹{savings}
                </div>
            </div>
        );
    }

    if (discount) {
        return (
            <div className="absolute top-3 left-3 z-10">
                <div className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {discount}% OFF
                </div>
            </div>
        );
    }

    return null;
}
