
/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import '../styles/navbar.css'



class NavbarComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
          <nav id="top">
            <div className="container">
                      <div id="top-links" className="nav pull-right">
                <ul className="list-inline">
                  <li style="display:none;"><a href="" className="top-link"><i className="fa fa-phone"></i></a> <span className="hidden-xs hidden-sm hidden-md">1-888-672-9510</span></li>
                  <li><a href="" className="top-link">My Account</a>
                  </li>
                  <li><a href="" id="wishlist-total" title="Wish List (0)" className="top-link"> Wish List (0)</a></li>
                  <li><a href="" title="Shopping Cart" className="top-link"> Shopping Cart</a></li>
                  <li><a href="" title="Checkout" className="top-link">Checkout</a></li>
                  
                        <li><a href="" className="top-link">Register</a></li>
                    <li><a href="">Login</a></li>		   
                      </ul>
              </div>
            </div>
        </nav>
    );
  }
}

export default NavbarComponent;