import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useWeather from "../hooks/useWeather";
function Search() {
    const {fetchWeather} = useWeather()
    const [input, setInput] = useState('')

    const handleWeatherForm = (e) => {
        e.preventDefault();
        if (input.trim() === "") {
            alert("Please enter a city name");
            return;
        }
        fetchWeather(input);
        setInput('');
    }

  return (
    <form
    name="form"
    onSubmit={handleWeatherForm}  action="" className="flex w-[100%] rounded-[50px] overflow-hidden h-[50px]">

      <input
      name="input"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        placeholder="Serach any city..."
        className="outline-none border-none bg-black px-4 p-1  text-black palceholder:text-white text-white w-[100%]  text-1xl "
      />

      <button 
        type="submit"
        className="bg-black px-4 p-1 text-white active:bg-white  cursor-pointer"
      >
        <IoSearch className="text-[20px] text-white "/>

      </button>
    </form>
  );
}

export default Search;
