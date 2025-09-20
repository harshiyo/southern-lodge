'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

const PrivacyPageClient = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 leading-relaxed"
            >
              Your privacy is important to us. Learn how we protect and handle your personal information.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center space-x-2 text-blue-200"
            >
              <Shield className="w-5 h-5" />
              <span className="text-sm">GDPR Compliant • Last Updated: {new Date().toLocaleDateString()}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8 space-y-8"
            >
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-900 mr-2" />
                  Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Southern Lodge ("we," "our," or "us") is committed to protecting your privacy and ensuring the security 
                  of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you visit our website or stay at our hotel.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-blue-900 mr-2" />
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Name, address, phone number, and email address</li>
                      <li>Payment information (credit card details, billing address)</li>
                      <li>Government-issued ID for registration purposes</li>
                      <li>Special requests and accommodation preferences</li>
                      <li>Loyalty program information (if applicable)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>IP address, browser type, and device information</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Location data (with your consent)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-900 mr-2" />
                  How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Process reservations and provide hotel services</li>
                  <li>Communicate with you about your stay and bookings</li>
                  <li>Process payments and manage billing</li>
                  <li>Improve our website and services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations and safety requirements</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </div>

              {/* Cookie Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Policy</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    We use cookies and similar technologies to enhance your browsing experience:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Necessary Cookies</h4>
                      <p className="text-sm text-gray-600">Required for basic site functionality and security.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600">Help us understand website usage and improve services.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Marketing Cookies</h4>
                      <p className="text-sm text-gray-600">Used to deliver personalized advertisements.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Functional Cookies</h4>
                      <p className="text-sm text-gray-600">Enable enhanced functionality and personalization.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Protection Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-blue-900 mr-2" />
                  Your Data Protection Rights (GDPR)
                </h2>
                <p className="text-gray-600 mb-4">
                  Under the General Data Protection Regulation (GDPR), you have the following rights:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Right to Access</h4>
                    <p className="text-sm text-gray-700">Request copies of your personal data.</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Right to Rectification</h4>
                    <p className="text-sm text-gray-700">Request correction of inaccurate data.</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Right to Erasure</h4>
                    <p className="text-sm text-gray-700">Request deletion of your personal data.</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Right to Portability</h4>
                    <p className="text-sm text-gray-700">Request transfer of your data.</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Right to Object</h4>
                    <p className="text-sm text-gray-700">Object to processing of your data.</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Right to Restriction</h4>
                    <p className="text-sm text-gray-700">Request restriction of processing.</p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment processing systems</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and staff training</li>
                  <li>Data backup and recovery procedures</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-600">
                  We retain your personal data only as long as necessary for the purposes outlined in this policy or 
                  as required by law. Typically, guest records are retained for 7 years for accounting and legal purposes.
                </p>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-600 mb-4">
                  We may share your information with trusted third-party service providers:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Payment processors (for secure transactions)</li>
                  <li>Analytics providers (Google Analytics)</li>
                  <li>Email service providers (for communications)</li>
                  <li>Booking platforms (TripAdvisor, Booking.com)</li>
                  <li>Legal authorities (when required by law)</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-6 h-6 text-blue-900 mr-2" />
                  Contact Us About Privacy
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-blue-900" />
                    <span>Phone: 803-531-7333</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-900" />
                    <span>Email: privacy@southernlodge.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-blue-900" />
                    <span>Address: 3616 Saint Matthews Rd Highway 601, Orangeburg, SC 29118-8214</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  We will respond to your request within 30 days as required by GDPR.
                </p>
              </div>

              {/* Updates */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                  posting the new policy on this page and updating the "Last Updated" date. Continued use of our 
                  services after changes constitute acceptance of the updated policy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="bg-white text-blue-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 inline-block">
            Back to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPageClient;
