import { useContext } from "react";
import { DirectoryContext } from "../Context";

export const getLocation = async () => {
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported by your browser");
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  });
};
// export const loadOptions = async (searchTerm) => {
//   const { getCityList } = useContext(DirectoryContext);
//   const name = searchTerm || "A";
//   const res = await getCityList(name);
//   const options = res.map((city) => ({
//     value: city.name,
//     label: city.name,
//   }));
//   return options;
// };

export const useLoadCityOptions = () => {
  const { getCityList } = useContext(DirectoryContext);

  return async (searchTerm) => {
    const name = searchTerm || "A";
    const res = await getCityList(name);
    return res.map((city) => ({
      value: city.name,
      label: city.name,
    }));
  };
};
