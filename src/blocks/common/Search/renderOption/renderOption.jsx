import React from 'react'
import { NavLink } from 'react-router-dom'
import { AutoComplete } from 'antd'
import { StyledDiv, StyledSpan } from './style'

function RenderOption (item) {
  const { Option } = AutoComplete

  return (
    <Option key={item.id} text={item.title}>
      <StyledDiv>
        <StyledSpan>
          <NavLink
            to={`/detail/${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </NavLink>
        </StyledSpan>
      </StyledDiv>
    </Option>
  )
}

export default RenderOption
