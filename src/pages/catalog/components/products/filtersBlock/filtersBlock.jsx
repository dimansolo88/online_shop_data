import React from 'react'
import PropTypes from 'prop-types'
import Sort from '../sort/container'
import { StyledDiv } from './style'
import FilterProductType from './filterProductType/filterProductType'

const FiltersBlock = ({ sort, sortFilter }) => {
  return (
    <StyledDiv>
      <Sort sort={sort} sortFilter={sortFilter} />
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <Sort /> */}
      {/* <FilterProductType /> */}
    </StyledDiv>
  )
}

FiltersBlock.propTypes = {
  sort: PropTypes.func,
  sortFilter: PropTypes.string,
}

export default FiltersBlock
