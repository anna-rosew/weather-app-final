import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autofocus="on"
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
      <h1>Liverpool</h1>
      <ul>
        <li>Tuesday 6th February</li>
        <li>Light Rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <ul>
              <li>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                  alt="Light Rain"
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">7</span>
                  <span className="unit">°C | F</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 85%</li>
            <li>Humidity: 96%</li>
            <li>Wind: 13mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
