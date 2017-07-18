
/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import '../styles/navbar.css'



class HomeLogoComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div id="logo">
                            <a href="#">
                                <img src="http://www.akwholesale.com/image/catalog/logo-2.png" title="Ak wholesale inc" alt="Ak wholesale inc" class="img-responsive"></img>
                            </a>
                        </div>
                    </div>

                    <div class="col-sm-5">
                    </div>
                            
                    <div class="col-sm-3">
                        
                    </div>
                            
                    </div>
            </div>      
        );
  }
    }

export default HomeLogoComponent;