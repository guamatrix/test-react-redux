import initialState from './initialState'
import * as Types from '../actions/ActionsTypes'

export const persons = (state = initialState.persons, action) => {
  switch (action.type) {
    case Types.SAVE_PERSON:
      return [...state, action.person]

    default:
      return state
  }
}

export const person = (state = initialState.person, action) => {
  switch (action.type) {
    case Types.SELECT_PERSON:
    case Types.SAVE_PERSON:
      return action.person

    default:
      return state
  }
}
