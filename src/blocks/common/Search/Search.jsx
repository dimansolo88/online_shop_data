import React, { useState } from 'react'
import { WrapperSearch } from './style'
// import { Input } from '@/pages/Contact/style'
import PropTypes from 'prop-types'
// import { Input } from 'antd'
import { SearchInput } from './searrchInput/index'
import _ from 'lodash'

const Search = ({ setSearchFilter, products, history, match, location }) => {
  const [filterValue, setFilterValue] = useState('')

  const onFilterHandler = _.debounce(value => {
    setFilterValue(value)
    setSearchFilter(filterValue)
  }, 1000)

  return (
    <WrapperSearch>
      <SearchInput onFilterHandler={onFilterHandler} products={products} />
    </WrapperSearch>
  )
}

Search.propTypes = {
  products: PropTypes.array,
  setSearchFilter: PropTypes.func,
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
}

export default Search
