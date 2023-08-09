import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function roundTempMax(){
        let temp = Math.round(props.data.temp.max)
        return `${temp}`
    }
    function roundTempMin(){
        let temp = Math.round(props.data.temp.min)
        return `${temp}`
    }
    function day(){
        let date = new Date(props.data.dt * 1000)
        let day = date.getDay()
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day]
    }
  return (
    <>
      <p className="dayName">{day()}</p>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <p className="forecastTemp">
        <span className="maxTemp">{roundTempMax()}° </span>
        <span className="minTemp">{roundTempMin()}°</span>
      </p>
    </>
  );
}
