import React, { useEffect } from 'react'
import { Select } from 'antd'
import {
  OUR_FAVORITES,
  SORT_PRICE_DOWN,
  SORT_PRICE_UP,
} from '../../../../../constants/constants'
import PropTypes from 'prop-types'
import { StyledSelect } from './style'
import * as qeryString from 'query-string'

export const Sort = ({ sort, history, location, sortFilter }) => {
  useEffect(() => {
    const { search } = location
    const queryObj = qeryString.parse(search)
    if (queryObj.filter) {
      sort(queryObj.filter)
    }
  }, [])

  const { Option } = Select
  const handleChange = value => {
    history.push({
      pathname: '/catalog',
      search: `?filter=${value}`,
    })
    sort(value)
  }

  return (
    <StyledSelect
      defaultValue={sortFilter || OUR_FAVORITES}
      onChange={handleChange}
    >
      <Option value={OUR_FAVORITES}>Our favorites</Option>
      <Option value={SORT_PRICE_UP}>Price high to low</Option>
      <Option value={SORT_PRICE_DOWN}>Price low to high</Option>
    </StyledSelect>
  )
}

Sort.propTypes = {
  sort: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  sortFilter: PropTypes.string,
}
