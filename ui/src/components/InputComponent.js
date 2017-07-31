/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import classnames from 'classnames'
/*eslint-enable no-unused-vars */
import '../styles/common.css'

class InputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const textRegEx = new RegExp(this.props.regEx)
    textRegEx.test(e.target.value) ? this.setState({ error: true }) : this.setState({ error: false })
    this.props.onChange(e.target.value)
  }

  render() {
    const props = this.props
    let inputClasses = classnames({
      'textInput': true,
      'textError': this.state.error
    })
    return (
      <div>
        <input
          placeholder={props.placeholder}
          type={props.type}
          onChange={this.onChange}
          class={inputClasses}
        />
        {this.state.error && <div class='errorDescription'>Special characters are not allowed.</div>}
      </div>
    )
  }
}

export default InputComponent
