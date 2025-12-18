import { Phone, Mail, MapPin, Clock } from "lucide-react";
import BookingForm from "@/components/booking/BookingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Ranchi Car Rental | Book Self Drive & Taxi Now",
    description: "Get in touch with Ranchi Car Rental. Call +91 86511 44783 for instant booking. Visit our office at Main Road, Ranchi. 24/7 Support available.",
    keywords: ["Ranchi car rental contact number", "Taxi service Ranchi phone number", "Self drive car booking Ranchi"],
    alternates: {
        canonical: 'https://ranchicarrental.in/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="bg-slate-50">
            <div className="bg-slate-900 text-white pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Have questions? Need a custom quote? We are here to help. Reach out to us via phone, email, or visit our office.
                    </p>
                </div>
            </div>

            <div className="py-12 lg:py-24 container-custom">

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#25D366]/10 p-3 rounded-full text-[#25D366] shrink-0">
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">WhatsApp (Preferred)</p>
                                        <a href="https://wa.me/918651144783" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-slate-900 hover:text-[#25D366] transition-colors">Chat on WhatsApp</a>
                                        <p className="text-slate-500 text-sm mt-1">Instant Response</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                                        <a href="tel:+918651144783" className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">+91 86511 44783</a>
                                        <p className="text-slate-500 text-sm mt-1">Available 24/7 for booking</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Email</p>
                                        <a href="mailto:booking@ranchicarrental.in" className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">booking@ranchicarrental.in</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Office Address</p>
                                        <address className="text-lg text-slate-900 not-italic">
                                            123, Main Road,<br />
                                            Near Albert Ekka Chowk,<br />
                                            Ranchi, Jharkhand - 834001
                                        </address>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Operating Hours</p>
                                        <p className="text-lg text-slate-900">Monday - Sunday: 24 Hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 h-[300px] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.77996815204!2d85.24063276632912!3d23.34409978438153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0x651f0dd31818d86a!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <BookingForm className="h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
