// import axios from "axios";

// export const getCityFromIP = async () => {
//   try {
//     const response = await axios.get("https://ipapi.co/json/");
//     const data =  response.data;
//     console.log("in the city ip",response);

//     return data?.city;
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const getLocation = () => {
//   return new Promise((resolve) => {
//     if (!navigator.geolocation) {
//       console.log("Geolocation not supported.");
//       // getCityFromIP().then(resolve); // await fallback
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         console.log("Position", position)
//         const { latitude, longitude } = position.coords;
//         // const bhiwandi = {
//         //   lat: 19.30023,
//         //   lon: 73.05881
//         // }
//         try {
//           const response = await axios.get(
//             `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//           );
//           const data =  response.data;
//           console.log("After the lan lon", data)
//           const cityName =
//             data.address.city ||
//             data.address.town ||
//             data.address.village ||
//             data.address.state;

//           resolve(data);
//         } catch (err) {
//           console.log("Reverse geocoding failed:", err);
//           // getCityFromIP().then(resolve); // fallback
//         }
//       },
//       async (error) => {
//         console.log("Geolocation error:", error);
//         // getCityFromIP().then(resolve); // fallback
//       }
//     );
//   });
// };




export const getLocation = async () => {
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported by your browser");
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("pos", position)
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



