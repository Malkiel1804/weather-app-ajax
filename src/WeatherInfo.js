import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <CurrentDate date={props.data.date} />
      <h1>{props.data.city}</h1>
      <div className="WeatherContainer">
        <div className="text-capitalize">{props.data.description}</div>
        <WeatherTemperature celsius={props.data.temperature} />
        <div>Humidity: {props.data.humidity}%</div>
        <div>Wind: {props.data.wind} km/h</div>
      </div>
    </div>
  );
}
