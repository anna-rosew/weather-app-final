import React from "react";
import "./Weather.css";

export default function photos(props) {
  if (props.photos) {
    console.log("Hello from photos");
    return (
      <section className="city-img">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.small}
                    alt={photo.src.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else return null;
}
