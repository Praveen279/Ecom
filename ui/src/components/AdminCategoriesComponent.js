/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
/*eslint-enable no-unused-vars */
import '../styles/categories.css'

class AdminCategoriesComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddCategoryForm: false,
      isUpdate: false,
      selectedCategory: {}
    }
    this.addCategory = this.addCategory.bind(this)
    this.hideForm = this.hideForm.bind(this)
    this.saveCategory = this.saveCategory.bind(this)
    this.deleteCategory = this.deleteCategory.bind(this)
    this.updateCategory = this.updateCategory.bind(this)
  }
  
  addCategory() {
    this.setState({
      showAddCategoryForm: true
    })
  }

  hideForm() {
    this.setState({
      showAddCategoryForm: false,
      isUpdate: false,
      selectedCategory: {}
    })
  }

  saveCategory() {
    this.props.saveCategory(
      this.categoryName.value,
      this.categoryDescription.value
    )
    this.hideForm()
  }

  onEditHandler(category) {
    this.setState({
      showAddCategoryForm: true,
      isUpdate: true,
      selectedCategory: category
    })
  }

  updateCategory() {
    this.props.updateCategory(
      this.state.selectedCategory.Id,
      this.categoryName.value,
      this.categoryDescription.value
    )
    this.hideForm()
  }

  deleteCategory(id) {
    this.props.deleteCategory(id)
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        <button type='button' class='addCategory' onClick={this.addCategory}>Add Category</button>
        {this.state.showAddCategoryForm && 
          <div class='formContainer'>
            <input
              type='text'
              placeholder='Category Name'
              class='categoryName'
              value={this.state.selectedCategory.Name ? this.state.selectedCategory.Name : ''}
              ref={(name) => { this.categoryName = name; }}
            /><br />
            <textarea
              type='text'
              placeholder='Category Description'
              class='categoryDesc'
              value={this.state.selectedCategory.Description ? this.state.selectedCategory.Description : ''}
              ref={(description) => { this.categoryDescription = description; }}
            />
            <div class='btnWrapper'>
              {this.state.isUpdate ? 
              <button
                type='submit'
                class='saveBtn'
                onClick={this.updateCategory}
              >Update</button> :
              <button
                type='submit'
                class='saveBtn'
                onClick={this.saveCategory}
              >Save</button>}
              <button type='button' class='cancelBtn' onClick={this.hideForm}>Cancel</button>
            </div>
          </div>
        }
        {!this.state.showAddCategoryForm && <div class='categoriesList'>
          {this.props.categories.length > 0 ? this.props.categories.map(category => { return(
              <div key={category.Id} class='category'>
                <div class='actions'>
                  <span
                    class='glyphicon glyphicon-edit'
                    onClick={() => this.onEditHandler(category)}
                  />
                  <span
                    class='deleteBtn glyphicon glyphicon-trash'
                    onClick={() => this.deleteCategory(category.Id)}
                  />
                </div>
                {category.Name}
                <div>
                  {category.Description}
                </div>
              </div>
            )}) : <div class='noCategoriesText'>No Categories available.</div>
          }
          </div>}
      </div>
		);
  }
}

export default AdminCategoriesComponent
