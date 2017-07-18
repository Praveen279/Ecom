/*eslint-disable no-unused-vars */
import React from 'react';
import { Router,Route,browserHistory} from 'preact-router';
import { Provider } from 'preact-redux'
/*eslint-enable no-unused-vars */
import { syncHistoryWithStore } from 'preact-router-redux'
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer'

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store)

let routes= (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={HomeContainer}/>
      <Route path='/products' component={ProductsContainer}/>
      </Router>
  </Provider>
)

export default routes
