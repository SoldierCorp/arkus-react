// src/store/chat/actions.ts

import { Home, HomeActionTypes, UPDATE_HOME, REMOVE_HOME  } from './types'
import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../store'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export function updateHome(newMessage: Home): HomeActionTypes {
  return {
    type: UPDATE_HOME,
    payload: newMessage
  }
}

/* export const getHome: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    return {
      type: UPDATE_HOME
    }
  }
}
 */

export function removeHome(newMessage: Home): HomeActionTypes {
  return {
    type: UPDATE_HOME,
    payload: newMessage
  }
}

export function demoHome(newMessage: Home): HomeActionTypes {
  return {
    type: UPDATE_HOME,
    payload: newMessage
  }
}