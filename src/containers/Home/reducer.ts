// src/store/system/reducers.ts
import { Reducer } from "redux";

import { HomeActionTypes, HomeState, UPDATE_HOME, REMOVE_HOME  } from './types'

const initialState: HomeState = {
  messages: []
}

export function homeReducer(
  state: HomeState = initialState,
  action: HomeActionTypes
): HomeState {

//export const homeReducer: Reducer<HomeState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOME: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}