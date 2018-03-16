import React from 'react'
import PropTypes from 'prop-types'
import { getRandomDate, getYearOlds } from '../../utils/utils'

const propTypes = {
  person: PropTypes.object.isRequired,
}

const PersonInfo = ({ person }) => {
  const randomDate = getRandomDate()
  const month = randomDate.format('MMMM')
  const day = randomDate.format('DD')
  const years = getYearOlds(person.birthday, randomDate)
  // const validYear = isNaN(years) ? 'Invalid birthday' : years
  return (
    <div className="notification is-info">
      <p>{`Hello ${person.name} ${person.surname} on ${day} of ${month} you will have ${years} years`}</p>
    </div>
  )
}

PersonInfo.propTypes = propTypes

export default PersonInfo
