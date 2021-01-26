// src/store/chat/actions.ts

import {
  ContactListActionTypes,
  ContactStateType,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL
} from './types'
import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../store'
import axios from 'axios'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export const getContactsAction = (contacts: Contact[]): ContactListActionTypes => {
  return {
    type: GET_CONTACTS_SUCCESS,
    payload: contacts
  };
};

export const addContactAction = (contact: Contact[]): ContactListActionTypes => {
  return {
    type: ADD_CONTACT_SUCCESS,
    payload: contact
  };
};


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

export const addContact = (data: any, avatar: any) => {
  return (dispatch: Dispatch<ContactListActionTypes>) => {

    const POST_CONTACTS_URL = 'https://reqres.in/api/users';

    const formData = new FormData();
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('email', data.email);
    formData.append('avatar', avatar);

    console.log(formData)
    console.log(data)

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
        console.log(response.data)
        dispatch(addContactAction(response.data.data))
        return response.data.data;
      })
      .catch(e => {
        console.log(e.response)
        return {
          type: ADD_CONTACT_FAIL,
          payload: e
        }
      })
  }
}