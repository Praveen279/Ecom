/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import LoginComponent from '../components/LoginComponent'
import { Router } from 'preact-router';
/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';


class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login(user) {
    this.props.login(user)
    Router.route('/')
  }

  render() {
    return (
			<div>
				<LoginComponent login={this.login} />
			</div>
		);
  }
}

function mapStateToProps(state) {
  return {
    data: state
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(LoginContainer)
