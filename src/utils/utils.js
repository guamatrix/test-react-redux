import moment from 'moment'

moment.locale('en')
const FORMAT = 'MM/DD/YYYY'

export const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min) + min))

export const getRandomDate = () => {
  const today = moment(new Date(), FORMAT)
  const day = getRandomInt(1,31)
  const month = getRandomInt(1,12)
  const year = today.get('year')
  return moment(`${month}/${day}/${year}`, FORMAT)
}

export const getYearOlds = (birthday, randomDate) => {
  const date = moment(birthday, FORMAT)
  const year = randomDate.diff(date, 'years')
  return year < 0 ? year * -1 : year
}

export const onlyNumber = (value) => {
  if (value) {
    const validator = /^\d*$/
    return validator.test(value)
  }
  return false
}

