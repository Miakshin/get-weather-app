import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'

import { getDetailData } from '../../actions/index'
import "./Details.css";

class Details extends React.Component{

  componentDidMount() {
    this.props.dispatch(getDetailData(this.props.match.params.city))
  }

  getTime(time){
    let date = new Date(time)
    let hours = date.getHours();
    let minets = date.getMinutes();
    return (`${hours}:${minets}`)
  }

  render(){
    const data = this.props.details.data
    if(data.main){
      return (
        <div>
        <Header />
          <article className="details">
            <h2 className="details__title">Current weather in {data.name}, {data.sys.country}</h2>
            <div className="detail__item_main">
              <div className="item-main">
                <span className={`sprite sprite-${data.weather[0].icon}`}></span>
                <p className="item-main__temp">{(data.main.temp - 273).toFixed(2)} &#176;C</p>
                <p className="item-main__description">{data.weather[0].description}</p>
                <p className="item-main__pressure">pressure: {(data.main.pressure - 270)}</p>
                <p className="item-main__humidity">humidity: {data.main.humidity}%</p>
                <p className="item-main__wind">wind: {data.wind.speed} m/s
                  <span className="arrow" style={{transform: `rotate(${data.wind.deg}deg)`}}>&uArr;</span>
                  </p>
              </div>
            </div>
            <div className="detail__item">
              <h3 className="detail__item-title">Temperature</h3>
              <ul className="detail__item-list">
                <li>current: {(+data.main.temp - 273).toFixed(2)}&#176;C</li>
                <li>min: {(+data.main.temp_min - 273).toFixed(2)}&#176;C</li>
                <li>max: {(+data.main.temp_max - 273).toFixed(2)}&#176;C</li>
              </ul>
            </div>
            <div className="detail__item">
              <h3 className="detail__item-title">Another</h3>
              <ul className="detail__item-list">
                <li>sunrise at {this.getTime(data.sys.sunrise)}</li>
                <li>sunset at {this.getTime(data.sys.sunrise)}</li>
                <li>max: {(+data.main.temp_max - 273).toFixed(2)}&#176;C</li>
              </ul>
            </div>
            <footer className="details__footer">
              <Link to='/'>Back</Link>
            </footer>
          </article>
        </div>
      )
    }else{
      return (
        <div>
          <Header />
          <article className="details">
            <div className="loading"> Loading..</div>
          </article>
        </div>
        )
    }
  }
}

export default connect(
  state => ({
    weatherDataStore: state.weatherData,
    details: state.details
  })
)(Details);
