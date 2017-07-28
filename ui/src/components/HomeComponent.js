/*eslint-disable no-unused-vars */
import React from 'preact-compat'
import HeaderContainer from '../containers/HeaderContainer'
import ProductListComponent from './ProductListComponent'
/*eslint-enable no-unused-vars */
import '../styles/home.css'

const HomeComponent = (props) => ( //eslint-disable-line no-unused-vars
	<div>
		<HeaderContainer />
		<ProductListComponent products={props.products} />
	</div>
)

export default HomeComponent
