import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../actioncreator/index';

export const cartReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload.product;
      const quantity = action.payload.quantity;
      const index = state.products.findIndex(p => p.id === product.id);
      if (index === -1) {
        return {
          ...state,
          products: [...state.products, { ...product, quantity }]
        };
      } else {
        return {
          ...state,
          products: [
            ...state.products.slice(0, index),
            { ...state.products[index], quantity: state.products[index].quantity + quantity },
            ...state.products.slice(index + 1)
          ]
        };
      }
    case REMOVE_FROM_CART:
      const productId = action.payload.productId;
      const productIndex = state.products.findIndex(p => p.id === productId);
      return {
        ...state,
        products: [...state.products.slice(0, productIndex), ...state.products.slice(productIndex + 1)]
      };
    case UPDATE_QUANTITY:
      const updateProductId = action.payload.productId;
      const updateQuantity = action.payload.quantity;
      const updateProductIndex = state.products.findIndex(p => p.id === updateProductId);
      return {
        ...state,
        products: [
          ...state.products.slice(0, updateProductIndex),
          { ...state.products[updateProductIndex], quantity: updateQuantity },
          ...state.products.slice(updateProductIndex + 1)
        ]
      };
    default:
      return state;
  }
}