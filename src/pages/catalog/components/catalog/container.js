import Catalog from './Catalog'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getProductsSelector } from '@/store/reducers/selectors/getProductsSelector'
import { getProduct, setSearchFilter, sort } from '@/store/actions/products'

const mapStateToProps = state => ({
  products: getProductsSelector(state),
  sortFilter: state.product.sortFilter,
})
export default compose(
  connect(mapStateToProps, {
    getProduct,
    setSearchFilter,
    sort,
  }),
)(Catalog)
