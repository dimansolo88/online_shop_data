import Catalog from './Catalog'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getProductsSelector } from '@/store/reducers/selectors/getProductsSelector'
import { getProduct, sort } from '@/store/actions/products'

const mapStateToProps = state => ({
  products: getProductsSelector(state),
})
export default compose(
  connect(mapStateToProps, {
    getProduct,
    sort,
  }),
)(Catalog)
