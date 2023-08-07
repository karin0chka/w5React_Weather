import React from "react";

export default function Weather() {
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
    marginLeft:"5px"
  };
 
  const imgStyle={
    display:"flex",
  }
  const unit={
    color:"rgb(33, 33, 33)",
    formSize:"16px",
    fontWeigth:"400",
    position:"relative",
    top:"-18px",
  }

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
        <h1 style={title}>New York</h1>
        <ul style={ulStyle}>
          <li style={liStyle}>Wednesday 07:00</li>
          <li style={liStyle}>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6" style={imgStyle}>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
              
            />
            <span style={temperature}>6</span> <span style={unit}>°C</span>
          </div>
        <div className="col-6">
          <ul style={ulStyle}>
            <li style={liStyle}>Precipitation: 15%</li>
            <li style={liStyle}>Humidity: 72%</li>
            <li style={liStyle}>Wind: 13 km/h</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
