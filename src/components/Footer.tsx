import Link from 'next/link';
import { Phone, MapPin, Clock, Wifi, Car, Coffee, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>803-531-7333</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>3616 Saint Matthews Rd Highway 601<br />Orangeburg, SC 29118-8214</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>24-Hour Front Desk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/rooms" className="block hover:text-blue-400 transition-colors">
                Rooms & Suites
              </Link>
              <Link href="/dining" className="block hover:text-blue-400 transition-colors">
                Dining
              </Link>
              <Link href="/gallery" className="block hover:text-blue-400 transition-colors">
                Gallery
              </Link>
              <Link href="/book" className="block hover:text-blue-400 transition-colors">
                Book Now
              </Link>
              <Link href="/privacy" className="block hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Hotel Features</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Wifi className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Free WiFi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Free Parking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Complimentary Breakfast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm">24-Hour Check-in</span>
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Special Rates</h3>
            <div className="space-y-2 text-sm">
              <p>Rates from <span className="font-bold text-blue-400">$49.95</span></p>
              <p>Corporate Extended Stay Rates</p>
              <p>Truck Parking Available</p>
              <p>Kitchenette Rooms</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Southern Lodge</h2>
            <p className="text-sm text-gray-400">Affordable, Stress-free Getaways in South Carolina</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              © 2024 Southern Lodge. All rights reserved.
            </div>
            <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;