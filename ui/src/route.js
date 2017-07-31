/*eslint-disable no-unused-vars */
import React from 'react';
import { Router,Route,browserHistory} from 'preact-router';
import { Provider } from 'preact-redux'
/*eslint-enable no-unused-vars */
import { syncHistoryWithStore } from 'preact-router-redux'
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import AdminCategoriesContainer from './containers/AdminCategoriesContainer';
import AdminproductsContainer from './containers/AdminProductsContainer';
import LoginUserComponent from './components/LoginUserComponent'
import ForgotPasswordComponent from './components/ForgotPasswordComponent'
import ConfirmPasswordComponent from './components/ConfirmPasswordComponent'



const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store)

let routes= (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={HomeContainer}/>
      <Route path='/login' component={LoginContainer}/>
      <Route path='/categories' component={AdminCategoriesContainer}/>
      <Route path='/products' component={AdminproductsContainer}/>
      <Route path='/viswa' component={LoginUserComponent}/>
      <Route path='/forgotPassword' component={ForgotPasswordComponent}/>
      <Route path='/confirmPassword' component={ConfirmPasswordComponent}/>


    </Router>
  </Provider>
)

export default routes
