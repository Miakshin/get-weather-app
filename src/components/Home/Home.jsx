import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, deleteCity, addCity } from '../../actions/index'
import "./Home.css";

import WeatherCard from './Weather-card/Weather-card';
import AddCard from './Add-card/Add-card';

 class Home extends Component{

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(getData(this.props.cityesStore));
  }

  onAddCity(){
    let city = document.getElementById("city").value
    console.log(city)
    const { dispatch } = this.props;
    dispatch(addCity(city))
  }

  onDeleteCity(city){
    const { dispatch } = this.props;
    dispatch(deleteCity(city))
    console.log(this.props.cityesStore)
  }

   render(){
     let data
     if(this.props.weatherDataStore.data){
       data =this.props.weatherDataStore.data.map((data,i) => {
        return(
          <li key={i} className="weather__item">
           <WeatherCard
            weatherData = {data}
            deleteCity = {this.onDeleteCity.bind(this)}/>
         </li>
        )
      })
    }else data = <div> loading </div>

     return (
         <main>
           <div className="weather">
             <ul className="weather__list">
               <li className="weather__item">
                 <AddCard addCity={this.onAddCity.bind(this)} />
               </li>
               {data}
             </ul>
           </div>
         </main>)
   }

}

export default connect(
  state => ({
    cityesStore: state.cities,
    weatherDataStore: state.weatherData
  })
)(Home);
