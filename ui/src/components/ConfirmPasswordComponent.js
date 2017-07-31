/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import { Link } from 'preact-router'
/*eslint-disable no-unused-vars */
import InputComponent from './InputComponent'
import HeaderContainer from './../containers/HeaderContainer'

const regEx = '[abc]'
class ConfirmPasswordComponent extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <HeaderContainer login={this.props.login} />
        <div class="container">
          <h2>Confirm Your Password?</h2>
          <div class="paddingTop10 paddingBottom10">Enter your password</div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Old password'
              onChange={() => {/* TODO on event object */}}
              type='password'
              regEx={regEx}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='New password'
              onChange={() => {/* TODO on event object */}}
              type='password'
              regEx={regEx}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Confirm password'
              onChange={() => {/* TODO on event object */}}
              type='password'
              regEx={regEx}
              errorMessage=''
            />
          </div>

          <div class="paddingTop10 paddingBottom10">
            <Link href='/forgotPassword' class="btn btn-primary pull-left">Back</Link>
            <Link href='/confirmPassword' class="btn btn-primary pull-right">Continue</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmPasswordComponent
