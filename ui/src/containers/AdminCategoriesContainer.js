/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import AdminCategoriesComponent from '../components/AdminCategoriesComponent'
import HeaderContainer from '../containers/HeaderContainer'
/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';

class AdminCategoriesContainer extends Component {

  render() {
    return (
			<div>
        <HeaderContainer />
				<AdminCategoriesComponent
          saveCategory={this.props.saveCategory}
          deleteCategory={this.props.deleteCategory}
          updateCategory={this.props.updateCategory}
          categories={this.props.data.categories}
          getProducts={this.props.getProducts}
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

export default connect(mapStateToProps, mapDispachToProps)(AdminCategoriesContainer)
