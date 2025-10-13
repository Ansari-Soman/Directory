import React from "react";
import { Search, MapPin, TrendingUp, Star, Clock } from "lucide-react";

const CityLandingPage = () => {
  const cityName = "Mumbai"; // Dynamic city name

  // Dummy data for popular areas
  const popularAreas = [
    { name: "Andheri", businesses: 1250 },
    { name: "Bandra", businesses: 980 },
    { name: "Colaba", businesses: 750 },
    { name: "Powai", businesses: 650 },
    { name: "Juhu", businesses: 580 },
    { name: "Goregaon", businesses: 520 },
    { name: "Malad", businesses: 490 },
    { name: "Thane", businesses: 420 },
  ];

  // Dummy data for trending categories
  const trendingCategories = [
    { name: "Street Food", count: 450, trend: "+15%" },
    { name: "Salons & Spa", count: 320, trend: "+22%" },
    { name: "Co-working Spaces", count: 180, trend: "+35%" },
    { name: "Gyms & Fitness", count: 280, trend: "+18%" },
  ];

  // Dummy data for featured businesses
  const featuredBusinesses = [
    {
      id: 1,
      name: "Cafe Mondegar",
      category: "Restaurant",
      area: "Colaba",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      isNew: false,
    },
    {
      id: 2,
      name: "Phoenix Mall",
      category: "Shopping",
      area: "Lower Parel",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      isNew: false,
    },
    {
      id: 3,
      name: "Lilavati Hospital",
      category: "Healthcare",
      area: "Bandra",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      isNew: false,
    },
    {
      id: 4,
      name: "Gold's Gym",
      category: "Fitness",
      area: "Andheri",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      isNew: true,
    },
  ];

  // Dummy data for recent listings
  const recentListings = [
    {
      id: 1,
      name: "The Brew House",
      category: "Cafe",
      area: "Bandra West",
      addedTime: "2 hours ago",
    },
    {
      id: 2,
      name: "Tech Hub Co-working",
      category: "Co-working",
      area: "Powai",
      addedTime: "5 hours ago",
    },
    {
      id: 3,
      name: "Fresh Bites Restaurant",
      category: "Restaurant",
      area: "Andheri",
      addedTime: "1 day ago",
    },
    {
      id: 4,
      name: "City Dental Clinic",
      category: "Healthcare",
      area: "Malad",
      addedTime: "1 day ago",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Compact Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1920&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Discover {cityName}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Find the best local businesses and services
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="flex gap-3 bg-white rounded-2xl p-3 shadow-2xl">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for businesses, services or categories..."
                    className="w-full pl-12 pr-4 py-3 text-gray-700 focus:outline-none rounded-lg"
                  />
                </div>
                <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* City Stats */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600">5000+</p>
              <p className="text-gray-600">Businesses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">150+</p>
              <p className="text-gray-600">Localities</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">4.5★</p>
              <p className="text-gray-600">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Popular Areas Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Popular Areas in {cityName}
              </h2>
              <p className="text-gray-600">Explore businesses by locality</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularAreas.map((area) => (
              <div
                key={area.name}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
              >
                <MapPin className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {area.businesses} businesses
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Categories */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Trending in {cityName}
            </h2>
            <p className="text-gray-600">Most searched categories this week</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingCategories.map((category) => (
              <div
                key={category.name}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {category.trend}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.count} listings
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Businesses */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Businesses
            </h2>
            <p className="text-gray-600">Top rated businesses in {cityName}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBusinesses.map((business) => (
              <div
                key={business.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer border border-gray-200"
              >
                <div className="relative h-48">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                  {business.isNew && (
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {business.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {business.category} • {business.area}
                  </p>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-700">
                      {business.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Listings */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Recently Added
            </h2>
            <p className="text-gray-600">New businesses in {cityName}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 divide-y">
            {recentListings.map((listing) => (
              <div
                key={listing.id}
                className="p-4 hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {listing.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {listing.category} • {listing.area}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-400">
                  {listing.addedTime}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CityLandingPage;
