import React, { useState } from 'react'
import { Icon } from 'antd'
import { StyledButtonSearch, StyledDrawer, StyledSearch } from './style'
import PropTypes from 'prop-types'

const SearchInput = ({ onFilterHandler }) => {
  const [visible, setVisible] = useState(false)

  const showDrawerOnClose = () => {
    setVisible(!visible)
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
        <StyledSearch
          placeholder="input search text"
          onChange={e => onFilterHandler(e.currentTarget.value.toLowerCase())}
        />
      </StyledDrawer>
    </div>
  )
}

SearchInput.propTypes = {
  onFilterHandler: PropTypes.func,
}
export default SearchInput
