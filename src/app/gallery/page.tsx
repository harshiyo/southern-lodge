import { Metadata } from 'next';
import GalleryPageClient from './GalleryPageClient';

export const metadata: Metadata = {
  title: "Photo Gallery - Southern Lodge Orangeburg, SC | Hotel Photos & Virtual Tour",
  description: "View photos of Southern Lodge's comfortable rooms, ground-level parking, amenities, and facilities. See why we're the #1 rated motel in Orangeburg, South Carolina with 4.0★ TripAdvisor rating.",
  keywords: "Southern Lodge photos, Orangeburg hotel gallery, motel photos SC, hotel room pictures, ground level parking photos, Southern Lodge amenities",
  openGraph: {
    title: "Photo Gallery - Southern Lodge Orangeburg, SC",
    description: "Browse photos of our clean, comfortable accommodations and convenient amenities.",
    url: "https://southernlodge.com/gallery",
    images: [{ url: "/heade_image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://southernlodge.com/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}