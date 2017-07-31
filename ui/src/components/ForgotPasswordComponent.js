/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import { Link } from 'preact-router'
/*eslint-disable no-unused-vars */
import InputComponent from './InputComponent'
import HeaderContainer from './../containers/HeaderContainer'

const regEx = '[abc]'
class ForgotPasswordComponent extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <HeaderContainer login={this.props.login} />
        <div class="container">
          <h2>Forgot Your Password?</h2>
          <h3>Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.</h3>
          <div class="paddingTop10 paddingBottom10">E-Mail Address</div>
          <InputComponent
            placeholder='E-Mail Address'
            onChange={() => {/* TODO on event object */}}
            type='email'
            regEx={regEx}
            errorMessage=''
          />
          <div class="paddingTop10 paddingBottom10">
            <Link href='/login' class="btn btn-primary pull-left">Back</Link>
            <Link href='/confirmPassword' class="btn btn-primary pull-right">Continue</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotPasswordComponent
