  export const getLocation = async () => {
    if (!navigator.geolocation) {
      throw new Error("Geolocation is not supported by your browser");
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("pos", position);
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



