/*eslint-disable no-unused-vars*/
import React, {Component} from 'react'
import AllCategoriesDetailsComponent from './AllCategoriesDetailsComponent'
// require('../styles/categories');
import '../styles/categories.css'

/*eslint-enable no-unused-vars*/


class AllCategoriesComponent extends Component {

  constructor(props){
    super(props);
    this.handleCategories = this.handleCategories.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  getInitialState() {
    return {
      hover : false
    };
  }
  handleCategories() {
    alert('this.props : ',this.props.AllCategories.length);
  }

  handleMouseOver() {
    alert('hover: ',this.hover);
  }

  render(){
    return (
      <div className='container'>
		<nav id="menu" class="navbar">
			<div class="collapse navbar-collapse navbar-ex1-collapse">
				<ul className='nav navbar-nav'>
					<li className="dropdown">
						<a className="dropdown-toggle" onMouseOver={this.handleMouseOver} onClick={this.handleCategories}>CATEGORIES</a>		
						{
							this.props.AllCategories.length > 0 
							? this.props.AllCategories.map(function (categorie) {return <AllCategoriesDetailsComponent key={categorie.id} categorie={categorie} />}, this.props) 
							: <div>No Categories available.</div>
						}		 
					</li>
				</ul>
			</div>
		</nav>
	</div>
	)
  }
	
}
export default AllCategoriesComponent;