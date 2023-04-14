export const increaseSelectedProductCount= (product) =>{
    return (dispach)=>{
        dispach({
            type:'increaseCount',
            payload:product
        })
    }
}

export const decreaseSelectedProductCount= (product) =>{
    return (dispach)=>{
        dispach({
            type:'decreaseCount',
            payload:product
        })
    }
}



export const selectedProduct = (productName) => {
    return (dispatch) => {
      dispatch({
        type: 'selectproduct',
        payload: productName
      })
    }
  }


  export const showSnackbarstate = (flag) => {
    return (dispatch) => {
      dispatch({
        type: 'showsnackbarstate',
        payload: flag
      })
    }
  }



  //new cart creation

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export function addToCart(product, quantity) {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity
    }
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId
    }
  };
}

export function updateQuantity(productId, quantity) {
  return {
    type: UPDATE_QUANTITY,
    payload: {
      productId,
      quantity
    }
  };
}

