import { getProductsSelector } from '../../../../store/reducers/selectors/getProductsSelector'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProduct } from '../../../../store/reducers/product'
import { setSearchFilter, sort } from '../../../../store/actions/products'

const mapStateToProps = state => ({
  products: getProductsSelector(state),
})
export default compose(
  withRouter,
  connect(mapStateToProps, {
    getProduct,
    setSearchFilter,
    sort,
  }),
)(Catalog)
