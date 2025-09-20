'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Coffee, 
  Clock, 
  UtensilsCrossed,
  MapPin,
  Star,
  Phone,
  Car,
  Utensils
} from 'lucide-react';

const DiningPageClient = () => {
  const nearbyRestaurants = [
    {
      name: "Ruby Tuesday",
      cuisine: "American",
      distance: "1.5 miles",
      rating: 4.0,
      reviews: 156,
      specialties: ["Burgers", "Salad Bar", "Steaks"],
      price: "$$",
      description: "The food and service was good. We had the amazing mushroom grilled chicken that was good."
    },
    {
      name: "Waffle House",
      cuisine: "American Diner",
      distance: "1.2 miles", 
      rating: 3.5,
      reviews: 48,
      specialties: ["Waffles", "Hash Browns", "All-Day Breakfast"],
      price: "$",
      description: "We drove way out of the surrounding restaurants were options only due to... Good service with a smile."
    },
    {
      name: "Cracker Barrel",
      cuisine: "American Southern",
      distance: "2.1 miles",
      rating: 4.0,
      reviews: 190,
      specialties: ["Southern Comfort Food", "Country Store"],
      price: "$$",
      description: "We stopped by traveling Georgia... we dine in orangeburg the first food from. Cracker... perfect as always loved it over 20yr."
    },
    {
      name: "Sonic Drive-In",
      cuisine: "Fast Food",
      distance: "1.8 miles",
      rating: 3.5,
      reviews: 8,
      specialties: ["Burgers", "Shakes", "Carhop Service"],
      price: "$",
      description: "So close, but delivers fast! Parking weekend sometimes."
    },
    {
      name: "Subway",
      cuisine: "Sandwiches",
      distance: "1.6 miles",
      rating: 4.5,
      reviews: 4,
      specialties: ["Subs", "Healthy Options", "Fresh Ingredients"],
      price: "$",
      description: "I was helpless and Appreciated! Fast and courteous service."
    },
    {
      name: "Taco Bell",
      cuisine: "Mexican Fast Food",
      distance: "1.7 miles",
      rating: 4.5,
      reviews: 4,
      specialties: ["Tacos", "Burritos", "Mexican-Style"],
      price: "$",
      description: "Quick like Taco Bell should be!"
    },
    {
      name: "Wendy's",
      cuisine: "Fast Food",
      distance: "1.9 miles",
      rating: 3.0,
      reviews: 39,
      specialties: ["Burgers", "Frosty", "Fresh Beef"],
      price: "$",
      description: "I think that all the way to Charleston, South Carolina to meet friends, Ordered..."
    },
    {
      name: "Nacho Seafood",
      cuisine: "Seafood",
      distance: "2.5 miles",
      rating: 4.0,
      reviews: 28,
      specialties: ["Fresh Seafood", "Local Catch", "Fried Fish"],
      price: "$$",
      description: "Just 2 minutes off I26 in Orangeburg SC, this gem of a restaurant is amazing... Fresh seafood. We thought this was..."
    }
  ];

  const breakfastItems = [
    "Hot coffee, tea, and juices",
    "Fresh pastries and muffins",
    "Cereals and oatmeal",
    "Fresh fruit selection",
    "Yogurt and granola",
    "Toast and bagels",
    "Hard-boiled eggs",
    "Breakfast bars and granola bars"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Dining & Local Cuisine
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 leading-relaxed"
            >
              Start your day with our complimentary breakfast and discover the best 
              BBQ joints and Southern cuisine that Orangeburg has to offer.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Complimentary Breakfast */}
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
              <Coffee className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complimentary Hot Breakfast</h2>
              <p className="text-lg text-gray-600">
                Start your morning right with our self-serve breakfast buffet
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Breakfast Hours</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>5:00 AM - 10:00 AM</strong> (Daily)
                  </p>
                  <p className="text-gray-600">
                    Perfect for early risers and travelers on the go. Our breakfast starts 
                    bright and early to accommodate all schedules.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What&apos;s Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {breakfastItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <UtensilsCrossed className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Utensils className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Restaurants Nearby</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Discover the authentic flavors of South Carolina. Our front desk staff 
              can recommend the best local dining spots and help with directions.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>Restaurant information from</span>
              <a 
                href="https://www.tripadvisor.ca/Restaurants-near-Southern_Lodge-Orangeburg_South_Carolina.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                TripAdvisor
              </a>
              <Star className="w-4 h-4 text-green-600" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyRestaurants.map((restaurant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{restaurant.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <p className="text-orange-600 font-medium">{restaurant.cuisine}</p>
                  <span className="text-lg font-bold text-green-600">{restaurant.price}</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{restaurant.distance} from hotel</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-600">
                    {restaurant.rating} ({restaurant.reviews} reviews)
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {restaurant.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 italic">"{restaurant.description}"</p>
                </div>
                
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200">
                  Get Directions
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Orangeburg</h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover local attractions and activities recommended by TripAdvisor visitors
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Edisto Memorial Gardens</h3>
                  <p className="text-gray-600 mb-2">
                    Historic botanical gardens featuring beautiful rose gardens, walking trails, 
                    and scenic views. Perfect for photography and peaceful strolls.
                  </p>
                  <p className="text-sm text-orange-600 font-medium">🌹 Free admission • Open daily</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">I.P. Stanback Museum & Planetarium</h3>
                  <p className="text-gray-600 mb-2">
                    Educational exhibits and planetarium shows for all ages. Features local 
                    history, science displays, and astronomy programs.
                  </p>
                  <p className="text-sm text-orange-600 font-medium">🔭 Educational experience • Family-friendly</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">South Carolina State University</h3>
                  <p className="text-gray-600 mb-2">
                    Historic HBCU campus with beautiful architecture and cultural significance. 
                    Walking tours available for visitors interested in educational heritage.
                  </p>
                  <p className="text-sm text-orange-600 font-medium">🎓 Historic campus • Cultural tours</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Outdoor Recreation</h3>
                  <p className="text-gray-600 mb-2">
                    Fishing, hunting, and hiking opportunities throughout the region. 
                    Golf courses and nature parks within easy driving distance.
                  </p>
                  <p className="text-sm text-orange-600 font-medium">🎣 Year-round activities • Nature trails</p>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect Location</h3>
                <p className="text-gray-600">
                  Southern Lodge is conveniently located right off I-26 Exit 145, making it easy to 
                  explore Orangeburg&apos;s attractions while having quick access to major highways for 
                  day trips to Columbia, Charleston, or other South Carolina destinations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Need Dining Recommendations?</h2>
            <p className="text-xl mb-8">
              Our front desk staff knows all the best local spots. 
              Call us for personalized recommendations!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:803-531-7333" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                Call Front Desk
              </Link>
              <Link href="/book" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Book Your Stay
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DiningPageClient;
