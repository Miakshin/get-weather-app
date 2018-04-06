import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cities from './cities'
import weatherData from './weather-data'

export default combineReducers({
  router: routerReducer,
  cities,
  weatherData
});
