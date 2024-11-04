import React, { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [WeatherDetails, setWeatherDetails] = useState("21");

  return (
    <div>
      <WeatherContext.Provider value={WeatherDetails}>{children}</WeatherContext.Provider>
    </div>
  );
};

export default WeatherProvider;
