import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { person, persons } from './personReducer'
import countries from './countriesReducer'

export default combineReducers({
  routing: routerReducer,
  person,
  persons,
  countries,
})
