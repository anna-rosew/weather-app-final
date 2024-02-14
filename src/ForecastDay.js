import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecast-day">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code="09d" size={36} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemp()}</span>
        <span className="WeatherForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
