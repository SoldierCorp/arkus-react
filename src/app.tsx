// Core
import React from 'react'
import ReactDOM from 'react-dom'

// Styles
import './assets/styles/app.scss'

// Routes
import Router from './router'

// Redux
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
