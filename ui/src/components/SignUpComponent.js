/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import { Link } from 'preact-router'
/*eslint-disable no-unused-vars */
import InputComponent from './InputComponent'
import Constants from '../constants/Constants'

const constants = Constants.RegExConstants
class SignUpComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName : '',
      lastName : '',
      email : '',
      telephone : '',
      fax : '',
      businessLicenceNumber : '',
      company : '',
      addressOne : '',
      addressTwo : '',
      city : '',
      postcode : '',
      password : '',
      confirmPassword : ''
    }
    this.createUser = this.createUser.bind(this)
  }

  createUser() {
    this.props.createUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      telephone: this.state.telephone,
      fax: this.state.fax,
      businessLicenceNumber: this.state.businessLicenceNumber,
      company: this.state.company,
      addressOne: this.state.addressOne,
      addressTwo: this.state.addressTwo,
      city: this.state.city,
      postcode: this.state.postcode,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      name: this.state.email
    })
  }

  render(){
    return(
      <div>
        <div class="loginContainer">
          <h2>Register Account</h2>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='First Name'
              onChange={(value) => {this.setState({firstName : value})}}
              type='text'
              regEx={constants.TextRegex}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Last Name'
              onChange={(value) => {this.setState({lastName : value})}}
              type='text'
              regEx={constants.TextRegex}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='E-Mail'
              onChange={(value) => {this.setState({email : value})}}
              type='email'
              regEx={constants.EmailRegex}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Telephone'
              onChange={(value) => {this.setState({telephone : value})}}
              type='tel'
              regEx={constants.NumberRegex}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Fax'
              onChange={(value) => {this.setState({fax : value})}}
              type='text'
              regEx={constants.NumberRegex}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Business License No'
              onChange={(value) => {this.setState({businessLicenceNumber : value})}}
              type='text'
              regEx={constants.TextRegex}
              errorMessage=''
            />
          </div>

          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Company'
              onChange={(value) => {this.setState({company : value})}}
              type='text'
              regEx={constants.TextRegex}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Address 1'
              onChange={(value) => {this.setState({addressOne : value})}}
              type='text'
              errorMessage='Address is Required.'
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Address 2(Optional)'
              onChange={(value) => {this.setState({addressTwo : value})}}
              type='text'
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='City'
              onChange={(value) => {this.setState({city : value})}}
              type='text'
              regEx={constants.TextRegex}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Post Code'
              onChange={(value) => {this.setState({postcode : value})}}
              type='tel'
              regEx={constants.NumberRegex}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Password'
              onChange={(value) => {this.setState({password : value})}}
              type='password'
              regEx={constants.PasswordRegex}
              errorMessage=''
            />
          </div>
          <div class="paddingTop10 paddingBottom10">
            <InputComponent
              placeholder='Password Confirm'
              onChange={(value) => {this.setState({confirmPassword : value})}}
              type='password'
              regEx={constants.PasswordRegex}
              errorMessage='Boths passwords must match'
            />
          </div>

          <div class="paddingTop10 paddingBottom10 marginBottom20">
            <Link href='/forgotPassword' class="btn btn-primary pull-left">Back</Link>
            <Link href='/confirmPassword' class="btn btn-primary pull-right">Continue</Link>
            <button onClick={this.createUser}>submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpComponent
