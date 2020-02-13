import styled from 'styled-components'
import { Result, Button } from 'antd'

export const NonFoundWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 90vh;
  background-color: ${props => props.theme.secondary};
`

export const StyledResult = styled(Result)`
  padding: 150px;
`

export const StyledButton = styled(Button)`
  background-color: white;
  border: none;
  color: #1f1f20;
  &:hover {
    background-color: #ea548d;
  }
  &:active {
    background-color: white;
  }
  &:focus {
    background-color: white;
    color: black;
  }
`
