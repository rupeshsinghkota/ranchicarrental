import Link from "next/link";
import Image from "next/image";
import { Button, getButtonClass } from "@/components/ui/form-elements";
import { Car, User, Fuel } from "lucide-react";
import type { Metadata } from "next";
import { CAR_MODELS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Our Fleet | Rent Swift, Thar, Scorpio, Innova in Ranchi",
    description: "Wide range of self drive cars in Ranchi. Small cars like Alto, Premium Hatchbacks like Baleno, SUVs like Thar, Scorpio, XUV700. Rates starting ₹1000/24hr.",
    keywords: ["Maruti Swift for rent", "Mahindra Thar for rent Ranchi", "Scorpio rental Ranchi", "Self drive SUV Ranchi", "7 seater car rental Ranchi"],
    alternates: {
        canonical: 'https://ranchicarrental.in/cars',
    },
};

export default function CarsPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 text-white pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="container-custom text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-secondary text-sm font-bold tracking-wider uppercase mb-4">Premium Fleet</span>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Choose Your Drive</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Experience the freedom of self-drive with our well-maintained fleet.
                        Transparent 24-hour pricing, zero hidden charges.
                    </p>
                </div>
            </div>

            <div className="py-12 lg:py-24 container-custom">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CAR_MODELS.map((car, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group flex flex-col">
                            {/* Image Section */}
                            <div className="h-64 bg-slate-50 relative overflow-hidden flex items-center justify-center p-4">
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm shadow-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 border border-slate-100">
                                    Self Drive
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{car.name}</h2>
                                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                                </div>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                        <User size={20} className="text-slate-400 mb-1" />
                                        <span className="text-xs font-semibold text-slate-700">{car.seats} Seats</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                        <Fuel size={20} className="text-slate-400 mb-1" />
                                        <span className="text-xs font-semibold text-slate-700">Diesel</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                        <Car size={20} className="text-slate-400 mb-1" />
                                        <span className="text-xs font-semibold text-slate-700">Manual</span>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <div className="flex items-end justify-between mb-4">
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium uppercase mb-1">Starting from</p>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-3xl font-bold text-slate-900">{car.price}</span>
                                                <span className="text-sm text-slate-500 font-medium">/day</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/book" className={getButtonClass('primary', 'default', "w-full bg-slate-900 hover:bg-primary text-white hover:text-white transition-all duration-300 h-12 text-base font-semibold rounded-xl shadow-lg hover:shadow-primary/25")}>
                                        Book This Car
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
