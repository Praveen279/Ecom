

/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import HomeLogoComponent from '../components/HomeLogoComponent'
import AllCategoriesComponent from '../components/AllCategoriesComponent'

/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';



class HeaderContainer extends Component {
  
  componentWillMount() {
    this.props.getAllCategories();
  }

  
  render() {
    
    return (
			<header className="main-header">
                <HomeLogoComponent />
                <AllCategoriesComponent AllCategories={this.props.data.AllCategories.AllCategories}/>
			</header>
		);
  }
}

function mapStateToProps(state) {
  return {
    data: state
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(HeaderContainer)
