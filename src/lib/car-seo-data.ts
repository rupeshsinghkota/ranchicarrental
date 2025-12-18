export type CarSeoData = {
    slug: string;
    modelName: string; // Display Name e.g. "Swift", "Thar"
    fullName: string; // Full SEO Name e.g. "Maruti Suzuki Swift"
    image: string; // URL from existing constants or new
    price: string;
    seats: number;
    transmission: "Manual" | "Automatic";
    fuel: "Petrol" | "Diesel" | "Petrol/CNG";
    title: string; // Meta Title
    description: string; // Meta Description
    heading: string; // H1 Tag
    whyRent: string; // Paragraph content
    idealFor: string[]; // Bullet points
};

export const CAR_SEO_DATA: Record<string, CarSeoData> = {
    "swift-rental-ranchi": {
        slug: "swift-rental-ranchi",
        modelName: "Swift",
        fullName: "Maruti Suzuki Swift",
        image: "/images/cars/maruti-swift-new.webp",
        price: "₹1,700",
        seats: 5,
        transmission: "Manual",
        fuel: "Petrol",
        title: "Maruti Swift Car Rental in Ranchi | Self Drive Swift Price",
        description: "Rent Maruti Swift in Ranchi for Self Drive. Best mileage car for city and outstation trips. Book Swift starting @ ₹1700/day. Zero deposit option available.",
        heading: "Rent Maruti Swift in Ranchi (Self Drive)",
        whyRent: "The Maruti Swift is the most popular choice for self-drive in Ranchi. Its compact size makes it perfect for navigating the narrow busy streets of Lalpur and Main Road, while its peppy engine ensures a fun drive on the highways to Patratu. With excellent mileage and comfortable seating for 5, it matches every budget.",
        idealFor: ["Couples & Small Families", "City Commute", "Budget Road Trips"],
    },
    "thar-rental-ranchi": {
        slug: "thar-rental-ranchi",
        modelName: "Thar 4x4",
        fullName: "Mahindra Thar 4x4",
        image: "/images/cars/thar-4x4.jpg",
        price: "₹5,000",
        seats: 4,
        transmission: "Manual",
        fuel: "Diesel",
        title: "Thar Rental in Ranchi | Self Drive Mahindra Thar 4x4",
        description: "Experience the beast! Mahindra Thar 4x4 Self Drive Rental in Ranchi. Perfect for off-roading, weddings, and road trips. Book Open Roof or Hard Top Thar.",
        heading: "Mahindra Thar 4x4 Self Drive Rental in Ranchi",
        whyRent: "Nothing beats the swag of driving a Mahindra Thar in Ranchi. Whether you want to make a grand entry at a wedding or explore the rugged terrains of Netarhat and McCluskieganj, the Thar 4x4 is your best beast. We offer pristine condition Thars that guarantee heads will turn.",
        idealFor: ["Weddings & Events", "Off-Road Adventures", "Photography Shoots"],
    },
    "scorpio-rental-ranchi": {
        slug: "scorpio-rental-ranchi",
        modelName: "Scorpio S11",
        fullName: "Mahindra Scorpio S11",
        image: "/images/cars/mahindra-scorpio.png",
        price: "₹5,000",
        seats: 7,
        transmission: "Manual",
        fuel: "Diesel",
        title: "Scorpio Rental in Ranchi | Rent Scorpio S11 Self Drive",
        description: "Book Mahindra Scorpio S11 for Rent in Ranchi. 7 Seater SUV for family trips. Powerful engine and supreme comfort. Available for Self Drive & Chauffeur.",
        heading: "Rent Scorpio S11 in Ranchi (Black & White Available)",
        whyRent: "The 'King of Roads' - Mahindra Scorpio is the ultimate SUV for family trips in Jharkhand. With 7 seats and powerful AC, it's ideal for long journeys to Deoghar or Jamshedpur. Its high ground clearance handles Ranchi's mix of city and rural roads effortlessly.",
        idealFor: ["Large Families (7 Pax)", "Long Distance Travel", "Political & Corporate Visits"],
    },
    "ertiga-rental-ranchi": {
        slug: "ertiga-rental-ranchi",
        modelName: "Ertiga",
        fullName: "Maruti Suzuki Ertiga",
        image: "/images/cars/ertiga.jpg",
        price: "₹2,700",
        seats: 7,
        transmission: "Manual",
        fuel: "Petrol/CNG",
        title: "Ertiga Car Rental Ranchi | 7 Seater Self Drive Car",
        description: "Cheapest 7 Seater Car Rental in Ranchi. Book Maruti Ertiga for family picnics and weddings. Spacious, fuel-efficient, and comfortable.",
        heading: "Maruti Ertiga 7-Seater Rental in Ranchi",
        whyRent: "Need space for the whole family without breaking the bank? The Maruti Ertiga is the smartest choice. It offers the comfort of a sedan with the space of an SUV. Perfect for visiting waterfalls like Hundru and Jonha with your extended family.",
        idealFor: ["Family Picnics", "Airport Transfers with Luggage", "Budget Group Travel"],
    },
    "dzire-rental-ranchi": {
        slug: "dzire-rental-ranchi",
        modelName: "Dzire",
        fullName: "Maruti Suzuki Dzire",
        image: "/images/cars/dzire-vxi.JPG",
        price: "₹1,800",
        seats: 5,
        transmission: "Manual",
        fuel: "Petrol",
        title: "Swift Dzire Rental Ranchi | Sedan Car Hire @ ₹1800",
        description: "Rent Swift Dzire in Ranchi. Premium Sedan experience at budget rates. Large boot space for airport luggage and comfortable rear seats.",
        heading: "Swift Dzire Sedan for Rent in Ranchi",
        whyRent: "If you prefer the comfort of a sedan over a hatchback, the Swift Dzire is unbeatable. It offers extra boot space for your luggage, making it great for Airport pickups and drops. The smooth ride quality is perfect for business travelers.",
        idealFor: ["Business Travel", "Airport Drops", "Small Families"],
    },
    "innova-rental-ranchi": { // Virtual entry if image missing, using generic
        slug: "innova-rental-ranchi",
        modelName: "Innova Crysta",
        fullName: "Toyota Innova Crysta",
        image: "/images/cars/ertiga.jpg", // Fallback to Ertiga if Innova image not found or use placeholder
        price: "₹4,500", // Est
        seats: 7,
        transmission: "Manual",
        fuel: "Diesel",
        title: "Innova Crysta Rental Ranchi | Premium SUV Hire",
        description: "Hire Toyota Innova Crysta in Ranchi. Unmatched comfort and safety. Best for corporate travel and VIP guests. Book today.",
        heading: "Premium Innova Crysta Rental in Ranchi",
        whyRent: "For those who refuse to compromise on comfort, the Innova Crysta is the gold standard. Whether it's a VIP visit or a luxury family vacation, the captain seats and superior suspension ensure a fatigue-free journey.",
        idealFor: ["VIP Travel", "Corporate clients", "Luxury Tours"],
    },
    "baleno-rental-ranchi": {
        slug: "baleno-rental-ranchi",
        modelName: "Baleno",
        fullName: "Maruti Suzuki Baleno",
        image: "/images/cars/maruti-baleno.png",
        price: "₹2,000",
        seats: 5,
        transmission: "Manual",
        fuel: "Petrol",
        title: "Baleno Car Rental Ranchi | Premium Hatchback Self Drive",
        description: "Drive the premium Maruti Baleno in Ranchi. Spacious interiors and loaded with features. Ideal for city comfort driving.",
        heading: "Rent Maruti Baleno (Premium Hatchback) in Ranchi",
        whyRent: "The Baleno offers a step up from the Swift with wider interiors and premium features. It's incredibly spacious for a hatchback, ensuring your passengers are comfortable even during traffic jams on Ratu Road.",
        idealFor: ["Comfort Seekers", "Couples", "City & Highway Mix"],
    }
};

export function getCarSeoData(slug: string): CarSeoData | null {
    return CAR_SEO_DATA[slug] || null;
}

export function getAllCarSlugs(): string[] {
    return Object.keys(CAR_SEO_DATA);
}
