import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatedDate from "./FormatedDate";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "",
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather_wrap">
          <form className="formStyle">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <h1 className="title">{weatherData.city}</h1>
          <ul style={{ listStyleType: "none" }} className="ulstyle">
            <li>
              <FormatedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6 imgStyle">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul style={{ listStyleType: "none" }} className="ulstyle">
                <li>Humidity:{weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5863935ee9cca4c02ed68203f807c65b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
