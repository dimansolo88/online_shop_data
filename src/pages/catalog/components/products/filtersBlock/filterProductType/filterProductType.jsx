import React from 'react'
import { Icon } from 'antd'
import { StyledButtonDrop } from '../style'

const FilterProductType = ({ title }) => {
  return (
    <li style={{ paddingRight: '5px' }}>
      <div>
        <StyledButtonDrop>
          <div>
            {' '}
            {title} <Icon type="down" style={{ paddingLeft: '11rem' }} />{' '}
          </div>
        </StyledButtonDrop>
      </div>
    </li>
  )
}

export default FilterProductType
