import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | RanchiCarRental",
    description: "Find answers to common questions about car rental in Ranchi, pricing, booking process, and cancellation policies.",
};

export default function FAQPage() {
    const faqs = [
        {
            question: "How do I book a car in Ranchi?",
            answer: "You can book a car by filling out the form on our website, sending us a message on WhatsApp, or calling us directly at +91 98765 43210."
        },
        {
            question: "Is fuel included in the pricing?",
            answer: "For local rentals, fuel is included in the package price. For outstation trips, fuel is included in the per-km rate, but toll taxes and parking charges are extra."
        },
        {
            question: "Do you provide self-drive cars?",
            answer: "No, currently we only provide chauffeur-driven cars to ensure safety and comfort."
        },
        {
            question: "What are the cancellation charges?",
            answer: "We offer free cancellation up to 24 hours before the trip. Cancellations within 24 hours may attract a small fee."
        },
        {
            question: "Is it safe to travel at night?",
            answer: "Yes, our drivers are verified and experienced for night driving. We also track all our vehicles via GPS for safety."
        },
        {
            question: "Do you offer airport pickup and drop?",
            answer: "Yes, we provide 24/7 airport transfer services to and from Birsa Munda Airport, Ranchi."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="py-12 lg:py-24 bg-slate-50">
            <div className="container-custom max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h1>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
