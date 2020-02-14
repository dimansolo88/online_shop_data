import React from 'react'
import Fade from 'react-reveal/Fade'
import Products from '../products/Products'
import { Search } from '@/blocks'
import { Sort } from '../products/sort/Sort'
import { LineWrapper } from '@/blocks/common/line/style'
import {
  BlockTitle,
  CatalogWrapper,
  ContainerCatalog,
  HeaderTitle,
} from './style'
import PropTypes from 'prop-types'
import { childrenPropType } from '../../../../constants/propTypes '

const Catalog = React.memo(
  ({ products, setSearchFilter, getProduct, sort }) => {
    return (
      <Fade big cascade>
        <CatalogWrapper>
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
        </CatalogWrapper>
      </Fade>
    )
  },
)
export default Catalog

Catalog.propTypes = {
  products: childrenPropType,
  setSearchFilter: PropTypes.func,
  getProduct: PropTypes.func,
  sort: PropTypes.func,
}

// const mapStateToProps = state => ({
//   products: getProductsSelector(state),
// })
// export default compose(
//   connect(mapStateToProps, {
//     getProduct,
//     setSearchFilter,
//     sort,
//   }),
// )(Catalog)
