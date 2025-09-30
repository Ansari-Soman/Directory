import React, { useContext, useEffect, useState } from "react";
import { DirectoryContext } from "../Context";
import BusinessCard from "../component/BusinessCard";
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
import { businesses } from "./data";
const BusinessListSectionSom = () => {
  const { dataObj } = useContext(DirectoryContext);
  const filterBusiness = "";
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // useEffect(
  //   () => console.log(selectedCategory, selectedCity),
  //   [selectedCategory, selectedCity]
  // );

  // console.log("In the listing busi", dataObj);
  return (
    <>
      <div className="container mx-auto  px-6 py-3 ">
        {/* __________-HEADER-__________ */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Featured Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover local businesses and services in your area
          </p>
        </div>

        {/* __________-SEARCH-AREA-__________ */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search businesses, categories, or locations..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
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
            {dataObj.category.map((category) => (
              <option
                key={category.u_business_category}
                value={category.u_business_category}
              >
                {category.u_business_category}
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
            {dataObj.cityList.map((city) => (
              <option key={city.u_city_name} value={city.u_city_name}>
                {city.u_city_name}
              </option>
            ))}
          </select>
        </div>

        {/* __________-LISTED-BUSINESS-__________ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dataObj.businesses.map((business) => (
            <BusinessCard key={business.uni_id} business={business} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BusinessListSectionSom;
