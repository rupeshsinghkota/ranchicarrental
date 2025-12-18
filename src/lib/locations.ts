export type LocationData = {
    name: string;
    slug: string;
    title: string;
    description: string;
    heading: string;
    content: string;
    landmarks: string[];
};

export const LOCATIONS: Record<string, LocationData> = {
    "car-rental-lalpur-ranchi": {
        name: "Lalpur",
        slug: "car-rental-lalpur-ranchi",
        title: "Car Rental in Lalpur Ranchi | Self Drive & Taxi Service @ ₹999",
        description: "Looking for best car rental in Lalpur, Ranchi? Book Self Drive cars or Taxi near Nucleus Mall & Circular Road. Instant Delivery, No Hidden Charges.",
        heading: "Best Car Rental Service in Lalpur, Ranchi",
        content: "Lalpur is the commercial heart of Ranchi. Whether you are shopping at Nucleus Mall or visiting the Distillery Bridge area, moving around in a cab or auto can be expensive and tiring. RanchiCarRental.in brings you the freedom of Self Drive Car Rental directly to Lalpur. Avoid the hassle of negotiating with taxi drivers. Pick up your Swift, Thar, or Scorpio today and drive on your own terms.",
        landmarks: ["Nucleus Mall", "Circular Road", "Distillery Bridge", "Lalpur Chowk"],
    },
    "car-rental-near-airport-ranchi": {
        name: "Birsa Munda Airport",
        slug: "car-rental-near-airport-ranchi",
        title: "Car Rental at Ranchi Airport (IXR) | Airport Pickup & Drop",
        description: "Land at Birsa Munda Airport and drive away! Premium Self Drive Car Rental at Ranchi Airport. Pre-book delivery to avoiding taxi queues.",
        heading: "Self Drive Car Rental at Birsa Munda Airport, Ranchi",
        content: "Arriving in Ranchi? Skip the long queues for prepaid taxis at Birsa Munda Airport (IXR). With our Airport Car Rental service, you can have your car waiting for you at the arrivals terminal. Whether you need a compact car for a city meeting or a comfortable SUV like Innova for an outstation trip to Patratu or Netarhat, we ensure your journey starts smoothly right from the airport.",
        landmarks: ["Birsa Munda Airport Terminal", "Hinoo", "Airport Road"],
    },
    "car-rental-near-railway-station-ranchi": {
        name: "Ranchi Railway Station",
        slug: "car-rental-near-railway-station-ranchi",
        title: "Car Rental near Ranchi Railway Station | 24/7 Car Hire",
        description: "Need a car at Ranchi Station? We offer instant delivery of Self Drive cars at Ranchi Railway Station Parking. Book Swift, Thar, Scorpio now.",
        heading: "Car Rental Service near Ranchi Railway Station",
        content: "Ranchi Railway Station is the gateway to Jharkhand. Don't waste time looking for a ride. Our team delivers clean, sanitized self-drive cars directly to the station parking area. From budget hatchbacks like Alto to luxury wedding cars, we have it all. Perfect for travelers arriving by Vande Bharat or Rajdhani Express.",
        landmarks: ["Station Road", "Patel Chowk", "Chutia"],
    },
    "car-rental-kanke-ranchi": {
        name: "Kanke",
        slug: "car-rental-kanke-ranchi",
        title: "Self Drive Car Rental in Kanke Ranchi | Near CIP & BAU",
        description: "Affordable car rental in Kanke, Ranchi. Service available near Kanke Dam, CIP, and Birsa Agricultural University. Rent cars starting ₹999/day.",
        heading: "Top Rated Car Rental in Kanke, Ranchi",
        content: "Living in the peaceful green belt of Kanke? You don't need to come to the main city to rent a car. We serve the entire Kanke Road area, including BAU, CIP, and Rinse. Ideal for weekend trips to Kanke Dam or Patratu Valley. Our cars are well-maintained and perfect for the hilly terrain towards Patratu.",
        landmarks: ["Kanke Dam", "BAU", "CIP (Central Institute of Psychiatry)", "Rock Garden"],
    },
    "car-rental-doranda-ranchi": {
        name: "Doranda",
        slug: "car-rental-doranda-ranchi",
        title: "Car Rental in Doranda Ranchi | Hinoo & Kadru Car Hire",
        description: "Best Car Rental in Doranda & Hinoo. Self drive cars available near Nepal House and High Court. Low deposit & easy documentation.",
        heading: "Car Rental Services in Doranda",
        content: "Doranda involves busy office commutes and court visits. Why rely on irregular autos? Rent a car in Doranda for a day, week, or month. We offer special monthly subscription plans for office goers in the High Court and Nepal House area. drive a new car every day without owning one.",
        landmarks: ["Nepal House", "Jharkhand High Court", "Doranda College"],
    },
    "car-rental-hatia-ranchi": {
        name: "Hatia",
        slug: "car-rental-hatia-ranchi",
        title: "Car Rental in Hatia Ranchi | Near Hatia Station",
        description: "Book Self Drive cars in Hatia. Convenient delivery near Hatia Railway Station and Dhurwa. Swift, Baleno & Scorpio available.",
        heading: "Reliable Car Rental in Hatia",
        content: "Hatia is a key transit hub. If you are staying near Hatia or Dhurwa, our car rental service offers the quickest way to get moving. We specialize in providing cars for outstation trips starting from Hatia. Our vehicles have All-India permits, so you can drive to Jamshedpur, Rourkela, or Kolkata without hassle.",
        landmarks: ["Hatia Station", "Singhmode", "Dhurwa Dam"],
    },
    "car-rental-bariatu-ranchi": {
        name: "Bariatu",
        slug: "car-rental-bariatu-ranchi",
        title: "Car Rental in Bariatu Ranchi | Near RIMS",
        description: "Safe & Sanitized Car Rental in Bariatu. 24/7 Service near RIMS Hospital and Booty More. Emergency car rental available.",
        heading: "Car Hire Service in Bariatu & RIMS Area",
        content: "Bariatu is a medical and residential hub. Whether you need a car for a medical emergency visit to RIMS or a family leisure trip from Booty More, we are just a call away. We prioritize hygiene and safety, ensuring every car delivered in Bariatu is deeply sanitized.",
        landmarks: ["RIMS Hospital", "Booty More", "Hill View Road"],
    },
    "car-rental-ratu-road-ranchi": {
        name: "Ratu Road",
        slug: "car-rental-ratu-road-ranchi",
        title: "Car Rental in Ratu Road Ranchi | Piska More Taxi",
        description: "Rent a car in Ratu Road & Piska More. Avoid traffic hassles with our comfortable AC cars. Swift, Dzire & SUVs available.",
        heading: "Car Rental Agency in Ratu Road",
        content: "Ratu Road is one of the busiest arteries of Ranchi. Navigating Piska More or Hehal is easier with your own private vehicle. Rent a compact hatchback like Celerio or Alto to zip through traffic, or book an SUV for a comfortable drive to Itkhori or McCluskieganj.",
        landmarks: ["Piska More", "New Market", "Galaxia Mall"],
    }
};

export function getLocationData(slug: string): LocationData | null {
    return LOCATIONS[slug] || null;
}

export function getAllLocationSlugs(): string[] {
    return Object.keys(LOCATIONS);
}
