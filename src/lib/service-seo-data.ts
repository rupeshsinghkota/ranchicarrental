import { Car, Plane, Briefcase, Map, Shield } from "lucide-react";

export type ServiceSeoData = {
    slug: string;
    title: string;
    description: string;
    heading: string; // The H1 tag
    subHeading: string; // The text below H1
    icon: any; // Lucide icon
    heroImage: string;
    content: {
        intro: string;
        features: string[];
        whyChoose: { title: string; desc: string }[];
        pricing?: { title: string; price: string; desc: string }[];
    };
    faq: { question: string; answer: string }[];
};

export const SERVICE_SEO_DATA: Record<string, ServiceSeoData> = {
    "wedding-car-rental-ranchi": {
        slug: "wedding-car-rental-ranchi",
        title: "Luxury Wedding Car Rental Ranchi | Mercedes, Audi, Fortuner",
        description: "Make your special day memorable with our luxury wedding car rental in Ranchi. Choose from Audi, Mercedes, Fortuner, and more. Clean, decorated cars with professional drivers.",
        heading: "Luxury Wedding Car Rental in Ranchi",
        subHeading: "Arrive in style on your special day.",
        icon: Car,
        heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        content: {
            intro: "Your wedding day is one of the most important days of your life, and your entry should be nothing short of spectacular. RanchiCarRental provides a premium fleet of luxury cars for weddings, engagements, and reception parties in Ranchi.",
            features: [
                "Premium Fleet: Audi, Mercedes, Fortuner, Innova Crysta",
                "Decorated Cars Available on Request",
                "Uniformed, Well-Groomed Chauffeurs",
                "Punctual Service - We value your schedule"
            ],
            whyChoose: [
                { title: "Immaculate Condition", desc: "Our cars are waxed, polished, and deep-cleaned before every event." },
                { title: "Decor Options", desc: "We partner with top florists to provide custom flower decoration packages." },
                { title: "Reliability", desc: "We guarantee on-time arrival so you never have to worry about logistics." }
            ],
        },
        faq: [
            { question: "Do you provide car decoration?", answer: "Yes, we offer both simple and premium flower decoration packages at an additional cost." },
            { question: "Is fuel included?", answer: "Yes, for local wedding packages within Ranchi, fuel is typically included." }
        ]
    },
    "airport-taxi-service-ranchi": {
        slug: "airport-taxi-service-ranchi",
        title: "Ranchi Airport Taxi Service | Reliable Pickup & Drop Cabs",
        description: "Book reliable airport taxi in Ranchi. 24/7 service to/from Birsa Munda Airport. On-time guarantee, clean cars, and professional drivers. Pre-book now.",
        heading: "Reliable Airport Taxi Service in Ranchi",
        subHeading: "Never miss a flight with our on-time guarantee.",
        icon: Plane,
        heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
        content: {
            intro: "Traveling to or from Birsa Munda Airport? Avoid the hassle of negotiating with local drivers. Pre-book your airport taxi with RanchiCarRental for a stress-free experience. We track your flight to ensure our driver is waiting for you when you land.",
            features: [
                "24/7 Service - Late night or early morning",
                "Flight Tracking - No waiting charges for delayed flights",
                "Meet & Greet - Driver connects with you on arrival",
                "Flat Rates - Transparent pricing to city center"
            ],
            whyChoose: [
                { title: "Punctuality", desc: "We operate with a zero-delay policy for airport transfers." },
                { title: "Comfort", desc: "Clean AC cabs with ample luggage space." },
                { title: "Safety", desc: "Verified drivers and GPS tracked vehicles for late-night safety." }
            ]
        },
        faq: [
            { question: "Do you offer late night pickups?", answer: "Yes, we operate 24/7. Just share your flight details while booking." },
            { question: "Where will the driver meet me?", answer: "The driver will wait at the arrival gate or parking area and coordinate via phone." }
        ]
    },
    "outstation-taxi-service-ranchi": {
        slug: "outstation-taxi-service-ranchi",
        title: "Outstation Cab from Ranchi | Round Trip & One Way Taxi",
        description: "Best outstation taxi service in Ranchi. Hire cabs for Deoghar, Jamshedpur, Bokaro, Netarhat, and more. Affordable per km rates and safe drivers.",
        heading: "Premium Outstation Taxi Service",
        subHeading: "Explore Jharkhand and beyond with comfort.",
        icon: Map,
        heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
        content: {
            intro: "Planning a weekend getaway or a business trip outside Ranchi? Our outstation cab service offers the flexibility of stopping where you want and enjoying the journey. We serve all major routes including Deoghar, Basukinath, Patratu, Netarhat, and Jamshedpur.",
            features: [
                "Flexible Packages: Round Trip or One Way Drops",
                "Transparent Billing: Pay only for what you use",
                "Expert Route Knowledge: Drivers familiar with highways",
                "Emergency Assistance: 24/7 roadside support"
            ],
            whyChoose: [
                { title: "Freedom", desc: "Stop for photos, food, or breaks whenever you like." },
                { title: "Safety First", desc: "Regularly serviced cars for long-distance reliability." },
                { title: "No Hidden Costs", desc: "Driver allowance and tolls are discussed upfront." }
            ]
        },
        faq: [
            { question: "How is the distance calculated?", answer: "Distance is calculated from our garage back to our garage." },
            { question: "Is driver allowance extra?", answer: "Yes, a standard driver allowance applies for overnight stays." }
        ]
    },
    "corporate-car-rental-ranchi": {
        slug: "corporate-car-rental-ranchi",
        title: "Corporate Car Rental Ranchi | Employee Transport & Monthly Cabs",
        description: "Reliable corporate car rental solutions in Ranchi. Employee transportation, monthly cab hire, and executive travel. GST billing available.",
        heading: "Corporate Car Rental Solutions",
        subHeading: "Professional transport for your business needs.",
        icon: Briefcase,
        heroImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
        content: {
            intro: "RanchiCarRental is the preferred transport partner for leading companies in Ranchi. Whether you need daily employee pickup/drop, executive cars for client visits, or monthly rentals, we offer customized corporate packages with GST billing.",
            features: [
                "GST Invoicing for Input Tax Credit",
                "Monthly & Yearly Contracts",
                "Dedicated Fleet Manager",
                "24/7 Support Line"
            ],
            whyChoose: [
                { title: "Professionalism", desc: "Drivers trained in corporate etiquette." },
                { title: "Reliability", desc: "Backup vehicles always available." },
                { title: "Cost Effective", desc: "Customized rates for high-volume accounts." }
            ]
        },
        faq: [
            { question: "Do you provide GST bills?", answer: "Yes, we provide proper GST invoices for all corporate bookings." },
            { question: "Can we rent for a month?", answer: "Absolutely, we have special monthly rental packages with or without fuel." }
        ]
    }
};

export const getServiceSeoData = (slug: string) => SERVICE_SEO_DATA[slug];

export const getAllServiceSlugs = () => Object.keys(SERVICE_SEO_DATA);
