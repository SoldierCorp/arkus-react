import {
  ContactListActionTypes,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  CONTACT_TO_EDIT,
  UPDATE_CONTACT_DATA,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_SUCCESS,
  PROCESSING,
  CLEAR_FORM_MESSAGE
} from './types'
import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../../store'
import axios from 'axios'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

/*
  Action creators
*/
export const processingAction = (type: boolean): ContactListActionTypes => {
  return {
    type: PROCESSING,
    payload: type
  }
}

export const clearFormMessageAction = (type: boolean): ContactListActionTypes => {
  return {
    type: CLEAR_FORM_MESSAGE,
    payload: type
  }
}

export const getContactsAction = (contacts: Contact[]): ContactListActionTypes => {
  return {
    type: GET_CONTACTS_SUCCESS,
    payload: contacts
  }
}

export const addContactAction = (contact: Contact[]): ContactListActionTypes => {
  return {
    type: ADD_CONTACT_SUCCESS,
    payload: contact
  }
}

export const addContactFailAction = (contact: Contact[]): ContactListActionTypes => {
  return {
    type: ADD_CONTACT_FAIL,
    payload: contact
  }
}

export const updateContactAction = (contact: Contact[]): ContactListActionTypes => {
  return {
    type: UPDATE_CONTACT_SUCCESS,
    payload: contact
  }
}

export const updateContactFailAction = (contact: Contact[]): ContactListActionTypes => {
  return {
    type: UPDATE_CONTACT_FAIL,
    payload: contact
  }
}

export const contactToEditAction = (contact: Contact[]): ContactListActionTypes => {
  return {
    type: CONTACT_TO_EDIT,
    payload: contact
  }
}

export const updateContactDataAction = (fieldName: string, contact: Contact[]): ContactListActionTypes => {
  return {
    type: UPDATE_CONTACT_DATA,
    field: fieldName,
    payload: contact
  }
}

/*
 Actions
*/

// Processing
export const processing = (data: boolean) => {
  return (dispatch: Dispatch<ContactListActionTypes>) => {
    dispatch(processingAction(data))
  }
}

// Get all contacts
export const getContacts = () => {
  return (dispatch: Dispatch<ContactListActionTypes>) => {
    const GET_CONTACTS_URL = 'https://reqres.in/api/users';

    axios({
      method: 'GET',
      url: GET_CONTACTS_URL
    })
      .then(response => {
        dispatch(getContactsAction(response.data.data))
      })
      .catch(e => {
        return {
          type: GET_CONTACTS_FAIL,
          payload: e
        }
      })
  }
}

// Add contact to API
export const addContact = (data: any, avatar: any) => {
  return (dispatch: Dispatch<ContactListActionTypes>) => {

    const POST_CONTACTS_URL = 'https://reqres.in/api/users'

    const formData = new FormData();
    formData.append('first_name', data.first_name)
    formData.append('last_name', data.last_name)
    formData.append('email', data.email)
    formData.append('avatar', avatar)

    axios({
      method: 'POST',
      url: POST_CONTACTS_URL,
      data: formData,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        dispatch(addContactAction(response.data.data))
        setTimeout(() => {
          dispatch(clearFormMessageAction(true))
        }, 2500);
        return response.data.data;
      })
      .catch(e => {
        dispatch(addContactFailAction(e))
        return e
      })
  }
}

// Update contact to API
export const updateContact = (data: any, avatar: any) => {
  return (dispatch: Dispatch<ContactListActionTypes>) => {

    const PUT_CONTACTS_URL = 'https://reqres.in/api/users/' + data.id

    const formData = new FormData()
    formData.append('first_name', data.first_name)
    formData.append('last_name', data.last_name)
    formData.append('email', data.email)
    formData.append('avatar', avatar)

    axios({
      method: 'PUT',
      url: PUT_CONTACTS_URL,
      data: formData,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        dispatch(updateContactAction(response.data.data))
        setTimeout(() => {
          dispatch(clearFormMessageAction(true))
        }, 2500);
        return response.data.data;
      })
      .catch(e => {
        dispatch(updateContactFailAction(e))
        return e
      })
  }
}

// Save contact data to edit
export const contactToEdit = (data: any) => {
  return (dispatch: Dispatch<ContactListActionTypes>) => {
    dispatch(contactToEditAction(data))
  }
}

// Update contact data
export const updateContactData = (field: string, data: any) => {
  return (dispatch: Dispatch<ContactListActionTypes>) => {
    dispatch(updateContactDataAction(field, data))
  }
}