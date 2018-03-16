import axios from 'axios'

const apiBase = 'https://restcountries.eu/rest/v2/all'

const getCountries = () => {
  return axios.get(apiBase)
}

export default getCountries
