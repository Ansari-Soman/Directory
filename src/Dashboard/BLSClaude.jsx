import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Star,
  Building2,
  Navigation,
  Tag,
  Filter,
  Search,
} from "lucide-react";

// Dummy data for testing
const dummyBusinesses = [
  {
    id: 1,
    businessName: "Sharma Sweets & Snacks",
    city: "Bhiwandi",
    area: "Gaibi Nagar",
    road: "Maulana Azaad road",
    subArea: "Gulzar nagar",
    subRoad: "Noorani road",
    category: "Food",
    subCategory: "Sweets",
    categoryType: "Ajmer Sweets",
    businessClass: "Premium",
    establishment: "Store Front",
    timeFrom: "09:00",
    timeTo: "21:00",
  },
  {
    id: 2,
    businessName: "City Hospital & Clinic",
    city: "Bhiwandi",
    area: "Medical Square",
    road: "Hospital Road",
    subArea: null,
    subRoad: null,
    category: "Healthcare",
    subCategory: "Hospital",
    categoryType: null,
    businessClass: "Standard",
    establishment: "Hospital",
    timeFrom: "08:00",
    timeTo: "20:00",
  },
  {
    id: 3,
    businessName: "Royal Wedding Hall",
    city: "Mumbai",
    area: "Andheri East",
    road: "Western Express Highway",
    subArea: "MIDC Area",
    subRoad: "Service Road",
    category: "Events & Entertainment",
    subCategory: "Wedding Venues",
    categoryType: "Banquet Hall",
    businessClass: "Premium",
    establishment: "Event Hall",
    timeFrom: "10:00",
    timeTo: "23:00",
  },
  {
    id: 4,
    businessName: "Tech Solutions Pvt Ltd",
    city: "Pune",
    area: "Hinjewadi",
    road: "IT Park Road",
    subArea: null,
    subRoad: null,
    category: "Technology",
    subCategory: "Software Development",
    categoryType: "Web Development",
    businessClass: "Standard",
    establishment: "Office",
    timeFrom: "09:00",
    timeTo: "18:00",
  },
  {
    id: 5,
    businessName: "Green Valley Resort",
    city: "Lonavala",
    area: "Hill Station",
    road: "Mumbai-Pune Highway",
    subArea: "Valley View",
    subRoad: null,
    category: "Travel & Tourism",
    subCategory: "Hotels & Resorts",
    categoryType: "Resort",
    businessClass: "Premium",
    establishment: "Hotel",
    timeFrom: "00:00",
    timeTo: "23:59",
  },
  {
    id: 6,
    businessName: "AutoCare Service Center",
    city: "Bhiwandi",
    area: "Industrial Zone",
    road: "Service Road",
    subArea: null,
    subRoad: null,
    category: "Automobile Services",
    subCategory: "Car Repair",
    categoryType: "Full Service",
    businessClass: "Standard",
    establishment: "Service Center",
    timeFrom: "08:00",
    timeTo: "19:00",
  },
];

const BusinessListingsSection = ({ businesses = dummyBusinesses }) => {
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Get unique categories and cities for filters
  const categories = [
    ...new Set(businesses.map((b) => b.category).filter(Boolean)),
  ];
  const cities = [...new Set(businesses.map((b) => b.city).filter(Boolean))];

  // Filter businesses based on search and filters
  useEffect(() => {
    let filtered = businesses;

    if (searchTerm) {
      filtered = filtered.filter(
        (business) =>
          business.businessName
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          business.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          business.area?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          business.city?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (business) => business.category === selectedCategory
      );
    }

    if (selectedCity) {
      filtered = filtered.filter((business) => business.city === selectedCity);
    }

    setFilteredBusinesses(filtered);
  }, [businesses, searchTerm, selectedCategory, selectedCity]);

  const BusinessCard = ({ business }) => {
    // Format time display
    const formatTime = (time) => {
      if (!time) return "";
      const [hours, minutes] = time.split(":");
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? "PM" : "AM";
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      return `${displayHour}:${minutes} ${ampm}`;
    };

    // Get business class color
    const getClassColor = (businessClass) => {
      switch (businessClass?.toLowerCase()) {
        case "premium":
          return "bg-yellow-100 text-yellow-800";
        case "standard":
          return "bg-blue-100 text-blue-800";
        case "basic":
          return "bg-gray-100 text-gray-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    // Build location string
    const getLocation = () => {
      const parts = [
        business.subArea,
        business.area,
        business.subRoad,
        business.road,
        business.city,
      ].filter(Boolean);
      return parts.join(", ");
    };

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-blue-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
              {business.businessName}
            </h3>
            <div className="flex items-start text-gray-600 mb-3">
              <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
              <span className="text-sm line-clamp-2">{getLocation()}</span>
            </div>
          </div>

          {business.businessClass && (
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ml-2 flex-shrink-0 ${getClassColor(
                business.businessClass
              )}`}
            >
              {business.businessClass}
            </span>
          )}
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Tag className="w-3 h-3 mr-1" />
            {business.category}
          </span>

          {business.subCategory && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {business.subCategory}
            </span>
          )}

          {business.categoryType && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {business.categoryType}
            </span>
          )}
        </div>

        {/* Business Details */}
        <div className="space-y-2 mb-4">
          {business.establishment && (
            <div className="flex items-center text-sm text-gray-600">
              <Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{business.establishment}</span>
            </div>
          )}

          {business.timeFrom && business.timeTo && (
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>
                {formatTime(business.timeFrom)} - {formatTime(business.timeTo)}
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
            View Details
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Featured Businesses
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover local businesses and services in your area
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search businesses, categories, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* City Filter */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredBusinesses.length} of {businesses.length} businesses
        </p>
      </div>

      {/* Business Grid */}
      {filteredBusinesses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map((business, index) => (
            <BusinessCard key={business.id || index} business={business} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No businesses found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Load More Button */}
      {filteredBusinesses.length > 0 && (
        <div className="text-center mt-8">
          <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            Load More Businesses
          </button>
        </div>
      )}
    </div>
  );
};

export default BusinessListingsSection;
