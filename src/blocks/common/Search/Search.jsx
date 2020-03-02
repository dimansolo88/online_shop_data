import React, { useEffect, useState } from 'react'
import { WrapperSearch } from './style'
import PropTypes from 'prop-types'
import { SearchInput } from './searrchInput/index'
import _ from 'lodash'

const Search = ({ products }) => {
  const [dataSource, setDataSource] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const debSearch = _.debounce(value => {
    if (value.length > 1) {
      setDataSource(
        products.filter(p => p.title.toLowerCase().indexOf(value) !== -1),
      )
    }
  }, 2000)

  const searchHandler = value => {
    const searchValue = value.toLowerCase()
    setSearchValue(searchValue)
    debSearch(searchValue)
    // debounce(value)
  }

  useEffect(() => {
    setDataSource([])
  }, [!searchValue])

  return (
    <WrapperSearch>
      <SearchInput
        dataSource={dataSource}
        // debSearch={debSearch}
        searchHandler={searchHandler}
        searchValue={searchValue} />
    </WrapperSearch>
  )
}

Search.propTypes = {
  products: PropTypes.array,
}

export default Search
