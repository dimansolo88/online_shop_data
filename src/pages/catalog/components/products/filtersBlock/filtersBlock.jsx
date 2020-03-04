import React from 'react'
import PropTypes from 'prop-types'
import Sort from '../sort/container'
import { StyledUl } from './style'
import FilterProductType from './filterProductType/filterProductType'

const FiltersBlock = ({ products, sort, sortFilter }) => {
  return (
    <StyledUl>
      {/* <Sort sort={sort} sortFilter={sortFilter} /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      <FilterProductType title="sort" />
      <FilterProductType title="productType" />
    </StyledUl>
  )
}

FiltersBlock.propTypes = {
  products: PropTypes.array,
  sort: PropTypes.func,
  sortFilter: PropTypes.string,
}

export default FiltersBlock
