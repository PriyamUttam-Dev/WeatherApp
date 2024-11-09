import React, { createContext, useEffect, useState } from "react";
export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [WeatherDetails, setWeatherDetails] = useState({});
  const [location, setLocation] = useState(null);
  const [toggle, setToggle] = useState(true);

  const fetchWeatherData = async (latitude, longitude) => {
    // Replace with your actual API key and endpoint
    const apiKey = "c5c847e67cf239a0d65f288b778337f4";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherDetails(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Handle error,    e.g., display an error message to the user
    }
  };

  //  const Getlocation = (e) => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       setLocation({ latitude, longitude });
  //       // Fetch weather data using a weather API and update the state
  //       fetchWeatherData(latitude, longitude);
  //       e.target.styles=displaynone
  //     },
  //     (error) => {
  //       console.error('Error getting location:', error);
  //       // Handle error, e.g., display an error message to the user
  //     }
  //   );
  // };

  const Getlocation = (e) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        fetchWeatherData(latitude, longitude);
        setToggle(!toggle);
        if (e) e.target.style.display = "none"; // Call the callback to potentially hide the element
      },
      (error) => {
        console.error("Error getting location:", error);
        // Handle error, display a message to the user
      }
    );
  };

  return (
    <div>
      <WeatherContext.Provider value={{ WeatherDetails, Getlocation, toggle }}>
        {children}
      </WeatherContext.Provider>
    </div>
  );
};

export default WeatherProvider;
