import React from 'react'
import { Select } from 'antd'
import {
  OUR_FAVORITES,
  SORT_PRICE_DOWN,
  SORT_PRICE_UP,
} from '../../../constanties/constanties'
import PropTypes from 'prop-types'

export const Sort = ({ sort }) => {
  const { Option } = Select
  const handleChange = value => {
    console.log(`selected ${value}`)
    sort(value)
  }
  return (
    <Select defaultValue="Sort" style={{ width: 300 }} onChange={handleChange}>
      <Option value={OUR_FAVORITES}>Our favorites</Option>
      <Option value={SORT_PRICE_UP}>Price high to low</Option>
      <Option value={SORT_PRICE_DOWN}>Price low to high</Option>
    </Select>
  )
}

Sort.propTypes = {
  sort: PropTypes.func,
}
