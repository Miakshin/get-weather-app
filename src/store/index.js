import { combineReducers } from 'redux'
import cities from './cities'
import weatherData from './weather-data'

export default combineReducers({
  cities,
  weatherData
})
