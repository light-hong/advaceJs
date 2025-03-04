import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'

import AppHeader from '_c/app-header'
import AppFooter from '_c/app-footer'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader/>
        {renderRoutes(routes)}
        <AppFooter/>
      </HashRouter>
    </Provider>
  )
})

