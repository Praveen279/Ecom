/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
/*eslint-disable no-unused-vars */
const RegExConstants = {
  TextRegex: '[!@#$%^&*()_+~`{}\"\:><|;\'?.,]',
  EmailRegex: '[abc]',
  PasswordRegex: '[abc]',
  NumberRegex: '/^\d+$/'
}

class Constants extends Component {
  constructor() {
    super()
    this.getConstants = this.getConstants.bind(this)
  }
}

Constants.RegExConstants = RegExConstants

export default Constants