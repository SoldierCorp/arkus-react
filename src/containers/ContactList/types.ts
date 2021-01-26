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

export interface ContactStateType {
  loading: boolean,
  addSuccess: boolean,
  contacts: Contact[]
}
interface SuccessGetContactsAction {
  type: typeof GET_CONTACTS_SUCCESS
  payload: Contact[]
}
interface SuccessAddContactsAction {
  type: typeof ADD_CONTACT_SUCCESS
  payload: Contact[]
}

export type ContactListActionTypes = SuccessGetContactsAction | SuccessAddContactsAction