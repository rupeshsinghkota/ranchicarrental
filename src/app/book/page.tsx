import BookingForm from "@/components/booking/BookingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Car | RanchiCarRental",
    description: "Book your car rental in Ranchi online. Simple booking process for local, airport, and outstation trips.",
};

export default function BookPage() {
    return (
        <div className="bg-slate-50 py-12 lg:py-24 min-h-screen">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Book Your Ride</h1>
                    <p className="text-lg text-slate-600">Fill in the details below to book your car instantly. We'll confirm via WhatsApp.</p>
                </div>
                <BookingForm />
            </div>
        </div>
    );
}
