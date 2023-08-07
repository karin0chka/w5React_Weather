import React from "react";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const app = {
    maxWidth: "600px",
    margin: "25px auto",
  };
  const footer = {
    fontSize: "11px",
    margin: "10px",
  };

  return (
    <>
      <div style={app}>
        <div className="container">
          <Weather  defaultCity = "New York"/>
          <div className="row">
            <div className="col-12">
              <footer style={footer}>
                This project was coded by Karina Kvych and is{" "}
                <a
                  href="https://github.com/karin0chka/w5React_Weather"
                  target="_blank"
                >
                  {" "}
                  open-sourced on GitHub
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
