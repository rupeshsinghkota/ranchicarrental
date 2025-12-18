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
    },
    "car-rental-hinoo-ranchi": {
        name: "Hinoo",
        slug: "car-rental-hinoo-ranchi",
        title: "Car Rental in Hinoo Ranchi | Near Airport & Shukla Colony",
        description: "Best car rental service in Hinoo, Ranchi. Located near Airport and Shukla Colony. Self drive cars available for pickup.",
        heading: "Car Hire Service in Hinoo",
        content: "Hinoo is strategically located near the Birsa Munda Airport. If you live in Shukla Colony or near the Hinoo Chowk, our car rental service offers the perfect solution for your travel needs. Avoid high airport taxi surcharges by booking a car from Hinoo.",
        landmarks: ["Hinoo Chowk", "Shukla Colony", "Spring City"],
    },
    "car-rental-kadru-ranchi": {
        name: "Kadru",
        slug: "car-rental-kadru-ranchi",
        title: "Car Rental in Kadru Ranchi | Near Ashby & Ashok Nagar",
        description: "Rent a car in Kadru & Ashok Nagar. Premium self-drive cars available near Ashby. Book online instantly.",
        heading: "Self Drive Car Rental in Kadru",
        content: "Kadru is a prime residential area connecting Main Road to Argora. Whether you need a car for a family function in Ashok Nagar or a daily commute to HEC, our fleet in Kadru is ready for you.",
        landmarks: ["Ashby", "Ashok Nagar", "Kadru Overbridge"],
    },
    "car-rental-harmu-ranchi": {
        name: "Harmu",
        slug: "car-rental-harmu-ranchi",
        title: "Car Rental in Harmu Housing Colony | Sahajanand Chowk",
        description: "Car Hire in Harmu Housing Colony. Available near Sahajanand Chowk and Dhoni House. Suv & Sedan rental.",
        heading: "Best Car Rental in Harmu Housing Colony",
        content: "Harmu is one of the largest residential colonies in Ranchi. We offer doorstep delivery of self-drive cars in Harmu Housing Colony. Perfect for residents planning weekend trips to Netarhat or Patratu.",
        landmarks: ["Sahajanand Chowk", "Harmu Ground", "BJP Office"],
    },
    "car-rental-morabadi-ranchi": {
        name: "Morabadi",
        slug: "car-rental-morabadi-ranchi",
        title: "Car Rental in Morabadi Ranchi | Near Oxygen Park",
        description: "Rent a car in Morabadi. Enjoy driving near Tagore Hill and Oxygen Park. Open jeep and Thar rental available.",
        heading: "Car Rental Service in Morabadi",
        content: "Morabadi is the leisure capital of Ranchi. Rent a Thar to drive up to Tagore Hill or an open jeep for an evening drive around the stadium. We serve the entire Morabadi and Bariatu area.",
        landmarks: ["Tagore Hill", "Oxygen Park", "Morabadi Ground"],
    },
    "car-rental-namkum-ranchi": {
        name: "Namkum",
        slug: "car-rental-namkum-ranchi",
        title: "Car Rental in Namkum Ranchi | Near Station & Army Camp",
        description: "Affordable car rental in Namkum. Serving Namkum Industrial Area and Army Camp. Book Taxi or Self Drive.",
        heading: "Reliable Car Rental in Namkum",
        content: "Located on the Tata Road, Namkum is a key industrial and defense area. We provide reliable car rental services for army personnel and industrial visitors in Namkum and Tatisilwai.",
        landmarks: ["Namkum Station", "Jacep Bhawan", "Tata Road"],
    },
    "car-rental-tupudana-ranchi": {
        name: "Tupudana",
        slug: "car-rental-tupudana-ranchi",
        title: "Car Rental in Tupudana | Near Hatia & Ring Road",
        description: "Car Rental Service in Tupudana Industrial Area. Easy access to Ring Road. SUVs and Commercial cars available.",
        heading: "Car Hire in Tupudana",
        content: "Tupudana's proximity to the Ring Road makes it an ideal starting point for outstation trips. Avoid city traffic and start your journey to Khunti or Chaibasa directly from Tupudana with our rental cars.",
        landmarks: ["Tupudana Chowk", "Ring Road", "Industrial Area"],
    },
    "taxi-service-dhurwa-ranchi": {
        name: "Dhurwa",
        slug: "taxi-service-dhurwa-ranchi",
        title: "Taxi Service in Dhurwa Ranchi | Near JSCA Stadium",
        description: "Book Taxi or Self Drive car in Dhurwa. Near JSCA Stadium and Core Capital Area. 24/7 Service.",
        heading: "Taxi & Car Rental in Dhurwa",
        content: "Dhurwa hosts the Core Capital and the famous JSCA Stadium. Whether you are here for a match or government work in the Project Building, our cabs and self-drive cars offer the most convenient travel option.",
        landmarks: ["JSCA Stadium", "Project Bhawan", "Dhurwa Dam"],
    },
    "car-rental-jagannathpur-ranchi": {
        name: "Jagannathpur",
        slug: "car-rental-jagannathpur-ranchi",
        title: "Car Rental in Jagannathpur | Near Temple",
        description: "Car hire near Jagannathpur Temple. Affordable rates for local sightseeing and temple visits.",
        heading: "Car Rental near Jagannathpur Temple",
        content: "Visiting the historic Jagannathpur Temple? Rent a car to explore the temple and the nearby biodiversity park comfortably. We offer special packages for pilgrims and tourists.",
        landmarks: ["Jagannathpur Temple", "Biodiversity Park", "HEC Township"],
    }
};

export function getLocationData(slug: string): LocationData | null {
    return LOCATIONS[slug] || null;
}

export function getAllLocationSlugs(): string[] {
    return Object.keys(LOCATIONS);
}
