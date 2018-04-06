import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cities from './cities'
import weatherData from './weather-data'
import details from './details'

export default combineReducers({
  router: routerReducer,
  cities,
  weatherData,
  details
});
