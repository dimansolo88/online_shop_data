import styled from 'styled-components'
import { AutoComplete, Button, Drawer } from 'antd'

export const StyledButtonSearch = styled(Button)`
  background-color: darkgray;
  color: #1f1f20;
  border: none;
  width: 100%;
  &:hover {
    background-color: #e9e9e9;
    color: black;
  }

  &:focus {
    background-color: #e9e9e9;
  }
`

export const StyledDrawer = styled(Drawer)``

export const StyledAutoComplete = styled(AutoComplete)`
  width: 100%;
`
