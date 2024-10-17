import { INCREMENT, DECREMENT, SET_PRODUCT_COUNT, SET_PRODUCTS } from './action';

const initialState = {
  productCount: {},
  products: [], // New state for products

};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        productCount: state.productCount + 1,
      };
    case DECREMENT:
      return {
        ...state,
        productCount: state.productCount > 0 ? state.productCount - 1 : 0,
      };
      case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload, // Set products in state
      };
    case SET_PRODUCT_COUNT:
      const { productId, count } = action.payload;
      return {
        ...state,
        productCount: {
          ...state.productCount,
          [productId]: count, // Update count for the specific product
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
