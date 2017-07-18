/*eslint-disable no-unused-vars*/
import React from 'react'
/*eslint-enable no-unused-vars*/

const AllCategoriesDetailsComponent = (props) => (
	<div className="">
		<div className="dropdown-inner">
			<ul className="list-unstyled">
				<li>
					<a href={props.categorie.url}>{props.categorie.name}</a>
				</li>
			</ul>
		</div>
		
	</div>
)

export default AllCategoriesDetailsComponent
