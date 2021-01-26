/* export const CONTACTLIST = {
  loading: () => 'LOADING_CONTACTS',
  get: () => 'GET_CONTACTS',
  onSuccess: () => 'GET_CONTACTS_SUCCESS',
  onError: () => 'GET_CONTACTS_FAIL'
}; */

export const LOADING_CONTACTS = 'LOADING_CONTACTS';
export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAIL = 'GET_CONTACTS_FAIL';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const ADD_CONTACT_FAIL = 'ADD_CONTACT_FAIL';


/* 
interface Contact {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
} */


/* export interface Contact {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
} */

export interface ContactStateType {
  loading: boolean,
  contacts: Contact[]
}

/* interface LoadingContactsAction {
  type: typeof LOADING_CONTACTS
  payload: Contact
} */

interface SuccessGetContactsAction {
  type: typeof GET_CONTACTS_SUCCESS
  payload: Contact[]
}

interface SuccessAddContactsAction {
  type: typeof ADD_CONTACT_SUCCESS
  payload: Contact[]
}

/* interface FailGetContactsAction {
  type: typeof GET_CONTACTS_FAIL
  payload: Contact
} */

export type ContactListActionTypes = SuccessGetContactsAction | SuccessAddContactsAction