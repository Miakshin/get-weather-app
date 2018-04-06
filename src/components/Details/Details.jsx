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

  render(){
    const data = this.props.details.data
    console.log(data)
    if(data.main){
      return (
        <div>
        <Header />
          <article className="details">
            <h2 className="details__title">Current weather in {data.name}</h2>
            <div className="detail__item">
              <h3>Tempetcher</h3>
              <ul>
                <li>current: {(+data.main.temp - 273).toFixed(2)}&#176;C</li>
                <li>min: {(+data.main.temp_min - 273).toFixed(2)}&#176;C</li>
                <li>max: {(+data.main.temp_max - 273).toFixed(2)}&#176;C</li>
              </ul>
            </div>
            <div className="detail__item">
            </div>
            <Link to='/'>Back</Link>
          </article>
        </div>
      )
    }else{
      return (<div> Loading..</div>)
    }
  }
}

export default connect(
  state => ({
    weatherDataStore: state.weatherData,
    details: state.details
  })
)(Details);
