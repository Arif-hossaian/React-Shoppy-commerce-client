import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    //add to cart
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const productExists = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productExists) return;
      return { state, cartItems: [...state.cartItems, item] };
    //remove from cart
    case actionTypes.REMOVE_FROM_CART:
      return {
        state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
