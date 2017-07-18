

const INITIAL_STATE = {
  categories: [],
  isFetching: false,
  error: undefined
};

function CategoriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FETCH_CATEGORIESLIST_REQUEST':
    return Object.assign({}, state, {
      isFetching: true
    });
  case 'FETCH_CATEGORIESLIST_SUCCESS':
    return Object.assign({}, state, {
      isFetching: false,
      categories: action.payload
    });
  case 'FETCH_CATEGORIESLIST_FAILURE':
    return Object.assign({}, state, {
      isFetching: false,
      error: action.error
    });
  default:
    return state;
  }
}

export default CategoriesReducer;