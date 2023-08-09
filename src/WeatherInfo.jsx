import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <>
      <div className="weatherInfo">
        <div className="container">
          <h1 className="title">{props.data.city}</h1>
          <ul style={{ listStyleType: "none" }} className="ulstyle">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="row">
            <div className="col-6 imgStyle">
                <WeatherIcon code={props.data.icon} size={60} />
                <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <div className="col-6">
              <ul style={{ listStyleType: "none" }} className="ulstyle">
                <li>Humidity:{props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
