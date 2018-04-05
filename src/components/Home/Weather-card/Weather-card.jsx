import React from 'react';

import "./Weather-card.css";

export default function WeatherCard(props){
  if(props){
    return(
      <article className="weather-card">
        <header className="weather-card__header">
          <h2 className="weather-card__title">
            Weather for {props.weatherData.name}, {props.weatherData.sys.country}
          </h2>
        </header>
        <div className="weather-card__main">
          <span className={`sprite sprite-${props.weatherData.weather[0].icon}`}></span>
          <p>{props.weatherData.weather[0].description}</p>
        </div>
        <footer className="weather-card__footer">
          <input type="button" value="more"/>
          <input type="button" value="x"/>
        </footer>
      </article>
    )
  }else{
    return <div>liading</div>
  }
}
