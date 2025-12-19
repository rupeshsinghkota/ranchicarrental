import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, MapPin, Shield, Clock, Car, Phone } from "lucide-react";
import BookingForm from "@/components/booking/BookingForm";
import { Button, getButtonClass } from "@/components/ui/form-elements";
import { cn } from "@/lib/utils";
import { CAR_MODELS } from "@/lib/constants";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CustomerCounter from "@/components/ui/CustomerCounter";
import TrustBadges from "@/components/ui/TrustBadges";
import PriceBadge from "@/components/ui/PriceBadge";
import FOMOBadge from "@/components/ui/FOMOBadge";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Self Drive Car Rental in Ranchi | Top Rated Car Hire Service",
  description: "Best Self Drive Cars in Ranchi from ₹1000/day. Choose from Swift, Thar, Scorpio, Innova. 24/7 Airport Delivery, Unlimited KMs, No Hidden Charges. Book Online!",
  alternates: {
    canonical: 'https://ranchicarrental.in',
  },
};

export default function Home() {
  // Select top 3 cars for preview
  const featuredCars = [CAR_MODELS[6], CAR_MODELS[21], CAR_MODELS[25]]; // Swift New, Ertiga, Thar

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "Ranchi Car Rental",
    "image": "https://ranchicarrental.in/images/og-image.jpg",
    "description": "Best Self Drive Car Rental Service in Ranchi. We offer well-maintained cars like Swift, Thar, Scorpio, Innova for self-drive and outstation travel.",
    "url": "https://ranchicarrental.in",
    "telephone": "+918651144783",
    "priceRange": "₹1000 - ₹8000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "834001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.3441,
      "longitude": 85.3096
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": "Ranchi"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Self Drive Car Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Self Drive Car Rental"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Taxi Service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Car Rental"
          }
        }
      ]
    }
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-12 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
            alt="Ranchi Car Rental Hero"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40 z-0"></div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-in slide-in-from-left-4 duration-700 text-center lg:text-left pt-8 lg:pt-0">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-secondary text-sm font-semibold tracking-wide uppercase">
              #1 Car Rental in Ranchi
            </div>
            <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 lg:mb-8 leading-tight tracking-tight">
              Drive Your Way <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">In Ranchi</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 mb-4 lg:mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience the freedom of self-drive with our premium fleet. well-maintained cars, zero hidden charges, and 24/7 airport delivery.
            </p>
            <div className="mb-6 lg:mb-8">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-3xl lg:text-4xl font-bold text-secondary">₹1000/day</span>
                <div className="text-left">
                  <div className="text-xs text-slate-400 uppercase">Starting from</div>
                  <div className="text-sm text-white font-semibold">Cheaper than Uber for full day!</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/book" className={getButtonClass('secondary', 'lg', "w-full sm:w-auto bg-secondary text-black hover:bg-amber-600 hover:text-white text-lg font-bold shadow-lg shadow-amber-500/20")}>
                Book Now - Fast Response ⚡
              </Link>
              <Link href="/cars" className={getButtonClass('outline', 'lg', "w-full sm:w-auto border-white text-white hover:bg-white hover:text-slate-900 text-lg")}>
                View Self Drive Fleet
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full backdrop-blur-sm"><CheckCircle className="text-green-500" size={16} /> Best Daily Rates</div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full backdrop-blur-sm"><CheckCircle className="text-green-500" size={16} /> Available 24/7</div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full backdrop-blur-sm"><CheckCircle className="text-green-500" size={16} /> Instant Confirmation</div>
            </div>
          </div>

          <div className="lg:pl-8 animate-in slide-in-from-right-4 duration-700 delay-200">
            <BookingForm className="shadow-2xl shadow-black/20" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We provide a wide range of car rental services in Ranchi to meet all your travel needs.</p>
        </div>

        <div className="container-custom grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Self Drive Cars",
              desc: "Rent a car without a driver for ultimate privacy and freedom. Choose from Hatchbacks to SUVs.",
              icon: Car,
            },
            {
              title: "Airport Transfers",
              desc: "On-time pickup and drop service for Birsa Munda Airport. Never miss a flight.",
              icon: Clock,
            },
            {
              title: "Wedding & Events",
              desc: "Luxury cars for weddings and corporate events. Make your special day memorable.",
              icon: Shield,
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
              <Link href="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
                alt="Professional Driver with Car"
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Why Choose <span className="text-primary">RanchiCarRental</span>?</h2>
              <div className="space-y-6">
                {[
                  { title: "Well Maintained Fleet", desc: "Our cars are regularly serviced and cleaned for your safety." },
                  { title: "24-Hour Billing", desc: "Simple 24-hour billing cycle. Keep the car as long as you need." },
                  { title: "Zero Hidden Costs", desc: "What you see is what you pay. No surprise charges." },
                  { title: "24/7 Roadside Assist", desc: "We are just a call away if you need any help on the road." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                      <CheckCircle className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-10 text-center">Popular Self Drive Destinations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Patratu Valley", dist: "40 km", time: "1.5 hrs" },
              { name: "Jonha Falls", dist: "45 km", time: "1.5 hrs" },
              { name: "Dassam Falls", dist: "40 km", time: "1.5 hrs" },
              { name: "Netarhat", dist: "155 km", time: "4.5 hrs" },
            ].map((route, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/5 transition-colors">
                  <MapPin className="text-slate-400 group-hover:text-primary transition-colors" size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{route.name}</h3>
                <div className="text-sm text-slate-500 flex justify-center gap-4 mb-4">
                  <span className="flex items-center gap-1"><Car size={14} /> {route.dist}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {route.time}</span>
                </div>
                <Link href="/book" className={getButtonClass('outline', 'default', "w-full border-slate-200 text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5")}>
                  Book Ride
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Fleet</h2>
          <p className="text-slate-400 mb-12">Choose from our wide range of comfortable & luxury vehicles</p>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCars.map((car, i) => (
              <div key={i} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 relative">
                {/* FOMO Badges */}
                {i === 0 && <PriceBadge type="popular" />}
                {i === 1 && <div className="absolute top-3 right-3 z-10"><FOMOBadge type="demand" /></div>}

                <div className="h-48 bg-slate-700 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-2">{car?.name}</h3>
                  <a href={`tel:+918651144783`} className="text-secondary font-bold text-lg mb-4 inline-block hover:text-amber-400 transition-colors">
                    {car?.price} <span className="text-sm font-normal text-slate-400">/ 24 hrs</span>
                  </a>
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">{car?.seats} Seater</span>
                    <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">AC</span>
                    <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">Music</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/book" className={getButtonClass('primary', 'default', "bg-white text-slate-900 hover:bg-slate-200")}>
                      Book Now
                    </Link>
                    <a
                      href={`https://wa.me/918651144783?text=Hi, I want to book ${car?.name} at ${car?.price}/day`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-[#128C7E] transition-colors"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/cars" className={getButtonClass('outline', 'default', "border-slate-600 text-white hover:bg-slate-800 px-8")}>
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Counter & Trust */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <CustomerCounter />
          <div className="mt-12">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Drive?</h2>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto">Call us now or book online to get the best self-drive car deals in Ranchi.</p>
          <p className="text-lg text-blue-200 mb-8 font-semibold">⚡ Fast Response • 📞 Available 24/7 • ✅ Instant Confirmation</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book" className={getButtonClass('secondary', 'lg', "bg-secondary text-black hover:bg-amber-500 text-lg px-8 py-6 w-full sm:w-auto")}>
              Book Now - Get Instant Quote
            </Link>
            <a href="https://wa.me/918651144783?text=Hi, I want to book a self-drive car." target="_blank" rel="noopener noreferrer" className={getButtonClass('primary', 'lg', "bg-[#25D366] text-white hover:bg-[#128C7E] text-lg px-8 py-6 w-full sm:w-auto flex items-center justify-center gap-2")}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section >
    </div >
  );
}
