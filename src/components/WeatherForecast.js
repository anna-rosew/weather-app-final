import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/WeatherForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleRespone(response) {
    setForecast(response.data.daily);
    console.log(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "6bfa54f242cbb59343d4e58db578dc61";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleRespone);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
