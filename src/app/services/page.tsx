import { MapPin, Plane, Car, Heart, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/form-elements";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premium Car Rental Services | Airport, Outstation & Wedding Cars in Ranchi",
    description: "Explore our wide range of services: Self Drive Cars, Airport Taxi to Birsa Munda Airport, Outstation Cabs, and Luxury Wedding Car Rentals in Ranchi.",
    keywords: ["Airport taxi Ranchi", "Outstation cab service Ranchi", "Wedding car rental Ranchi", "Corporate car rental Ranchi"],
    alternates: {
        canonical: 'https://ranchicarrental.in/services',
    },
};

export default function ServicesPage() {
    const services = [
        {
            id: "local",
            title: "Local Taxi Service",
            icon: MapPin,
            desc: "Perfect for city sightseeing, shopping, or visiting relatives. Choose from 4hr/40km, 8hr/80km packages.",
            features: ["Flexible Hourly Packages", "Doorstep Pickup", "AC Cabs"]
        },
        {
            id: "airport",
            title: "Airport Pickup & Drop",
            icon: Plane,
            desc: "Reliable airport transfers to/from Birsa Munda Airport (IXR). We track your flight to ensure on-time service.",
            features: ["Flight Tracking", "Meet & Greet", "No Waiting Charges (upto 30 mins)"]
        },
        {
            id: "outstation",
            title: "Outstation Taxi",
            icon: Car,
            desc: "Planning a weekend getaway or a long trip? Book reliable outstation cabs for one-way or round trips.",
            features: ["All India Permit", "Experienced Highway Drivers", "Transparent Billing"]
        },
        {
            id: "wedding",
            title: "Wedding & Events",
            icon: Heart,
            desc: "Add a touch of luxury to your special day with our premium fleet of wedding cars. Decor options available.",
            features: ["Luxury Fleets", "Decorated Cars", "Uniformed Chauffeurs"]
        },
        {
            id: "corporate",
            title: "Corporate Car Rental",
            icon: Briefcase,
            desc: "Monthly car rental solutions for companies. Efficient employee transportation and executive travel.",
            features: ["GST Billing", "Monthly Reports", "Dedicated Support"]
        }
    ];

    return (
        <div className="bg-slate-50">
            <div className="bg-slate-900 text-white pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                        RanchiCarRental offers a comprehensive range of transport solutions tailored to your needs.
                        Whether it's a short trip within the city or a long drive across the country, we have you covered.
                    </p>
                </div>
            </div>

            <div className="py-12 lg:py-24 container-custom">

                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1">
                                <div className="bg-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                    <service.icon size={40} />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map(f => (
                                        <li key={f} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <span className="w-2 h-2 bg-secondary rounded-full" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/book">
                                    <Button className="px-8 py-3 bg-slate-900 text-white hover:bg-slate-800">Book Now</Button>
                                </Link>
                            </div>
                            <div className="flex-1 bg-slate-100 rounded-3xl h-[400px] w-full relative overflow-hidden shadow-lg">
                                {/* Placeholder for real images - using patterns/colors for now or stock URLs if I had specific ones per service, reusing reliable Unsplash for now */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1469854523086-cc02fe5d8800' : '1568605117036-5fe5e7bab0b7'}?q=80&w=2021&auto=format&fit=crop`}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
