import React, { createContext, useState } from "react";

// 1️⃣ Create Context
export const DirectoryContext = createContext();

// 2️⃣ Provider Component
export const CityProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [filterActive, setFilterActive] = useState(false)
        const [filters, setFilters] = useState({
            city: "",
            category: "",
            subCategory: ""
        })
    

    return (
        <DirectoryContext.Provider value={{ selectedCity, setSelectedCity, filterActive, setFilterActive }}>
            {children}
        </DirectoryContext.Provider>
    );
};
