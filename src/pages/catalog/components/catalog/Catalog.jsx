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
  StyledBlockFilter,
} from './style'
import PropTypes from 'prop-types'
import { childrenPropType } from '@/constants/propTypes '
import Sort from '../products/sort/container'
import Filter from '../products/filter/filter'
import Test from '../products/hgjhg/jkjgjkg'

const Catalog = React.memo(({ products, getProduct, sort, sortFilter }) => {
  return (
    <Fade big cascade>
      <CatalogWrapper>
        <ContainerCatalog>
          <HeaderTitle>
            <BlockTitle> Catalog </BlockTitle>
            <Search products={products} />
            <LineWrapper />
            <StyledBlockFilter>
              {/* <Sort sort={sort} sortFilter={sortFilter} /> */}
              {/* <Filter/> */}
              <Test />
            </StyledBlockFilter>
          </HeaderTitle>

          <div>
            <Products products={products} getProduct={getProduct} />
          </div>
        </ContainerCatalog>
      </CatalogWrapper>
    </Fade>
  )
})

Catalog.propTypes = {
  products: childrenPropType,
  getProduct: PropTypes.func,
  sort: PropTypes.func,
  sortFilter: PropTypes.string,
}

export default Catalog
