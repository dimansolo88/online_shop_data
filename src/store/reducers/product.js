import { SORT_PRODUCTS, SET_PRODUCTS_SUCCESS } from '../actions/products'
import { SET_DETAILED_PRODUCT_SUCCESS } from '../actions/detailedProducts'

const initiateState = {
  product: [],
  sortFilter: '',
  currentProduct: null,
}
export const product = (state = initiateState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_SUCCESS:
      return {
        ...state,
        product: action.payload,
      }
    case SORT_PRODUCTS:
      return {
        ...state,
        sortFilter: action.payload,
      }
    case SET_DETAILED_PRODUCT_SUCCESS:
      return {
        ...state,
        currentProduct: action.payload,
      }

    default:
      return state
  }
}
