import React from 'react';

import "./Add-card.css";

export default function addCard(props){
  return(
    <div className="weather-card-create">
      <header className="weather-card-create__header">
        <h2 className="weather-card-create__header">Add new card</h2>
      </header>
      <div className="weather-card-create__main">
        <label>City:</label>
        <input type="text" id="city"/>
      </div>
      <footer className="weather-card-create__footer">
        <input  type="button" value="add" onClick={props.addCity}/>
      </footer>
    </div>
  )
}
