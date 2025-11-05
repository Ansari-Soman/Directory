import React, { useEffect, useState } from "react";
import { DirectoryContext } from "../Context";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Dashboard/Header";
import axios from "axios";
import { getLocation } from "../Location/CityLocation";
import { AppProperties } from "../AppProperties";
import Footer from "../Dashboard/Footer";
import { AppWindow } from "lucide-react";

const WebWrapper = () => {
  const loca = AppProperties.loca;
  const appCode = AppProperties.appCode;
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

  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [addNewWindow, setAddnNewWindow] = useState(false);
  const [newDataAdded, setNewDataAdded] = useState(false);
  const [city, setCity] = useState("");

  // -____________________Converting-Time-To-12-Hours-Format
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

  // FETCHING City List, Category & Businesses
  useEffect(() => {
    // -____________________-Fetching City List
    axios
      .get(`${loca}/api/city/list`, { headers: { application: appCode } })
      .then((res) => {
        if (res.data.record.length > 0) {
          setDataObj((prev) => ({ ...prev, cityList: res.data.record }));
        }
      })
      .catch((e) => {
        console.log("Faild city list API", e);
      });

    // -____________________-Fetching Category
    axios
      .get(`${loca}/api/business/category`, {
        headers: { application: appCode },
      })
      .then((res) => {
        if (res.data.record.length > 0) {
          setDataObj((prev) => ({ ...prev, category: res.data.record }));
        }
      })
      .catch((e) => {
        console.log("Faild category API", e);
      });

    // -____________________-Fetching Business
    axios
      .get(`${loca}/api/get/businesses`, {
        headers: { application: appCode },
      })
      .then((res) => {
        if (res.data.record.length > 0) {
          setDataObj((prev) => ({ ...prev, businesses: res.data.record }));
        }
      })
      .catch((e) => {
        console.log("Faild category API", e);
      });
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
      .post(`${loca}/api/add/new`, newData, {
        headers: {
          application: appCode,
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.message === "success") {
          setNewDataAdded(!newDataAdded);
        }
      })
      .catch((e) => console.log(e));
  };

  // -____________________-Get location
  useEffect(() => {
    const location = async () => {
      try {
        const res = await getLocation();
        try {
          const city = await axios.post(`${loca}/api/get/location`, res, {
            headers: { application: appCode },
          });
          const cityObj = {
            value: city.data.name,
            label: city.data.name,
          };
          setCity(cityObj);
        } catch (err) {
          console.log("Error while fetching city", err);
        }
      } catch (error) {
        console.error("Failed to get location:", error);
      }
    };

    location();
  }, []);

  // -____________________-Fetching City List Dynamic
  const getCityList = async (cityName) => {
    try {
      const response = await axios.get(`${loca}/api/get/city/${cityName}`, {
        headers: { application: appCode },
      });
      console.log("City list dynamic", response.data.record);
      if (response.data.record.length > 0) {
        return response.data.record;
      } else {
        return [];
      }
    } catch (e) {
      console.log("Error while fething city list");
    }
  };

  useEffect(() => {
    console.log("City state", city);
  }, [city]);
  return (
    <DirectoryContext.Provider
      value={{
        getCityList,
        city,
        setCity,
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
      <Footer />
    </DirectoryContext.Provider>
  );
};

export default WebWrapper;
