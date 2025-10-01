import React, { useContext } from "react";
import Select from "react-select";
import { cities } from "./data";
import { DirectoryContext } from "../Context";
import { data } from "react-router-dom";

function LocationSearch() {
  // Add this defensive check
  const { dataObj } = useContext(DirectoryContext);
  if (!dataObj.cityList) {
    return <div>Loading cities...</div>; // or return null
  }
  // console.log(dataObj)

  const options = dataObj.cityList.map((city) => ({
    value: city.u_city_name,
    label: city.u_city_name,
  }));

  return (
    <div style={{ width: "250px" }}>
      <Select options={options} placeholder="Search location..." isSearchable />
    </div>
  );
}

export default LocationSearch;
