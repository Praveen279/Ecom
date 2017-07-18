/*eslint-disable no-unused-vars*/
import React from 'react'
import CategoriesDetails from './CategoriesDetailsComponent'
/*eslint-enable no-unused-vars*/

const CategoriesListComponent = (props) => (
	<div className='contentWrapper'>
		<div className='header'>
			List of Categories
			</div>
		<div className='contentContainer'>
			<ul className='listStyles'>

				{
					props.categories.length > 0 
					? props.categories.map(function (categorie) {return <CategoriesDetails key={categorie.id} categorie={categorie} />}, props) 
					: <div>No Categories available.</div>
				}
				
			</ul>
		</div>
	</div>
)

export default CategoriesListComponent;