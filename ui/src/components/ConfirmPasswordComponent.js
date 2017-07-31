



/*eslint-disable no-unused-vars */

import React, { Component } from 'preact-compat'
import { Link } from 'preact-router'

/*eslint-disable no-unused-vars */
import EmailInputComponent from './EmailInputComponent'
import PasswordInputComponent from './PasswordInputComponent'
import HeaderContainer from './../containers/HeaderContainer'

class ConfirmPasswordComponent extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <HeaderContainer login={this.props.login} />
        <div className="container">
          <h2>Confirm Your Password?</h2>
          <div className="paddingTop10 paddingBottom10">Enter your password</div>
          <div className="paddingTop10 paddingBottom10">
            <PasswordInputComponent placeholder="Old Password" />
          </div>
          <div className="paddingTop10 paddingBottom10">
            <PasswordInputComponent placeholder="New Password" />
          </div>
          <div className="paddingTop10 paddingBottom10">
            <PasswordInputComponent placeholder="Confirm Password" />
          </div>

          <div className="paddingTop10 paddingBottom10">
            <Link href='/forgotPassword' className="btn btn-primary pull-left">Back</Link>
            <Link href='/confirmPassword' className="btn btn-primary pull-right">Continue</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmPasswordComponent;