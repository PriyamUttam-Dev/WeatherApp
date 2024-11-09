// import React, { createContext, useEffect, useState } from "react";
// export const WeatherContext = createContext();

// const WeatherProvider = ({ children }) => {
//   const [WeatherDetails, setWeatherDetails] = useState({});
//   const [location, setLocation] = useState(null);
//   const [toggle, setToggle] = useState(true);
//   const [cityName,setCityName] = useState("Meerut");

//   const fetchWeatherData = async (latitude, longitude) => {
//     // Replace with your actual API key and endpoint
//     const apiKey = "c5c847e67cf239a0d65f288b778337f4";
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setWeatherDetails(data);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       // Handle error,    e.g., display an error message to the user
//     }
//   };
//   const fetchWeatherCoordinates = async (cityName) => {
//     const apiKey = "c5c847e67cf239a0d65f288b778337f4";
//     const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       if (data.length > 0) {
//         const { lat, lon } = data[0];
//         fetchWeatherData(lat, lon);
//       } else {
//         console.error("City not found");
//         // Handle city not found error
//       }
//     } catch (error) {
//       console.error("Error fetching weather coordinates:", error);
//     }
//   };

//   const Getlocation = (e) => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setLocation({ latitude, longitude });
//         fetchWeatherData(latitude, longitude);
//         setToggle(!toggle);
//         if (e) e.target.style.display = "none"; // Call the callback to potentially hide the element
//       },
//       (error) => {
//         console.error("Error getting location:", error);
//         // Handle error, display a message to the user
//       }
//     );
//   };

//   return (
//     <div>
//       <WeatherContext.Provider value={{ WeatherDetails, Getlocation, toggle ,fetchWeatherCoordinates,setCityName}}>
//         {children}
//       </WeatherContext.Provider>
//     </div>
//   );
// };

// export default WeatherProvider;


// import React, { createContext, useState } from "react";
// export const WeatherContext = createContext();

// const WeatherProvider = ({ children }) => {
//   const [WeatherDetails, setWeatherDetails] = useState({});
//   const [location, setLocation] = useState(null);
//   const [toggle, setToggle] = useState(true);
//   const [cityName, setCityName] = useState("Meerut");

//   const fetchWeatherData = async (latitude, longitude) => {
//     const apiKey = "c5c847e67cf239a0d65f288b778337f4";
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setWeatherDetails(data);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   const fetchWeatherCoordinates = async () => {
//     const apiKey = "c5c847e67cf239a0d65f288b778337f4";
//     const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       if (data.length > 0) {
//         const { lat, lon } = data[0];
//         fetchWeatherData(lat, lon);
//       } else {
//         console.error("City not found");
//         alert("City not found. Please check the spelling or try another city.");
//       }
//     } catch (error) {
//       console.error("Error fetching weather coordinates:", error);
//       alert("Error fetching weather data. Please try again.");
//     }
//   };

//   const Getlocation = (e) => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setLocation({ latitude, longitude });
//         fetchWeatherData(latitude, longitude);
//         setToggle(!toggle);
//         if (e) e.target.style.display = "none";
//       },
//       (error) => {
//         console.error("Error getting location:", error);
//       }
//     );
//   };

//   return (
//     <div>
//       <WeatherContext.Provider
//         value={{ WeatherDetails, Getlocation, toggle, fetchWeatherCoordinates, setCityName }}
//       >
//         {children}
//       </WeatherContext.Provider>
//     </div>
//   );
// };

// export default WeatherProvider;
import React, { createContext, useState } from "react";
export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [WeatherDetails, setWeatherDetails] = useState({});
  const [location, setLocation] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  const fetchWeatherData = async (latitude, longitude) => {
    const apiKey = "c5c847e67cf239a0d65f288b778337f4";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    try {
      setLoading(true); // Start loading
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherDetails(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false); // Stop loading after data is fetched or an error occurs
    }
  };

  const fetchWeatherCoordinates = async () => {
    const apiKey = "c5c847e67cf239a0d65f288b778337f4";
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
    try {
      setLoading(true); // Start loading
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        await fetchWeatherData(lat, lon); // Wait for fetchWeatherData to complete
        setToggle(false); // Hide the location button when fetching by city name
      } else {
        console.error("City not found");
        alert("City not found. Please check the spelling or try another city.");
      }
    } catch (error) {
      console.error("Error fetching weather coordinates:", error);
      alert("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false); // Stop loading after data is fetched or an error occurs
    }
  };

  const Getlocation = (e) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        await fetchWeatherData(latitude, longitude); // Wait for data fetching to complete
        setToggle(false); // Hide the button after location is used
        if (e) e.target.style.display = "none";
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  };

  return (
    <WeatherContext.Provider
      value={{
        WeatherDetails,
        Getlocation,
        toggle,
        fetchWeatherCoordinates,
        setCityName,
        loading, // Provide loading state to consumers
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;


