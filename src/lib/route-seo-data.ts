
export type RouteSeoData = {
    slug: string;
    destination: string;
    distance: string;
    time: string;
    title: string; // Meta Title
    description: string; // Meta Description
    heading: string; // H1
    content: string;
    placesToVisit: string[];
    taxiFare: string;
};

export const ROUTE_SEO_DATA: Record<string, RouteSeoData> = {
    "ranchi-to-patratu-taxi": {
        slug: "ranchi-to-patratu-taxi",
        destination: "Patratu Valley",
        distance: "40 km",
        time: "1.5 Hours",
        title: "Ranchi to Patratu Taxi Fare | Patratu Valley Car Rental",
        description: "Book Taxi from Ranchi to Patratu Valley. Enjoy the scenic serpentine roads with our experienced drivers. Round trip and full day packages available.",
        heading: "Ranchi to Patratu Valley Taxi Service",
        content: "Patratu Valley is the jewel of Jharkhand's tourism. A drive through the winding S-curves is an experience in itself. Rent a car with driver or self-drive to enjoy a picnic at the Patratu Dam. Our drivers are experts on these ghat roads handling the turns safely.",
        placesToVisit: ["Patratu Dam", "Valley View Point", "Glass Bridge"],
        taxiFare: "Starting @ ₹2500 (Round Trip)"
    },
    "ranchi-to-netarhat-car-rental": {
        slug: "ranchi-to-netarhat-car-rental",
        destination: "Netarhat",
        distance: "155 km",
        time: "4.5 Hours",
        title: "Ranchi to Netarhat Car Rental | Queen of Chotanagpur Taxi",
        description: "Travel from Ranchi to Netarhat (Queen of Chotanagpur) in comfort. Book AC Cabs or SUVs for this hill station trip. Sunrise/Sunset view packages.",
        heading: "Ranchi to Netarhat Cab Service",
        content: "Netarhat, known as the Queen of Chotanagpur, offers breathtaking sunrises and pine forests. It's a long drive, so comfort is key. Our Innova and Scorpio rentals are perfect for this 3-4 hour journey. We recommend a 2-day trip to fully enjoy Magnolia Point and the waterfalls.",
        placesToVisit: ["Magnolia Sunset Point", "Upper Ghaghri Falls", "Koel View Point"],
        taxiFare: "Starting @ ₹5500 (2 Days)"
    },
    "ranchi-to-deoghar-taxi": {
        slug: "ranchi-to-deoghar-taxi",
        destination: "Deoghar",
        distance: "250 km",
        time: "6 Hours",
        title: "Ranchi to Deoghar Taxi Service | Baidyanath Dham Cab",
        description: "Reliable taxi from Ranchi to Deoghar (Baidyanath Dham). One way and Round trip cabs available. Visit the holy Shravani Mela with ease.",
        heading: "Ranchi to Deoghar (Baba Baidyanath) Taxi",
        content: "The pilgrimage to Baba Baidyanath Dham in Deoghar is a spiritual journey for many. We offer sanitized, comfortable cabs for this long route. Whether strictly for darshan (same day return) or a relaxed trip, we have packages to suit your needs.",
        placesToVisit: ["Baba Baidyanath Temple", "Trikut Pahar", "Tapovan"],
        taxiFare: "Starting @ ₹5000 (Round Trip)"
    },
    "ranchi-to-jamshedpur-taxi": {
        slug: "ranchi-to-jamshedpur-taxi",
        destination: "Jamshedpur",
        distance: "130 km",
        time: "3 Hours",
        title: "Ranchi to Jamshedpur Taxi | One Way Cab Service",
        description: "Fastest cab service from Ranchi to Jamshedpur (Tatanagar). One way drops and round trip business travel cars available. Book now.",
        heading: "Ranchi to Jamshedpur Cab Service",
        content: "Connecting the capital Ranchi to the Steel City Jamshedpur, this is our most frequent business route. We offer excellent sedans (Dzire/Etios) for corporate travelers. Our drivers know the NH-33 route inside out, ensuring you reach your meeting on time.",
        placesToVisit: ["Jubilee Park", "Dimna Lake", "Tata Steel Plant"],
        taxiFare: "Starting @ ₹2500 (One Way)"
    },
    "ranchi-to-hazaribagh-cab": {
        slug: "ranchi-to-hazaribagh-cab",
        destination: "Hazaribagh",
        distance: "95 km",
        time: "2.5 Hours",
        title: "Ranchi to Hazaribagh Taxi | Hazaribagh National Park Cab",
        description: "Book Ranchi to Hazaribagh Taxi. One way drops and National Park tours. Affordable rates per km.",
        heading: "Ranchi to Hazaribagh Car Rental",
        content: "Travel from Ranchi to Hazaribagh via the scenic Ramgarh route. Whether visiting the Hazaribagh Wildlife Sanctuary or Hazaribagh Jheel, our cars provide a smooth ride. We also offer drops to Hazaribagh Bus Stand.",
        placesToVisit: ["Canary Hill", "Hazaribagh National Park", "Konar Dam"],
        taxiFare: "Starting @ ₹2000 (One Way)"
    },
    "ranchi-to-dhanbad-car-rental": {
        slug: "ranchi-to-dhanbad-car-rental",
        destination: "Dhanbad",
        distance: "150 km",
        time: "3.5 Hours",
        title: "Ranchi to Dhanbad Taxi Service | Coal Capital Cab",
        description: "Safe taxi from Ranchi to Dhanbad. One way and round trip available. Connect to Dhanbad Station or IIT ISM.",
        heading: "Ranchi to Dhanbad Taxi Service",
        content: "Traveling to the Coal Capital? Our Ranchi to Dhanbad taxi service is reliable and punctual. We frequently serve students and professionals traveling to IIT ISM Dhanbad. One-way drops are available at competitive rates.",
        placesToVisit: ["Maithon Dam", "Bhatinda Falls", "Shakti Mandir"],
        taxiFare: "Starting @ ₹3000 (One Way)"
    },
    "ranchi-to-bokaro-cab": {
        slug: "ranchi-to-bokaro-cab",
        destination: "Bokaro",
        distance: "110 km",
        time: "2.5 Hours",
        title: "Ranchi to Bokaro Steel City Taxi | Safe & Fast Cab",
        description: "Cab Service from Ranchi to Bokaro Steel City. AC Taxi for business and personal visits. Book One Way Drop.",
        heading: "Ranchi to Bokaro Car Rental",
        content: "Visit Bokaro Steel City comfortably in our AC cabs. The road via Gola is picturesque. We ensure our cars are in top condition for the highway drive. Ideal for families visiting the City Park or Jagannath Temple in Bokaro.",
        placesToVisit: ["City Park", "Jagannath Temple", "Garga Dam"],
        taxiFare: "Starting @ ₹2200 (One Way)"
    },
    "ranchi-to-dasham-falls-taxi": {
        slug: "ranchi-to-dasham-falls-taxi",
        destination: "Dasham Falls",
        distance: "40 km",
        time: "1 Hour",
        title: "Ranchi to Dasham Falls Taxi | Waterfall Tour Package",
        description: "Plan a picnic to Dasham Falls from Ranchi. Round trip car rental packages available. Visit one of Ranchi's most beautiful waterfalls.",
        heading: "Ranchi to Dasham Falls Trip",
        content: "Dasham Falls is a favorite picnic spot near Ranchi. The descent of the Kanchi River from 144 feet is a spectacular sight. Our drivers will take you to the parking spot and wait while you enjoy the scenery. Caution: Swimming is not advised here.",
        placesToVisit: ["Dasham Falls Viewpoint", "Surrounding Forest"],
        taxiFare: "Starting @ ₹2000 (Round Trip)"
    },
    "ranchi-to-hundru-falls-cab": {
        slug: "ranchi-to-hundru-falls-cab",
        destination: "Hundru Falls",
        distance: "45 km",
        time: "1.5 Hours",
        title: "Ranchi to Hundru Falls Car Rental | Jonha & Hundru Tour",
        description: "Book cab for Hundru Falls trip. Combine Jonha and Hundru falls in one day trip. Best rates for sightseeing.",
        heading: "Ranchi to Hundru Falls Sightseeing Taxi",
        content: "Hundru Falls is one of the highest waterfalls in the state. The journey involves driving through beautiful rural landscapes. We often combine trips to Hundru and Jonha Falls in a single day package for complete satisfaction.",
        placesToVisit: ["Hundru Falls", "Jonha Falls (Optional add-on)"],
        taxiFare: "Starting @ ₹2200 (Round Trip)"
    },
    "ranchi-to-ramgarh-taxi": {
        slug: "ranchi-to-ramgarh-taxi",
        destination: "Ramgarh",
        distance: "45 km",
        time: "1 Hour",
        title: "Ranchi to Ramgarh Taxi Service | 24/7 Cab",
        description: "Quick taxi from Ranchi to Ramgarh Cantt. One way drops available. Service to Engineering College and Rajrappa Temple.",
        heading: "Ranchi to Ramgarh Cab Service",
        content: "Ramgarh is a short stunning drive from Ranchi via the valleys. Whether you are visiting the Rajrappa Temple or the Cantonment area, our taxis offer the quickest mode of transport. We also offer drops to Ramgarh Railway Station.",
        placesToVisit: ["Rajrappa Temple", "Ramgarh Cantt"],
        taxiFare: "Starting @ ₹1500 (Round Trip)"
    }
};

export const getRouteSeoData = (slug: string) => ROUTE_SEO_DATA[slug];
export const getAllRouteSlugs = () => Object.keys(ROUTE_SEO_DATA);
