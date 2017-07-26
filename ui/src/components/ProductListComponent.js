 /*eslint-disable no-unused-vars */
 import React, { Component } from 'preact-compat'
 import ProductDetailsComponent from './ProductDetailsComponent'
 /*eslint-enable no-unused-vars */
 
 const ProductListComponent = (props) => (
  <div class='productsContainer'>
  {
    props.products.length > 0 ?
    props.products.map(product => {return <ProductDetailsComponent key={product._id} product={product} />}) :
    <div class='noProductsText'>
      No products available.
    </div>
  }
  </div>
 )
 
 export default ProductListComponent; 