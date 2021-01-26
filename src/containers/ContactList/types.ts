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
export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
export const UPDATE_CONTACT_FAIL = 'UPDATE_CONTACT_FAIL';
export const CONTACT_TO_EDIT = 'CONTACT_TO_EDIT';
export const UPDATE_CONTACT_DATA = 'UPDATE_CONTACT_DATA';

export const CLEAR_FORM_MESSAGE = 'CLEAR_FORM_MESSAGE';
export const PROCESSING = 'PROCESSING';


export interface ContactStateType {
  loading: boolean,
  processing: boolean,
  addSuccess: boolean,
  updateSuccess: boolean,
  contactData: object,
  formMessage: string,
  contacts: Contact[]
}

interface ProcessingAction {
  type: typeof PROCESSING
  payload: boolean
}
interface ClearFormMessageAction {
  type: typeof CLEAR_FORM_MESSAGE
  payload: boolean
}
interface SuccessGetContactsAction {
  type: typeof GET_CONTACTS_SUCCESS
  payload: Contact[]
}
interface SuccessAddContactsAction {
  type: typeof ADD_CONTACT_SUCCESS
  payload: Contact[]
}
interface FailAddContactAction {
  type: typeof ADD_CONTACT_FAIL
  payload: Contact[]
}

interface SuccessUpdateContactAction {
  type: typeof UPDATE_CONTACT_SUCCESS
  payload: Contact[]
}

interface UpdateContactFailAction {
  type: typeof UPDATE_CONTACT_FAIL
  payload: Contact[]
}

interface ContactToEditAction {
  type: typeof CONTACT_TO_EDIT
  payload: Contact[]
}

interface UpdateContactDataAction {
  type: typeof UPDATE_CONTACT_DATA
  field: string,
  payload: Contact[]
}

export type ContactListActionTypes =
  ProcessingAction |
  ClearFormMessageAction |
  SuccessGetContactsAction |
  SuccessAddContactsAction |
  FailAddContactAction |
  SuccessUpdateContactAction |
  UpdateContactFailAction |
  ContactToEditAction |
  UpdateContactDataAction