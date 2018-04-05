import React from 'react';

import "./Weather-card.css";

export default function WeatherCard(props){
  console.log(props.icon)
  return(
    <article className="weather-card">
      <header className="weather-card__header">
        <h2 className="weather-card__title">
          Weather for {props.name}, {props.country}
        </h2>
      </header>
      <div className="weather-card__main">
        <span className={`sprite sprite-${props.icon}`}></span>
        <p>{props.description}</p>
      </div>
      <footer className="weather-card__footer">
        <input type="button" value="more"/>
        <input type="button" value="x"/>
      </footer>
    </article>
  )
}
