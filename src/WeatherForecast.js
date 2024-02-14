import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
        <div className="WeatherForecast-day">Thurs</div>
        <WeatherIcon code="09d" size={36} />
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-max">12°</span>
          <span className="WeatherForecast-temp-max">10°</span>
        </div>
      </div>
    </div>
  </div>;
}
