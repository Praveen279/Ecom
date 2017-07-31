/*eslint-disable no-unused-vars */

import React, { Component } from 'preact-compat'
/*eslint-disable no-unused-vars */

class PasswordInputComponent extends Component {

  constructor(){
    super();
    this.state = {
      password:''
    };
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangePassword(value) {
    this.setState({
      password: value
    })
  }
  render() {
    return(
      <div>
        <input type="password" className="form-control" placeholder={this.props.placeholder} onChange={this.onChangePassword} />
      </div>
    )
  }
}

export default PasswordInputComponent;