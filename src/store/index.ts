
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"

const store = createStore(reducers, applyMiddleware(thunk))

export type AppState = ReturnType<typeof reducers>
export default store