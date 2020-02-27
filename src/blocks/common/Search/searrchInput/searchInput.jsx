import React, { useState } from 'react'
import { Icon, Input } from 'antd'
import { StyledAutoComplete, StyledButtonSearch, StyledDrawer } from './style'
import PropTypes from 'prop-types'
import { RenderOption } from '../renderOption/index'

const SearchInput = ({ dataSource, searchHandler, searchValue }) => {
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
        <StyledAutoComplete
          autoFocus
          size="large"
          dataSource={dataSource.map(RenderOption)}
          onChange={searchHandler}
          placeholder="input here"
          optionLabelProp="text"
          value={searchValue}
          pokpokpok
        >
          <Input suffix={<Icon type="search" />} />
        </StyledAutoComplete>
      </StyledDrawer>
    </div>
  )
}

SearchInput.propTypes = {
  dataSource: PropTypes.array,
  searchHandler: PropTypes.func,
  searchValue: PropTypes.string,
}
export default SearchInput
