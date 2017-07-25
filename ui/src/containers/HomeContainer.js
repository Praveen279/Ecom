/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import HomeComponent from '../components/HomeComponent'
/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';

class HomeContainer extends Component {

  componentWillMount() {
    this.props.getCategories()
    this.props.getProducts()
  }

  render() {
    return (
			<div>
				<HomeComponent />
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

export default connect(mapStateToProps, mapDispachToProps)(HomeContainer)
