import BookingForm from "@/components/booking/BookingForm";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Car | RanchiCarRental",
    description: "Book your car rental in Ranchi online. Simple booking process for local, airport, and outstation trips.",
};

export default function BookPage() {
    return (
        <React.Fragment>
            <div className="bg-slate-900 text-white pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="container-custom text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Book Your Ride</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Fill in the details below to book your car instantly. We'll confirm via WhatsApp.</p>
                </div>
            </div>
            <div className="bg-slate-50 py-12 min-h-screen">
                <div className="container-custom max-w-4xl mx-auto">
                    <BookingForm />
                </div>
            </div>
        </React.Fragment>
    );
}
