import React, { useState } from "react";
import { X, MapPin, Clock, Building2, Tag } from "lucide-react";

// Dummy business data
const dummyBusiness = {
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
};

// Dummy products data
const dummyProducts = [
  {
    id: 1,
    name: "Gulab Jamun",
    price: "₹180/kg",
    description: "Fresh and soft traditional sweet",
    category: "Sweets",
    inStock: true,
  },
  {
    id: 2,
    name: "Samosa",
    price: "₹8/piece",
    description: "Crispy fried pastry with spiced filling",
    category: "Snacks",
    inStock: true,
  },
  {
    id: 3,
    name: "Rasgulla",
    price: "₹200/kg",
    description: "Spongy cottage cheese balls in syrup",
    category: "Sweets",
    inStock: true,
  },
  {
    id: 4,
    name: "Kachori",
    price: "₹12/piece",
    description: "Deep fried bread stuffed with lentils",
    category: "Snacks",
    inStock: false,
  },
  {
    id: 5,
    name: "Jalebi",
    price: "₹220/kg",
    description: "Spiral-shaped sweet soaked in syrup",
    category: "Sweets",
    inStock: true,
  },
  {
    id: 6,
    name: "Dhokla",
    price: "₹150/kg",
    description: "Steamed savory cake from gram flour",
    category: "Snacks",
    inStock: true,
  },
];

const BusinessDetailDemo = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(true); // Always open for demo

  if (!isOpen) return null;

  // Get unique categories
  const categories = ["All", ...new Set(dummyProducts.map((p) => p.category))];

  // Filter products by category
  const filteredProducts =
    activeCategory === "All"
      ? dummyProducts
      : dummyProducts.filter((p) => p.category === activeCategory);

  // Format time display
  const formatTime = (time) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Build location string
  const getLocation = () => {
    const parts = [
      dummyBusiness.subArea,
      dummyBusiness.area,
      dummyBusiness.subRoad,
      dummyBusiness.road,
      dummyBusiness.city,
    ].filter(Boolean);
    return parts.join(", ");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {dummyBusiness.businessName}
            </h2>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{getLocation()}</span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Business Info */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Operating Hours</p>
                <p className="font-medium">
                  {formatTime(dummyBusiness.timeFrom)} -{" "}
                  {formatTime(dummyBusiness.timeTo)}
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <Building2 className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Establishment</p>
                <p className="font-medium">{dummyBusiness.establishment}</p>
              </div>
            </div>

            <div className="flex items-center">
              <Tag className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium">{dummyBusiness.category}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products/Services Section */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Our Menu</h3>
            <span className="text-sm text-gray-500">
              {filteredProducts.length} items
            </span>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="max-h-96 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {product.name}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-blue-600">
                        {product.price}
                      </span>
                      {!product.inStock && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {product.category}
                    </span>
                    {product.inStock && (
                      <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors">
                        Order Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Business
            </button>
            <button className="flex-1 bg-white text-blue-600 border border-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailDemo;
