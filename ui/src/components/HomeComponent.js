/*eslint-disable no-unused-vars */
import React from 'preact-compat'
import HeaderContainer from '../containers/HeaderContainer'
import ProductListComponent from './ProductListComponent'
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';
/*eslint-enable no-unused-vars */
import '../styles/home.css'

const HomeComponent = (props) => ( //eslint-disable-line no-unused-vars
	<div>
		<HeaderContainer />
		<ProductListComponent products={props.products} />
	</div>
)

export default HomeComponent
