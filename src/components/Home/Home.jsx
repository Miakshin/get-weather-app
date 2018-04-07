import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, deleteCity, addCity , refreshCity} from '../../actions/index'
import "./Home.css";

import Header from '../Header/Header';
import WeatherCard from './Weather-card/Weather-card';
import AddCard from './Add-card/Add-card';

 class Home extends Component{

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(getData(this.props.cityesStore));
  }

  onAddCity(){
    if(document.getElementById("city").value.length > 0){
      let city = document.getElementById("city").value.toLowerCase()
      city = city[0].toUpperCase() + city.slice(1);
      if(this.props.cityesStore.indexOf(city) === -1){
        this.props.dispatch(addCity(city));
        document.getElementById("city").value = ""
      }else{
        this.printErrorMasage("This city allready added")
      }
    }
  }

  onDeleteCity(city){
    this.props.dispatch(deleteCity(city))
  }

  onRefreshCity(city){
    this.props.dispatch(refreshCity(city))
  }

  printErrorMasage(err){

  if(!document.querySelector(".errorSpan")){

  let perent = document.querySelector(".weather");
  let list =  document.querySelector(".weather__list");
  let span = document.createElement("span");
  span.innerHTML = err;
  span.className = "errorSpan";
  perent.insertBefore(span, list.nextSibling);
  setTimeout(
    ()=>{perent.removeChild(document.getElementsByClassName("errorSpan")[0])},
     3000);
  }
}

   render(){
     let data
     if(this.props.weatherDataStore.data){
       data =this.props.weatherDataStore.data.map((data,i) => {
        return(
          <li key={i} className="weather__item">
           <WeatherCard
            weatherData = {data}
            deleteCity = {this.onDeleteCity.bind(this)}
            refreshCity={this.onRefreshCity.bind(this)}/>
         </li>
        )
      })
    }else data = <div> loading </div>

     return (
       <div>
        <Header />
        <main>
          <div className="weather">
            <ul className="weather__list">
              <li className="weather__item">
                <AddCard addCity={this.onAddCity.bind(this)} />
              </li>
              {data}
            </ul>
          </div>
        </main>
       </div>
      )
   }

}

export default connect(
  state => ({
    cityesStore: state.cities,
    weatherDataStore: state.weatherData
  })
)(Home);
