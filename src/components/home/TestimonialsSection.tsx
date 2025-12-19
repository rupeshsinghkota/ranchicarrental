"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Rahul Kumar",
            location: "Ranchi",
            rating: 5,
            text: "Excellent service! Booked a Swift for a weekend trip. The car was clean and well-maintained. Highly recommend!",
            initials: "RK"
        },
        {
            name: "Priya Singh",
            location: "Doranda",
            rating: 5,
            text: "Very professional and responsive. Got the car delivered to my doorstep. Best car rental in Ranchi!",
            initials: "PS"
        },
        {
            name: "Amit Sharma",
            location: "Lalpur",
            rating: 5,
            text: "Booked Thar for my wedding. Amazing experience! The team was very cooperative and the car was in perfect condition.",
            initials: "AS"
        },
        {
            name: "Sneha Verma",
            location: "HEC",
            rating: 5,
            text: "Great rates and transparent pricing. No hidden charges. Will definitely book again for my next trip!",
            initials: "SV"
        }
    ];

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((curr) => (curr - 1 + testimonials.length) % testimonials.length);

    const current = testimonials[currentIndex];

    return (
        <section className="py-16 bg-slate-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Don't just take our word for it - hear from our satisfied customers</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
                        {/* Quote Icon */}
                        <div className="absolute top-6 left-6 text-6xl text-primary/10 font-serif">"</div>

                        {/* Testimonial Content */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-1 mb-4 justify-center">
                                {[...Array(current.rating)].map((_, i) => (
                                    <span key={i} className="text-amber-400 text-xl">★</span>
                                ))}
                            </div>

                            <p className="text-lg md:text-xl text-slate-700 mb-6 text-center italic leading-relaxed">
                                {current.text}
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white font-bold">
                                    {current.initials}
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-slate-900">{current.name}</div>
                                    <div className="text-sm text-slate-500">{current.location}</div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prev}
                                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-8" : "bg-slate-300"
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
