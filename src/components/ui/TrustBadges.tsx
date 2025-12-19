"use client";

export default function TrustBadges() {
    const badges = [
        { icon: "✓", text: "Verified Business", color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" },
        { icon: "🔒", text: "Secure Booking", color: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100" },
        { icon: "📜", text: "Licensed Operator", color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" },
        { icon: "⭐", text: "Top Rated", color: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100" }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, index) => (
                <div
                    key={index}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105 hover:shadow-md ${badge.color}`}
                >
                    <span className="text-base">{badge.icon}</span>
                    <span>{badge.text}</span>
                </div>
            ))}
        </div>
    );
}
