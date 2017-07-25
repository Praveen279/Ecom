/*eslint-disable no-unused-vars */
import React from 'preact-compat'
import { Link } from 'preact-router'
/*eslint-enable no-unused-vars */
import '../styles/header.css'

const HeaderComponent = (props) => ( //eslint-disable-line no-unused-vars
	<div class='root'>
		<div class='userSection'>
			<div>Register</div>
			<div>Login</div>
		</div>
		<div class='searchField'>
      <input type='text' placeholder='Search for Products...' class='searchInput' />
			<span class='searchIcon glyphicon glyphicon-search' />
		</div>
		<div class='sellerSection'>
			<Link href='/categories'>Categories</Link>
			<Link href='/products'>Products</Link>
		</div>
	</div>
)

export default HeaderComponent;
