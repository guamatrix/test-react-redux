import React from 'react';
import { render } from 'react-dom';
import App from './containers/app/App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import throttle from 'lodash/throttle'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker';
import { saveState } from './localStorage'

import '../node_modules/bulma/css/bulma.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';

store.subscribe(throttle(() => {
  saveState({
    persons: store.getState().persons
  })
}, 1000))

const target = document.getElementById('root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
)
registerServiceWorker()
