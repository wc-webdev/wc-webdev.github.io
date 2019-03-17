import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { connectRouter, routerMiddleware, } from 'connected-react-router'
import { compose, } from 'redux'

import 'normalize.css'

import './assets/css/fonts/DDCHardware.css'
import './assets/css/fonts/Raleway.css'
import './assets/css/theme.css'
import './assets/css/global.css'

import Store from './Store'
import History from './History'

function renderApp(config) {
  const { props, name, } = config

  // you must update index.html too if you want to use a custom root ID
  const rootElement = window.document.getElementById('root')

  if (!rootElement) {
    throw new Error('Root element not found.')
  }

  const appView = React.createElement(
    App,
    {
      ...props,
      name,
    }
  )
  ReactDOM.render(appView, rootElement)
}

const HISTORY = new History()
const STORE = new Store({
  reducers: {
    router: connectRouter(HISTORY),
  },
  composer: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose,
  middleware: [
    routerMiddleware(HISTORY)
  ],
})

renderApp(
  {
    name: 'Order of the White Lotus',
    props: {
      history: HISTORY,
      store: STORE,
    },
  },
)

