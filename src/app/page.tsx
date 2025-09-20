'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Wifi, 
  Car, 
  Coffee, 
  Clock, 
  MapPin, 
  Phone, 
  Star,
  CheckCircle,
  Truck,
  UtensilsCrossed,
  Bed,
  Shield,
  Plane,
  Trees,
  Utensils,
  Building,
  Camera,
  Dumbbell,
  Music,
  Mountain
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Ground Floor Parking",
      description: "Convenient drive-up parking right at your room"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Complimentary Breakfast",
      description: "Hot and cold breakfast buffet starting at 5:00 AM"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Free High-Speed WiFi",
      description: "Stay connected with fast wireless internet"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24-Hour Front Desk",
      description: "Round-the-clock assistance and check-in"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Truck Parking",
      description: "Ample parking space for commercial vehicles"
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Kitchenette Rooms",
      description: "Self-catering options for extended stays"
    }
  ];

  const highlights = [
    "Rates from $49.95 and up",
    "Ground floor rooms",
    "Near room parking", 
    "24 HR front desk assistant",
    "Near I26 Exit 145",
    "Major restaurants nearby",
    "Hospital and colleges nearby",
    "Truck parking",
    "Corporate extended stay rate",
    "Kitchenette rooms"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/heade_image.jpg)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Welcome to the
            <span className="block text-yellow-400">Southern Lodge</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Affordable, Stress-free Getaways in South Carolina
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/book" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200">
              Book Your Stay
            </Link>
            <Link href="/rooms" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200">
              View Rooms
            </Link>
          </motion.div>
        </div>
        
        {/* TripAdvisor Rating - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-24 right-8 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg hidden lg:block"
        >
          <a 
            href="https://www.tripadvisor.ca/Hotel_Review-g54375-d640887-Reviews-Southern_Lodge-Orangeburg_South_Carolina.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600 font-bold text-lg">4.0</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-4 h-4 text-green-600 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
              </div>
              <Shield className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-sm text-gray-700 font-medium">(321 reviews)</p>
            <p className="text-xs text-gray-600">#1 of 6 motels in Orangeburg</p>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-green-600 font-medium">TripAdvisor</div>
              <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                Verified
              </div>
            </div>
          </a>
        </motion.div>

        {/* TripAdvisor Rating - Mobile (Top) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 lg:hidden"
        >
          <a 
            href="https://www.tripadvisor.ca/Hotel_Review-g54375-d640887-Reviews-Southern_Lodge-Orangeburg_South_Carolina.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg hover:bg-white transition-colors duration-200 block"
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <span className="text-green-600 font-bold text-lg">4.0</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-4 h-4 text-green-600 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-700 font-medium">(321 reviews)</p>
                <p className="text-xs text-gray-600">#1 in Orangeburg</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-xs text-blue-600 font-medium">Verified</span>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Floating Info Cards */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col sm:flex-row gap-4 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>803-531-7333</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>3616 Saint Matthews Rd, Orangeburg, SC</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>From $49.95</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hotel Amenities & Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience genuine Southern hospitality with modern amenities designed for your comfort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-900 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Accessible ground-level rooms with drive-up parking
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Take some time from the everyday bustle and discover the charming personality of our 
                South Carolina Hotel, the Southern Lodge. An affordable hotel in the Orangeburg, 
                South Carolina area, we offer guests a slice of the quiet life and a glimpse into 
                the quaint, seamlessly easy lifestyle of the south.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Breathe in the fresh air and enjoy all we have to offer including complimentary 
                breakfast, complimentary WiFi, easily accessible ground level rooms with drive up 
                parking and much more.
              </p>
              <Link href="/rooms" className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors duration-200 inline-block">
                Explore Our Rooms
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Ground Parking Image */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/ground parking.jpg" 
                  alt="Ground-level parking at Southern Lodge"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Convenient Drive-Up Parking</h3>
                  <p className="text-gray-600 text-sm">Park right outside your room - no stairs, no elevators needed!</p>
                </div>
              </div>
              
              {/* Hotel Highlights */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hotel Highlights</h3>
                <div className="space-y-2">
                  {highlights.slice(0, 6).map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guest Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real reviews from verified guests on TripAdvisor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                review: "Overall it was a good stay. The room was clean and comfortable. Great value for the price!",
                rating: 4,
                guest: "Verified TripAdvisor Guest",
                date: "Recent Review"
              },
              {
                review: "Convenient location right off I-26. Easy access to restaurants and attractions in Orangeburg.",
                rating: 4,
                guest: "Business Traveler",
                date: "TripAdvisor Review"
              },
              {
                review: "Friendly staff and clean rooms. The complimentary breakfast was a nice touch for our family trip.",
                rating: 4,
                guest: "Family Guest",
                date: "Verified Review"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-lg"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{testimonial.guest}</p>
                  <p>{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.tripadvisor.ca/Hotel_Review-g54375-d640887-Reviews-Southern_Lodge-Orangeburg_South_Carolina.html"
          target="_blank"
          rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 inline-block"
            >
              Read More Reviews on TripAdvisor
            </a>
          </div>
        </div>
      </section>

      {/* Room Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Beautiful Rooms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comfortable, clean accommodations designed for your perfect Southern getaway
            </p>
          </motion.div>

          {/* Featured Room Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-8 mb-12 h-96 lg:h-[500px]">
            {/* Main Feature - King Suite */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:row-span-1"
            >
              <div className="relative h-full rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src="/king suite 2.jpg" 
                  alt="King Suite at Southern Lodge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">King Suite</h3>
                  <p className="text-lg mb-3">Spacious luxury suite with modern amenities</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span>King Bed</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Wifi className="w-4 h-4" />
                      <span>Free WiFi</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Car className="w-4 h-4" />
                      <span>Parking</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Executive Suite and Standard Rooms in 1x2 grid */}
            <div className="grid grid-rows-2 gap-4 h-full">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-lg group h-full"
              >
                <img 
                  src="/suite.jpg" 
                  alt="Suite at Southern Lodge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-start pl-6">
                  <div className="text-white">
                    <h4 className="text-xl font-semibold mb-1">Executive Suite</h4>
                    <p className="text-sm opacity-90">Perfect for business travelers</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-lg group h-full"
              >
                <img 
                  src="/bedrooms.jpg" 
                  alt="Comfortable bedrooms at Southern Lodge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-start pl-6">
                  <div className="text-white">
                    <h4 className="text-xl font-semibold mb-1">Standard Rooms</h4>
                    <p className="text-sm opacity-90">Cozy and affordable comfort</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>


          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Southern Comfort?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                All rooms feature ground-level access, drive-up parking, complimentary WiFi, and our famous Southern hospitality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/rooms"
                  className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <Camera className="w-5 h-5" />
                  <span>View All Rooms</span>
                </Link>
                <Link
                  href="/book"
                  className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200"
                >
                  Book Your Stay
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Area Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Orangeburg</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the rich history, natural beauty, and convenient amenities surrounding Southern Lodge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* What's Nearby */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-blue-900 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">What's Nearby</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Harmon Park</span>
                  <span className="text-sm text-gray-500">5 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Major John Hammond Fordham House</span>
                  <span className="text-sm text-gray-500">6 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">William P. Stroman House</span>
                  <span className="text-sm text-gray-500">7 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Lowman Hall</span>
                  <span className="text-sm text-gray-500">7 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Dukes Gymnasium</span>
                  <span className="text-sm text-gray-500">7 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">All Star Bowling Lane</span>
                  <span className="text-sm text-gray-500">7 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Orangeburg County Jail</span>
                  <span className="text-sm text-gray-500">8 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Briggman F. H. W. House</span>
                  <span className="text-sm text-gray-500">8 km</span>
                </div>
              </div>
            </motion.div>

            {/* Restaurants & Dining */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Utensils className="w-6 h-6 text-blue-900 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Restaurants & Cafes</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sonic</span>
                  <span className="text-sm text-gray-500">200 m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Burger King</span>
                  <span className="text-sm text-gray-500">200 m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Wendy's</span>
                  <span className="text-sm text-gray-500">400 m</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center mb-3">
                  <Trees className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="font-medium text-gray-900">Natural Beauty</h4>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Lake • Sims Pond</span>
                  <span className="text-sm text-gray-500">7 km</span>
                </div>
              </div>
            </motion.div>

            {/* Transportation & Access */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Plane className="w-6 h-6 text-blue-900 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Closest Airports</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Orangeburg Municipal Airport</span>
                  <span className="text-sm text-gray-500">10 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Columbia Metropolitan Airport</span>
                  <span className="text-sm text-gray-500">54 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Jim Hamilton-L.B. Owens Airport</span>
                  <span className="text-sm text-gray-500">59 km</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center mb-3">
                  <Car className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-medium text-gray-900">Convenient Location</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Located right off I-26 Exit 145 for easy highway access
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hotel Facilities Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-blue-900 rounded-2xl p-8 text-white"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Southern Lodge Facilities</h3>
              <p className="text-blue-100">Everything you need for a comfortable stay</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: <Bed className="w-6 h-6" />, label: "Non-smoking rooms" },
                { icon: <Wifi className="w-6 h-6" />, label: "Free WiFi" },
                { icon: <Car className="w-6 h-6" />, label: "Free parking" },
                { icon: <UtensilsCrossed className="w-6 h-6" />, label: "Room service" },
                { icon: <Coffee className="w-6 h-6" />, label: "Breakfast" },
                { icon: <Mountain className="w-6 h-6" />, label: "Hot tub/Jacuzzi" }
              ].map((facility, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-800 rounded-lg p-4 mb-2 mx-auto w-fit">
                    {facility.icon}
                  </div>
                  <p className="text-sm text-blue-100">{facility.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-blue-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Great for your stay</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• Parking</li>
                  <li>• Free WiFi</li>
                  <li>• Pet friendly</li>
                  <li>• Private Parking</li>
                </ul>
              </div>
              <div className="bg-blue-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">General</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• Air conditioning</li>
                  <li>• Smoke-free property</li>
                  <li>• Non-smoking rooms</li>
                </ul>
              </div>
              <div className="bg-blue-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Languages Spoken</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• English</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Link
              href="/dining"
              className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Utensils className="w-5 h-5" />
              <span>Explore Local Dining</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Southern Hospitality Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Southern Hospitality</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              As the saying goes, what&apos;s ours is yours. We think of our guests as family and 
              invite all of you to make the most of your time at the Southern Lodge. Drop by our 
              front desk to ask our staff for the names of the best BBQ joints in South Carolina 
              or check our offers and promotions for the latest ways to save!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dining" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Local Dining
              </Link>
              <Link href="/book" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Special Offers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              Ready for Your Southern Getaway?
            </h2>
            <p className="text-xl text-black mb-8">
              Book your comfortable stay today starting from just $49.95
            </p>
            <Link href="/book" className="bg-blue-900 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors duration-200 inline-block">
              Reserve Your Room
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;