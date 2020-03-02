// import React from 'react'
// import { StyledSelect } from '../../sort/style'
// import PropTypes from 'prop-types'
// import { crateSelectCheckbox } from '../createSelectForFilter'
//
// const FilterProductType = ({ tags }) => {
//
//   return (
//     <StyledSelect defaultValue="productType">
//       {crateSelectCheckbox(tags)}
//     </StyledSelect>
//   )
// }
//
// FilterProductType.proTypes = {
//   tags: PropTypes.array,
// }
//
// export default FilterProductType

import React, { useState } from 'react'
import { TreeSelect } from 'antd'
import { StyledSelect } from '../../sort/style'

const { SHOW_PARENT } = TreeSelect

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
]

const FilterProductType = () => {
  const [value, setValue] = useState([])

  const onChange = value => {
    console.log('onChange ', value)
    setValue(value)
  }

  const tProps = {
    treeData,
    value: value,
    onChange: onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    searchPlaceholder: 'Product Type',
    style: {
      width: '100%',
    },
  }
  return (
    <div style={{ width: '300px' }}>
      <TreeSelect {...tProps} />
    </div>
  )
}

export default FilterProductType
