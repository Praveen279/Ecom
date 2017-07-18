
const INITIAL_STATE = {
  AllCategories : [],
  isFetching: false
};

function AllCategoriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FETCH_ALLCATEGORIES_REQUEST':
    return Object.assign({}, state, {
      isFetching: true
    });
  case 'FETCH_ALLCATEGORIES_SUCCESS':
    return Object.assign({}, state, {
      isFetching: false,
      AllCategories : action.payload
    });
  case 'FETCH_ALLCATEGORIES_FAILURE':
    return Object.assign({}, state, {
      isFetching: false,
    });
  default:
    return state;
  }
}

export default AllCategoriesReducer;