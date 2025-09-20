import { Metadata } from 'next';
import PrivacyPageClient from './PrivacyPageClient';

export const metadata: Metadata = {
  title: "Privacy Policy - Southern Lodge Orangeburg, SC | GDPR Compliant",
  description: "Southern Lodge privacy policy detailing how we collect, use, and protect your personal data. GDPR compliant data protection practices for guest information and website usage.",
  keywords: "privacy policy, data protection, GDPR, Southern Lodge privacy, guest data security, cookie policy",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
