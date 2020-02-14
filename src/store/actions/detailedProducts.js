import { getDetailedProductApi } from '../../api/getDetaileProductApi'

// ACTIONS

export const SET_DETAILED_PRODUCT_SUCCESS =
  'ONLINE_SHOP/DETAILED_PRODUCTS/SET_PRODUCT_SUCCESS'

// ACTIONS_CREATORS

export const setDetailedProductSuccess = product => ({
  type: SET_DETAILED_PRODUCT_SUCCESS,
  payload: product,
})

// thunk

export const getCurrentProduct = productId => async dispatch => {
  try {
    const res = await getDetailedProductApi.getDetailed(productId)
    dispatch(setDetailedProductSuccess(res))
  } catch (e) {
    console.log(e)
  }
}
