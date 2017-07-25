/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import AdminProductsComponent from '../components/AdminProductsComponent'
import HeaderContainer from '../containers/HeaderContainer'
/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';

class AdminProductsContainer extends Component {

  render() {
    return (
			<div>
        <HeaderContainer />
				<AdminProductsComponent
          saveProduct={this.props.saveProduct}
          deleteProduct={this.props.deleteProduct}
          updateProduct={this.props.updateProduct}
          products={this.props.data.products}
          categories={this.props.data.categories}
        />
			</div>
		);
  }
}

function mapStateToProps(state) {
  return {
    data: state.home
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(AdminProductsContainer)
