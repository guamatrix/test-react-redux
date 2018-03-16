
import { createStore, applyMiddleware, compose } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
// import rootReducer from './modules'
import rootReducer from './reducers'
// import initialState from './reducers/initialState'
import { loadState} from './localStorage'

export const history = createHistory()

const persisteData = loadState()
const enhancers = []
const middleware = [
  thunk,
  reduxImmutableStateInvariant(),
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  persisteData,
  composedEnhancers,
)

export default store
