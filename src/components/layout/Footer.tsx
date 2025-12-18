import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
            <div className="container-custom grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                {/* Column 1: SEO About */}
                <div className="col-span-2 md:col-span-1 lg:col-span-1">
                    <Link href="/" className="inline-block mb-6">
                        <span className="text-2xl font-bold text-white">Ranchi<span className="text-secondary">CarRental</span>.in</span>
                    </Link>
                    <p className="mb-6 leading-relaxed text-sm text-slate-400">
                        RanchiCarRental.in is the leading provider of affordable and reliable <strong>car rental in Ranchi</strong>, Jharkhand. We specialize in offering a wide range of vehicles, including <strong>self drive car rental</strong> for those who value privacy and <strong>car rental with driver</strong> for a relaxed commute. Whether you need an urgent <strong>airport pickup at Birsa Munda Airport Ranchi</strong> or a convenient railway station transfer, our fleet is available 24/7. We also provide seamless <strong>outstation car rental from Ranchi</strong> to nearby tourist destinations. Serving all major localities including Lalpur, Doranda, Kanke, and Hatia, we ensure a premium travel experience with well-maintained cars and transparent pricing.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-secondary transition-colors"><Facebook size={24} /></a>
                        <a href="#" className="hover:text-secondary transition-colors"><Instagram size={24} /></a>
                        <a href="#" className="hover:text-secondary transition-colors"><Twitter size={24} /></a>
                    </div>
                </div>

                {/* Column 2: Popular Locations (SEO Links) */}
                <div className="col-span-1">
                    <h3 className="text-white text-lg font-bold mb-6">Popular Locations</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/book?location=ranchi" className="hover:text-secondary transition-colors">Self Drive Car Rental Ranchi</Link></li>
                        <li><Link href="/book?location=airport" className="hover:text-secondary transition-colors">Car Rental near Birsa Munda Airport</Link></li>
                        <li><Link href="/book?location=station" className="hover:text-secondary transition-colors">Car Rental near Ranchi Railway Station</Link></li>
                        <li><Link href="/book?location=lalpur" className="hover:text-secondary transition-colors">Car Rental in Lalpur Ranchi</Link></li>
                        <li><Link href="/book?location=doranda" className="hover:text-secondary transition-colors">Car Rental in Doranda</Link></li>
                        <li><Link href="/book?location=kanke" className="hover:text-secondary transition-colors">Car Rental in Kanke</Link></li>
                        <li><Link href="/services" className="hover:text-secondary transition-colors">Outstation Car Rental from Ranchi</Link></li>
                        <li><Link href="/book?location=hatia" className="hover:text-secondary transition-colors">Safe Car Hire in Hatia</Link></li>
                    </ul>
                </div>

                {/* Column 3: Rent By Car Model */}
                <div className="col-span-1">
                    <h3 className="text-white text-lg font-bold mb-6">Rent By Car Model</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/cars" className="hover:text-secondary transition-colors">Swift Car on Rent in Ranchi</Link></li>
                        <li><Link href="/cars" className="hover:text-secondary transition-colors">Dzire Car Rental Ranchi</Link></li>
                        <li><Link href="/cars" className="hover:text-secondary transition-colors">Baleno Self Drive Ranchi</Link></li>
                        <li><Link href="/cars" className="hover:text-secondary transition-colors">Ertiga Car Rental Ranchi</Link></li>
                        <li><Link href="/cars" className="hover:text-secondary transition-colors">Thar Self Drive Ranchi</Link></li>
                        <li><Link href="/cars" className="hover:text-secondary transition-colors">Scorpio S11 Rental Ranchi</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div className="col-span-2 md:col-span-1 lg:col-span-1">
                    <h3 className="text-white text-lg font-bold mb-6 tracking-wide">Contact Info</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <MapPin className="text-secondary shrink-0" size={20} />
                            <div>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Office Address</p>
                                <p className="text-white font-medium">Ranchi Car Rental</p>
                                <p className="text-slate-400 text-sm">Main Road, Ranchi, Jharkhand, India - 834001</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Phone className="text-secondary shrink-0" size={20} />
                            <div>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Phone / WhatsApp</p>
                                <a href="tel:+918651144783" className="text-white hover:text-secondary text-lg font-medium block">+91 86511 44783</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="text-secondary shrink-0">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">WhatsApp Booking</p>
                                <a href="https://wa.me/918651144783?text=Hi, I want to book a car" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary text-sm font-medium">Chat Now</a>
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

            {/* Keyword Discovery Section */}
            <div className="container-custom mb-12 border-t border-slate-900 pt-8">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Popular Car Rental Searches in and around Ranchi</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-2 text-[11px] text-slate-600">
                    <span className="hover:text-slate-400 cursor-default">Car rental Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Self drive car in Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Rent a car Ranchi</span>
                    <Link href="/book?location=airport" className="hover:text-slate-400">Airport taxi Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Outstation cabs Ranchi</span>
                    <Link href="/cars" className="hover:text-slate-400">Luxury car rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Wedding car hire Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Cheap car rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Car rental with driver Ranchi</span>
                    <Link href="/pricing" className="hover:text-slate-400">Ranchi car rental rates</Link>
                    <span className="hover:text-slate-400 cursor-default">Best car rental in Ranchi</span>
                    <Link href="/book?location=station" className="hover:text-slate-400">Railway station taxi Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Self drive car rental near me</span>
                    <Link href="/cars" className="hover:text-slate-400">Thar rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Scorpio on rent in Ranchi</span>
                    <Link href="/cars" className="hover:text-slate-400">Swift dzire rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Ertiga for rent Ranchi</span>
                    <Link href="/cars" className="hover:text-slate-400">Innova crysta rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Fortuner wedding car Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Car hire in Lalpur</Link>
                    <span className="hover:text-slate-400 cursor-default">Taxi service in Doranda</span>
                    <Link href="/book" className="hover:text-slate-400">Cab booking Kanke road</Link>
                    <span className="hover:text-slate-400 cursor-default">Car rental Hatia station</span>
                    <Link href="/services" className="hover:text-slate-400">Outstation taxi from Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Intercity cab service Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Round trip car rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">One way taxi Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Monthly car rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Weekly car hire Ranchi</span>
                    <Link href="/pricing" className="hover:text-slate-400">Daily car rental price Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Private car rental Ranchi</span>
                    <Link href="/services" className="hover:text-slate-400">Corporate car rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Business travel car hire</span>
                    <Link href="/book" className="hover:text-slate-400">Family car rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Group travel vehicle hire</span>
                    <Link href="/cars" className="hover:text-slate-400">SUV rental details Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Sedan car hire Ranchi</span>
                    <Link href="/cars" className="hover:text-slate-400">Hatchback rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Mini bus rental Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Traveller rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Luxury wedding car price</span>
                    <Link href="/book" className="hover:text-slate-400">Book car for marriage</Link>
                    <span className="hover:text-slate-400 cursor-default">Groom car rental Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Bridal car hire Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Event car rental Ranchi</span>
                    <Link href="/services" className="hover:text-slate-400">Airport pickup service</Link>
                    <span className="hover:text-slate-400 cursor-default">Airport drop taxi</span>
                    <Link href="/book?location=airport" className="hover:text-slate-400">Late night car rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">24 hours taxi service</span>
                    <Link href="/contact" className="hover:text-slate-400">Emergency car rental</Link>
                    <span className="hover:text-slate-400 cursor-default">Safe taxi for women Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Pet friendly car rental</Link>
                    <span className="hover:text-slate-400 cursor-default">Clean car rental Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Sanitized cab service</Link>
                    <span className="hover:text-slate-400 cursor-default">Affordable taxi Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Low cost car rental</Link>
                    <span className="hover:text-slate-400 cursor-default">Budget car hire Ranchi</span>
                    <Link href="/pricing" className="hover:text-slate-400">Best rate taxi Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Discount car rental</span>
                    <Link href="/book" className="hover:text-slate-400">Online car booking Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Ranchi to Ramgarh taxi</span>
                    <Link href="/book" className="hover:text-slate-400">Ranchi to Hazaribagh cab</Link>
                    <span className="hover:text-slate-400 cursor-default">Ranchi to Dhanbad car rental</span>
                    <Link href="/book" className="hover:text-slate-400">Ranchi to Jamshedpur taxi</Link>
                    <span className="hover:text-slate-400 cursor-default">Ranchi to Bokaro cab</span>
                    <Link href="/book" className="hover:text-slate-400">Ranchi to Deoghar car hire</Link>
                    <span className="hover:text-slate-400 cursor-default">Ranchi to Patratu trip</span>
                    <Link href="/book" className="hover:text-slate-400">Ranchi to Netarhat car</Link>
                    <span className="hover:text-slate-400 cursor-default">Ranchi to Dasham falls taxi</span>
                    <Link href="/book" className="hover:text-slate-400">Ranchi to Hundru falls cab</Link>
                    <span className="hover:text-slate-400 cursor-default">Local sightseeing car Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">Full day car rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Half day car hire Ranchi</span>
                    <Link href="/book" className="hover:text-slate-400">8 hours 80 km taxi</Link>
                    <span className="hover:text-slate-400 cursor-default">12 hours car rental</span>
                    <Link href="/book" className="hover:text-slate-400">Unlimited km self drive</Link>
                    <span className="hover:text-slate-400 cursor-default">Car on rent without deposit</span>
                    <Link href="/book" className="hover:text-slate-400">Instant car delivery Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Doorstep car delivery</span>
                    <Link href="/book" className="hover:text-slate-400">Self drive car near airport</Link>
                    <span className="hover:text-slate-400 cursor-default">Ranchi airport to main road taxi</span>
                    <Link href="/book" className="hover:text-slate-400">Ranchi station to airport cab</Link>
                    <span className="hover:text-slate-400 cursor-default">Bariatu car rental</span>
                    <Link href="/book?location=lalpur" className="hover:text-slate-400">Morabadi car hire</Link>
                    <span className="hover:text-slate-400 cursor-default">Harmu car rental services</span>
                    <Link href="/book" className="hover:text-slate-400">Ratu road taxi service</Link>
                    <span className="hover:text-slate-400 cursor-default">Kadru car rental</span>
                    <Link href="/book" className="hover:text-slate-400">Hinoo car hire</Link>
                    <span className="hover:text-slate-400 cursor-default">Namkum car rental</span>
                    <Link href="/book" className="hover:text-slate-400">Tupudana car hire</Link>
                    <span className="hover:text-slate-400 cursor-default">Dhurwa taxi service</span>
                    <Link href="/book" className="hover:text-slate-400">Jagannathpur car rental</Link>
                    <span className="hover:text-slate-400 cursor-default">Luxury cars on rent</span>
                    <Link href="/cars" className="hover:text-slate-400">Premium car rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Executive car hire</span>
                    <Link href="/cars" className="hover:text-slate-400">VIP car rental Ranchi</Link>
                    <span className="hover:text-slate-400 cursor-default">Chauffeur driven cars</span>
                    <Link href="/book" className="hover:text-slate-400">Rent a car for shooting</Link>
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
