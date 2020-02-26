import React, { useState } from 'react'
import { WrapperSearch } from './style'
import PropTypes from 'prop-types'
import { SearchInput } from './searrchInput/index'
import _ from 'lodash'

const Search = ({ products }) => {
  const [dataSource, setDataSource] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const debSearch = _.debounce(value => {
    setSearchValue(value.toLowerCase())
    setDataSource(
      products.filter(p => p.title.toLowerCase().indexOf(searchValue) !== -1),
    )
  }, 2000)

  return (
    <WrapperSearch>
      <SearchInput dataSource={dataSource} debSearch={debSearch} />
    </WrapperSearch>
  )
}

Search.propTypes = {
  products: PropTypes.array,
}

export default Search
