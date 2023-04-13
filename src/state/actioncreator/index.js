export const depositMoney= (amount) =>{
    return (dispach)=>{
        dispach({
            type:'deposit',
            payload:amount
        })
    }
}

export const withdrawMoney= (amount) =>{
    return (dispach)=>{
        dispach({
            type:'withdraw',
            payload:amount
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


  export const addProducttocart = (product) => {
    return (dispatch) => {
      dispatch({
        type: 'addproducttocart',
        payload: product
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