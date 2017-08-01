/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import SignUpComponent from '../components/SignUpComponent'
import { Router } from 'preact-router';
/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';


class SignUpContainer extends Component {
  constructor(props) {
    super(props)
    this.createUser = this.createUser.bind(this)
  }

  createUser(user) {
    this.props.createUser(user)
    Router.route('/')
  }

  render() {
    return (
			<div>
				<SignUpComponent createUser={this.createUser} />
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

export default connect(mapStateToProps, mapDispachToProps)(SignUpContainer)
