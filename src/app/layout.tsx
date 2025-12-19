import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL('https://ranchicarrental.in'),
  title: {
    default: "Ranchi Car Rental | Best Self Drive Cars & Taxi Service in Ranchi",
    template: "%s | Ranchi Car Rental",
  },
  description: "Looking for Self Drive Car in Ranchi? Book top-rated cars starting ₹1000/day. Also available: Airport Taxi, Outstation Cabs & Wedding Cars. 24/7 Support.",
  keywords: [
    "Self drive car Ranchi",
    "Car rental Ranchi",
    "Car hire Ranchi",
    "Taxi service Ranchi",
    "Airport Taxi Ranchi",
    "Wedding car rental Ranchi",
    "Outstation cab Ranchi",
    "Luxury car rental Ranchi",
    "Cheap car rental Ranchi",
    "Swift for rent Ranchi",
    "Thar for rent Ranchi",
    "Scorpio for rent Ranchi"
  ],
  authors: [{ name: "Ranchi Car Rental" }],
  creator: "Ranchi Car Rental",
  publisher: "Ranchi Car Rental",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ranchicarrental.in",
    title: "Ranchi Car Rental | #1 Self Drive & Taxi Service",
    description: "Book Self Drive Cars, Airport Taxis & Luxury Wedding Cars in Ranchi. Reliable Service, Transparent Pricing, Well-Maintained Fleet.",
    siteName: "Ranchi Car Rental",
    images: [
      {
        url: '/images/og-image.jpg', // We should ensure this exists or use a car image
        width: 1200,
        height: 630,
        alt: 'Ranchi Car Rental Fleet',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranchi Car Rental | Self Drive & Taxi Services",
    description: "Best Self Drive Cars in Ranchi starting @ ₹1000/day. Book Now!",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  other: {
    "geo.region": "IN-JH",
    "geo.placename": "Ranchi",
    "geo.position": "23.3441;85.3096", // Ranchi coordinates
    "ICBM": "23.3441, 85.3096",
  },
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "min-h-screen bg-background font-sans antialiased flex flex-col")}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0EKXZN63DQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0EKXZN63DQ');
          `}
        </Script>
      </body>
    </html>
  );
}
