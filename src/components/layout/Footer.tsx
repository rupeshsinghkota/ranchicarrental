import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
            <div className="container-custom grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                {/* Brand */}
                <div className="col-span-2 md:col-span-1 lg:col-span-1">
                    <Link href="/" className="inline-block mb-6">
                        <span className="text-2xl font-bold text-white">Ranchi<span className="text-secondary">CarRental</span></span>
                    </Link>
                    <p className="mb-6 leading-relaxed">
                        Reliable, affordable, and safe car rental services in Ranchi. Whether you need a local taxi, airport transfer, or outstation cab, we are here to serve you 24/7.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-secondary transition-colors"><Facebook size={24} /></a>
                        <a href="#" className="hover:text-secondary transition-colors"><Instagram size={24} /></a>
                        <a href="#" className="hover:text-secondary transition-colors"><Twitter size={24} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-span-1">
                    <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/book" className="hover:text-secondary transition-colors">Book a Car</Link></li>
                        <li><Link href="/pricing" className="hover:text-secondary transition-colors">Pricing</Link></li>
                        <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="col-span-1">
                    <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
                    <ul className="space-y-3">
                        <li><Link href="/services#local" className="hover:text-secondary transition-colors">Local Taxi Service</Link></li>
                        <li><Link href="/services#airport" className="hover:text-secondary transition-colors">Airport Pickup/Drop</Link></li>
                        <li><Link href="/services#outstation" className="hover:text-secondary transition-colors">Outstation Cabs</Link></li>
                        <li><Link href="/services#wedding" className="hover:text-secondary transition-colors">Wedding Car Rental</Link></li>
                        <li><Link href="/services#corporate" className="hover:text-secondary transition-colors">Corporate Car Rental</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="col-span-2 md:col-span-1 lg:col-span-1">
                    <h3 className="text-white text-lg font-bold mb-6 tracking-wide">Contact Info</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <Phone className="text-secondary shrink-0" size={20} />
                            <div>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Call Us 24/7</p>
                                <a href="tel:+918651144783" className="text-white hover:text-secondary text-lg font-medium">+91 86511 44783</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="text-secondary shrink-0">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">WhatsApp Us</p>
                                <a href="https://wa.me/918651144783?text=Hi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary text-lg font-medium">+91 86511 44783</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Mail className="text-secondary shrink-0" size={20} />
                            <div>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Email Us</p>
                                <a href="mailto:booking@ranchicarrental.in" className="text-white hover:text-secondary transition-colors">booking@ranchicarrental.in</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <MapPin className="text-secondary shrink-0" size={20} />
                            <div>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Location</p>
                                <p className="text-white">Main Road, Ranchi, Jharkhand - 834001</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 container-custom pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <p>&copy; {new Date().getFullYear()} RanchiCarRental. All rights reserved.</p>
                <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
                    <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
                    <Link href="/refund-policy" className="hover:text-secondary transition-colors">Refund Policy</Link>
                </div>
            </div>
        </footer>
    );
}
