import React from 'react';

import "./Add-card.css";

export default function addCard(props){
  return(
    <div className="weather-card-create">
      <header className="weather-card-create__header">
        <h2 className="weather-card-create__header">Add new card</h2>
      </header>
      <div className="weather-card-create__main">
        <label className="weather-card-create__label">Input your city:</label>
        <input type="text" id="city" className="weather-card-create__input"/>
      </div>
      <footer className="weather-card-create__footer">
        <input  type="button" value="Add" className="add-item-bitton" onClick={props.addCity}/>
      </footer>
    </div>
  )
}
