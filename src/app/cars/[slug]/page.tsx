import { getCarSeoData, getAllCarSlugs } from "@/lib/car-seo-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/booking/BookingForm";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Car, Fuel, Users, Gauge, Phone } from "lucide-react";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

// 1. Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const car = getCarSeoData(slug);
    if (!car) return { title: "Car Not Found" };

    return {
        title: car.title,
        description: car.description,
        alternates: {
            canonical: `https://ranchicarrental.in/cars/${car.slug}`,
        },
        openGraph: {
            title: car.title,
            description: car.description,
            images: [car.image],
        },
    };
}

// 2. SSG Paths
export async function generateStaticParams() {
    return getAllCarSlugs().map((slug) => ({ slug }));
}

// 3. Page Component
export default async function CarModelPage({ params }: Props) {
    const { slug } = await params;
    const car = getCarSeoData(slug);

    if (!car) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero / Header Section */}
            <div className="bg-slate-900 text-white pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            <Car size={16} />
                            Self Drive {car.modelName}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Rent <span className="text-secondary">{car.fullName}</span> in Ranchi
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            {car.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="bg-slate-800 px-4 py-2 rounded-lg flex items-center gap-2">
                                <Users className="text-secondary" size={20} />
                                <span>{car.seats} Seats</span>
                            </div>
                            <div className="bg-slate-800 px-4 py-2 rounded-lg flex items-center gap-2">
                                <Fuel className="text-secondary" size={20} />
                                <span>{car.fuel}</span>
                            </div>
                            <div className="bg-slate-800 px-4 py-2 rounded-lg flex items-center gap-2">
                                <Gauge className="text-secondary" size={20} />
                                <span>{car.transmission}</span>
                            </div>
                        </div>

                        <div className="text-3xl font-bold text-white mb-2">
                            {car.price}<span className="text-lg font-normal text-slate-400">/day</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-8">*Prices may vary on weekends/season</p>
                    </div>

                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
                        <Image
                            src={car.image}
                            alt={car.fullName}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Content & Booking Section */}
            <section className="py-16">
                <div className="container-custom grid lg:grid-cols-3 gap-12">
                    {/* Left Content (2 cols) */}
                    <div className="lg:col-span-2 prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-slate-900">{car.heading}</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {car.whyRent}
                        </p>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 not-prose mt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Ideal For:</h3>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {car.idealFor.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-slate-700">
                                        <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-12 bg-blue-50 border border-blue-100 p-8 rounded-2xl not-prose text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Requirements to Rent {car.modelName}</h3>
                            <div className="grid sm:grid-cols-3 gap-6 text-sm">
                                <div>
                                    <div className="font-bold text-primary mb-1">Original Aadhar Card</div>
                                    <div className="text-slate-600">ID Proof</div>
                                </div>
                                <div>
                                    <div className="font-bold text-primary mb-1">Valid Driving License</div>
                                    <div className="text-slate-600">Driving Proof</div>
                                </div>
                                <div>
                                    <div className="font-bold text-primary mb-1">Security Deposit</div>
                                    <div className="text-slate-600">Refundable</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Booking Form (1 col) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
                                <h3 className="text-xl font-bold mb-6 text-center">Book {car.modelName} Now</h3>
                                {/* We can potentially pre-fill car model if we update BookingForm, for now standard form */}
                                <BookingForm />
                                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                                    <p className="text-sm text-slate-500 mb-3">Prefer to book via call?</p>
                                    <Link href="tel:+918651144783" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80">
                                        <Phone size={18} /> Call +91 86511 44783
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
