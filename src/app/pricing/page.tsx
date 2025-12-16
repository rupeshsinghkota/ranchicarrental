import Link from "next/link";
import { Button } from "@/components/ui/form-elements";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Car Rental Rates in Ranchi | Transparent Tariff 24hr Counting",
    description: "Check our affordable self drive car rental rates in Ranchi. 24-hour billing cycle. No hidden charges. Unlimited KM packages available for long trips.",
    keywords: ["Car rental price list Ranchi", "Self drive car rates Ranchi", "Taxi fare Ranchi", "Cheap car hire Ranchi"],
    alternates: {
        canonical: 'https://ranchicarrental.in/pricing',
    },
};

import SelfDrivePriceTable from "@/components/pricing/SelfDrivePriceTable";

export default function PricingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does it cost to rent a self-drive car in Ranchi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Self-drive car rentals in Ranchi start from ₹1,000 for Alto and can go up to ₹8,000 for premium SUVs like Roxx. Rates are for 24 hours."
                }
            },
            {
                "@type": "Question",
                "name": "Is a driver available for self-drive cars?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can hire a driver for an additional flat fee of ₹500 per day."
                }
            },
            {
                "@type": "Question",
                "name": "What documents are required for self-drive car rental?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A valid driving license is mandatory. A security deposit may also apply."
                }
            }
        ]
    };

    return (
        <div className="py-6 lg:py-12 bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container-custom">

                <SelfDrivePriceTable />
            </div>
        </div>
    );
}
