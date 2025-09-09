import React, { useContext } from "react";
import { DirectoryContext } from "../Context";

const Search = () => {
    const {filterActive, setFilterActive}= useContext(DirectoryContext)
    return (
        <section className="h-[390px] w-full py-16 flex justify-center items-center bg-gray-100">
            <div className="flex flex-col items-center gap-8 px-4 w-full max-w-2xl">
                <h1 className="text- text-3xl font-bold text-gray-800">Start Exploring Today</h1>
                {/* Search Input */}
                <div className="w-full flex items-center rounded-lg border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search for services, businesses or categories..."
                        className="flex-1 px-5 py-3 outline-none text-gray-700"
                    />
                    <button onClick={() => setFilterActive(true)} className="px-6 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none">
                        Filter
                    </button>
                </div>



                {/* Buttons */}
                <div className="flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition">
                        Explore Near Me
                    </button>
                    <button className="bg-white text-gray-800 border border-gray-300 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-50 transition">
                        Add Your Business
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Search;
