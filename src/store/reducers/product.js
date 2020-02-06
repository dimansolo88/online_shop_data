import {
  setProductsSuccess,
  SET_SEARCH_FILTER_VALUE,
  SORT_PRODUCTS,
  SET_PRODUCTS_SUCCESS
} from "../actions/products";
import { api } from "../../api";

const initiateState = {
  product: [],
  sortFilter: "",
  searchProductsOnName: ""
};

export const product = (state = initiateState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_SUCCESS:
      return {
        ...state,
        product: action.payload
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        sortFilter: action.payload
      };
    case SET_SEARCH_FILTER_VALUE:
      return {
        ...state,
        searchProductsOnName: action.payload
      };

    default:
      return state;
  }
};

export const getProduct = () => async dispatch => {
  try {
    const res = await api.getProducts();
    dispatch(setProductsSuccess(res.data));
  } catch (e) {
    // console.log(e)
  }
};
