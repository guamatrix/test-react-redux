import { GET_COUNTRIES } from '../actions/ActionsTypes'
import initialState from './initialState'

const countries = (state = initialState.countries, action) => {
  switch (action.type) {
    case GET_COUNTRIES:

      return action.countries

    default:
      return state
  }
}

export default countries
