import React from 'react'
import linkidin from '../../assets/img/linkedin.svg'
import telegram from '../../assets/img/telegram2.svg'
import vk from '../../assets/img/vk.svg'
import github from '../../assets/img/github5.png'
import Fade from 'react-reveal/Fade'
import {
  FooterContainer,
  FooterWrapper,
  SocialBlock,
  SocialIcon,
  SocialIconImg,
  SocialIconLink,
  TitleWrapper,
} from './style'
import { LineWrapper } from '../../blocks'

const Footer = () => {
  const state = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/dzmitry-padshybiakin/',
      img: linkidin,
    },
    { id: 2, link: 'https://t.me/Dzmitry_Padshybiakin', img: telegram },
    { id: 3, link: 'https://vk.com/id43475432', img: vk },
    { id: 4, link: 'https://github.com/dimansolo88', img: github },
  ]

  return (
    <FooterWrapper>
      <Fade big cascade>
        <FooterContainer>
          <TitleWrapper>
            <h3> Online shop </h3>
            <LineWrapper />
          </TitleWrapper>
          <SocialBlock>
            {state.map(el => (
              <SocialIconLink key={el.id} href={el.link} target="_blank">
                <SocialIcon>
                  <SocialIconImg src={el.img} alt="_" />
                </SocialIcon>
              </SocialIconLink>
            ))}
          </SocialBlock>
          <span> 2020 </span>
        </FooterContainer>
      </Fade>
    </FooterWrapper>
  )
}

export default Footer
