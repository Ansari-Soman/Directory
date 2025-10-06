import React, { useContext } from "react";
import { DirectoryContext } from "../Context";
import { MapPin, TrendingUp, Users } from "lucide-react";

const Search = () => {
  return (
    <section className="py-16 flex justify-center  bg-gray-10">
      <div className="flex flex-col items-center gap-8 px-4 w-full max-w-2xl">
        <h1 className="text- text-4xl font-bold text-white">
          Start Exploring Today
        </h1>
        {/* Search Input */}
        <div className="w-full flex items-center rounded-lg border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
          <input
            type="text"
            placeholder="Search for services, businesses or categories..."
            className="flex-1 px-5 py-3 outline-none text-gray-700 bg-white"
          />
          <button className="px-6 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none">
            Filter
          </button>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center gap-8 ">
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

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition cursor-pointer">
            Explore Near Me
          </button>
          <button className="bg-white text-gray-800 border border-gray-300 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-100 transition cursor-pointer">
            Add Your Business
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
