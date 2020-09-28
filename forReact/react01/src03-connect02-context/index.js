import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'

import { StoreContext } from './utils/context'

import App from './App'

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
)
