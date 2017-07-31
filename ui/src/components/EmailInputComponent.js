/*eslint-disable no-unused-vars */

import React, { Component } from 'preact-compat'
/*eslint-disable no-unused-vars */

class EmailInputComponent extends Component {

  constructor(){
    super();
    this.state = {
      email:''
    }
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onChangeEmail(value) {
    this.setState({
      email: value
    })
  }
  render() {
    return(
      <div>
        <input type="email" className="form-control" placeholder={this.props.placeholder} onChange={this.onChangeEmail} />
      </div>
    )
  }
}

export default EmailInputComponent;