export const reducer1 = (state = { count: 0, selectedProduct: null }, action) => {
  switch (action.type) {
    case 'selectproduct':
      if (state.selectedProduct !== action.payload) {
        // reset the count to 0 if the selected product has changed
        state = { ...state, selectedProduct: action.payload, count: 0 };
      }
      return state;
    case 'increaseCount':
      if (state.selectedProduct === action.payload) {
        // increment the count only if the selected product is the same as the action payload
        return { ...state, count: state.count + 1 };
      }
      return state;
    case 'decreaseCount':
      if (state.selectedProduct === action.payload && state.count > 0) {
        // decrement the count only if the selected product is the same as the action payload and the count is greater than 0
        return { ...state, count: state.count - 1 };
      }
      return state;
    default:
      return state;
  }
};

  