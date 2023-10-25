import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
     <CurrentDate date={props.data.date} />
      <ul>
        <li className="text-capitalize">{props.data.description}</li>
        <WeatherTemperature celsius={props.data.temperature} />
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
    </div>
  );
}
