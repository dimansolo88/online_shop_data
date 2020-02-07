import {
  SORT_PRICE_DOWN,
  SORT_PRICE_UP,
} from '../../../pages/catalog/constanties/constanties'

export const getProductsSelector = state => {
  const products = [...state.product.product]
  const searchValue = state.product.searchProductsOnName.toLowerCase()
  if (state.product.sortFilter === SORT_PRICE_UP) {
    products.sort((a, b) => a.price - b.price)
  } else {
    if (state.product.sortFilter === SORT_PRICE_DOWN) {
      products.sort((a, b) => b.price - a.price)
    }
  }

  return products.filter(
    p => p.title.toLowerCase().indexOf(searchValue) !== -1,
  )
}
