import React, { useContext } from "react";
import Select from "react-select";
import { cities } from "./data";
import { DirectoryContext } from "../Context";

const options = cities.map((city) => ({
    value: city.name,
    label: city.name,
}));

function LocationSearch() {
    
    return (
        <div style={{ width: "250px" }}>
            <Select
                options={options}
                placeholder="Search location..."
                isSearchable
            />
        </div>
    );
}

export default LocationSearch;
