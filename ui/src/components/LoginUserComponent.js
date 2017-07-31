/*eslint-disable no-unused-vars */

import React, { Component } from 'preact-compat'
import { Link } from 'preact-router'

/*eslint-disable no-unused-vars */
import EmailInputComponent from './EmailInputComponent'
import PasswordInputComponent from './PasswordInputComponent'
import HeaderContainer from './../containers/HeaderContainer'

class LoginUserComponent extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <HeaderContainer login={this.props.login} />
        <div className="container">
          <h2>Returning Customer</h2>
          <h3>I am a returning customer</h3>
          <div>E-Mail Address</div>
          <EmailInputComponent placeholder="E-Mail Address" />
          <div>Password</div>
          <PasswordInputComponent placeholder="Password" />
          <Link href='/forgotPassword'>Forgotten Password</Link>
          <div>
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginUserComponent;