/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import { Link } from 'preact-router'
/*eslint-disable no-unused-vars */
import InputComponent from './InputComponent'

const regEx = '[abc]'
class ForgotPasswordComponent extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <div class="loginContainer">
          <h3>Forgot Your Password?</h3>
          <InputComponent
            placeholder='E-Mail Address'
            onChange={() => {/* TODO on event object */}}
            type='email'
            regEx={regEx}
            errorMessage=''
          />
          <div class="paddingTop10 paddingBottom10 marginTop20 marginBottom20">
            <Link href='/login' class="btn btn-primary pull-left">Back</Link>
            <Link href='/confirmPassword' class="btn btn-primary pull-right">Continue</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotPasswordComponent
