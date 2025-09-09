import React, { createContext, useState } from "react";
import { businessCategory, businesses, cities, gridCategoryData } from "./component/data";
import { Outlet } from "react-router-dom";

// 1️⃣ Create Context
export const DirectoryContext = createContext();

// 2️⃣ Provider Component


export const CityProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [filterActive, setFilterActive] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [businessList, setBusinessList] = useState([]);
    
    const [data, setData] = useState({
        cities: cities,
        businessCategory: businessCategory,
        businesses: businesses,
        gridCategoryData: gridCategoryData,
    });

    const [filters, setFilters] = useState({
        city: "",
        category: "",
        subCategory: "",
    });
    

    return (
        <DirectoryContext.Provider value={{
            selectedCity, setSelectedCity,
            filterActive, setFilterActive,
            selectedCategory, setSelectedCategory,
            filters, setFilters,
            businessList, setBusinessList
        }}>
            {children}            
        </DirectoryContext.Provider>
    );
};
