import React from 'react'
import Fade from 'react-reveal/Fade'
import Products from '../products/Products'
import { Search } from '@/blocks'

import { LineWrapper } from '@/blocks/common/line/style'
import {
  BlockTitle,
  CatalogWrapper,
  ContainerCatalog,
  HeaderTitle,
} from './style'
import PropTypes from 'prop-types'
import { childrenPropType } from '../../../../constants/propTypes '
import Sort from '../products/sort/container'

const Catalog = React.memo(
  ({ products, setSearchFilter, getProduct, sort, sortFilter }) => {
    return (
      <Fade big cascade>
        <CatalogWrapper>
          <ContainerCatalog>
            <HeaderTitle>
              <BlockTitle> Catalog </BlockTitle>
              <Search setSearchFilter={setSearchFilter} />
              <LineWrapper />
              <Sort sort={sort} sortFilter={sortFilter} />
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
  sortFilter: PropTypes.string,
}
