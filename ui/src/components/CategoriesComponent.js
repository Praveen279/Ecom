/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
/*eslint-enable no-unused-vars */
import '../styles/categories.css'

class CategoriesComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: {},
      showCategories: false
    }
    this.onSelect = this.onSelect.bind(this)
    this.onSelectAll = this.onSelectAll.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }
  
  onSelect(category) {
    this.setState({
      showCategories: false,
      selectedCategory: category
    })
    this.props.getProductsByCategory(category.Id)
  }

  onSelectAll() {
    this.setState({
      showCategories: false,
      selectedCategory: {}
    })
    this.props.getProducts()
  }

  onClickHandler() {
    this.setState({ showCategories: !this.state.showCategories })
  }

  render() {
    return (
      <div class='categorySelectBox'>
				<div onClick={this.onClickHandler}>
					{this.state.selectedCategory.Name ? this.state.selectedCategory.Name : 'Select Category'}
          <span class='selectCategoryIcon glyphicon glyphicon-menu-down' />
				</div>
				{this.state.showCategories && <div class='categoriesSection'>
        <div onClick={this.onSelectAll}>All</div>
        {this.props.categories.map(category => {
          return (
             <div key={category.Id} onClick={() => this.onSelect(category)}>
               {category.Name}
             </div>
          )}
        )}
				</div>}
			</div>
		);
  }
}

export default CategoriesComponent
