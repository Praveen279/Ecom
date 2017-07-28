/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import AdminProductComponent from './AdminProductComponent'
/*eslint-enable no-unused-vars */
import '../styles/categories.css'

class AdminProductsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddProductForm: false,
      isUpdate: false,
      selectedProduct: {},
      categoryId: 0
    }
    this.addProduct = this.addProduct.bind(this)
    this.hideForm = this.hideForm.bind(this)
    this.onEditHandler = this.onEditHandler.bind(this)
    this.saveProduct = this.saveProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
    this.categoryChange = this.categoryChange.bind(this)
  }
  
  addProduct() {
    this.setState({
      showAddProductForm: true
    })
  }

  hideForm() {
    this.setState({
      showAddProductForm: false,
      isUpdate: false,
      selectedProduct: {},
      categoryId: 0
    })
  }

  saveProduct() {
    this.props.saveProduct({
      name: this.productName.value,
      description: this.productDescription.value,
      code: this.productCode.value,
      availability: parseInt(this.productAvailability.value),
      price: parseFloat(this.productPrice.value),
      categoryId: this.state.categoryId,
      image: 'http://www.akwholesale.com/image/cache/catalog/vaporizer/ALIEN/TFV12_BLACK-600x600_0.jpg'
    })
    this.hideForm()
  }

  onEditHandler(product) {
    this.setState({
      showAddProductForm: true,
      isUpdate: true,
      selectedProduct: product
    })
  }

  categoryChange(e) {
    this.setState({
      categoryId: e.target.value
    })
  }

  updateProduct() {
    this.props.updateProduct({
      id: this.state.selectedProduct.Id,
      name: this.productName.value,
      description: this.productDescription.value,
      code: this.productCode.value,
      availability: this.productAvailability.value,
      price: this.productPrice.value,
      categoryId: this.state.selectedProduct.CategoryId,
      image: this.state.selectedProduct.Image
    })
    this.hideForm()
  }

  deleteProduct(id) {
    this.props.deleteProduct(id)
  }

  render() {
    return (
      <div>
        <button type='button' class='addProduct' onClick={this.addProduct}>Add Product</button>
        {this.state.showAddProductForm && 
          <div class='formContainer'>
            <select
              class='productInput'
              value={this.state.selectedProduct.CategoryId ?
                this.state.selectedProduct.CategoryId :
                this.state.categoryId}
              onChange={this.categoryChange}>
              {this.props.categories.map(category => {
                return <option key={category.Id} value={category.Id}>{category.Name}</option>
              })}
            </select>
            <input
              type='text'
              placeholder='Product Name'
              class='productInput'
              value={this.state.selectedProduct.Name ? this.state.selectedProduct.Name : ''}
              ref={(name) => { this.productName = name; }}
            /><br />
            <textarea
              type='text'
              placeholder='Product Description'
              class='productDesc'
              value={this.state.selectedProduct.Description ? this.state.selectedProduct.Description : ''}
              ref={(description) => { this.productDescription = description; }}
            /><br />
            <input
              type='text'
              placeholder='Code'
              class='productInput'
              value={this.state.selectedProduct.Code ? this.state.selectedProduct.Code : ''}
              ref={(code) => { this.productCode = code; }}
            /><br />
            <input
              type='text'
              placeholder='Availability'
              class='productInput'
              value={this.state.selectedProduct.Availability ? this.state.selectedProduct.Availability : ''}
              ref={(availability) => { this.productAvailability = availability; }}
            /><br />
            <input
              type='text'
              placeholder='Price Eg: 100$'
              class='productInput'
              value={this.state.selectedProduct.Price ? this.state.selectedProduct.Price : ''}
              ref={(price) => { this.productPrice = price; }}
            />
            <div class='btnWrapper'>
              {this.state.isUpdate ? 
              <button type='submit' class='saveBtn' onClick={this.updateProduct}>Update</button> :
              <button type='submit' class='saveBtn' onClick={this.saveProduct}>Save</button>}
              <button type='button' class='cancelBtn' onClick={this.hideForm}>Cancel</button>
            </div>
          </div>
        }
        {!this.state.showAddProductForm && <div class='productsList'>
          {this.props.products.length > 0 ? this.props.products.map(product => { return(
              <AdminProductComponent
                product={product}
                key={product.Id}
                onEdit={this.onEditHandler}
                onDelete={this.deleteProduct}
              />
            )}) : <div class='noProductsText'>No Products available.</div>
          }
          </div>}
      </div>
		);
  }
}

export default AdminProductsComponent;
