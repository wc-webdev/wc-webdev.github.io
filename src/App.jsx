import * as React from 'react'
import { Provider, } from 'react-redux'
import { ConnectedRouter, } from 'connected-react-router'
import { Switch, Route, Redirect, } from 'react-router'

import Home from './views/home/components/MainView/MainView'
import About from './views/about/components/MainView/MainView'

function App(props) {
  const {
    store,
    history,
  } = props

  return (
    <Provider
      store={store}
    >
      <ConnectedRouter
        history={history}
      >
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Redirect
                to="/home"
              />
            )}
          />
          <Route
            path="/home"
            component={Home}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/membership"
          />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
