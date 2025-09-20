import { Metadata } from 'next';
import RoomsPageClient from './RoomsPageClient';

export const metadata: Metadata = {
  title: "Hotel Rooms & Suites - Southern Lodge Orangeburg, SC | Starting $49.95",
  description: "Choose from Standard Rooms ($49.95), Kitchenette Rooms ($59.95), or Extended Stay Suites ($69.95) at Southern Lodge. All rooms feature ground-level parking, free WiFi, A/C, and cable TV.",
  keywords: "Southern Lodge rooms, Orangeburg hotel rooms, affordable hotel rooms SC, kitchenette rooms, extended stay suites, ground level parking, truck parking hotel",
  openGraph: {
    title: "Hotel Rooms & Suites - Southern Lodge Orangeburg, SC",
    description: "Clean, comfortable rooms starting at $49.95. Ground-level access, free parking, and modern amenities.",
    url: "https://southernlodge.com/rooms",
    images: [{ url: "/heade_image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://southernlodge.com/rooms",
  },
};

export default function RoomsPage() {
  return <RoomsPageClient />;
}