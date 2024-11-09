// import React, { useContext, useEffect, useState } from "react";
// import Vector from "../Others/Vector";
// import Sunny from "../clouds/Sunny";
// import Header from "../Header/Header";
// import { WeatherContext } from "../../Context/WeatherData";
// import {
//   WiCelsius,
//   WiHumidity,
//   WiStrongWind,
//   WiThermometer,
// } from "weather-icons-react";

// const Landing = () => {
//   const { WeatherDetails, Getlocation, toggle ,fetchWeatherCoordinates,setCityName} = useContext(WeatherContext);
//   const [temperature, setTemperature] = useState("0");
//   const [humidity, setHumidity] = useState("0");
//   const [windSpeed, setWindSpeed] = useState("0");
//   const [city, setCity] = useState("City");
//   const [weather ,setWeather] =useState("Weather")


//   useEffect(() => {
//     if (WeatherDetails && WeatherDetails.main && WeatherDetails.wind) {
//       console.log("Updated Weather Details:", WeatherDetails);
//       setTemperature(WeatherDetails.main.temp); // Update with the temperature property
//       setHumidity(WeatherDetails.main.humidity);
//       setWindSpeed(WeatherDetails.wind.speed);
//       setCity(WeatherDetails["name"]);
//       setWeather(WeatherDetails.weather[0]["description"])
//     }
//   }, [WeatherDetails]);

//   return (
//     <div className="h-screen w-full">
//       <Header />
//       <Vector />
//       <div className="absolute"></div>
//       <div className="p-4 pt-0 w-2/5 h-[75%] flex flex-col items-center justify-center rounded-3xl absolute right-28 top-20 z-[10] bg-white/10 backdrop-blur-lg border-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.5)]">
//         <h1 className="text-3xl font-semibold">{city}</h1>
//         <h2 className="text-md mt-2 font-semibold">{weather.toUpperCase()}</h2>
//         <Sunny/>
//         {toggle ? (
//           <button
//             onClick={Getlocation}
//             className="bg-color3 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg"
//           >
//             Allow Location Access
//           </button>
//         ) : (
//           <div className="absolute bottom-0 w-full h-[30%] flex justify-evenly p-4">
//             {/* Weather Information Box */}
//             <div className="w-[30%] h-[90%] p-2 rounded-lg bg-color4/20 backdrop-blur-lg border-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.5)] flex flex-col gap-2 justify-center text-cd font-semibold">
//               <h2 className="text-center">Weather</h2>

//               {/* Humidity Display */}
//               <div className="flex gap-2 items-center">
//                 <WiHumidity className="text-2xl" color="#000" />
//                 <h2 className="text-sm">Humidity: {humidity}%</h2>
//               </div>

//               {/* Temperature Display */}
//               <div className="flex gap-2 items-center">
//                 <WiThermometer className="text-2xl" />
//                 <h2 className="text-sm">Temp: {temperature}°C</h2>
//               </div>

//               {/* Wind Speed Display */}
//               <div className="flex gap-2 items-center">
//                 <WiStrongWind className="text-2xl" />
//                 <h2 className="text-sm">Wind: {windSpeed} m/s</h2>
//               </div>
//             </div>

//             {/* Placeholder Boxes */}
//             <div className="w-[60%] h-[90%] p-2 rounded-lg relative bg-color3/20 backdrop-blur-lg border-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.5)] flex flex-col items-center justify-center text-3xl font-semibold">
//               <h2 className="text-sm absolute top-4"></h2>
//             </div>

//             {/* Location Access Button */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Landing;




import React, { useContext, useEffect, useState } from "react";
import Vector from "../Others/Vector";
import Sunny from "../clouds/Sunny";
import Header from "../Header/Header";
import { WeatherContext } from "../../Context/WeatherData";
import {
  WiCelsius,
  WiHumidity,
  WiStrongWind,
  WiThermometer,
} from "weather-icons-react";

const Landing = () => {
  const { WeatherDetails, Getlocation, toggle, fetchWeatherCoordinates, setCityName } = useContext(WeatherContext);
  const [temperature, setTemperature] = useState("0");
  const [humidity, setHumidity] = useState("0");
  const [windSpeed, setWindSpeed] = useState("0");
  const [city, setCity] = useState("City");
  const [weather, setWeather] = useState("Weather");
  const [inputCity, setInputCity] = useState("");

  useEffect(() => {
    if (WeatherDetails && WeatherDetails.main && WeatherDetails.wind) {
      console.log("Updated Weather Details:", WeatherDetails);
      setTemperature(WeatherDetails.main.temp);
      setHumidity(WeatherDetails.main.humidity);
      setWindSpeed(WeatherDetails.wind.speed);
      setCity(WeatherDetails.name);
      setWeather(WeatherDetails.weather[0].description);
    }
  }, [WeatherDetails]);

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleFetchWeather = () => {
    if (inputCity.trim()) {
      setCityName(inputCity); // Update the context's cityName state
      fetchWeatherCoordinates(); // Trigger the weather fetch based on the updated cityName
    } else {
      alert("Please enter a valid city name");
    }
  };

  return (
    <div className="h-screen w-full">
      <Header />
      <Vector />
      <div className="absolute p-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={inputCity}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <button
          onClick={handleFetchWeather}
          className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Get Weather
        </button>
      </div>
      <div className="p-4 pt-0 w-2/5 h-[75%] flex flex-col items-center justify-center rounded-3xl absolute right-28 top-20 z-[10] bg-white/10 backdrop-blur-lg border-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.5)]">
        <h1 className="text-3xl font-semibold">{city}</h1>
        <h2 className="text-md mt-2 font-semibold">{weather.toUpperCase()}</h2>
        <Sunny />
        {toggle ? (
          <button
            onClick={Getlocation}
            className="bg-color3 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg"
          >
            Allow Location Access
          </button>
        ) : (
          <div className="absolute bottom-0 w-full h-[30%] flex justify-evenly p-4">
            <div className="w-[30%] h-[90%] p-2 rounded-lg bg-color4/20 backdrop-blur-lg border-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.5)] flex flex-col gap-2 justify-center text-cd font-semibold">
              <h2 className="text-center">Weather</h2>
              <div className="flex gap-2 items-center">
                <WiHumidity className="text-2xl" color="#000" />
                <h2 className="text-sm">Humidity: {humidity}%</h2>
              </div>
              <div className="flex gap-2 items-center">
                <WiThermometer className="text-2xl" />
                <h2 className="text-sm">Temp: {temperature}°C</h2>
              </div>
              <div className="flex gap-2 items-center">
                <WiStrongWind className="text-2xl" />
                <h2 className="text-sm">Wind: {windSpeed} m/s</h2>
              </div>
            </div>
            <div className="w-[60%] h-[90%] p-2 rounded-lg relative bg-color3/20 backdrop-blur-lg border-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.5)] flex flex-col items-center justify-center text-3xl font-semibold">
              <h2 className="text-sm absolute top-4"></h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
