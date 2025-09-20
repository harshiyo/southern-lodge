'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Wifi, 
  Car, 
  Coffee, 
  Tv,
  AirVent,
  Bath,
  UtensilsCrossed,
  Users,
  CheckCircle,
  Phone,
  Bed
} from 'lucide-react';

const RoomsPageClient = () => {
  const rooms = [
    {
      title: "Standard Room",
      price: "$49.95",
      image: "/api/placeholder/400/300",
      features: [
        "Ground floor access",
        "Drive-up parking",
        "Free WiFi",
        "Air conditioning",
        "Cable TV",
        "Private bathroom"
      ],
      amenities: [
        { icon: <Wifi className="w-5 h-5" />, name: "Free WiFi" },
        { icon: <Car className="w-5 h-5" />, name: "Parking" },
        { icon: <AirVent className="w-5 h-5" />, name: "A/C" },
        { icon: <Tv className="w-5 h-5" />, name: "Cable TV" }
      ],
      capacity: "1-2 Guests"
    },
    {
      title: "Kitchenette Room",
      price: "$59.95",
      image: "/api/placeholder/400/300",
      features: [
        "Kitchenette with microwave",
        "Mini refrigerator",
        "Ground floor access",
        "Drive-up parking",
        "Free WiFi",
        "Air conditioning",
        "Cable TV",
        "Private bathroom"
      ],
      amenities: [
        { icon: <UtensilsCrossed className="w-5 h-5" />, name: "Kitchenette" },
        { icon: <Wifi className="w-5 h-5" />, name: "Free WiFi" },
        { icon: <Car className="w-5 h-5" />, name: "Parking" },
        { icon: <AirVent className="w-5 h-5" />, name: "A/C" }
      ],
      capacity: "1-2 Guests"
    },
    {
      title: "Extended Stay Suite",
      price: "$69.95",
      image: "/api/placeholder/400/300",
      features: [
        "Separate living area",
        "Full kitchenette",
        "Work desk",
        "Ground floor access",
        "Drive-up parking",
        "Free WiFi",
        "Air conditioning",
        "Cable TV",
        "Private bathroom"
      ],
      amenities: [
        { icon: <Users className="w-5 h-5" />, name: "Extended Stay" },
        { icon: <UtensilsCrossed className="w-5 h-5" />, name: "Full Kitchen" },
        { icon: <Wifi className="w-5 h-5" />, name: "Free WiFi" },
        { icon: <Car className="w-5 h-5" />, name: "Parking" }
      ],
      capacity: "1-4 Guests"
    }
  ];

  const hotelFeatures = [
    "24-hour front desk assistance",
    "Complimentary hot breakfast",
    "Free high-speed wireless internet",
    "Ground-level rooms with drive-up parking",
    "Truck parking available",
    "Coin-operated laundry facilities",
    "Ice and vending machines",
    "Handicap accessible accommodations",
    "Corporate rates available",
    "Near major restaurants and attractions"
  ];

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
              Comfortable Rooms & Suites
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 leading-relaxed"
            >
              Ground-level accommodations with convenient drive-up parking. 
              All rooms feature modern amenities and Southern hospitality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center space-x-2 text-yellow-400"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">Call 803-531-7333 to Reserve</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center text-blue-900">
                    <Bed className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm">Room Photo Coming Soon</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{room.title}</h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-900">{room.price}</p>
                      <p className="text-sm text-gray-600">per night</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{room.capacity}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-1 bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm">
                        {amenity.icon}
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-gray-900 mb-3">Room Features</h4>
                    <div className="space-y-2">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/book" className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 text-center block mt-auto">
                    Book This Room
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hotel Features & Amenities</h2>
              <p className="text-lg text-gray-600">
                Everything you need for a comfortable and convenient stay
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hotelFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Special Rates Available</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Corporate Rates</h3>
                <p>Extended stay discounts for business travelers and corporate accounts</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Group Bookings</h3>
                <p>Special pricing for group reservations and extended stays</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Truck Drivers</h3>
                <p>Dedicated truck parking and special rates for commercial drivers</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/book" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Check Availability
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPageClient;
