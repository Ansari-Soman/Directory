import React, { useContext } from "react";
import Select from "react-select";
import { cities } from "./data";
import { DirectoryContext } from "../Context";
import { data } from "react-router-dom";
import AsyncSelect from "react-select/async";
import axios from "axios";

function LocationSearch() {
  // Add this defensive check
  const { dataObj, city, setCity, getCityList } = useContext(DirectoryContext);
  const loadOptions = async (searchTerm) => {
    const name = searchTerm || "A";
    const res = await getCityList(name);
    const options = res.map((city) => ({
      value: city.name,
      label: city.name,
    }));
    return options;
  };

  return (
    <div style={{ width: "250px" }} className="z-20">
      <AsyncSelect
        loadOptions={loadOptions}
        defaultOptions={true}
        onChange={(e) => setCity(e)}
        placeholder="Search location..."
        isSearchable
        value={city}
      />
    </div>
  );
}

export default LocationSearch;
