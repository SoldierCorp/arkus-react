// Core
import React from 'react'
import ReactDOM from 'react-dom'

// Routes
import Router from './router'

// Redux
import { Provider } from "react-redux"
import store from './store'

// Containers
import Home from './containers/Home'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
