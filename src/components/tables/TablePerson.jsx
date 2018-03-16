import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPerson } from '../../actions/Actions'

const propTypes = {
  persons: PropTypes.array.isRequired,
  selectPerson: PropTypes.func.isRequired,
  personSelected: PropTypes.object.isRequired,
}

const TablePerson = ({ persons, selectPerson, personSelected }) => {
  const rows = persons.map((person, index) => {
    const selected = persons.length > 1 &&  personSelected.id === person.id ? 'is-selected' : ''
    const select = () => (selectPerson(person))
    return (
      <tr key={index} onClick={select} className={`${selected}`}>
        <td>{`${person.name} ${person.surname}`}</td>
        <td>{person.countries}</td>
        <td>{person.birthday}</td>
      </tr>
    )
  })

  return (
    <table className="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

TablePerson.propTypes = propTypes

const mapStateToProps = (state) => (
  {
    personSelected: state.person
  }
)

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    selectPerson: bindActionCreators(getPerson, dispatch)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(TablePerson)
