import { ActionTypes } from "../constants/ActionTypes";
const intialState = {
  products: [],
};

 const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export default productsReducer

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
