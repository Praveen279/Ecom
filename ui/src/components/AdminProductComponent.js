/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import classNames from 'classnames'
/*eslint-enable no-unused-vars */
import '../styles/categories.css'
import '../styles/products.css'

class AdminProductComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
    this.showOrHideDetails = this.showOrHideDetails.bind(this)
  }

  showOrHideDetails() {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    const product = this.props.product
    let productClasses = classNames(
      { 'glyphicon glyphicon-menu-right': !this.state.showDetails },
      { 'glyphicon glyphicon-menu-down': this.state.showDetails },
      'iconStyles'
    )
    return (
      <div class='productItem'>
        <span class={productClasses} onClick={this.showOrHideDetails} />
        <div class='product'>
          <div class='actions'>
            <span
              class='glyphicon glyphicon-edit'
              onClick={() => this.props.onEdit(product)}
            />
            <span
              class='deleteBtn glyphicon glyphicon-trash'
              onClick={() => this.props.onDelete(product.Id)}
            />
          </div>
          {product.Name}
          <div>
            {product.Description}
          </div>
          {this.state.showDetails &&
            <div>
              <div>Price: <span class='price'>{product.Price}$</span></div>
              <div>Availability: <span class='quantity'>{product.Availability}</span></div>
              <div>Code: <span class='code'>{product.Code}</span></div>
            </div>
          }
        </div>
      </div>
		);
  }
}

export default AdminProductComponent;
