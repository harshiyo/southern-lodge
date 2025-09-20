import { Metadata } from 'next';
import DiningPageClient from './DiningPageClient';

export const metadata: Metadata = {
  title: "Dining & Restaurants Near Southern Lodge - Orangeburg, SC | TripAdvisor Listed",
  description: "Enjoy complimentary breakfast (5AM-10AM) at Southern Lodge plus nearby restaurants: Ruby Tuesday, Waffle House, Cracker Barrel, and local Orangeburg dining. Edisto Memorial Gardens and attractions nearby.",
  keywords: "Southern Lodge dining, Orangeburg restaurants, complimentary breakfast, Ruby Tuesday, Waffle House, Cracker Barrel, Edisto Memorial Gardens, South Carolina dining, I-26 Exit 145 restaurants",
  openGraph: {
    title: "Dining & Local Restaurants - Southern Lodge Orangeburg, SC",
    description: "Free breakfast plus great nearby dining options from TripAdvisor recommendations.",
    url: "https://southernlodge.com/dining",
    images: [{ url: "/heade_image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://southernlodge.com/dining",
  },
};

export default function DiningPage() {
  return <DiningPageClient />;
}