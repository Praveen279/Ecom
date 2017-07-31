/*eslint-disable no-unused-vars*/
 import React from 'preact-compat'
 /*eslint-enable no-unused-vars*/
 /* need to add hiperlink inside a tag */
 import '../styles/products.css'
 const ProductDetailsComponent = (props) => (
     <div className="productDetails product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12">
         <div className="product-thumb">
             <div className="image">
                 <a href="#"><img className="img-responsive" src={props.product.Image}></img></a>
             </div>
             <div className="caption">
                 <h4><a href="#"> {props.product.Name} </a></h4>
                 <p><b>Availabitlity : {props.product.Availability}</b></p>
             </div>
             
             <div className="button-group">
                 <button type="button" class="qtybutton">Qty: </button>
                 <input type="text" value={props.product.quantity} className="form-control dirctinpt" />
             </div>
 
             <div class="button-group">
                 <button class="btn-link btn-add-cart" type="button" onclick=""><i class="fa fa-shopping-cart"></i> <span class="hidden-xs hidden-sm hidden-md">Add to Cart</span></button>
                 <button type="button" data-toggle="tooltip" title="" onclick="" data-original-title="Add to Wish List"><i class="fa fa-heart"></i></button>
                 <button type="button" data-toggle="tooltip" title="" onclick="" data-original-title="Compare this Product"><i class="fa fa-exchange"></i></button>
               </div>
         </div>
     </div>
 
 )
 
 export default ProductDetailsComponent