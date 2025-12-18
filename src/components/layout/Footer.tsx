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
                        <li><Link href="/location/car-rental-lalpur-ranchi" className="hover:text-secondary transition-colors">Car Rental in Lalpur Ranchi</Link></li>
                        <li><Link href="/location/car-rental-near-airport-ranchi" className="hover:text-secondary transition-colors">Car Rental near Airport</Link></li>
                        <li><Link href="/location/car-rental-near-railway-station-ranchi" className="hover:text-secondary transition-colors">Car Rental near Railway Station</Link></li>
                        <li><Link href="/location/car-rental-doranda-ranchi" className="hover:text-secondary transition-colors">Car Rental in Doranda</Link></li>
                        <li><Link href="/location/car-rental-kanke-ranchi" className="hover:text-secondary transition-colors">Car Rental in Kanke</Link></li>
                        <li><Link href="/location/car-rental-hatia-ranchi" className="hover:text-secondary transition-colors">Car Rental in Hatia</Link></li>
                        <li><Link href="/location/car-rental-bariatu-ranchi" className="hover:text-secondary transition-colors">Car Rental in Bariatu</Link></li>
                        <li><Link href="/location/car-rental-ratu-road-ranchi" className="hover:text-secondary transition-colors">Car Rental in Ratu Road</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div className="col-span-1">
                    <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/services/self-drive-car-rental-ranchi" className="text-slate-400 hover:text-white transition-colors">Self Drive Rental</Link></li>
                        <li><Link href="/services/wedding-car-rental-ranchi" className="text-slate-400 hover:text-white transition-colors">Wedding Cars</Link></li>
                        <li><Link href="/services/airport-taxi-service-ranchi" className="text-slate-400 hover:text-white transition-colors">Airport Taxi</Link></li>
                        <li><Link href="/services/outstation-taxi-service-ranchi" className="text-slate-400 hover:text-white transition-colors">Outstation Cabs</Link></li>
                        <li><Link href="/services/corporate-car-rental-ranchi" className="text-slate-400 hover:text-white transition-colors">Corporate Rental</Link></li>
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

            {/* Structured SEO Links Section */}
            <div className="container-custom mb-12 border-t border-slate-900 pt-10">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Routes */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Popular Routes</h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link href="/routes/ranchi-to-jamshedpur-taxi" className="hover:text-secondary">Ranchi to Jamshedpur Taxi</Link></li>
                            <li><Link href="/routes/ranchi-to-deoghar-taxi" className="hover:text-secondary">Ranchi to Deoghar Cab</Link></li>
                            <li><Link href="/routes/ranchi-to-patratu-taxi" className="hover:text-secondary">Ranchi to Patratu Valley</Link></li>
                            <li><Link href="/routes/ranchi-to-netarhat-car-rental" className="hover:text-secondary">Ranchi to Netarhat Trip</Link></li>
                            <li><Link href="/routes/ranchi-to-dhanbad-car-rental" className="hover:text-secondary">Ranchi to Dhanbad Taxi</Link></li>
                            <li><Link href="/routes/ranchi-to-bokaro-cab" className="hover:text-secondary">Ranchi to Bokaro Cab</Link></li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Top Localities</h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link href="/location/car-rental-lalpur-ranchi" className="hover:text-secondary">Car Rental Lalpur</Link></li>
                            <li><Link href="/location/car-rental-hinoo-ranchi" className="hover:text-secondary">Car Rental Hinoo</Link></li>
                            <li><Link href="/location/car-rental-ratu-road-ranchi" className="hover:text-secondary">Car Rental Ratu Road</Link></li>
                            <li><Link href="/location/car-rental-morabadi-ranchi" className="hover:text-secondary">Car Rental Morabadi</Link></li>
                            <li><Link href="/location/car-rental-harmu-ranchi" className="hover:text-secondary">Car Rental Harmu</Link></li>
                            <li><Link href="/location/car-rental-namkum-ranchi" className="hover:text-secondary">Car Rental Namkum</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Specialty Services</h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link href="/services/luxury-car-rental-ranchi" className="hover:text-secondary">Luxury Car Rental</Link></li>
                            <li><Link href="/services/wedding-car-rental-ranchi" className="hover:text-secondary">Wedding Car Hire</Link></li>
                            <li><Link href="/services/tempo-traveller-rental-ranchi" className="hover:text-secondary">Tempo Traveller Rental</Link></li>
                            <li><Link href="/services/one-way-taxi-ranchi" className="hover:text-secondary">One Way Taxi Service</Link></li>
                            <li><Link href="/services/round-trip-taxi-ranchi" className="hover:text-secondary">Round Trip Cab</Link></li>
                            <li><Link href="/services/airport-taxi-service-ranchi" className="hover:text-secondary">Airport Pickup/Drop</Link></li>
                        </ul>
                    </div>

                    {/* Cars */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Our Fleet</h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link href="/cars/thar-rental-ranchi" className="hover:text-secondary">Rent Thar in Ranchi</Link></li>
                            <li><Link href="/cars/scorpio-rental-ranchi" className="hover:text-secondary">Scorpio Rental Ranchi</Link></li>
                            <li><Link href="/cars/swift-rental-ranchi" className="hover:text-secondary">Swift Self Drive</Link></li>
                            <li><Link href="/cars/innova-rental-ranchi" className="hover:text-secondary">Innova Crysta Hire</Link></li>
                            <li><Link href="/cars/ertiga-rental-ranchi" className="hover:text-secondary">Ertiga 7 Seater Rent</Link></li>
                            <li><Link href="/cars/dzire-rental-ranchi" className="hover:text-secondary">Swift Dzire Taxi</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Comprehensive Keyword Cloud for 100% Coverage */}
            <div className="container-custom mb-12 border-t border-slate-900 pt-8">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">All Car Rental Searches</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-slate-600 leading-relaxed justify-center">
                    <Link href="/" className="hover:text-slate-400">Car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/self-drive-car-rental-ranchi" className="hover:text-slate-400">Self drive car in Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/book" className="hover:text-slate-400">Rent a car Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/airport-taxi-service-ranchi" className="hover:text-slate-400">Airport taxi Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/outstation-taxi-service-ranchi" className="hover:text-slate-400">Outstation cabs Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/luxury-car-rental-ranchi" className="hover:text-slate-400">Luxury car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/wedding-car-rental-ranchi" className="hover:text-slate-400">Wedding car hire Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Cheap car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/corporate-car-rental-ranchi" className="hover:text-slate-400">Car rental with driver Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Ranchi car rental rates</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/about" className="hover:text-slate-400">Best car rental in Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-near-railway-station-ranchi" className="hover:text-slate-400">Railway station taxi Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/" className="hover:text-slate-400">Self drive car rental near me</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/cars/thar-rental-ranchi" className="hover:text-slate-400">Thar rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/cars/scorpio-rental-ranchi" className="hover:text-slate-400">Scorpio on rent in Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/cars/dzire-rental-ranchi" className="hover:text-slate-400">Swift dzire rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/cars/ertiga-rental-ranchi" className="hover:text-slate-400">Ertiga for rent Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/cars/innova-rental-ranchi" className="hover:text-slate-400">Innova crysta rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/wedding-car-rental-ranchi" className="hover:text-slate-400">Fortuner wedding car Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-lalpur-ranchi" className="hover:text-slate-400">Car hire in Lalpur</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-doranda-ranchi" className="hover:text-slate-400">Taxi service in Doranda</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-kanke-ranchi" className="hover:text-slate-400">Cab booking Kanke road</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-hatia-ranchi" className="hover:text-slate-400">Car rental Hatia station</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/outstation-taxi-service-ranchi" className="hover:text-slate-400">Outstation taxi from Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/outstation-taxi-service-ranchi" className="hover:text-slate-400">Intercity cab service Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/round-trip-taxi-ranchi" className="hover:text-slate-400">Round trip car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/one-way-taxi-ranchi" className="hover:text-slate-400">One way taxi Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/corporate-car-rental-ranchi" className="hover:text-slate-400">Monthly car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Weekly car hire Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Daily car rental price Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/book" className="hover:text-slate-400">Private car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/corporate-car-rental-ranchi" className="hover:text-slate-400">Corporate car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/corporate-car-rental-ranchi" className="hover:text-slate-400">Business travel car hire</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/tempo-traveller-rental-ranchi" className="hover:text-slate-400">Family car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/tempo-traveller-rental-ranchi" className="hover:text-slate-400">Group travel vehicle hire</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/cars/scorpio-rental-ranchi" className="hover:text-slate-400">SUV rental details Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/cars/dzire-rental-ranchi" className="hover:text-slate-400">Sedan car hire Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/cars/baleno-rental-ranchi" className="hover:text-slate-400">Hatchback rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/tempo-traveller-rental-ranchi" className="hover:text-slate-400">Mini bus rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/tempo-traveller-rental-ranchi" className="hover:text-slate-400">Traveller rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/wedding-car-rental-ranchi" className="hover:text-slate-400">Luxury wedding car price</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/wedding-car-rental-ranchi" className="hover:text-slate-400">Book car for marriage</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/wedding-car-rental-ranchi" className="hover:text-slate-400">Groom car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/wedding-car-rental-ranchi" className="hover:text-slate-400">Bridal car hire Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/wedding-car-rental-ranchi" className="hover:text-slate-400">Event car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/airport-taxi-service-ranchi" className="hover:text-slate-400">Airport pickup service</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/airport-taxi-service-ranchi" className="hover:text-slate-400">Airport drop taxi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/airport-taxi-service-ranchi" className="hover:text-slate-400">Late night car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/airport-taxi-service-ranchi" className="hover:text-slate-400">24 hours taxi service</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/contact" className="hover:text-slate-400">Emergency car rental</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/about" className="hover:text-slate-400">Safe taxi for women Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/book" className="hover:text-slate-400">Pet friendly car rental</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/about" className="hover:text-slate-400">Clean car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/about" className="hover:text-slate-400">Sanitized cab service</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Affordable taxi Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Low cost car rental</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Budget car hire Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Best rate taxi Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Discount car rental</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/book" className="hover:text-slate-400">Online car booking Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-ramgarh-taxi" className="hover:text-slate-400">Ranchi to Ramgarh taxi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-hazaribagh-cab" className="hover:text-slate-400">Ranchi to Hazaribagh cab</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-dhanbad-car-rental" className="hover:text-slate-400">Ranchi to Dhanbad car rental</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-jamshedpur-taxi" className="hover:text-slate-400">Ranchi to Jamshedpur taxi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-bokaro-cab" className="hover:text-slate-400">Ranchi to Bokaro cab</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-deoghar-taxi" className="hover:text-slate-400">Ranchi to Deoghar car hire</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-patratu-taxi" className="hover:text-slate-400">Ranchi to Patratu trip</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-netarhat-car-rental" className="hover:text-slate-400">Ranchi to Netarhat car</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-dasham-falls-taxi" className="hover:text-slate-400">Ranchi to Dasham falls taxi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-hundru-falls-cab" className="hover:text-slate-400">Ranchi to Hundru falls cab</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/routes/ranchi-to-hundru-falls-cab" className="hover:text-slate-400">Local sightseeing car Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Full day car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Half day car hire Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">8 hours 80 km taxi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">12 hours car rental</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/self-drive-car-rental-ranchi" className="hover:text-slate-400">Unlimited km self drive</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/pricing" className="hover:text-slate-400">Car on rent without deposit</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/self-drive-car-rental-ranchi" className="hover:text-slate-400">Instant car delivery Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/self-drive-car-rental-ranchi" className="hover:text-slate-400">Doorstep car delivery</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-near-airport-ranchi" className="hover:text-slate-400">Self drive car near airport</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/airport-taxi-service-ranchi" className="hover:text-slate-400">Ranchi airport to main road taxi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/airport-taxi-service-ranchi" className="hover:text-slate-400">Ranchi station to airport cab</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-bariatu-ranchi" className="hover:text-slate-400">Bariatu car rental</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-morabadi-ranchi" className="hover:text-slate-400">Morabadi car hire</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-harmu-ranchi" className="hover:text-slate-400">Harmu car rental services</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-ratu-road-ranchi" className="hover:text-slate-400">Ratu road taxi service</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-kadru-ranchi" className="hover:text-slate-400">Kadru car rental</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-hinoo-ranchi" className="hover:text-slate-400">Hinoo car hire</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-namkum-ranchi" className="hover:text-slate-400">Namkum car rental</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-tupudana-ranchi" className="hover:text-slate-400">Tupudana car hire</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/taxi-service-dhurwa-ranchi" className="hover:text-slate-400">Dhurwa taxi service</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/location/car-rental-jagannathpur-ranchi" className="hover:text-slate-400">Jagannathpur car rental</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/luxury-car-rental-ranchi" className="hover:text-slate-400">Luxury cars on rent</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/luxury-car-rental-ranchi" className="hover:text-slate-400">Premium car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/luxury-car-rental-ranchi" className="hover:text-slate-400">Executive car hire</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/luxury-car-rental-ranchi" className="hover:text-slate-400">VIP car rental Ranchi</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/services/luxury-car-rental-ranchi" className="hover:text-slate-400">Chauffeur driven cars</Link>
                    <span className="text-slate-800">•</span>
                    <Link href="/contact" className="hover:text-slate-400">Rent a car for shooting</Link>
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
