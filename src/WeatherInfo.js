import React from "react";
import CurrentDate from "./CurrentDate";
import UnitConversion from "./UnitConversion";
import WeatherIcon from "./WeatherIcon";
import "./styles.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <CurrentDate date={props.data.date} />
      <WeatherIcon code={props.data.icon} />
      <h1>{props.data.city}</h1>
      <div className="WeatherContainer">
        <div className="text-capitalize">{props.data.description}</div>
        <br />
        <UnitConversion celsius={props.data.temperature} />
        <div>Humidity: {props.data.humidity}%</div>
        <div>Wind: {props.data.wind} km/h</div>
      </div>
    </div>
  );
}
