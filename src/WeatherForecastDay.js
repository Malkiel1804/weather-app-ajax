import React from "react";

export default function WeatherForecastDay(props) {
    return (
    <div>
    <div className="forecast-day">{props.data.dt}</div>
            <div className="forecast-temp">
              <span className="forecast-temp-max">{Math.round(props.data.temp.max)}°C</span> |{" "}
              <span className="forecast-temp-min">{Math.round(props.data.temp.min)}°C</span>
            </div>
            </div>
            );
}