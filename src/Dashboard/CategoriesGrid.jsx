import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingBag, Utensils, Hospital, School, Dumbbell, Theater } from "lucide-react";
import { DirectoryContext } from "../Context";
import { gridCategoryData } from "./data";

// Props-based reusable grid
const CategoriesGrid = () => {
    return (
        <div className="w-full  py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
                    {gridCategoryData.map((cat) => (
                        <Link
                            key={cat.name}
                            to={cat.path}
                            onClick={() => setSelectedCategory()}
                            className="flex flex-col items-center justify-center p-6 rounded-xl bg-white shadow hover:shadow-md border border-gray-200 hover:border-blue-500 transition"
                        >
                            <div className="text-blue-600 mb-3">{cat.icon}</div>
                            <p className="text-gray-700 font-medium text-sm text-center">
                                {cat.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesGrid;
