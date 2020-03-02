import React from 'react'
import PropTypes from 'prop-types'
import Sort from '../sort/container'
import { StyledDiv } from './style'
import FilterProductType from './filterProductType/filterProductType'
import { Loader } from '@/blocks/common/spin'

const FiltersBlock = ({ products, sort, sortFilter }) => {
  return (
    <StyledDiv>
      <Sort sort={sort} sortFilter={sortFilter} />
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      <FilterProductType tags={products} />
      <FilterProductType tags={products} />
      <FilterProductType tags={products} />
      <FilterProductType tags={products} />
    </StyledDiv>
  )
}

FiltersBlock.propTypes = {
  products: PropTypes.array,
  sort: PropTypes.func,
  sortFilter: PropTypes.string,
}

export default FiltersBlock
