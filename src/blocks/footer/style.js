import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  height: 300px;
  background-color: ${props => props.theme.primary};
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  padding: 60px 0;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.2;
  letter-spacing: 5px;
  font-weight: 300;
  font-size: 16px;
  text-transform: capitalize;
`

export const SocialBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  padding: 10px 0;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`
export const SocialIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252527;
  border: #4a4a4a 1px solid;
  border-radius: 50px;
  transition: all 0.5s ease-in-out;
  &:hover {
    border: white 1px solid;
  }
`

export const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SocialIconImg = styled.img`
  width: 60%;
  align-self: center;
`
