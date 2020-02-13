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
    width: 50%;
    justify-content: end;
    opacity: 10;
    background-color: transparent;
  }
`

export const NavMobile = styled.div`
  display: flex;
  height: 100%;
  background-color: gray;
  @media screen and (min-width: 1100px) {
    display: none !important;
    width: 0;
  }
`

export const Nav = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  a {
    text-decoration: none;
    color: #1f1f20;
  }
  @media screen and (max-width: 1100px) {
    display: none !important;
  }
`
export const HiddenShowMenuDesktop = styled.div`
  display: flex;
  margin-right: 40px;
  justify-content: space-between;
  width: 400px;
`

export const WrapperMenu = styled.div`
@media screen and (max-width: 1100px) {
    width: 45%;
    min-height: 100vh;
   

`
