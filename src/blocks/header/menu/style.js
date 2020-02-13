import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyleNavLink = styled(NavLink)`
  &:focus {
    padding: 5px;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 2px black solid;
  }
`
