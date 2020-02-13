import React, { useState } from 'react'
import { WrapperSearch } from './style'
import { Input } from '../../../pages/Contact/style'
import propTypes from 'prop-types'

const Search = ({ setSearchFilter }) => {
  const [filterValue, setFilterValue] = useState('')

  const onFilterHandler = e => {
    setFilterValue(e.currentTarget.value.toLowerCase())
    setSearchFilter(filterValue)
  }

  return (
    <WrapperSearch>
      <Input
        primary
        placeholder="entry a name of products"
        value={filterValue}
        type="search"
        onChange={onFilterHandler} />
    </WrapperSearch>
  )
}

Search.propTypes = {
  setSearchFilter: propTypes.func,
}

export default Search
