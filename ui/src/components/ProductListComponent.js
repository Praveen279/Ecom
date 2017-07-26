
 /*eslint-disable no-unused-vars */
 import React, { Component } from 'preact-compat'
 import ProductDetailsComponent from './ProductDetailsComponent'
 
 
 const ProductListComponent = (props) => (
  <div className="container">
    <div className="paddingTop20">
             {
                props.products.length > 0 
                ? props.products.map(function (product) {return <ProductDetailsComponent key={product._id} product={product} />}, props) 
                : <div>No product available.</div>
             }
    </div>
  </div>
 )
 
 export default ProductListComponent; 