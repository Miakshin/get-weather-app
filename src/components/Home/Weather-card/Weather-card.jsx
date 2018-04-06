import React from 'react';
import { Link } from 'react-router-dom';

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
          <div className="weather-card__ico">
            <span className={`sprite sprite-${props.weatherData.weather[0].icon}`}></span>
          </div>
          <p className="weather-card__temp">{(+props.weatherData.main.temp - 273).toFixed(2)} &#176;C</p>
          <p className="weather-card__description">{props.weatherData.weather[0].description}</p>
        </div>
        <footer className="weather-card__footer">
          <Link to={`/details/${props.weatherData.name}`}>More info</Link>
          <input type="button" value="x" onClick={()=>props.deleteCity(props.weatherData.name)}/>
        </footer>
      </article>
    )
  }else{
    return <div>liading</div>
  }
}
