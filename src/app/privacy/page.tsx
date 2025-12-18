import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | RanchiCarRental",
    description: "Read our privacy policy to understand how we handle your data.",
    alternates: {
        canonical: 'https://ranchicarrental.in/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 text-white pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Your privacy matters to us. Read how we handle your data.
                    </p>
                </div>
            </div>

            <div className="py-12 lg:py-24 container-custom max-w-4xl mx-auto">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-slate-500 mb-8">Last updated: December 16, 2025</p>

                    <div className="prose prose-slate max-w-none">
                        <p className="lead">At RanchiCarRental, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.</p>

                        <h3>Information We Collect</h3>
                        <p>We collect information you provide directly to us when you book a car, including:</p>
                        <ul>
                            <li>Name</li>
                            <li>Phone Number</li>
                            <li>Email Address</li>
                            <li>Trip Details (Pickup, Drop, Date, Time)</li>
                        </ul>

                        <h3>How We Use Your Information</h3>
                        <p>We use the information to:</p>
                        <ul>
                            <li>Process your booking requests.</li>
                            <li>Communicate with you regarding your trip.</li>
                            <li>Improve our services and customer support.</li>
                        </ul>

                        <h3>Data Security</h3>
                        <p>We implement appropriate security measures to protect your personal information. We do not sell or share your data with third parties for marketing purposes.</p>

                        <h3>Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:booking@ranchicarrental.in">booking@ranchicarrental.in</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
