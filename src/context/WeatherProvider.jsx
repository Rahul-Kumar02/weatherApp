import { useState } from "react";
import axios from "axios";
import WeatherContext from "./WeatherContext";

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  // const [loading, setLoading] = useState('');

  const fetchWeather = async (cityName) => {
    setWeatherData(null);

    try {
      // api key
      const API_KEY = "853e67a9f845360c9a701efe695d7416";
      //  api url
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

      const res = await axios.get(url);
      setWeatherData(res.data);
      console.log(res.data.name);
      console.log(res.data.main.temp);
      console.log(res.data);
      console.log(res.data);
    } catch (error) {
      setWeatherData(null);
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
