import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FormPerson from '../../components/forms/FormPerson'
import TablePerson from '../../components/tables/TablePerson'
import PersonInfo from '../../components/person/PersonInfo'
import * as Actions from '../../actions/Actions'
import './Home.css'

const propTypes = {
  actions: PropTypes.object.isRequired,
  persons: PropTypes.array.isRequired,
}

class Home extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillMount() {
    this.props.actions.getCountries()
  }

  onSubmit(values) {
    const { persons } = this.props
    const sizePersons = this.props.persons.length
    const id = sizePersons === 0 ? 1 : persons[sizePersons - 1].id + 1
    this.props.actions.savePerson({...values, id})
  }

  render() {

    const { persons, person, countries } = this.props
    return (

      <main className="home-app box">
        <div className="columns">
          <div className="column">
            <FormPerson
              onSubmit={this.onSubmit}
              countries={countries}
            />
            {person.id &&
              <PersonInfo person={person} />
            }
          </div>
          <div className="column">
            <div className="list-person">
              <div className="box-body">
                <TablePerson persons={persons}/>
              </div>
            </div>
            <div className="author has-text-right">
              <span>Juan Marval</span>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

Home.propTypes = propTypes

function mapStateToProps(state) {
  return {
    persons: state.persons,
    person: state.person,
    countries: state.countries,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

