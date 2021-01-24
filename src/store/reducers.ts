// Core packages
import { combineReducers } from 'redux'

// Reducers
import { homeReducer } from '../containers/Home/reducer'


const store = combineReducers({
  home: homeReducer,
})

export default store