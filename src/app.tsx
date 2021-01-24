// Core
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from "react-redux"
import store from './store'

// Containers
import Home from './containers/Home'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
