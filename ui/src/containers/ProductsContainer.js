/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import ProductListComponent from '../components/ProductListComponent'

/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';



class ProductsContainer extends Component {
  
  componentWillMount() {
    this.props.getProducts();
  }

  
  render() {
    
    return (
			<div>
        <ProductListComponent products={this.props.data.products.products} />
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

export default connect(mapStateToProps, mapDispachToProps)(ProductsContainer)
