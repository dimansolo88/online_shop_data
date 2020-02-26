import React, { useState } from 'react'
import { Icon, Input } from 'antd'
import { StyledAutoComplete, StyledButtonSearch, StyledDrawer } from './style'
import PropTypes from 'prop-types'
import { RenderOption } from '../renderOption/index'

const SearchInput = ({ dataSource, debSearch }) => {
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
          size="large"
          dataSource={dataSource.map(RenderOption)}
          onSearch={debSearch}
          placeholder="input here"
          optionLabelProp="text"
        >
          <Input suffix={<Icon type="search" />} />
        </StyledAutoComplete>
      </StyledDrawer>
    </div>
  )
}

SearchInput.propTypes = {
  dataSource: PropTypes.array,
  debSearch: PropTypes.func,
}
export default SearchInput
