// ACTIONS
import { getProductApi } from '@/api/getProductApi'

export const SET_PRODUCTS_SUCCESS = 'ONLINE_SHOP/PRODUCTS/SET_PRODUCTS_SUCCESS'
export const SET_SEARCH_FILTER_VALUE =
  'ONLINE_SHOP/PRODUCTS/SET_SEARCH_FILTER_VALUE'
export const SORT_PRODUCTS = 'ONLINE_SHOP/PRODUCTS/SORT_PRODUCTS'

// ACTIONS_CREATORS

export const setProductsSuccess = products => ({
  type: SET_PRODUCTS_SUCCESS,
  payload: products,
})

export const setSearchFilter = title => ({
  type: SET_SEARCH_FILTER_VALUE,
  payload: title,
})

export const sort = value => ({
  type: SORT_PRODUCTS,
  payload: value,
})

// thunk

export const getProduct = () => async dispatch => {
  try {
    const res = await getProductApi.getProducts()
    dispatch(setProductsSuccess(res.data))
  } catch (e) {
    // console.log(e)
  }
}
