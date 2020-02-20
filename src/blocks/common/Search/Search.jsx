import React, { useState } from 'react'
import { WrapperSearch } from './style'
// import { Input } from '@/pages/Contact/style'
import PropTypes from 'prop-types'
// import { Input } from 'antd'
import { SearchInput } from './searrchInput/index'
import _ from 'lodash'

const Search = ({ setSearchFilter, history, match, location }) => {
  const [filterValue, setFilterValue] = useState('')

  const onFilterHandler = _.debounce(value => {
    setFilterValue(value)
    setSearchFilter(filterValue)
  }, 1000)

  return (
    <WrapperSearch>
      {/* <Input */}
      {/*  primary */}
      {/*  placeholder="entry a name of products" */}
      {/*  value={filterValue} */}
      {/*  type="search" */}
      {/*  onChange={onFilterHandler} */}
      {/* /> */}
      {/* <Search placeholder="search for items" onSearch={value => console.log(value)} enterButton /> */}
      <SearchInput onFilterHandler={onFilterHandler} />
    </WrapperSearch>
  )
}

Search.propTypes = {
  setSearchFilter: PropTypes.func,
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
}

export default Search

// import React, { useEffect, useState } from 'react'
// import { WrapperSearch } from './style'
// import { Input } from '@/pages/Contact/style'
// import * as qerySearch from 'query-string'
//
// class Search extends React.Component {
//   componentDidMount () {
//     const { search } = this.props.location
//     const qeryObj = qerySearch.parse(search)
//     this.setState({ filterValue: qeryObj.filter })
//     // this.props.setSearchFilter(this.state.filterValue)
//   }
//
//   componentDidUpdate (prevProps, prevState, snapshot) {
//     if (this.state !== prevState) {
//       this.props.setSearchFilter(this.state.filterValue)
//     }
//
//     // this.props.setSearchFilter(this.state.filterValue)
//   }
//
//   state = {
//     filterValue: '',
//   }
//
//   onFilterHandler = e => {
//     this.setState({ filterValue: e.currentTarget.value.toLowerCase() })
//     this.props.history.push({
//       pathname: '/catalog',
//       search: `?filter= ${this.state.filterValue}`,
//     })
//     this.props.setSearchFilter(this.state.filterValue)
//   }
//
//   render () {
//     return (
//       <WrapperSearch>
//         <Input
//           primary
//           placeholder="entry a name of products"
//           value={this.state.filterValue}
//           type="search"
//           onChange={this.onFilterHandler} />
//       </WrapperSearch>
//     )
//   }
// }
//
// export default Search
