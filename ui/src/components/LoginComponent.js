/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
/*eslint-disable no-unused-vars */
import { Link } from 'preact-router'
import InputComponent from './InputComponent'
import '../styles/categories.css'
import '../styles/login.css'

const emailRegEx = '[abc]'
const passwordRegEx = '[abc]'
class LoginComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this)
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this)
    this.login = this.login.bind(this)
  }

  onEmailChangeHandler(value) {
    this.setState({ email: value })
  }

  onPasswordChangeHandler(value) {
    this.setState({ password: value })
  }

  login() {
    this.props.login({userName: this.state.email, password: this.state.password})
  }

  render(){
    return(
      <div class='loginContainer'>
        <InputComponent
          placeholder='E-Mail Address'
          onChange={this.onEmailChangeHandler}
          type='email'
          regEx={emailRegEx}
          errorMessage='Invalid Email.'
        />
        <div class='pwdLoginInput'>
          <InputComponent
            placeholder='Password'
            onChange={this.onPasswordChangeHandler}
            type='password'
            regEx={passwordRegEx}
            errorMessage=''
          />
        </div>
        <div class='loginBtnWrapper'>
          <button type="submit" class="saveBtn loginBtn" onClick={this.login}>
            Login
          </button>
          <div>
            <Link href='/forgotPassword' class='forgotPwd'>Forgot password?</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginComponent
