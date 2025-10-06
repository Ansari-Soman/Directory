import React from "react";
import { Search, MapPin, TrendingUp, Users } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition cursor-pointer">
          City Maya
        </div>

        <div className="flex items-center space-x-4">
          {/* Location Search */}
          <div className="relative">
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Search location...</option>
              <option>Bhiwandi</option>
              <option>Mumbai</option>
              <option>Pune</option>
            </select>
          </div>

          {/* Free Listing */}
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Free Listing
          </button>

          {/* Login / Signup */}
          <button className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">
            Login / Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  const categories = [
    {
      name: "Shops",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    },
    {
      name: "Restaurants",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    },
    {
      name: "Hospitals",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    },
    {
      name: "Housing",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    },
    {
      name: "Education",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    },
    {
      name: "Services",
      image:
        "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Discover Local Businesses
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Find the best shops, restaurants, and services near you
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-3 bg-white rounded-2xl p-3 shadow-2xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, businesses or categories..."
                  className="w-full pl-12 pr-4 py-3 text-gray-700 focus:outline-none rounded-lg"
                />
              </div>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-white">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">5000+ Businesses</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Users className="w-5 h-5" />
              <span className="font-semibold">10K+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">50+ Cities</span>
            </div>
          </div>
        </div>

        {/* Categories Grid with Images */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Explore Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg h-40 hover:scale-105 transition-transform duration-300"
              >
                {/* Category Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                {/* Category Name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-lg">
            Explore Near Me
          </button>
          <button className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
            Add Your Business
          </button>
        </div>
      </div>
    </div>
  );
};

// Preview Component
const Preview = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default Preview;
