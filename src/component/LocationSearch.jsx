import React, { useContext } from "react";
import Select from "react-select";
import { cities } from "./data";
import { DirectoryContext } from "../Context";

const options = cities.map((city) => ({
    value: city.name,
    label: city.name,
}));

function LocationSearch() {
    const { selectedCity, setSelectedCity } = useContext(DirectoryContext)
    
    return (
        <div style={{ width: "250px" }}>
            <Select
                options={options}
                placeholder="Search location..."
                isSearchable
                value={options.find(opt => opt.value === selectedCity) || null}
                onChange={(e) => setSelectedCity(e.value)}
            />
        </div>
    );
}

export default LocationSearch;
