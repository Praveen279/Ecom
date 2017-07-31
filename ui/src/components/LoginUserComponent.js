/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
/*eslint-disable no-unused-vars */
import { Link } from 'preact-router'
import InputComponent from './InputComponent'
import HeaderContainer from './../containers/HeaderContainer'

const emailRegEx = '[abc]'
const passwordRegEx = '[abc]'
class LoginUserComponent extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <HeaderContainer login={this.props.login} />
        <div class="container">
          <h2>Returning Customer</h2>
          <h3>I am a returning customer</h3>
          <div>E-Mail Address</div>
          <InputComponent
            placeholder='E-Mail Address'
            onChange={() => {/* TODO on event object */}}
            type='email'
            regEx={emailRegEx}
            errorMessage=''
          />
          <div>Password</div>
          <InputComponent
              placeholder='Password'
              onChange={() => {/* TODO on event object */}}
              type='password'
              regEx={passwordRegEx}
              errorMessage=''
            />
          <Link href='/forgotPassword'>Forgotten Password</Link>
          <div>
            <input type="submit" class="btn btn-primary" value="Login" />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginUserComponent
