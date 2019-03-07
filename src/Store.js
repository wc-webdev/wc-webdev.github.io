import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

function Store(config) {
  const {
    reducers,
    state,
    composer,
    middleware = [],
  } = config
  const rootReducer = combineReducers(reducers)

  return createStore(
    rootReducer,
    state,
    composer(applyMiddleware(...middleware)),
  )
}

export default Store
