import React from 'react'
import Fade from 'react-reveal/Fade'
import Products from './products/Products'
import Search from '../../../blocks/common/Search/Search'
import { connect } from 'react-redux'
import { getProductsSelector } from '../../../store/reducers/selectors/getProductsSelector'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { getProduct } from '../../../store/reducers/product'
import { setSearchFilter, sort } from '../../../store/actions/products'
import { Sort } from './products/Sort'
import { LineWrapper } from '../../../blocks/common/line/style'
import {
  BlockTitle,
  CatalogWrapper,
  ContainerCatalog,
  HeaderTitle,
} from './style'
import PropTypes from 'prop-types'
import { childrenPropType } from '../../../types/commonTypes'

const Catalog = React.memo(
  ({ products, setSearchFilter, getProduct, sort }) => {
    return (
      <CatalogWrapper>
        <Fade big cascade>
          <ContainerCatalog>
            <HeaderTitle>
              <BlockTitle> Catalog </BlockTitle>
              <Search setSearchFilter={setSearchFilter} />
              <LineWrapper />
              <Sort sort={sort} />
            </HeaderTitle>

            <div>
              <Products products={products} getProduct={getProduct} />
            </div>
          </ContainerCatalog>
        </Fade>
      </CatalogWrapper>
    )
  },
)

Catalog.propTypes = {
  products: childrenPropType,
  setSearchFilter: PropTypes.func,
  getProduct: PropTypes.func,
  sort: PropTypes.func,
}

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
