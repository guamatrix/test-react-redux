import * as Types from './ActionsTypes'
import ResourceCountries from '../api/ApiCountries';

function successGetCountries(countries) {
  return {
    type: Types.GET_COUNTRIES,
    countries,
  }
}

export const savePerson = person => (

  {
    type: Types.SAVE_PERSON,
    person,
  }
)

export const getPerson = person => (
  {
    type: Types.SELECT_PERSON,
    person,
  }
)

export const getCountries = () => (
  async dispatch => {
    try {
      const countries = await ResourceCountries()
      dispatch(successGetCountries(countries.data))
    } catch (error) {
      dispatch(successGetCountries([{ numericCode: -1, name: 'Error request' }]))
    }
  }
)
