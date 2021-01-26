import { ContactListActionTypes, ContactStateType, GET_CONTACTS_SUCCESS  } from './types'

const initialState: ContactStateType = {
  loading: true,
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
    default:
      return state
  }
}