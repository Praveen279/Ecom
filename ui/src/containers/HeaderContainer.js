/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import HeaderComponent from '../components/HeaderComponent'
/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';

class HeaderContainer extends Component {

  render() {
    return (
			<div>
				<HeaderComponent
          categories={this.props.data.home.categories}
          getProductsByCategory={this.props.getProductsByCategory}
          getProducts={this.props.getProducts}
          getProductsByName={this.props.getProductsByName}
        />
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

export default connect(mapStateToProps, mapDispachToProps)(HeaderContainer)
