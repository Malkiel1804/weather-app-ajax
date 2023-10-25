import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./styles.css";

export default function WeatherList(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "866a208a73eeff02182218e9441647a1";
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(Url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
        />
        <button type="Submit">Search</button>
      </form>
    </div>
  );

  if (result) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    return form;
  }
}
