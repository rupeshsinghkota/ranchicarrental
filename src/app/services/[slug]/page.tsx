import { getServiceSeoData, getAllServiceSlugs } from "@/lib/service-seo-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

// 1. Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceSeoData(slug);
    if (!service) return { title: "Service Not Found" };

    return {
        title: service.title,
        description: service.description,
        alternates: {
            canonical: `https://ranchicarrental.in/services/${service.slug}`,
        },
        openGraph: {
            title: service.title,
            description: service.description,
            images: [service.heroImage],
        },
    };
}

// 2. SSG Paths
export async function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

// 3. Page Component
export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = getServiceSeoData(slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={service.heroImage}
                        alt={service.heading}
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>

                <div className="container-custom relative z-10 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            <service.icon size={16} />
                            Premium Service
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            {service.heading}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
                            {service.subHeading}
                        </p>
                        <ul className="space-y-3 mb-8">
                            {service.content.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {/* Optional Hero Visual or spacer if needed */}
                    </div>
                </div>
            </div>

            {/* Content & Booking Section */}
            <section className="py-16">
                <div className="container-custom grid lg:grid-cols-3 gap-12">
                    {/* Left Content (2 cols) */}
                    <div className="lg:col-span-2 prose prose-lg prose-slate max-w-none">
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Service</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {service.content.intro}
                            </p>
                        </section>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                            {service.content.whyChoose.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* FAQs */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Likely Questions</h2>
                            <div className="space-y-6 not-prose">
                                {service.faq.map((fq, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                                        <h4 className="font-bold text-slate-900 mb-2">{fq.question}</h4>
                                        <p className="text-slate-600">{fq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="mt-12 bg-slate-900 text-white p-8 rounded-2xl not-prose text-center">
                            <h3 className="text-2xl font-bold mb-4">Need a Custom Quote?</h3>
                            <p className="text-slate-300 mb-6">For weddings and corporate events, we offer tailored packages to suit your budget.</p>
                            <Link href="tel:+918651144783" className="inline-flex items-center gap-2 bg-secondary text-black font-bold py-3 px-6 rounded-full hover:bg-white transition-colors">
                                <Phone size={20} /> Speak to an Expert
                            </Link>
                        </div>
                    </div>

                    {/* Right Booking Form (1 col) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 -mt-24 lg:-mt-32 relative z-20">
                                <h3 className="text-xl font-bold mb-6 text-center">Book {service.heading}</h3>
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
