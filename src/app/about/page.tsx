import { Shield, Users, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | RanchiCarRental - Trusted Local Travel Partner",
    description: "Learn about RanchiCarRental, the most trusted taxi service in Ranchi providing safe, reliable, and affordable car rentals since 2015.",
};

export default function AboutPage() {
    return (
        <div className="bg-slate-50">
            <div className="bg-slate-900 text-white pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">About RanchiCarRental</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Trusted Local Travel Partner since 2015.
                    </p>
                </div>
            </div>

            <div className="py-12 lg:py-24 container-custom">
                <div className="max-w-4xl mx-auto">

                    <div className="prose prose-lg text-slate-600 mb-12 mx-auto">
                        <p className="lead text-xl text-slate-700 font-medium">
                            We are Ranchi's premier car rental service provider, dedicated to making your travel safe, comfortable, and hassle-free.
                        </p>
                        <p>
                            Founded with the vision to provide reliable transportation in Jharkhand, RanchiCarRental has grown from a single car to a fleet of 50+ vehicles. We understand that a taxi service is more than just a car; it's about trust, punctuality, and service quality.
                        </p>
                        <p>
                            Whether you need a cab for daily office commute, airport transfer, or a weekend getaway to Netarhat or Patratu Valley, we are here to serve you 24/7.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 my-16">
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Safety First</h3>
                            <p className="text-slate-600">GPS tracked cars and background verified drivers.</p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Customer Focsued</h3>
                            <p className="text-slate-600">24/7 support team to assist you anytime, anywhere.</p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">On-Time Service</h3>
                            <p className="text-slate-600">Punctuality is our hallmark. We value your time.</p>
                        </div>
                    </div>

                    <div className="bg-secondary/10 p-8 rounded-2xl text-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-700 italic text-lg hover:text-slate-900 transition-colors">
                            "To provide the safest, most reliable, and affordable car rental experience in Ranchi, ensuring every customer reaches their destination with a smile."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
