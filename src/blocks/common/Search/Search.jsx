import React, { useState } from 'react'
import { WrapperSearch } from './style'
import { Input } from '../../../pages/Contact/style'
// import styles from '../../../pages/Contact/Contact.module.css'

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
        type="text"
        placeholder="entry a name of products"
        value={filterValue}
        onChange={onFilterHandler} />
    </WrapperSearch>
  )
}

export default Search
