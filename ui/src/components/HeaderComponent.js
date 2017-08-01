/*eslint-disable no-unused-vars */
import React from 'preact-compat'
import { Link } from 'preact-router'
import CategoriesComponent from './CategoriesComponent'
/*eslint-enable no-unused-vars */
import '../styles/header.css'

let searchString
const HeaderComponent = (props) => ( //eslint-disable-line no-unused-vars
	<div class='root'>
		<div class='commonSection'>
			<Link href='/signup'>Register</Link>
			{props.user.id === '' ? <Link href='/login'>Login</Link> : <div onClick={props.logout}>Logout</div>}
		</div>
		<div class='searchField'>
      <input
        type='text'
        placeholder='Search for Products...'
        class='searchInput'
        ref={(input) => { searchString = input }}
      />
			<span
        class='searchIcon glyphicon glyphicon-search'
				onClick={() => props.getProductsByName(searchString.value)}
      />
		</div>
		{props.user.role === 'USER' && <div>
			<CategoriesComponent
        categories={props.categories}
				getProductsByCategory={props.getProductsByCategory}
				getProducts={props.getProducts}
      />
		</div>}
		{props.user.role === 'ADMIN' && <div class='sellerSection'>
			<Link href='/categories'>Categories</Link>
			<Link href='/products'>Products</Link>
		</div>}
	</div>
)

export default HeaderComponent;
