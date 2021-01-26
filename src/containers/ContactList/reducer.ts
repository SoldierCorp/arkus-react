import {
  ContactListActionTypes,
  ContactStateType,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  CONTACT_TO_EDIT,
  UPDATE_CONTACT_DATA,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAIL,
  PROCESSING,
  CLEAR_FORM_MESSAGE,
  GET_SINGLE_CONTACT_SUCCESS,
  GET_SINGLE_CONTACT_FAIL
} from './types'

const initialState: ContactStateType = {
  loading: true,
  processing: false,
  addSuccess: false,
  updateSuccess: false,
  formMessage: '',
  contacts: [],
  contactData: {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  }
}

export const contactListReducer = (
  state = initialState,
  action: ContactListActionTypes
): ContactStateType => {
  switch (action.type) {
    case PROCESSING: {
      return {
        ...state,
        processing: action.payload,
      }
    }
    case CLEAR_FORM_MESSAGE: {
      return {
        ...state,
        formMessage: '',
      }
    }
    case GET_SINGLE_CONTACT_SUCCESS: {
      return {
        ...state,
        loading: false,
        contactData: action.payload
      }
    }
    case GET_SINGLE_CONTACT_FAIL: {
      return {
        ...state,
        loading: false,
        contactData: action.payload
      }
    }
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
        processing: false,
        addSuccess: true,
        formMessage: 'Contact created!',
        contactData: initialState.contactData
      }
    }
    case ADD_CONTACT_FAIL: {
      return {
        ...state,
        loading: false,
        processing: false,
        addSuccess: false,
        formMessage: 'Error on post'
      }
    }
    case UPDATE_CONTACT_SUCCESS: {
      return {
        ...state,
        loading: false,
        processing: false,
        updateSuccess: true,
        formMessage: 'Updated!'
      }
    }
    case UPDATE_CONTACT_FAIL: {
      return {
        ...state,
        loading: false,
        processing: false,
        updateSuccess: false,
        formMessage: 'Error on update'
      }
    }
    case CONTACT_TO_EDIT: {
      return {
        ...state,
        contactData: action.payload
      }
    }
    case UPDATE_CONTACT_DATA: {
      return {
        ...state,
        contactData: {...state.contactData, [action.field]: action.payload}
      }
    }
    default:
      return state
  }
}