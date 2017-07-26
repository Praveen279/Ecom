export function getCategories() {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_CATEGORIESLIST_REQUEST'
    });
    return fetch('http://localhost:8080/categories')
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'FETCH_CATEGORIESLIST_FAILURE',
            error: 'Error Occured'
          });
        } else {
          dispatch({
            type: 'FETCH_CATEGORIESLIST_SUCCESS',
            payload: response
          });
        }
      });
  }
}

export function saveCategory(name, description) {
  return function(dispatch) {
    dispatch({
      type: 'SAVE_CATEGORY'
    });
    return fetch('http://localhost:8080/categories/add', {
      method: 'post',
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'SAVE_CATEGORY_FAILURE',
            error: 'Error Occured'
          });
        } else {
          dispatch({
            type: 'SAVE_CATEGORY_SUCCESS',
            payload: response
          });
        }
      });
  }
}

export function updateCategory(id, name, description) {
  return function(dispatch) {
    dispatch({
      type: 'UPDATE_CATEGORY'
    });
    return fetch('http://localhost:8080/categories/update', {
      method: 'post',
      body: JSON.stringify({
        id: id,
        name: name,
        description: description
      })
    })
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'UPDATE_CATEGORY_FAILURE',
            error: 'Error Occured'
          });
        } else {
          dispatch({
            type: 'UPDATE_CATEGORY_SUCCESS',
            payload: response
          });
        }
      });
  }
}

export function deleteCategory(id) {
  return function(dispatch) {
    dispatch({
      type: 'DELETE_CATEGORY'
    });
    return fetch('http://localhost:8080/categories/delete', {
      method: 'post',
      body: JSON.stringify({
        id: id
      })
    })
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'DELETE_CATEGORY_FAILURE',
            error: 'Error Occured'
          });
        } else {
          dispatch({
            type: 'DELETE_CATEGORY_SUCCESS',
            payload: response
          });
        }
      });
  }
}

export function getProducts() {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_PRODCUTSLIST_REQUEST'
    });
    return fetch('http://localhost:8080/products')
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'FETCH_PRODUCTSLIST_FAILURE',
            error: 'Error Occured'
          });
        } else {
          dispatch({
            type: 'FETCH_PRODUCTSLIST_SUCCESS',
            payload: response
          });
        }
      });
  }
}

export function getProductsByCategory(categoryId) {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_PRODCUTSBYCATEGORY_REQUEST'
    });
    return fetch('http://localhost:8080/productsByCategory?categoryId=' + categoryId)
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'FETCH_PRODUCTSBYCATEGORY_FAILURE',
            error: 'Error Occured'
          });
        } else {
          dispatch({
            type: 'FETCH_PRODUCTSBYCATEGORY_SUCCESS',
            payload: response
          });
        }
      });
  }
}

export function getProductsByName(searchString) {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_PRODCUTSBYNAME_REQUEST'
    });
    return fetch('http://localhost:8080/productsBySearchString?searchString=' + searchString)
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'FETCH_PRODCUTSBYNAME_FAILURE',
            error: 'Error Occured'
          });
        } else {
          dispatch({
            type: 'FETCH_PRODCUTSBYNAME_SUCCESS',
            payload: response
          });
        }
      });
  }
}

export function saveProduct(product) {
  return function(dispatch) {
    dispatch({
      type: 'SAVE_PRODUCT'
    });
    return fetch('http://localhost:8080/products/add', {
      method: 'post',
      body: JSON.stringify({
        name: product.name,
        description: product.description,
        availability: product.availability,
        price: product.price,
        categoryId: product.categoryId,
        code: product.code,
        image: product.image
      })
    })
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'SAVE_PRODUCT_FAILURE',
            error: 'Error Occured'
          });
        } else {
          dispatch({
            type: 'SAVE_PRODUCT_SUCCESS',
            payload: response
          });
        }
      });
  }
}

export function updateProduct(product) {
  return function(dispatch) {
    dispatch({
      type: 'UPDATE_PRODUCT'
    });
    return fetch('http://localhost:8080/products/update', {
      method: 'post',
      body: JSON.stringify({
        id: product.id,
        name: product.name,
        description: product.description,
        availability: product.availability,
        price: product.price,
        categoryId: product.categoryId,
        code: product.code
      })
    })
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'UPDATE_PRODUCT_FAILURE',
            error: 'Error Occured'
          });
        } else {
          dispatch({
            type: 'UPDATE_PRODUCT_SUCCESS',
            payload: response
          });
        }
      });
  }
}

export function deleteProduct(id) {
  return function(dispatch) {
    dispatch({
      type: 'DELETE_PRODUCT'
    });
    return fetch('http://localhost:8080/products/delete', {
      method: 'post',
      body: JSON.stringify({
        id: id
      })
    })
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'DELETE_PRODUCT_FAILURE',
            error: 'Error Occured'
          });
        } else {
          dispatch({
            type: 'DELETE_PRODUCT_SUCCESS',
            payload: response
          });
        }
      });
  }
}
