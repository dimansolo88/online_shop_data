import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  height: 80px;
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 99;
  opacity: 0.7;
  @media screen and (max-width: 1100px) {
    justify-content: end;
    opacity: 10;
    background-color: transparent;
  }
`
