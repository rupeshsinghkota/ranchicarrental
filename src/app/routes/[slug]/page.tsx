import { getRouteSeoData, getAllRouteSlugs } from "@/lib/route-seo-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, IndianRupee, Navigation, Phone, CheckCircle2 } from "lucide-react";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

// 1. Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const route = getRouteSeoData(slug);
    if (!route) return { title: "Route Not Found" };

    return {
        title: route.title,
        description: route.description,
        alternates: {
            canonical: `https://ranchicarrental.in/routes/${route.slug}`,
        },
    };
}

// 2. SSG Paths
export async function generateStaticParams() {
    return getAllRouteSlugs().map((slug) => ({ slug }));
}

// 3. Page Component
export default async function RoutePage({ params }: Props) {
    const { slug } = await params;
    const route = getRouteSeoData(slug);

    if (!route) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Dark Hero Header */}
            <div className="bg-slate-900 text-white pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            <Navigation size={16} />
                            Ranchi to {route.destination}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            {route.heading}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            {route.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="bg-slate-800 px-4 py-3 rounded-xl flex items-center gap-3">
                                <Navigation className="text-secondary" size={24} />
                                <div>
                                    <div className="text-xs text-slate-400">Distance</div>
                                    <div className="font-bold">{route.distance}</div>
                                </div>
                            </div>
                            <div className="bg-slate-800 px-4 py-3 rounded-xl flex items-center gap-3">
                                <Clock className="text-secondary" size={24} />
                                <div>
                                    <div className="text-xs text-slate-400">Time</div>
                                    <div className="font-bold">{route.time}</div>
                                </div>
                            </div>
                            <div className="bg-slate-800 px-4 py-3 rounded-xl flex items-center gap-3">
                                <IndianRupee className="text-secondary" size={24} />
                                <div>
                                    <div className="text-xs text-slate-400">Est. Fare</div>
                                    <div className="font-bold">{route.taxiFare}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-xl text-slate-900">
                        <h3 className="text-2xl font-bold mb-6 text-center">Book Taxi to {route.destination}</h3>
                        <BookingForm />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-16">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Trip Details</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {route.content}
                        </p>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 my-12">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Tourist Spots in {route.destination}</h3>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {route.placesToVisit.map((place, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 className="text-green-500" size={20} />
                                        {place}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Book with RanchiCarRental?</h3>
                        <ul className="space-y-4 mb-12">
                            <li className="flex gap-4">
                                <div className="bg-blue-100 p-2 rounded-lg h-fit text-primary"><CheckCircle2 size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Expert Drivers</h4>
                                    <p className="text-gray-600">Our drivers are familiar with the {route.destination} route, ensuring a safe smooth drive.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-blue-100 p-2 rounded-lg h-fit text-primary"><CheckCircle2 size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">No Hidden Charges</h4>
                                    <p className="text-gray-600">Tolls and parking are extra, but we communicate everything upfront.</p>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="tel:+918651144783"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105"
                        >
                            <Phone size={24} />
                            Call to Book Trip to {route.destination}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
