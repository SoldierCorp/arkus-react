// Core packages
import { combineReducers } from 'redux'

// Reducers
import { contactListReducer } from '../containers/ContactList/reducer'

const store = combineReducers({
  contactList: contactListReducer
})

export default store