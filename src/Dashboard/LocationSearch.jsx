import React, { useContext } from "react";
import Select from "react-select";
import { cities } from "./data";
import { DirectoryContext } from "../Context";
import { data } from "react-router-dom";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { useLoadCityOptions } from "../Location/CityLocation";

function LocationSearch() {
  // Add this defensive check
  const { dataObj, city, setCity, getCityList } = useContext(DirectoryContext);
  const loadOptions = useLoadCityOptions();

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

