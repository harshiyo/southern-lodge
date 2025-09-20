import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Southern Lodge - #1 Rated Motel in Orangeburg, SC | 4.0★ TripAdvisor Reviews",
  description: "Top-rated Southern Lodge offers clean, affordable rooms with ground-level parking, free breakfast, WiFi & 24/7 front desk. Located at 3616 Saint Matthews Rd Highway 601, Orangeburg, SC 29118-8214 off I-26 Exit 145. Book direct for best rates!",
  keywords: [
    "Southern Lodge Orangeburg",
    "Orangeburg hotel",
    "South Carolina motel", 
    "I-26 Exit 145 hotel",
    "affordable lodging Orangeburg",
    "ground level parking motel",
    "truck parking hotel",
    "extended stay Orangeburg",
    "TripAdvisor rated hotel",
    "clean rooms Orangeburg",
    "free breakfast hotel",
    "24 hour front desk motel",
    "budget hotel South Carolina"
  ].join(", "),
  authors: [{ name: "Southern Lodge" }],
  creator: "Southern Lodge",
  publisher: "Southern Lodge",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://southernlodge.com',
    siteName: 'Southern Lodge',
    title: 'Southern Lodge - #1 Rated Motel in Orangeburg, SC',
    description: 'Top-rated Southern Lodge offers clean, affordable rooms with ground-level parking, free breakfast, WiFi & 24/7 front desk. Located off I-26 Exit 145.',
    images: [
      {
        url: '/heade_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Southern Lodge - Affordable Hotel in Orangeburg, South Carolina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Southern Lodge - #1 Rated Motel in Orangeburg, SC',
    description: 'Top-rated Southern Lodge offers clean, affordable rooms with ground-level parking, free breakfast, WiFi & 24/7 front desk.',
    images: ['/heade_image.jpg'],
    creator: '@SouthernLodge',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://southernlodge.com',
  },
  category: 'hospitality',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Southern Lodge",
              "description": "Top-rated motel in Orangeburg, South Carolina offering clean, affordable accommodations with ground-level parking and complimentary breakfast.",
              "url": "https://southernlodge.com",
              "telephone": "+1-803-531-7333",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3616 Saint Matthews Rd Highway 601",
                "addressLocality": "Orangeburg",
                "addressRegion": "SC",
                "postalCode": "29118-8214",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.4918",
                "longitude": "-80.8557"
              },
              "image": [
                "https://southernlodge.com/heade_image.jpg",
                "https://southernlodge.com/ground parking.jpg"
              ],
              "priceRange": "$49.95-$69.95",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.0",
                "reviewCount": "321",
                "bestRating": "5",
                "worstRating": "1"
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Free WiFi",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Free Parking",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Complimentary Breakfast",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "24-Hour Front Desk",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Ground Level Access",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Truck Parking",
                  "value": true
                }
              ],
              "checkinTime": "24:00",
              "checkoutTime": "11:00",
              "petsAllowed": false,
              "smokingAllowed": false,
              "paymentAccepted": ["Cash", "Credit Card"],
              "currenciesAccepted": "USD",
              "openingHours": "Mo-Su 00:00-24:00",
              "sameAs": [
                "https://www.tripadvisor.ca/Hotel_Review-g54375-d640887-Reviews-Southern_Lodge-Orangeburg_South_Carolina.html",
                "https://www.facebook.com/SouthernLodgeOrangeburg"
              ]
            })
          }}
        />
        <Header />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
