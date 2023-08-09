import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function covertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function covertToCelsius(event){
    event.preventDefault()
    setUnit("celsius")
  }
  if (unit === "celsius") {
    return (
      <>
        <span className="temperature">{Math.round(props.celsius)}</span>{" "}
        <span className="unit">
          °C|
          <a href="#" onClick={covertToFahrenheit}>
            °F
          </a>
        </span>
      </>
    );
  } else {
    const fahrenheit = (props.celsius * 9/5) + 32
    return (
      <>
        <span className="temperature">{Math.round(fahrenheit)}</span>{" "}
        <span className="unit">
          <a href="#" onClick={covertToCelsius}>
            °C|
          </a>
          °F
        </span>
      </>
    );
  }
}
