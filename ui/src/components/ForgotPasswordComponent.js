/*eslint-disable no-unused-vars */

import React, { Component } from 'preact-compat'
import { Link } from 'preact-router'

/*eslint-disable no-unused-vars */
import EmailInputComponent from './EmailInputComponent'
import PasswordInputComponent from './PasswordInputComponent'
import HeaderContainer from './../containers/HeaderContainer'

class ForgotPasswordComponent extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <HeaderContainer login={this.props.login} />
        <div className="container">
          <h2>Forgot Your Password?</h2>
          <h3>Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.</h3>
          <div className="paddingTop10 paddingBottom10">E-Mail Address</div>
          <EmailInputComponent placeholder="E-Mail Address"  />
          <div className="paddingTop10 paddingBottom10">
            <Link href='/login' className="btn btn-primary pull-left">Back</Link>
            <Link href='/confirmPassword' className="btn btn-primary pull-right">Continue</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotPasswordComponent;