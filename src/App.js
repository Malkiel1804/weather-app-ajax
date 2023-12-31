import React from "react";
import "bootstrap/dist/css/bootstrap.css"; 
import WeatherList from "./WeatherList";
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>
        <WeatherList />
        <footer>
          This project was coded by Lara and is{" "}
          <a
            href="https://github.com/Malkiel1804/weather-app-ajax.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://jovial-meringue-281cb7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}