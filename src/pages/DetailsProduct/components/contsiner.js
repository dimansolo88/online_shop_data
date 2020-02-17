import { connect } from 'react-redux'
import DetailProduct from './DetailsProduct'
import { getCurrentProduct } from '@/store/actions/detailedProducts'

const mapStateToProps = state => ({
  currentProduct: state.product.currentProduct,
})
export default connect(mapStateToProps, { getCurrentProduct })(DetailProduct)
