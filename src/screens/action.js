export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_PRODUCT_COUNT = 'SET_PRODUCT_COUNT'; 
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const setProductCount = (productId, count) => ({
  type: SET_PRODUCT_COUNT,
  payload: { productId, count },
});
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});