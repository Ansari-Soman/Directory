import React, { useEffect, useState } from "react";
import { DirectoryContext } from "../Context";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Dashboard/Header";
import axios from "axios";
import { getLocation } from "../Location/CityData";

const WebWrapper = () => {
  const [listingSuccess, setListtingSuccess] = useState(true);
  const navigate = useNavigate();

  const [token, setToken] = useState(
    "eyJhbGciOiJIUzUxMiJ9.eyJhcHAiOiJ7XCJtYWluX2FwcFwiOntcIm5hbWVcIjpcImF1dG9wb3J0YWxcIiwgXCJhcHBfY29kZVwiOlwiYXV0b1wiLCBcImFwcF9hZGRyZXNzXCI6XCJodHRwOi8vbG9jYWxob3N0OjgwODNcIn0sXCJzZWNvbmRhcnlfYXBwXCI6W119Iiwic3ViIjoiaGlmenVyIiwiZXhwIjoxNzU5OTkyMTIwLCJpYXQiOjE3NTkzODczMjB9.ZBeLNDDc3f7mqZJ3LDS5tqQfW8whTsmWQjMKS4IjPrfll_w5wU7PCVo2RGlEAAPmNIpcRSVbEq7BjnoagFGupw"
  );

  // COMPLETE LOGIC
  // Storing Listing Data
  const [formData, setFormData] = useState({
    businessName: "",
    city: "",
    road: "",
    subRoad: "",
    area: "",
    subArea: "",
    category: "",
    subCategory: "",
    categoryType: "",
    class: "",
    establishment: "",
    firstShiftFrom: "",
    firstShiftTo: "",
    secondShiftFrom: "",
    secondShiftTo: "",
  });

  const [dataObj, setDataObj] = useState({
    cityList: [],
    cityData: "",
    roads: [],
    areas: [],
    subAreas: [],
    subRoads: [],
    category: [],
    subCategories: [],
    categoryTypes: [],
    class: [],
    establishment: [],
    businesses: [],
  });

  const [dataId, setDataId] = useState({
    businessName: "",
    city: "",
    road: "",
    subRoad: "",
    area: "",
    subArea: "",
    category: "",
    subCategory: "",
    categoryType: "",
    class: "",
    establishment: "",
    firstShiftFrom: "",
    firstShiftTo: "",
    secondShiftFrom: "",
    secondShiftTo: "",
  });

  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [addNewWindow, setAddnNewWindow] = useState(false);
  const [newDataAdded, setNewDataAdded] = useState(false);
  const [city, setCity] = useState("");
  const formatTime = (time) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Saving Form Data
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Storing UNI_IDs
  const handleBusinessId = (field, value) => {
    setDataId((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleOnNewWindow = () => {
    setAddnNewWindow(!addNewWindow);
  };

  const resetFormData = () => {
    setFormData({
      businessName: "",
      city: "",
      road: "",
      subRoad: "",
      area: "",
      subArea: "",
      category: "",
      subCategory: "",
      categoryType: "",
      class: "",
      establishment: "",
      timeFrom: "",
      timeTo: "",
    });

    setDataId({
      businessName: "",
      city: "",
      road: "",
      subRoad: "",
      area: "",
      subArea: "",
      category: "",
      subCategory: "",
      categoryType: "",
      class: "",
      establishment: "",
      timeFrom: "",
      timeTo: "",
    });
  };
  const getLocationInfo = async () => {
    const data = await getLocation();
    console.log("In the header", data);
    if (data && data.length > 0) {
      console.log("City list == ", dataObj.cityList);
      const exist = dataObj.cityList.map((city) => city.u_city_name === data);
      setCity(exist.u_city_name);
      console.log("exist ? = ", exist);
    } else {
      console.log("in the else");
    }
  };

  // FETCHING City List, Category & Businesses
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const [cities, categories, businesses] = await Promise.all([
          axios.get("http://localhost:8083/api/city/list", {
            headers: { application: "dir" },
          }),
          axios.get("http://localhost:8083/api/business/category", {
            headers: { application: "dir" },
          }),
          axios.get("http://localhost:8083/api/get/businesses", {
            headers: { application: "dir" },
          }),
        ]);

        setDataObj((prev) => ({
          ...prev,
          cityList: cities.data.record,
          category: categories.data.record,
          businesses: businesses.data.record,
        }));
      } catch (err) {
        console.log("Error while fetching cityList", err);
      }
    };

    fetchCities();
  }, []);

  // __________-NEW_DATA-__________
  const handleOnNewData = (value, type) => {
    const newData = {
      ...dataId,
      name: value,
      type: type,
    };
    console.log("newData === ", newData);
    axios
      .post("http://localhost:8083/api/add/new", newData, {
        headers: {
          application: "dir",
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.message === "success") {
          console.log("in the success");
          setNewDataAdded(!newDataAdded);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {});
  };

  // useEffect(() => {
  //   const temp = async () => {
  //     const res = await getLocation();
  //     console.log("res===", res);
  //   };
  //   temp();
  //   console.log("data obj = ", dataObj);
  //   if (dataObj.cityList < 0) return;
  // }, []);

  return (
    <DirectoryContext.Provider
      value={{
        city,
        token,
        setToken,
        listingSuccess,
        setListtingSuccess,
        navigate,
        formData,
        handleInputChange,
        dataObj,
        handleBusinessId,
        dataId,
        handleOnNewWindow,
        addNewWindow,
        handleOnNewData,
        setDataObj,
        isInitialLoading,
        setIsInitialLoading,
        resetFormData,
        newDataAdded,
        formatTime,
      }}
    >
        <Header />
        <Outlet />
    </DirectoryContext.Provider>
  );
};

export default WebWrapper;
