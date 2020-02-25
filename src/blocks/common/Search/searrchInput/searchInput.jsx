import React, { useState } from 'react'
import { Icon, Input, AutoComplete } from 'antd'
import { StyledButtonSearch, StyledDrawer, StyledSearch } from './style'
import PropTypes from 'prop-types'
import './index.css'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'

const SearchInput = ({ onFilterHandler, products }) => {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('')

  const [dataSource, setDataSource] = useState([])
  console.log(`data ${dataSource}`)

  const showDrawerOnClose = () => {
    setVisible(!visible)
  }

  const { Option } = AutoComplete

  const debSearch = _.debounce(value => {
    setTitle(value.toLowerCase())
    const d = products.filter(p => p.title.toLowerCase().indexOf(title) !== -1)
    setDataSource(d)
  }, 2000)

  // const handleSearch = value => {
  //   setTitle(value.toLowerCase())
  //   const d = products.filter(p => p.title.toLowerCase().indexOf(title) !== -1)
  //   setDataSource(d)
  //   // setDataSource(
  //   //   value ? searchResult(value) : [],
  //   // )
  // }

  function renderOption(item) {
    return (
      <Option key={item.id} text={item.title}>
        <div className="global-search-item">
          <span className="global-search-item-desc">
            {/* {item.query} */}
            <NavLink
              to={`/detail/${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </NavLink>
          </span>
        </div>
      </Option>
    )
  }

  return (
    <div>
      <StyledButtonSearch type="primary" onClick={showDrawerOnClose}>
        <Icon type="search" /> search
      </StyledButtonSearch>
      <StyledDrawer
        placement="top"
        closable={false}
        onClose={showDrawerOnClose}
        visible={visible}
      >
        <AutoComplete
          size="large"
          style={{ width: '100%' }}
          dataSource={dataSource.map(renderOption)}
          // onSelect={onSelect}
          onSearch={debSearch}
          placeholder="input here"
          optionLabelProp="text"
        >
          <Input suffix={<Icon type="search" />} />
          {/* onChange={e => onFilterHandler(e.currentTarget.value.toLowerCase())} */}
        </AutoComplete>
      </StyledDrawer>
    </div>
  )
}

SearchInput.propTypes = {
  products: PropTypes.array,
  onFilterHandler: PropTypes.func,
}
export default SearchInput
