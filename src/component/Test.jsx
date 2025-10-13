import axios from "axios";
import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    const getCity = async () => {
      const temp = "Bhiw";
      const res = await axios.get("http://localhost:8083/api/get/city", {
        params: { city: temp },
        headers: { application: "dir" },
      });
      console.log("Resss", res);
    };
    getCity();
  }, []);
  return <div>Test</div>;
};

export default Test;
