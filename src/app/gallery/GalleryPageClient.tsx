'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const GalleryPageClient = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/api/placeholder/600/400",
      alt: "Hotel Exterior",
      category: "Exterior",
      description: "Southern Lodge welcoming exterior with convenient ground-level access"
    },
    {
      src: "/api/placeholder/600/400", 
      alt: "Standard Room",
      category: "Rooms",
      description: "Comfortable standard room with modern amenities"
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Kitchenette Room",
      category: "Rooms", 
      description: "Kitchenette room perfect for extended stays"
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Parking Area",
      category: "Exterior",
      description: "Convenient drive-up parking right at your room"
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Breakfast Area",
      category: "Amenities",
      description: "Complimentary breakfast buffet area"
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Front Desk",
      category: "Amenities", 
      description: "24-hour front desk ready to assist"
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Room Interior",
      category: "Rooms",
      description: "Clean, comfortable room interior with cable TV"
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Bathroom",
      category: "Rooms",
      description: "Private bathroom with modern fixtures"
    },
    {
      src: "/api/placeholder/600/400",
      alt: "Truck Parking",
      category: "Exterior",
      description: "Dedicated truck parking area for commercial drivers"
    }
  ];

  const categories = ["All", "Rooms", "Exterior", "Amenities"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Photo Gallery
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 leading-relaxed"
            >
              Take a visual tour of Southern Lodge and see our comfortable accommodations, 
              convenient amenities, and welcoming atmosphere.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                    activeCategory === category
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-600 hover:text-blue-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                {/* Placeholder for images */}
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center text-blue-900">
                    <Camera className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">{image.alt}</p>
                    <p className="text-xs text-gray-600">{image.category}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg flex items-center justify-center w-full h-96">
              <div className="text-center text-blue-900">
                <Camera className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{filteredImages[selectedImage]?.alt}</h3>
                <p className="text-sm">{filteredImages[selectedImage]?.description}</p>
              </div>
            </div>

            {/* Image Info */}
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold">{filteredImages[selectedImage]?.alt}</h3>
              <p className="text-gray-300">{filteredImages[selectedImage]?.description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Us Special</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ground-Level Access</h3>
                  <p className="text-gray-600">
                    All rooms feature convenient ground-level access with drive-up parking right at your door.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Amenities</h3>
                  <p className="text-gray-600">
                    Each room comes equipped with modern amenities including free WiFi, cable TV, and air conditioning.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Southern Hospitality</h3>
                  <p className="text-gray-600">
                    Experience genuine Southern hospitality with our 24-hour front desk and friendly staff.
                  </p>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Southern Lodge?</h2>
            <p className="text-xl mb-8">
              Book your comfortable stay and see these accommodations in person.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Book Your Stay Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPageClient;
