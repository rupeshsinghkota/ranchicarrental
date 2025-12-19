"use client";

export default function TrustBadges() {
    const badges = [
        { icon: "✓", text: "Verified Business", color: "bg-green-50 text-green-700 border-green-200" },
        { icon: "🔒", text: "Secure Booking", color: "bg-blue-50 text-blue-700 border-blue-200" },
        { icon: "📜", text: "Licensed Operator", color: "bg-purple-50 text-purple-700 border-purple-200" },
        { icon: "⭐", text: "Top Rated", color: "bg-amber-50 text-amber-700 border-amber-200" }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, index) => (
                <div
                    key={index}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${badge.color}`}
                >
                    <span className="text-base">{badge.icon}</span>
                    <span>{badge.text}</span>
                </div>
            ))}
        </div>
    );
}
