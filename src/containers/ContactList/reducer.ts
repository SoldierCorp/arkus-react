import {
  ContactListActionTypes,
  ContactStateType,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL
} from './types'

const initialState: ContactStateType = {
  loading: true,
  addSuccess: false,
  contacts: []
}

export const contactListReducer = (
  state = initialState,
  action: ContactListActionTypes
): ContactStateType => {
  switch (action.type) {
    case GET_CONTACTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        contacts: action.payload
      }
    }
    case ADD_CONTACT_SUCCESS: {
      return {
        ...state,
        loading: false,
        addSuccess: true,
      }
    }
    default:
      return state
  }
}