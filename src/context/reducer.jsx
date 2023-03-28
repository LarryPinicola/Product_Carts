export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      const isExisted = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (isExisted) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload }] };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return { ...state, cart: (state.cart = []) };
    default:
      return state.count;
  }
};
