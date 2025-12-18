import { getLocationData, getAllLocationSlugs } from "@/lib/locations";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/booking/BookingForm";
import Link from "next/link";
import { CheckCircle2, MapPin, Car, Phone } from "lucide-react";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

// 1. Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const location = getLocationData(slug);
    if (!location) return { title: "Location Not Found" };

    return {
        title: location.title,
        description: location.description,
        alternates: {
            canonical: `https://ranchicarrental.in/location/${location.slug}`,
        },
        openGraph: {
            title: location.title,
            description: location.description,
            images: ["/images/og-image.jpg"], // Ensure you have a default OG image
        },
    };
}

// 2. Static Path Generation (SSG) for fast performance
export async function generateStaticParams() {
    const slugs = getAllLocationSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

// 3. Page Component
export default async function LocationPage({ params }: Props) {
    const { slug } = await params;
    const location = getLocationData(slug);

    if (!location) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            {/* Hero Section */}
            <div className="bg-slate-900 text-white pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            <MapPin size={16} />
                            Car Rental in {location.name}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Rent a Car in <span className="text-secondary">{location.name}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            {location.description}
                        </p>
                        <ul className="space-y-4 mb-8">
                            {location.landmarks.map((landmark, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                                    <span>Available near {landmark}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-xl text-slate-900">
                        <h3 className="text-2xl font-bold mb-6 text-center">Book Only for {location.name}</h3>
                        <BookingForm />
                    </div>
                </div>
            </div>

            {/* SEO Content Section */}
            <section className="py-16 md:py-24">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">{location.heading}</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {location.content}
                        </p>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 my-12">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose RanchiCarRental in {location.name}?</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <Car className="text-primary" size={20} /> Doorstep Delivery
                                    </h4>
                                    <p className="text-slate-600">We deliver cars directly to your home or office in {location.name}.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <Phone className="text-primary" size={20} /> 24/7 Support
                                    </h4>
                                    <p className="text-slate-600">Need help late at night in {location.name}? Our team is always awake.</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-600">
                            Stop searching for "car rental near me" and choose the most trusted service in Ranchi.
                            We cover every corner of <strong>{location.name}</strong> ensuring you have a seamless travel experience.
                            Book your ride today!
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="tel:+918651144783"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105"
                        >
                            <Phone size={24} />
                            Call Now to Book in {location.name}
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
