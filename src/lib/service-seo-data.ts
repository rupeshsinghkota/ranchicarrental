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
    },
    "luxury-car-rental-ranchi": {
        slug: "luxury-car-rental-ranchi",
        title: "Luxury Car Rental Ranchi | Audi, Mercedes, Fortuner Hire",
        description: "Rent Luxury Cars in Ranchi for Weddings & VIP events. Fortuner, Audi, Mercedes available with chauffeur. Premium service guaranteed.",
        heading: "Luxury Car Rental Services",
        subHeading: "Experience world-class luxury on Ranchi roads.",
        icon: Car,
        heroImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
        content: {
            intro: "For those moments when only the best will do. RanchiCarRental offers an exclusive collection of luxury vehicles including Fortuner, Audi, and Mercedes. Perfect for weddings, VIP guests, and red-carpet events.",
            features: [
                "High-End Fleet: Fortuner Legender, Audi A4/A6, Mercedes C/E Class",
                "Chauffeur Driven: Experienced, uniformed drivers",
                "Immaculate Maintenance: Showroom condition cars",
                "Decor Options: Wedding decoration services available"
            ],
            whyChoose: [
                { title: "Status Symbol", desc: "Make a powerful statement with our premium vehicles." },
                { title: "Comfort", desc: "Plush leather interiors and advanced climate control." },
                { title: "Professionalism", desc: "Discreet and professional service for VIPs." }
            ]
        },
        faq: [
            { question: "What luxury cars do you have?", answer: "We primarily have Toyota Fortuner, and can arrange Audi/Mercedes on advance booking." },
            { question: "Is self-drive available for luxury cars?", answer: "No, currently luxury cars are only available with chauffeur service." }
        ]
    },
    "tempo-traveller-rental-ranchi": {
        slug: "tempo-traveller-rental-ranchi",
        title: "Tempo Traveller Rental Ranchi | Mini Bus Hire for Groups",
        description: "Rent 12/17/26 Seater Tempo Traveller in Ranchi. Best for family tours, marriage parties, and group picnics. AC Pushback seats.",
        heading: "Tempo Traveller & Mini Bus Rental",
        subHeading: "Comfortable group travel solutions.",
        icon: Briefcase,
        heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
        content: {
            intro: "Traveling with a large group? Don't split up into multiple cars. Rent a luxurious Tempo Traveller or Mini Bus from RanchiCarRental. Ideal for family picnics to waterfalls, marriage guest transport (Baraat), or corporate outings.",
            features: [
                "Seating Options: 12, 17, and 26 Seater",
                "Comfort: Pushback seats with ample legroom",
                "Entertainment: Music system and charging points",
                "AC/Non-AC Options Available"
            ],
            whyChoose: [
                { title: "Cost Effective", desc: "Cheaper than hiring 3-4 separate cars." },
                { title: "Togetherness", desc: "Enjoy the journey together in one vehicle." },
                { title: "Luggage Space", desc: "Ample carrier space for heavy luggage." }
            ]
        },
        faq: [
            { question: "Is carrier available for luggage?", answer: "Yes, all our travellers have roof carriers." },
            { question: "Do you have AC travellers?", answer: "Yes, we have both AC and Non-AC Force Traveler options." }
        ]
    },
    "one-way-taxi-ranchi": {
        slug: "one-way-taxi-ranchi",
        title: "One Way Taxi Ranchi | Drop Only Cab Service",
        description: "Book One Way Cab from Ranchi to Jamshedpur, Dhanbad, Bokaro, etc. Pay only for one side. Save up to 40% on travel costs.",
        heading: "One Way Taxi Service",
        subHeading: "Pay only for the distance you travel.",
        icon: Map,
        heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
        content: {
            intro: "Why pay for a round trip when you only need a drop? Our One Way Taxi service connects Ranchi to major cities like Jamshedpur, Dhanbad, Bokaro, and Patna. It is the most economical way to travel if you are not returning immediately.",
            features: [
                "Major Routes: Jamshedpur, Dhanbad, Bokaro, Patna, Kolkata",
                "No Return Fare: Pay only for the drop km",
                "Dedicated Cabs: Private AC Cab just for you",
                "Doorstep Pickup: Anywhere in Ranchi"
            ],
            whyChoose: [
                { title: "Savings", desc: "Save money by not paying for the empty return leg." },
                { title: "Convenience", desc: "Direct pickup from your home to destination doorstep." },
                { title: "Availability", desc: "Frequent cabs available on popular routes." }
            ]
        },
        faq: [
            { question: "Which cities are covered?", answer: "We cover all major cities in Jharkhand, Bihar, and West Bengal." },
            { question: "Are tolls included?", answer: "Tolls are extra and paid by the customer." }
        ]
    },
    "round-trip-taxi-ranchi": {
        slug: "round-trip-taxi-ranchi",
        title: "Round Trip Car Rental Ranchi | Outstation Return Cabs",
        description: "Best Round Trip Taxi Service in Ranchi. Hire AC Cabs for multi-day outstation trips. Driver allowance and per km rates apply.",
        heading: "Round Trip Outstation Taxi",
        subHeading: "Your personal car for the entire journey.",
        icon: Map,
        heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
        content: {
            intro: "Planning a long vacation or visiting multiple relatives? Book a Round Trip Cab and keep the car with you for the entire duration. Whether it is a 3-day trip to Netarhat or a week-long tour of Jharkhand, our car and driver will be at your disposal.",
            features: [
                "Keep the Car: The vehicle stays with you",
                "Flexible Itinerary: Go where you want, when you want",
                "Expert Drivers: Safe driving on highways and hills",
                "Transparent Billing: Clear km and day charges"
            ],
            whyChoose: [
                { title: "Flexibility", desc: "Change plans on the go without worrying about transport." },
                { title: "Safety", desc: "Same trusted driver for the whole trip." },
                { title: "Comfort", desc: "Leave your luggage in the car while you explore." }
            ]
        },
        faq: [
            { question: "Is there a minimum km limit?", answer: "Yes, usually 250km/day minimum billing applies for outstation." },
            { question: "Does driver food/stay need to be paid?", answer: "A fixed driver allowance is charged per night, they manage their own stay/food." }
        ]
    }
};

export const getServiceSeoData = (slug: string) => SERVICE_SEO_DATA[slug];

export const getAllServiceSlugs = () => Object.keys(SERVICE_SEO_DATA);
