export const reducer3 = (state =[], action) => {
    switch (action.type) {
      case 'addproducttocart':
        state = [...state,action.payload] ;
        return state;
      default:
        return state;
    }
  };