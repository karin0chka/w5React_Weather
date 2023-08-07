import React, { useState } from "react";
import axios from "axios";

export default function Weather({defaultCity}) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    setWeatherData({
        ready: true,
        temperature:response.data.main.temp,
        humidity: response.data.main.humidity,
        description:response.data.weather[0].description,
        iconUrl:"",
        date:"Monday 16:00",
        wind: response.data.wind.speed,
        city: response.data.name,


    });
  }
  const weather_wrap = {
    border: "1px solid #dadde1",
    fontFamily: "arial, sans-serif",
    color: "#878787",
    padding: "16px",
    borderRadius: "5px",
  };
  const title = {
    fontSize: "24px",
    fontWeigth: "100",
    lineHeight: "29px",
    margin: "20px 0 0 0",
  };
  const liStyle = {
    padding: "0px",
    margin: "0px",
    listStyle: "none",
    fontSize: "16px",
    fontWeigth: "100",
    lineHeight: "19px",
  };
  const ulStyle = {
    margin: "0px",
    padding: "0px",
  };
  const formStyle = {
    marginBottom: "20px",
  };

  const temperature = {
    color: "rgb(33,33,33)",
    fontSize: "64px",
    fontWeigth: "400",
    lineHeight: "64px",
    marginLeft: "5px",
  };

  const imgStyle = {
    display: "flex",
  };
  const unit = {
    color: "rgb(33, 33, 33)",
    formSize: "16px",
    fontWeigth: "400",
    position: "relative",
  };
  if (weatherData.ready) {
    return (
      <div className="container">
        <div style={weather_wrap}>
          <form style={formStyle}>
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
          <h1 style={title}>{weatherData.city}</h1>
          <ul style={ulStyle}>
            <li style={liStyle}>{weatherData.date}</li>
            <li style={liStyle} className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6" style={imgStyle}>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
              />
              <span style={temperature}>{Math.round(weatherData.temperature)}</span> <span style={unit}>°C</span>
            </div>
            <div className="col-6">
              <ul style={ulStyle}>
                <li style={liStyle}>Humidity:{weatherData.humidity}%</li>
                <li style={liStyle}>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d0bec9d6480b2df7e1b8e4642f141337";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
  }
}
