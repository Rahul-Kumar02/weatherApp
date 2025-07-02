import React from "react";
import useWeather from "../hooks/useWeather";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

function WeatherShow() {
  const { weatherData } = useWeather();
  if (!weatherData) return null;

  //   get weather icon, using iconUrl
  const iconId = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  return (
    <div className="w-[100%] flex flex-col items-center h-[100%] gap-10 ">
      <div className="text-center text-2xl mt-20 w-[130px] font-bold px-4 p-1 text-white flex items-center justify-center flex-col gap-2">
        <p className="text-[14px]">
          {weatherData.sys.country},{weatherData.name}
        </p>

        <div>{Math.round(weatherData.main.temp)}&deg;C</div>

        <div className="">
          <img key={iconId} src={iconUrl} alt="weathe-icon" />
        </div>
        <p className="text-[10px] font-normal">
          {weatherData.weather[0].description}
        </p>
      </div>

      <div className="flex items-center justify-between w-[100%] ">
        <div className="">
          <span>
            <WiHumidity className="text-[20px] text-white"/>
          </span>
         <span className="text-white"> {Math.round(weatherData.main.humidity)} %</span>
        </div>
        <div className="">
          <span>
            <FaWind className="text-[18px] text-white"/>
          </span>
          <span className="text-white">{Math.round(weatherData.wind.speed)} m/s </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherShow;
