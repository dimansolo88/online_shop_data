import styled from 'styled-components'
import { Button } from 'antd'

export const StyledUl = styled.ul`
  display: flex;
  //flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin: 0 0 0 0;
  padding: 0 32px;
  list-style: none;
  //& div {
  //    background-color: transparent;
  //    border: none;
  //}
  //& span {
  //  font-weight: bolder;
  //  background-color: transparent;
  //  border: none
  //}
`

export const StyledButtonDrop = styled(Button)`
  font-family: futura-pt, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.3px;
  color: #666;
  line-height: 1.12;
  text-align: left;
  padding: 3px 20px 3px 6px;
  position: relative;
  width: 100%;
  height: 42px;
  border-radius: 0;
  border: 1px solid #ddd;
  border-right: none;
  border-left: none;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: transparent;
  }
  &:focus {
    background-color: transparent;
  }
`
