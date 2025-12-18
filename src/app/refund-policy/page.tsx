import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund & Cancellation Policy | RanchiCarRental",
    description: "Read our transparent Refund and Cancellation Policy. Free cancellation up to 24 hours before pickup.",
    alternates: {
        canonical: 'https://ranchicarrental.in/refund-policy',
    },
};

export default function RefundPolicyPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 text-white pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="container-custom text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-6">Refund & Cancellation Policy</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Transparent and fair cancellation terms.
                    </p>
                </div>
            </div>

            <div className="py-12 lg:py-24 container-custom max-w-4xl mx-auto">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">

                    <div className="prose prose-slate max-w-none">
                        <p className="lead">At RanchiCarRental, we strive to provide the most flexible and customer-friendly booking experience. We understand that plans can change, and our cancellation policy is designed to be fair to both our customers and our partner drivers.</p>

                        <h3>1. Cancellation Policy</h3>
                        <ul>
                            <li><strong>More than 24 hours before pickup:</strong> If you cancel your booking more than 24 hours before the scheduled pickup time, you are eligible for specific 100% refund of any advance amount paid.</li>
                            <li><strong>Within 24 hours of pickup:</strong> Cancellations made between 24 hours and 4 hours prior to pickup may attract a cancellation fee of ₹500 or 10% of the booking amount (whichever is higher).</li>
                            <li><strong>Within 4 hours of pickup / No Show:</strong> If you cancel within 4 hours of the pickup time or fail to show up ("No Show"), no refund will be provided for the advance amount.</li>
                        </ul>

                        <h3>2. Refund Process</h3>
                        <ul>
                            <li>Eligible refunds will be processed within 5-7 business days from the date of cancellation.</li>
                            <li>Refunds will be credited back to the original source of payment (Bank Transfer, UPI, Credit/Debit Card).</li>
                            <li>If you do not receive your refund within the stipulated time, please contact us at <a href="mailto:support@ranchicarrental.in">support@ranchicarrental.in</a> or call +91 86511 44783.</li>
                        </ul>

                        <h3>3. Breakdown & Unforeseen Circumstances</h3>
                        <p>In the rare event of a vehicle breakdown or operational issue from our end:</p>
                        <ul>
                            <li>We will try to provide an alternative vehicle of a similar category within a reasonable time.</li>
                            <li>If we supply a lower category vehicle, the price difference will be refunded.</li>
                            <li>If we are unable to provide a vehicle, a full refund including the advance will be processed immediately.</li>
                        </ul>

                        <h3>4. Policy Changes</h3>
                        <p>RanchiCarRental reserves the right to modify this policy at any time without prior notice. The policy in effect at the time of booking will apply.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
