import React from 'react'
import { Select } from 'antd'

export const createSelectOption = (...value) => {
  const { Option } = Select
  return value.map(s => <Option key={[s]}> {s} </Option>)
}
