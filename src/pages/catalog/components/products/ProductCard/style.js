import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ProductCardWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  height: max-content;
  position: relative;
`
export const ProductCardImg = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  & img {
    width: 300px;
    height: 100%;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
  }
`
export const ProductCardTitle = styled.span`
  text-transform: uppercase;
  margin: 20px;
  padding: 0;
  font-size: 16px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1px;
`
export const ProductCardCommon = styled.span`
  margin: 0 0 20px 20px;
  font-weight: 900;
  letter-spacing: 2px;
  white-space: nowrap;
  font-size: 18px;
`
export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
`
