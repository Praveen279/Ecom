
const initialState = {
  categories: [],
  products: []
}

let homeReducer = (state = initialState, action = null) => {
  switch (action.type) {
  case 'FETCH_CATEGORIESLIST_SUCCESS':
    return Object.assign({}, state, {
      categories: action.payload
    })
  case 'FETCH_PRODUCTSLIST_SUCCESS':
    return Object.assign({}, state, {
      products: action.payload
    })
  case 'SAVE_CATEGORY_SUCCESS':
    return Object.assign({}, state, {
      categories: action.payload
    })
  case 'UPDATE_CATEGORY_SUCCESS':
    return Object.assign({}, state, {
      categories: action.payload
    })
  case 'DELETE_CATEGORY_SUCCESS':
    return Object.assign({}, state, {
      categories: action.payload
    })
  case 'SAVE_PRODUCT_SUCCESS':
    return Object.assign({}, state, {
      products: action.payload
    })
  case 'UPDATE_PRODUCT_SUCCESS':
    return Object.assign({}, state, {
      products: action.payload
    })
  case 'DELETE_PRODUCT_SUCCESS':
    return Object.assign({}, state, {
      products: action.payload
    })
  default:
    return state
  }
};

export default homeReducer
