import React from 'react'
import { Select, Checkbox } from 'antd'

export const createSelectOption = (...value) => {
  const { Option } = Select
  return value.map(s => <Option key={[s]}> {s} </Option>)
}

export const crateSelectCheckbox = value => {
  const { Option } = Select
  return value.map(s => (
    <Option key={s.id}>
      <Checkbox> {s.tags} </Checkbox>
    </Option>
  ))
}
