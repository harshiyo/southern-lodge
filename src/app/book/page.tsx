'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  AlertCircle,
  Star
} from 'lucide-react';

const BookPage = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'standard',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a booking system
    alert('Thank you for your reservation request! We will contact you shortly to confirm your booking.');
  };

  const roomTypes = [
    { value: 'standard', label: 'Standard Room - $49.95/night', price: 49.95 },
    { value: 'kitchenette', label: 'Kitchenette Room - $59.95/night', price: 59.95 },
    { value: 'suite', label: 'Extended Stay Suite - $69.95/night', price: 69.95 }
  ];

  const specialOffers = [
    {
      title: "Corporate Extended Stay",
      description: "Special rates for business travelers staying 7+ nights",
      badge: "Best Value"
    },
    {
      title: "Truck Driver Special", 
      description: "Dedicated truck parking included with room",
      badge: "Popular"
    },
    {
      title: "Weekend Getaway",
      description: "Perfect for exploring Orangeburg and surrounding areas",
      badge: "Recommended"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Book Your Stay
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 leading-relaxed"
            >
              Reserve your comfortable room at Southern Lodge. We offer affordable rates, 
              convenient ground-level access, and genuine Southern hospitality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center space-x-2 text-yellow-400"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">Call 803-531-7333 for Immediate Booking</span>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reservation Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dates and Guests */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-1" />
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                </div>

                {/* Room Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Room Type
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {roomTypes.map((room) => (
                      <option key={room.value} value={room.value}>
                        {room.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guest Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special requests or needs for your stay..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold text-lg"
                >
                  Submit Reservation Request
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-900" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-blue-900">803-531-7333</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-900" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">3616 Saint Matthews Rd Highway 601<br />Orangeburg, SC 29118-8214<br />Near I-26 Exit 145</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-900" />
                  <div>
                    <p className="font-medium">Front Desk</p>
                    <p className="text-gray-600">24 Hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Special Offers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Special Offers</h3>
              <div className="space-y-4">
                {specialOffers.map((offer, index) => (
                  <div key={index} className="border-l-4 border-blue-900 pl-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{offer.title}</h4>
                      <span className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-full">
                        {offer.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{offer.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Included Amenities</h3>
              <div className="space-y-2">
                {[
                  "Complimentary breakfast",
                  "Free WiFi",
                  "Ground-level parking",
                  "24-hour front desk",
                  "Air conditioning",
                  "Cable TV",
                  "Truck parking available"
                ].map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-t border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="flex items-start space-x-3 max-w-4xl mx-auto">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Homecoming Booking Policy</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Minimum two nights booking required</li>
                <li>• No cancellation, no refund policy</li>
                <li>• Full payment required at time of booking</li>
                <li>• Deposit required for incidentals at check-in</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Prefer to Book by Phone?</h2>
            <p className="text-xl mb-8">
              Our friendly staff is available 24/7 to assist with your reservation
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:803-531-7333" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-block">
                Call 803-531-7333
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookPage;
