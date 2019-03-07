import * as React from 'react'
import { Provider, } from 'react-redux'
import { ConnectedRouter, } from 'connected-react-router'
import { Switch, Route, Redirect, } from 'react-router'

import MainView from './views/home/components/MainView/MainView'

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
            component={MainView}
          />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
