import React, { Component } from 'react';

import "./Home.css";

import WeatherCard from './Weather-card/Weather-card';
import { mockData } from '../../store/mock-data.js'

 class Home extends Component{

   render(){
     let data = mockData.map((data,i) => {
       return(
         <li key={i} className="weather__item">
          <WeatherCard
            name = {data.name}
            country = {data.sys.country}
            icon = {data.weather[0].icon}
            description = {data.weather[0].description}
            />
        </li>
       )
     })
     return (
         <main>
           <div className="weather">
             <ul className="weather__list">
               <li className="weather__item">
                 <a className="weather__add-new">
                  Add new weather
                 </a>
               </li>
               {data}
             </ul>
           </div>
         </main>)
   }

}

export default Home
