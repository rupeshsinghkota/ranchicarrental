import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | RanchiCarRental",
    description: "Terms and conditions for booking car rentals with RanchiCarRental.",
    alternates: {
        canonical: 'https://ranchicarrental.in/terms',
    },
};

export default function TermsPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 text-white pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms & Conditions</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Please read the terms carefully before booking.
                    </p>
                </div>
            </div>

            <div className="py-12 lg:py-24 container-custom max-w-4xl mx-auto">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">

                    <div className="prose prose-slate max-w-none">
                        <h3>1. Booking & Confirmation</h3>
                        <p>Booking is confirmed only after receiving a confirmation message from our team. We reserve the right to cancel bookings due to unforeseen circumstances (e.g., vehicle breakdown), in which case a full refund or alternative will be provided.</p>

                        <h3>2. Payments & Tolls</h3>
                        <p>Toll taxes, parking fees, and state entry taxes are extra and must be paid by the customer directly. Driver allowance is applicable for outstation trips if the driver stays overnight.</p>

                        <h3>3. Cancellation Policy</h3>
                        <p>Cancellations made 24 hours prior to the trip are eligible for a full refund (if advance paid). Cancellations within 24 hours may attract a cancellation fee.</p>

                        <h3>4. Customer Responsibility</h3>
                        <p>Customers are requested to treat the vehicle and driver with respect. Any damage caused to the vehicle by the customer will be chargeable.</p>

                        <h3>5. Jurisdiction</h3>
                        <p>Any disputes arising out of these terms shall be subject to the jurisdiction of the courts in Ranchi, Jharkhand.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
