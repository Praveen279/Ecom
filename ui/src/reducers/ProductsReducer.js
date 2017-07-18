
const INITIAL_STATE = {
  products: [],
  isFetching: false
};

function ProductsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FETCH_PRODUCTLIST_REQUEST':
    return Object.assign({}, state, {
      isFetching: true
    });
  case 'FETCH_PRODUCTLIST_SUCCESS':
    return Object.assign({}, state, {
      isFetching: false,
      products: action.payload
    });
  case 'FETCH_CATEGORIESLIST_FAILURE':
    return Object.assign({}, state, {
      isFetching: false,
    });
  default:
    return state;
  }
}

export default ProductsReducer;